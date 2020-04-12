import Todo from "./todo";
import UIState from "./uistate";

export interface RootState {
  loading: boolean[];
  todos: Todo[];
  uiState: UIState;
}
