import * as React from "react";
import { TodoList } from "../types";
import { TodoListForm, TodoLists } from "../components";

interface Props {}

interface State {
  todoLists: TodoList[];
  todoAdded: boolean;
}

export default class Index extends React.Component<Props, State> {
  state = {
    todoAdded: true,
    todoLists: [
      {
        _id: "0",
        name: "初めてのTodoリスト",
        todos: [
          {
            _id: "0",
            name: "初めてのTodoを作る",
            completed: false,
            due: "2018-05-18",
            createdAt: "2018-05-18 19:56:50.635",
            updatedAt: "2018-05-18 19:56:50.635"
          },
          {
            _id: "0",
            name: "初めてのTodoを作る",
            completed: false,
            due: "2018-05-16",
            createdAt: "2018-05-18 19:56:50.635",
            updatedAt: "2018-05-18 19:56:50.635"
          }
        ],
        createdAt: "2018-05-18 19:56:50.635",
        updatedAt: "2018-05-18 19:56:50.635"
      }
    ]
  };
  render() {
    return (
      <div>
        <TodoListForm createTodoList={name => console.log(name)} />
        <TodoLists
          todoLists={this.state.todoLists}
          todoAdded={this.state.todoAdded}
        />
      </div>
    );
  }
}
