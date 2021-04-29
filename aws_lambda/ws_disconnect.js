const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = (event, context, callback) => {    
    const connectionId = event.requestContext.connectionId;    
    addConnectionId(connectionId).then(() => {    
        callback(null, {        
            statusCode: 200,        
        })    
    });
    
    const response = {
        statusCode: 200
    }
    
    return response;
}

function addConnectionId(connectionId) {    
    return ddb.delete({        
        TableName: 'netatmo_camera',        
        Key: {            
            connectionid : connectionId,        
        },    
    }).promise();
}
