import shortId from "shortid";
import DynamoDB from "aws-sdk/clients/dynamodb";

import Todo from "../types/todo";

const ddb = new DynamoDB.DocumentClient();

function addTodo(data: Todo) {
  const params = {
    TableName: "todos",
    Item: {
      id: data.id || shortId.generate(),
      created: new Date().toISOString(),
      ...data,
    },
    ReturnValues: "ALL_OLD",
  };
  return ddb
    .put(params)
    .promise()
    .then((data) =>
      data && Object.keys(data).length ? data.Attributes : params.Item
    );
}

exports.handler = function(event: Todo, context, cb) {
  addTodo(event)
    .then((resp) => {
      cb(null, resp);
    })
    .catch((err) => {
      cb(null, err);
    });
};
