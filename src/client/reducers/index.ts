import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import loading from "./loading";
import todos from "./todos";
import uiState from "./uiState";

function createRootReducer(history: any) {
  return combineReducers({
    router: connectRouter(history),
    loading,
    todos,
    uiState
  });
}

export default createRootReducer;
