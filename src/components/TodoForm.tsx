import React, { Component } from "react";
import styled from "styled-components";

import { Error } from "../types";

import { Button, ValidationErrorMessage, Heading, Input } from "../components";

interface Props {
  createTodo: (name: string, due: string) => void;
  error: Error;
}

interface State {
  name: string;
  due: string;
}

export default class TodoForm extends Component<Props, State> {
  state = {
    name: "",
    due: ""
  };

  _handleOnNameChange = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ name: value });
  };

  _handleOnDueChange = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ due: value });
  };

  _handleOnSubmit = e => {
    e.preventDefault();

    const { name, due } = this.state;
    const { createTodo } = this.props;
    createTodo(name, due);
  };

  render() {
    const { error } = this.props;
    const { name, due } = this.state;
    return (
      <div>
        <Heading type="title">Todoを追加する</Heading>
        <ValidationErrorMessage error={error} />
        <Form onSubmit={this._handleOnSubmit}>
          <FormInputs>
            <FormInput>
              <Label>ToDo名:</Label>
              <Input
                value={name}
                type="text"
                name="name"
                onChange={this._handleOnNameChange}
                placeholder="ToDo名を入力してください"
              />
            </FormInput>
            <FormInput>
              <Label>期限:</Label>
              <Input
                value={due}
                type="date"
                name="due"
                onChange={this._handleOnDueChange}
                placeholder="期限を入力してください"
              />
            </FormInput>
          </FormInputs>
          <Button type="submit">追加</Button>
        </Form>
      </div>
    );
  }
}

const Form = styled.form`
  display: flex;
  padding: 12px 33px;
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  flex: 6;
`;

const FormInput = styled.div`
  display: flex;
`;

const Label = styled.span`
  flex: 1;
  font-size: 16px;
  margin: 3px;
  padding: 12px 20px;
`;
