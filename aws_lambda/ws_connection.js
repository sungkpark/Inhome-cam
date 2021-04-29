const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {    
    const connectionId = event.requestContext.connectionId;    
    addConnectionId(connectionId).then(() => {    
        callback(null, {        
            statusCode: 200,        
        })    
    });
    
    console.log("INFO MYLOG:: ", event);
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Connection from Lambda!'),
    };
    
    return response;
}

function addConnectionId(connectionId) {    
    return ddb.put({        
        TableName: 'netatmo_camera',        
        Item: {            
            connectionid : connectionId        
        },    
    }).promise();
}
