import React, { Component } from "react";
import { TodoList } from "../types";
import {
  Heading,
  TodoForm,
  TodoList as TodoListComponent
} from "../components";

import { TodoListResource, TodoResource } from "../resources";

interface Props {
  todoListId: string;
  todoList: TodoList;
}

interface State {
  todoAdded: boolean;
  todoList: TodoList;
}

export default class Detail extends Component<Props, State> {
  static async getInitialProps(ctx) {
    const _id = ctx.query.id;
    const todoListResource = new TodoListResource(ctx);
    const todoList = await todoListResource.findOneById(_id);
    return { todoListId: ctx.query.id, todoList } as Props;
  }

  constructor(props) {
    super(props);
    this.state = {
      todoAdded: false,
      todoList: props.todoList || null
    };
  }

  _createTodo = async (name: string, due: string) => {
    const { todoListId } = this.props;
    const todoResource = new TodoResource();
    const todo = await todoResource.create(todoListId, { name, due });
    this.setState(prevState => ({
      ...prevState,
      todoList: {
        ...prevState.todoList,
        todos: [...prevState.todoList.todos, todo]
      }
    }));
  };

  _toggleTodo = async _id => {
    const todoResource = new TodoResource();
    const target = this.state.todoList.todos.find(todo => todo._id === _id);
    const updatedTodo = await todoResource.update(_id, {
      completed: !target.completed
    });

    const todoUpdated: boolean = !Object.keys(updatedTodo).length;

    if (!todoUpdated) {
      this.setState(prev => ({
        todoList: Object.assign({}, prev.todoList, {
          todos: prev.todoList.todos.map(todo => {
            if (todo._id === _id) {
              return updatedTodo;
            }
            return todo;
          })
        })
      }));
    }
  };

  render() {
    return this.state.todoList ? (
      <div>
        <Heading type="heading">{this.state.todoList.name}</Heading>
        <TodoForm createTodo={this._createTodo} />
        <TodoListComponent
          todoAdded={this.state.todoAdded}
          toggleTodo={this._toggleTodo}
          todos={this.state.todoList.todos}
        />
      </div>
    ) : (
      <p>TodoListが存在しません</p>
    );
  }
}
