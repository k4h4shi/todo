import React, { Component } from "react";
import styled from "styled-components";
import { Button, Input } from "../components";

interface Props {
  createTodoList: (todoName: string) => void;
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
    const { name } = this.state;
    return (
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
    );
  }
}

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
