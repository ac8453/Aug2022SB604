const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


let body;
let statusCode = 200;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
};

const params = {
  TableName : 'ResourceInfo-dev',
  /* Item properties will depend on your application concerns */
  Key: {
    id: 'test'
  }
}

async function getItem(){
  try {
    const data = await docClient.get(params).promise()
    return data
  } catch (err) {
    return err
  }
}

exports.handler = async (event, context) => {
  console.log(event)
  try {
    const data = await getItem()
    return { headers, statusCode, body: JSON.stringify(data) }
  } catch (err) {
    return { error: err }
  }
 

}
 