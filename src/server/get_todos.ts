import DynamoDB from "aws-sdk/clients/dynamodb";

const ddb = new DynamoDB.DocumentClient();

function getTodos() {
  return ddb
    .scan({
      TableName: "todos",
    })
    .promise();
}

exports.handler = function(event, context, cb) {
  getTodos()
    .then((resp) => {
      cb(null, resp);
    })
    .catch((err) => {
      cb(null, err);
    });
};
