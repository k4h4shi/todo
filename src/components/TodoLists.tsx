import React from "react";
import styled from "styled-components";
import { Heading, Message, TodoListState, TodoListDue } from "../components";
import { TodoList } from "../types";

interface Props {
  todoAdded: boolean;
  todoLists: TodoList[];
}

export default ({ todoAdded, todoLists }: Props) => (
  <div>
    <Heading type="title">Todoリスト一覧</Heading>
    {todoAdded && (
      <Message type="success">ToDoリストが追加されました。</Message>
    )}
    <List>
      {todoLists.map((todoList, i) => (
        <ListItem key={i}>
          <TodoListName>{todoList.name}</TodoListName>
          <TodoListState todos={todoList.todos} />
          <TodoListDue todos={todoList.todos} />
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
  list-style: none;
  margin: 3px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TodoListName = styled.h4``;
