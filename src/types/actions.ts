import Todo from "./todo";

export interface LoadingAction {
  type: string;
  id: string;
  status: boolean;
}

export interface SaveTodoAction {
  type: string;
  data: Todo;
}

export interface SaveTodoSuccessAction {
  type: string;
  value: Todo;
  fakeId: string;
}

export interface SaveTodoFailureAction {
  type: string;
  error: string;
  fakeId: string;
}

export interface FailureAction {
  type: string;
  error: string;
}

export interface GetTodosAction {
  type: string;
}

export interface GetTodosSuccessAction {
  type: string;
  value: Todo[];
}

export interface GetTodoAction {
  type: string;
  id: string;
}

export interface GetTodoSuccessAction {
  type: string;
  value: Todo;
}

export interface UpdateTodoAction {
  type: string;
  value: Todo;
}

export interface UpdateTodoSuccessAction {
  type: string;
  value: Todo;
}

export interface DeleteTodoAction {
  type: string;
  id: string;
}

export interface DeleteTodoSuccessAction {
  type: string;
  value: Todo;
}

export interface DeleteTodoFailureAction {
  type: string;
  error: string;
  id: string;
}
