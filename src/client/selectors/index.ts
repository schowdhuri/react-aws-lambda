import { createSelector } from "reselect";
import { RootState } from "../../types/rootState";
import UIState from "../../types/uistate";
import Todo from "../../types/todo";

export const isLoading = (state: RootState): boolean =>
  Boolean(state.loading.length);
export const getTodos = (state: RootState): Todo[] => state.todos;
export const getUiState = (state: RootState): UIState => state.uiState;
