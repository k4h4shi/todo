import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { TodoListState, TodoListDue } from "../components";
import { TodoList } from "../types";
import colors from "../config/colors";

interface Props {
  todoLists: TodoList[];
}

export default ({ todoLists }: Props) => (
  <List>
    {todoLists.map((todoList, i) => (
      <Link key={i} href={`/detail/${todoList._id}`}>
        <ListItem>
          <TodoListName>{todoList.name}</TodoListName>
          <TodoListState todos={todoList.todos} />
          <TodoListDue todos={todoList.todos} />
        </ListItem>
      </Link>
    ))}
  </List>
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
  border: 1px solid ${colors.lightgrey};
  border-radius: 5px;
`;

const TodoListName = styled.h4``;
