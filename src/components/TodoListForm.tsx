import React, { Component } from "react";
import styled from "styled-components";
import { Error } from "../types";
import { Button, Input, ValidationErrorMessage, Heading } from "../components";

interface Props {
  createTodoList: (todoName: string) => void;
  error?: Error;
}

interface State {
  name: string;
}

export default class TodoListForm extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  _handleOnChange = e => {
    e.preventDefault();
    const value = e.target.value;
    this.setState({ name: value });
  };

  _handleSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { createTodoList } = this.props;
    createTodoList(name);
  };

  render() {
    const { error } = this.props;
    const { name } = this.state;
    return (
      <div>
        <Heading type="title">新しいTodoリストを作成する</Heading>
        <ValidationErrorMessage error={error} />
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
