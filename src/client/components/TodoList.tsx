import React, { FunctionComponent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import * as actions from "../actions/index";
import Todo from "../../types/todo";
import UIState from "../../types/uistate";
import { getTodos, getUiState } from "../selectors";
import spin from "../utils/spinanim";

interface TodoListProps {}

interface CheckboxProps {
  completed: boolean;
  onClick?: any;
}

interface ItemNameProps {
  completed: boolean;
}

const TodoList: FunctionComponent<TodoListProps> = () => {
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector(getTodos);
  const uiState: UIState = useSelector(getUiState);
  useEffect(() => {
    dispatch(actions.getTodos());
  }, [dispatch]);
  // handlers
  const changeCompleted = (item: Todo) => () => {
    dispatch(
      actions.updateTodo({
        ...item,
        completed: !item.completed,
      })
    );
  };
  const deleteTodo = (item: Todo) => () => {
    dispatch(actions.deleteTodo(item.id!));
  };
  // render
  return uiState.loadingTodos ? (
    <LoadingTodos>
      <i className="fa fa-spinner" />
      Loading ...
    </LoadingTodos>
  ) : (
    <List>
      {todos
        .filter((item) => !uiState.deleting.find((id) => id === item.id))
        .map((item) => (
          <Item key={item.id}>
            <Checkbox
              completed={item.completed}
              onClick={changeCompleted(item)}
            >
              {!item.completed || <i className="fa fa-check" />}
            </Checkbox>
            <ItemName
              completed={item.completed}
              onClick={changeCompleted(item)}
            >
              {item.name}
            </ItemName>
            <ItemActions>
              <DeleteButton onClick={deleteTodo(item)}>
                <i className="fa fa-times" />
              </DeleteButton>
            </ItemActions>
          </Item>
        ))}
    </List>
  );
};

const LoadingTodos = styled.div`
  display: flex;
  padding: 1rem;
  .fa {
    margin-right: 5px;
    ${spin};
  }
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Item = styled.li`
  align-items: center;
  display: flex;
  padding: 1rem 0;
  @media all and (min-width: 780px) {
    padding: 1rem 0.5rem 1rem 0;
  }
  & + & {
    border-top: solid 1px #eaeaea;
  }
`;
const Checkbox = styled.label<CheckboxProps>`
  align-items: center;
  background: #e2e2e2;
  border-radius: 4px;
  box-shadow: inset 6px 6px 12px #d7d7d7, inset -6px -6px 12px #ededed;
  display: flex;
  height: 2rem;
  justify-content: center;
  margin-right: 1rem;
  width: 2rem;

  ${(props) =>
    props.completed
      ? `
      background-color: #17ab26;
      box-shadow: inset 6px 6px 12px #16a224,
            inset -6px -6px 12px #18b428;
      color: #fff;
    `
      : ``}

  input[type="checkbox"] {
    display: none;
  }
`;
const ItemName = styled.div<ItemNameProps>`
  flex: 5;

  ${props => props.completed
    ? `
      font-style: italic;
      opacity: 0.7;
      text-decoration: line-through;
    `
    : ""}
`;
const ItemActions = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const DeleteButton = styled.button`
  align-items: center;
  background: #e2e2e2;
  border: none;
  border-radius: 50%;
  box-shadow: 6px 6px 12px #d7d7d7, -6px -6px 12px #ededed;
  color: #982929;
  display: flex;
  font-size: 1.25rem;
  justify-content: center;
  height: 3rem;
  width: 3rem;
  transition: background-color 0.2s, color 0.2s;

  &:active,
  &:target {
    background: #982929;
    color: #e3e3e3;
  }
`;

export default TodoList;
