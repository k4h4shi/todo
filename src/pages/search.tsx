import React, { Component } from "react";
import {
  Heading,
  SearchForm,
  TodoSearchResult,
  TodoListSearchResult
} from "../components";
import { SearchResult } from "../types";

import { SearchResource } from "../resources";

interface Props {}

interface State {
  searchResult: SearchResult;
}

export default class Search extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {
        todos: [],
        todoLists: []
      }
    };
  }

  _search = async query => {
    const searchResource = new SearchResource();
    const searchResult = await searchResource.find(query);
    this.setState({
      searchResult: searchResult
    });
  };

  render() {
    const { todos, todoLists } = this.state.searchResult;
    return (
      <div>
        <SearchForm search={this._search} />
        <Heading type="title">検索結果</Heading>
        <TodoSearchResult results={todos} />
        <TodoListSearchResult results={todoLists} />
      </div>
    );
  }
}
