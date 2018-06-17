import React, { Component } from "react";
import styled from "styled-components";

import { Button, Heading, Input } from "../components";

interface Props {
  createTodo: (name: string, due: string) => void;
}

interface State {
  name: string;
  due: string;
  errorMessage: string;
}

export default class TodoForm extends Component<Props, State> {
  state = {
    name: "",
    due: "",
    errorMessage: null
  };

  _handleOnChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value, errorMessage: null });
  };

  _handleOnSubmit = e => {
    e.preventDefault();

    const { name, due } = this.state;
    const { createTodo } = this.props;
    const errorMessage = null; // errorcheck

    this.setState({ errorMessage });
    if (errorMessage) {
      return;
    }

    createTodo(name, due);
  };

  render() {
    const { name, due } = this.state;
    return (
      <div>
        <Heading type="title">Todoを追加する</Heading>
        <Form onSubmit={this._handleOnSubmit}>
          <FormInputs>
            <FormInput>
              <Label>ToDo名:</Label>
              <Input
                value={name}
                type="text"
                name="name"
                onChange={this._handleOnChange}
                placeholder="ToDo名を入力してください"
              />
            </FormInput>
            <FormInput>
              <Label>期限:</Label>
              <Input
                value={due}
                type="date"
                name="due"
                onChange={this._handleOnChange}
                placeholder="期限を入力してください"
              />
            </FormInput>
          </FormInputs>
          <Button type="submit" colorType="default" onClick={() => {}}>
            追加
          </Button>
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
