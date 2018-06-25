import * as React from "react";
import { TodoList } from "../types";
import { TodoListForm, TodoLists } from "../components";
import { TodoListResource } from "../resources";

interface Props {}

interface State {
  todoLists: TodoList[];
  todoAdded: boolean;
  error: { message: string };
}

export default class Index extends React.Component<Props, State> {
  static async getInitialProps(ctx) {
    const todoListResource = new TodoListResource(ctx);
    const todoLists = await todoListResource.findAll();
    return { todoLists };
  }

  constructor(props) {
    super(props);
    this.state = {
      todoAdded: false,
      todoLists: props.todoLists || [],
      error: null
    };
  }

  _createTodoList = async (name: string) => {
    const todoListResource = new TodoListResource();
    try {
      const todoList = await todoListResource.create({ name });
      this.setState(prevState => ({
        ...prevState,
        todoLists: [...prevState.todoLists, todoList],
        todoAdded: true
      }));
    } catch (error) {
      this.setState({
        error
      });
    }
  };

  render() {
    return (
      <div>
        <TodoListForm
          createTodoList={this._createTodoList}
          error={this.state.error}
        />
        <TodoLists
          todoLists={this.state.todoLists}
          todoAdded={this.state.todoAdded}
        />
      </div>
    );
  }
}
