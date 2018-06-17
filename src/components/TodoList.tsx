import React from "react";
import styled from "styled-components";
import { Button, Heading, Message } from "../components";
import { Todo } from "../types";

interface Props {
  todoAdded: boolean;
  toggleTodo: (string) => void;
  todos: Todo[];
}

export default ({ todoAdded, todos, toggleTodo }: Props) => (
  <div>
    <Heading type="title">Todo一覧</Heading>
    {todoAdded && <Message type="success">ToDoが追加されました。</Message>}
    <List>
      {todos.map((todo, i) => (
        <ListItem key={i}>
          <TodoInfo>
            <TodoListName>{todo.name}</TodoListName>
            <Due>{todo.due}</Due>
            <CreatedAt>{todo.createdAt}</CreatedAt>
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
  </div>
);

const List = styled.ul`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 3px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TodoInfo = styled.div`
  flex: 6;
`;

const TodoListName = styled.h4``;
const Due = styled.div``;
const CreatedAt = styled.div``;
