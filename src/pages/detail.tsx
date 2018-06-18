import React, { Component } from "react";
import { TodoList } from "../types";
import {
  Heading,
  TodoForm,
  TodoList as TodoListComponent
} from "../components";

interface Props {
  todoListId: string;
}

interface State {
  todoAdded: boolean;
  todoList: TodoList;
}

export default class Detail extends Component<Props, State> {
  state = {
    todoAdded: false,
    todoList: {
      _id: "0",
      name: "初めてのTodoリスト",
      todos: [
        {
          _id: "0",
          name: "初めてのTodoを作る",
          completed: true,
          due: "2018-05-18",
          createdAt: "2018-05-18 19:56:50.635",
          updatedAt: "2018-05-18 19:56:50.635"
        },
        {
          _id: "1",
          name: "初めてのTodoを作る",
          completed: true,
          due: "2018-05-16",
          createdAt: "2018-05-18 19:56:50.635",
          updatedAt: "2018-05-18 19:56:50.635"
        }
      ],
      createdAt: "2018-05-18 19:56:50.635",
      updatedAt: "2018-05-18 19:56:50.635"
    }
  };
  static async getInitialProps(initialProps) {
    return { todoListId: initialProps.query.id };
  }

  toggleTodo = _id => {
    this.setState(prev => ({
      todoList: Object.assign({}, prev.todoList, {
        todos: prev.todoList.todos.map(todo => {
          if (todo._id === _id) {
            return Object.assign({}, todo, {
              completed: !todo.completed
            });
          }
          return todo;
        })
      })
    }));
  };

  render() {
    console.log(this.props.todoListId);
    return (
      <div>
        <Heading type="heading">{this.state.todoList.name}</Heading>
        <TodoForm createTodo={(name, due) => console.log(`${name}: ${due}`)} />
        <TodoListComponent
          todoAdded={this.state.todoAdded}
          toggleTodo={this.toggleTodo}
          todos={this.state.todoList.todos}
        />
      </div>
    );
  }
}
