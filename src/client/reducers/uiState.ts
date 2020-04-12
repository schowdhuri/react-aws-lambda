import * as ACTIONS from "../../constants/actions";
import UIState from "../../types/uistate";

const initialState: UIState = {
  loadingTodos: false,
  deleting: [],
};

function uiStateReducer(state = initialState, action: any) {
  switch (action.type) {
    case ACTIONS.GET_TODOS:
      return {
        ...state,
        loadingTodos: true,
      };

    case ACTIONS.GET_TODOS_ERR:
    case ACTIONS.GET_TODOS_OK:
      return {
        ...state,
        loadingTodos: false,
      };

    case ACTIONS.DEL_TODO:
      return {
        ...state,
        deleting: [action.id, ...state.deleting],
      };

    case ACTIONS.DEL_TODO_OK:
      return {
        ...state,
        deleting: state.deleting.filter((id) => action.value.id),
      };

    case ACTIONS.DEL_TODO_ERR:
      return {
        ...state,
        deleting: state.deleting.filter((id) => !action.id),
      };
  }
  return state;
}

export default uiStateReducer;
