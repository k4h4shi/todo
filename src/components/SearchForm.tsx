import React, { Component } from "react";
import styled from "styled-components";

import { Button, Heading, Input } from "../components";

interface Props {
  search: (name: string) => void;
}

interface State {
  query: string;
  errorMessage: string;
}

export default class SearchForm extends Component<Props, State> {
  state = {
    query: "",
    errorMessage: null
  };

  _handleOnChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value, errorMessage: null });
  };

  _handleOnSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    const { search } = this.props;
    const errorMessage = null; // TODO: errorcheck

    this.setState({ errorMessage });
    if (errorMessage) {
      return;
    }

    search(query);
  };

  render() {
    const { query } = this.state;
    return (
      <div>
        <Heading type="title">Todoを検索する</Heading>
        <Form onSubmit={this._handleOnSubmit}>
          <Input
            type="text"
            name="query"
            value={query}
            onChange={this._handleOnChange}
            placeholder="検索した文字列を入力してください"
          />
          <Button type="submit" colorType="default" onClick={() => {}}>
            検索
          </Button>
        </Form>
      </div>
    );
  }
}

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
