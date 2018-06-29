import React, { Component } from "react";
import {
  Heading,
  SearchForm,
  TodoSearchResult,
  TodoListSearchResult
} from "../components";
import { SearchResult } from "../types";
import colors from "../config/colors";

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
        <Heading type="title">Todoを検索する</Heading>

        <SearchForm search={this._search} />
        {searchResult && (
          <div>
            <Heading type="title">検索結果</Heading>

            <Heading
              type="subheading"
              color={searchResult.todos.length === 0 ? colors.red : undefined}
            >{`ToDoが${searchResult.todos.length}件見つかりました。`}</Heading>
            <TodoSearchResult results={searchResult.todos} />

            <Heading
              type="subheading"
              color={
                searchResult.todoLists.length === 0 ? colors.red : undefined
              }
            >{`ToDoリストが${
              searchResult.todoLists.length
            }件見つかりました。`}</Heading>
            <TodoListSearchResult results={searchResult.todoLists} />
          </div>
        )}
      </div>
    );
  }
}
