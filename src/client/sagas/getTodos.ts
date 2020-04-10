import { takeEvery, put, call } from "redux-saga/effects";

import { IS_LOADING, GET_TODOS } from "../../constants/actions";
import { setLoading, getTodosSuccess, getTodosFailure } from "../actions";
import lambda from "../utils/awsLambda";
import API_ROOT from "../../constants/apiRoot";
import { GetTodosAction } from "../../types/actions";

function invoke() {
  return new Promise((resolve, reject) => {
    lambda.invoke(
      {
        FunctionName: "get_todos",
        InvocationType: "RequestResponse",
        LogType: "None"
      },
      function(err: any, data: any) {
        if (err) {
          console.log({ err });
          reject(err);
        } else {
          try {
            const payload = JSON.parse(data.Payload);
            resolve(payload.Items);
          } catch(ex) {
            reject(ex);
          }
        }
      }
    );
  });
}

function* getTodos(action: GetTodosAction) {
  yield put(setLoading(GET_TODOS, true));
  try {
    const response: any = yield call(invoke);
    yield put(getTodosSuccess(response));
  } catch (ex) {
    console.log(ex);
    yield put(getTodosFailure(ex.text));
  }
  yield put(setLoading(GET_TODOS, false));
}

export default function*() {
  yield takeEvery(GET_TODOS, getTodos);
}
