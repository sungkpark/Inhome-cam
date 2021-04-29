const AWS = require('aws-sdk');

const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async event => {
  let connectionData;
  
  try {
    connectionData = await ddb.scan({ TableName: 'netatmo_camera', ProjectionExpression: 'connectionid' }).promise();
  } catch (e) {
    return { statusCode: 200, body: e.stack };
  }
  
  const apigwManagementApi = new AWS.ApiGatewayManagementApi({
    apiVersion: '2018-11-29',
    // endpoint: event.requestContext.domainName + '/' + event.requestContext.stage
    endpoint: "uy0itxiqb1.execute-api.us-east-1.amazonaws.com/Test"
  });
  
  console.log("MYLOG:: \n", event)
  var postData = JSON.stringify(event.body);
  postData = postData.replace(/\\/g, '').slice(1,-1);
  postData = postData.substring(1);
  var action = '{"action":"onMessage",';
  postData = action.concat(postData);
  console.log("postData MYLOG:: \n", postData);

  const postCalls = connectionData.Items.map(async ({ connectionid }) => {
    console.log("INFOLOG:: connectionid = ", connectionid);
    try {
      var params = {
        ConnectionId: connectionid,
        Data: postData
      }
      await apigwManagementApi.postToConnection(params).promise();
      //{ ConnectionId: connectionid, Data: postData+ '${connectionId}'}
    } catch (e) {
      if (e.statusCode === 410) {
        console.log(`Found stale connection, deleting ${connectionid}`);
        await ddb.delete({ TableName: "netatmo_camera", Key: { connectionid } }).promise();
      } else {
        throw e;
      }
    }
  });
  
  try {
    await Promise.all(postCalls);
  } catch (e) {
    return { statusCode: 200, body: e.stack };
  }

  return { statusCode: 200, body: 'Data sent.' };
};