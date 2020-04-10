import { takeEvery, put, call } from "redux-saga/effects";

import { IS_LOADING, DEL_TODO } from "../../constants/actions";
import { setLoading, deleteTodoSuccess, deleteTodoFailure } from "../actions";
import lambda from "../utils/awsLambda";
import API_ROOT from "../../constants/apiRoot";
import { DeleteTodoAction } from "../../types/actions";

function invoke(data: string) {
  return new Promise((resolve, reject) => {
    lambda.invoke(
      {
        FunctionName: "delete_todo",
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

function* deleteTodo(action: DeleteTodoAction) {
  const { id } = action;
  yield put(setLoading(DEL_TODO, true));
  try {
    const response: any = yield call(invoke, JSON.stringify({ id }));
    yield put(deleteTodoSuccess(response));
  } catch (ex) {
    console.log(ex);
    yield put(deleteTodoFailure(ex.text));
  }
  yield put(setLoading(DEL_TODO, false));
}

export default function*() {
  yield takeEvery(DEL_TODO, deleteTodo);
}
