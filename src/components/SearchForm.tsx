import React, { Component } from "react";
import styled from "styled-components";

import { Button, Input } from "../components";

interface Props {
  search: (name: string) => void;
}

interface State {
  query: string;
}

export default class SearchForm extends Component<Props, State> {
  state = {
    query: ""
  };

  _handleOnInputChange = e => {
    e.preventDefault();
    const { value } = e.target;
    this.setState({ query: value });
  };

  _handleOnSubmit = e => {
    e.preventDefault();

    const { query } = this.state;
    const { search } = this.props;

    search(query);
  };

  render() {
    const { query } = this.state;
    return (
      <Form onSubmit={this._handleOnSubmit}>
        <Input
          type="text"
          name="query"
          value={query}
          onChange={this._handleOnInputChange}
          placeholder="検索した文字列を入力してください"
        />
        <Button type="submit">検索</Button>
      </Form>
    );
  }
}

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
