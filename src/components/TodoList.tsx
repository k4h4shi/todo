import React from "react";
import styled from "styled-components";
import { Button, FormatDate, Message, ListItem } from "../components";
import { Todo } from "../types";

interface Props {
  toggleTodo: (string) => void;
  todos: Todo[];
}

export default ({ todos, toggleTodo }: Props) => (
  <div>
    {todos.length === 0 ? (
      <Message type="error">登録されたToDoはございません</Message>
    ) : (
      <List>
        {todos.map((todo, i) => (
          <ListItem key={i}>
            <TodoInfo>
              <h3>{todo.name}</h3>
              <DateWrapper>
                期限: <FormatDate date={todo.due} />
              </DateWrapper>
              <DateWrapper>
                作成日: <FormatDate date={todo.createdAt} />
              </DateWrapper>
            </TodoInfo>
            <Button
              type="button"
              colorType={todo.completed ? "success" : "error"}
              onClick={() => toggleTodo(todo._id)}
            >
              {todo.completed ? "完了" : "未完了"}
            </Button>
          </ListItem>
        ))}
      </List>
    )}
  </div>
);

const List = styled.ul`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const TodoInfo = styled.div`
  flex: 6;
`;

const DateWrapper = styled.div`
  margin-top: 10px;
`;
