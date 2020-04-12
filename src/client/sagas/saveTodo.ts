import { takeEvery, put, call } from "redux-saga/effects";

import { IS_LOADING, SAVE_TODO } from "../../constants/actions";
import { setLoading, saveTodoSuccess, saveTodoFailure } from "../actions";
import lambda from "../utils/awsLambda";
import { SaveTodoAction } from "../../types/actions";

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

function* saveTodo(action: SaveTodoAction) {
  const data = { ...action.data };
  const fakeId: string = data.id!;
  delete data.id;
  yield put(setLoading(SAVE_TODO, true));
  try {
    const response: any = yield call(invoke, JSON.stringify(data));
    yield put(saveTodoSuccess(response, fakeId));
  } catch (ex) {
    console.log(ex);
    yield put(saveTodoFailure(ex.text, fakeId));
  }
  yield put(setLoading(SAVE_TODO, false));
}

export default function*() {
  yield takeEvery(SAVE_TODO, saveTodo);
}
