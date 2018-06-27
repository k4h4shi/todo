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
      searchResult: null
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
    const { searchResult } = this.state;
    return (
      <div>
        <SearchForm search={this._search} />
        {searchResult && (
          <div>
            <Heading type="title">検索結果</Heading>
            <TodoSearchResult results={searchResult.todos} />
            <TodoListSearchResult results={searchResult.todoLists} />
          </div>
        )}
      </div>
    );
  }
}
