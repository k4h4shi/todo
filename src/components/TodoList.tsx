import React from "react";
import styled from "styled-components";
import { Button, FormatDate, Heading, Message } from "../components";
import { Todo } from "../types";
import colors from "../config/colors";

interface Props {
  todoAdded: boolean;
  toggleTodo: (string) => void;
  todos: Todo[];
}

export default ({ todoAdded, todos, toggleTodo }: Props) => (
  <div>
    <Heading type="title">Todo一覧</Heading>
    {todos.length === 0 ? (
      <Message type="error">登録されたToDoはございません</Message>
    ) : (
      <div>
        {todoAdded && <Message type="success">ToDoが追加されました。</Message>}
        <List>
          {todos.map((todo, i) => (
            <ListItem key={i}>
              <TodoInfo>
                <h4>{todo.name}</h4>
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
      </div>
    )}
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
  border: 1px solid ${colors.lightgrey};
  border-radius: 5px;
`;

const TodoInfo = styled.div`
  flex: 6;
`;

const DateWrapper = styled.div`
  margin-top: 10px;
`;
