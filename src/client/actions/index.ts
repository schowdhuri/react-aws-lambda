import shortId from "shortid";
import * as ACTIONS from "../../constants/actions";
import * as Types from "../../types/actions";
import Todo from "../../types/todo";

export const setLoading = (
  id: string,
  status: boolean
): Types.LoadingAction => ({
  type: ACTIONS.IS_LOADING,
  id,
  status,
});

export const saveTodo = (data: Todo): Types.SaveTodoAction => ({
  type: ACTIONS.SAVE_TODO,
  data: {
    ...data,
    id: shortId.generate(), // fake ID for optimistic UI update
  },
});

export const saveTodoSuccess = (
  todo: Todo,
  fakeId: string
): Types.SaveTodoSuccessAction => ({
  type: ACTIONS.SAVE_TODO_OK,
  value: todo,
  fakeId,
});

export const saveTodoFailure = (
  error: string,
  fakeId: string
): Types.SaveTodoFailureAction => ({
  type: ACTIONS.SAVE_TODO_ERR,
  error,
  fakeId,
});

export const getTodo = (id: string): Types.GetTodoAction => ({
  type: ACTIONS.GET_TODO,
  id,
});

export const getTodoSuccess = (value: Todo): Types.GetTodoSuccessAction => ({
  type: ACTIONS.GET_TODO_OK,
  value,
});

export const getTodoFailure = (error: string): Types.FailureAction => ({
  type: ACTIONS.GET_TODO_ERR,
  error,
});

export const updateTodo = (value: Todo): Types.UpdateTodoAction => ({
  type: ACTIONS.UPDATE_TODO,
  value,
});

export const updateTodoSuccess = (
  value: Todo
): Types.UpdateTodoSuccessAction => ({
  type: ACTIONS.UPDATE_TODO_OK,
  value,
});

export const updateTodoFailure = (error: string): Types.FailureAction => ({
  type: ACTIONS.UPDATE_TODO_ERR,
  error,
});

export const deleteTodo = (id: string): Types.DeleteTodoAction => ({
  type: ACTIONS.DEL_TODO,
  id,
});

export const deleteTodoSuccess = (
  value: Todo
): Types.DeleteTodoSuccessAction => ({
  type: ACTIONS.DEL_TODO_OK,
  value,
});

export const deleteTodoFailure = (
  error: string,
  id: string
): Types.DeleteTodoFailureAction => ({
  type: ACTIONS.DEL_TODO_ERR,
  error,
  id,
});

export const getTodos = () => ({
  type: ACTIONS.GET_TODOS,
});

export const getTodosSuccess = (
  value: Todo[]
): Types.GetTodosSuccessAction => ({
  type: ACTIONS.GET_TODOS_OK,
  value,
});

export const getTodosFailure = (error: string): Types.FailureAction => ({
  type: ACTIONS.GET_TODOS_ERR,
  error,
});
