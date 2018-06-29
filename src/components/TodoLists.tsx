import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { TodoListState, TodoListDue, ListItem } from "../components";
import { TodoList } from "../types";

interface Props {
  todoLists: TodoList[];
}

export default ({ todoLists }: Props) => (
  <List>
    {todoLists.map((todoList, i) => (
      <ListItem key={i}>
        <div>
          <TodoListName>
            <Link key={i} href={`/detail/${todoList._id}`}>
              <a>{todoList.name}</a>
            </Link>
          </TodoListName>

          <TodoListState todos={todoList.todos} />
          <TodoListDue todos={todoList.todos} />
        </div>
      </ListItem>
    ))}
  </List>
);

const List = styled.ul`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const TodoListName = styled.h3``;
