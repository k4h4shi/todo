import React, { Component } from "react";
import { Todo } from "../types";

interface Props {
  todos: Todo[];
}

export default class TodoListState extends Component<
  Props,
  React.ComponentState
> {
  _totalTodoNum() {
    return this.props.todos.length;
  }

  _completedTodoNum() {
    return this.props.todos.filter(todo => todo.completed).length;
  }

  render() {
    const total = this._totalTodoNum();
    const completed = this._completedTodoNum();
    return <p>{`状態: ${total}個中${completed}個がチェック済み`}</p>;
  }
}
