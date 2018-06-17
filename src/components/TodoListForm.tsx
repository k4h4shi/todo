import React, { Component } from "react";
import styled from "styled-components";

import { Message, Heading } from "../components";

interface Props {
  createTodoList: (todoName: string) => void;
}

interface State {
  input: string;
  errorMessage: string;
}

export default class TodoListForm extends Component<Props, State> {
  state = {
    input: "",
    errorMessage: null
  };

  _checkError = (input: string): string => {
    if (!input || input.length < 1) {
      return "Todoリストの名称を入力してください";
    } else if (input.length > 30) {
      return "ToDoリストの名称は30文字以内にしてください";
    } else {
      return null;
    }
  };

  _handleOnChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ input: value, errorMessage: null });
  };

  _handleSubmit = e => {
    e.preventDefault();

    const { input } = this.state;
    const { createTodoList } = this.props;
    const errorMessage = this._checkError(input);

    this.setState({ errorMessage });
    if (errorMessage) {
      return;
    }

    createTodoList(input);
  };

  render() {
    const { input, errorMessage } = this.state;
    return (
      <div>
        <Heading type="title">新しいTodoリストを作成する</Heading>
        {errorMessage && <Message type="error">{errorMessage}</Message>}
        <Form onSubmit={this._handleSubmit}>
          <Input
            type="text"
            value={input}
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

const Input = styled.input`
  flex: 6;
  font-size: 16px;
  margin: 3px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  flex: 1;
  font-size: 16px;
  margin: 3px;
  padding: 12px 20px;
  background-color: #c8c8c8;
  border-radius: 5px;
  color: white;
`;
