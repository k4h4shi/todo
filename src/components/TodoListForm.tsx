import React, { Component } from "react";
import styled from "styled-components";

import { Button, Input, Message, Heading } from "../components";

interface Props {
  createTodoList: (todoName: string) => void;
}

interface State {
  name: string;
  errorMessage: string;
}

export default class TodoListForm extends Component<Props, State> {
  state = {
    name: "",
    errorMessage: null
  };

  _checkError = (name: string): string => {
    if (!name || name.length < 1) {
      return "Todoリストの名称を入力してください";
    } else if (name.length > 30) {
      return "ToDoリストの名称は30文字以内にしてください";
    } else {
      return null;
    }
  };

  _handleOnChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ name: value, errorMessage: null });
  };

  _handleSubmit = e => {
    e.preventDefault();

    const { name } = this.state;
    const { createTodoList } = this.props;
    const errorMessage = this._checkError(name);

    this.setState({ errorMessage });
    if (errorMessage) {
      return;
    }

    createTodoList(name);
  };

  render() {
    const { name, errorMessage } = this.state;
    return (
      <div>
        <Heading type="title">新しいTodoリストを作成する</Heading>
        {errorMessage && <Message type="error">{errorMessage}</Message>}
        <Form onSubmit={this._handleSubmit}>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={this._handleOnChange}
            placeholder="リスト名を入力してください"
          />
          <Button type="submit">リストの作成</Button>
        </Form>
      </div>
    );
  }
}

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
