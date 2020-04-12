import { takeEvery, put, call } from "redux-saga/effects";

import { UPDATE_TODO } from "../../constants/actions";
import { setLoading, updateTodoSuccess, updateTodoFailure } from "../actions";
import lambda from "../utils/awsLambda";
import { UpdateTodoAction } from "../../types/actions";

function invoke(data: string) {
  return new Promise((resolve, reject) => {
    lambda.invoke(
      {
        FunctionName: "create_todo",
        InvocationType: "RequestResponse",
        LogType: "None",
        Payload: data,
      },
      function(err: any, data: any) {
        if (err) {
          console.log({ err });
          reject(err);
        } else {
          try {
            const payload = JSON.parse(data.Payload);
            resolve(payload);
          } catch (ex) {
            reject(ex);
          }
        }
      }
    );
  });
}

function* updateTodo(action: UpdateTodoAction) {
  const { value } = action;
  yield put(setLoading(UPDATE_TODO, true));
  try {
    yield call(invoke, JSON.stringify(value));
    yield put(updateTodoSuccess(value));
  } catch (ex) {
    console.log(ex);
    yield put(updateTodoFailure(ex.text));
  }
  yield put(setLoading(UPDATE_TODO, false));
}

export default function*() {
  yield takeEvery(UPDATE_TODO, updateTodo);
}
