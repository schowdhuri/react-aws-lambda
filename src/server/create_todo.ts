import shortId from "shortid";
import DynamoDB from "aws-sdk/clients/dynamodb";

const ddb = new DynamoDB.DocumentClient();

interface CreateTodoType {
  name: string;
  dueDate: string;
}

interface CreateTodoPayloadType {
  data: CreateTodoType
}

function addTodo(data: CreateTodoType) {
  return ddb
    .put({
      TableName: "todos",
      Item: {
        todoId: shortId.generate(),
        name: data.name,
        dueDate: data.dueDate,
        RequestTime: new Date().toISOString(),
      },
    })
    .promise();
}

exports.handler = function(event: CreateTodoPayloadType, context, cb) {
  addTodo(event.data)
    .then((resp) => {
      cb(null, resp);
    })
    .catch(err => {
      cb(null, err);
    });
};
