import * as React from "react";
import { TodoList, Error } from "../types";
import {
  ValidationErrorMessage,
  Heading,
  Message,
  TodoListForm,
  TodoLists
} from "../components";
import { TodoListResource } from "../resources";

interface Props {
  todoLists: TodoList[];
}

interface State {
  todoLists: TodoList[];
  todoAdded: boolean;
  error: Error;
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
        todoAdded: true,
        error: null
      }));
    } catch (error) {
      if (error.name === "ValidationError") {
        this.setState({
          error
        });
      }
    }
  };

  render() {
    return (
      <div>
        <Heading type="title">新しいTodoリストを作成する</Heading>
        <ValidationErrorMessage error={this.state.error} />
        <TodoListForm createTodoList={this._createTodoList} />
        <Heading type="title">Todoリスト一覧</Heading>
        {this.state.todoAdded && (
          <Message type="success">ToDoリストが追加されました。</Message>
        )}
        <TodoLists todoLists={this.state.todoLists} />
      </div>
    );
  }
}
