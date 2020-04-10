import DynamoDB from "aws-sdk/clients/dynamodb";

const ddb = new DynamoDB.DocumentClient();

interface DeleteTodoPayloadType {
  id: string;
}

function deleteTodo(id: string) {
  return ddb
    .delete({
      TableName: "todos",
      Key: {
        todoId: id,
      },
    })
    .promise();
}

exports.handler = function(event: DeleteTodoPayloadType, context, cb) {
  deleteTodo(event.id)
    .then((resp) => {
      cb(null, resp);
    })
    .catch((err) => {
      cb(null, err);
    });
};
