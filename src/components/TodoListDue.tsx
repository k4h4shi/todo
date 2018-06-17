import React, { Component } from "react";
import moment from "moment";
import { Todo } from "../types";

import FormatDate from "./FormatDate";

interface Props {
  todos: Todo[];
}

/**
 * todosの中で、現在の日付よりあとで、もっとも現在の日付に近い日付を持つtodoを返す
 */
export default class TodoListDue extends Component<
  Props,
  React.ComponentState
> {
  _closestDueTodo() {
    const { todos } = this.props;

    return todos.filter(t => !t.completed).sort((t1, t2) => {
      const m1 = moment(t1.due);
      const m2 = moment(t2.due);
      if (m1.isBefore(m2)) {
        return -1;
      } else if (m1.isAfter(m2)) {
        return 1;
      } else {
        return 0;
      }
    })[0];
  }

  render() {
    const closestDueTodo = this._closestDueTodo();
    return closestDueTodo ? (
      <p>
        期限: <FormatDate date={closestDueTodo.due} />
      </p>
    ) : (
      <p>期限: -</p>
    );
  }
}
