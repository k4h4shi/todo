import React, { Component } from "react";
import {
  Heading,
  SearchForm,
  TodoSearchResult,
  TodoListSearchResult
} from "../components";
import {
  TodoListSearchResult as TodoListSearchResultType,
  TodoSearchResult as TodoSearchResultType
} from "../types";

interface Props {}

interface State {
  todos: TodoSearchResultType[];
  todolists: TodoListSearchResultType[];
}

export default class Search extends Component<State, Props> {
  state = {
    todos: [
      {
        _id: "0",
        list_id: "0",
        listname: "レポート課題",
        name: "レポートを終わらせる",
        due: "2016-08-15",
        createdAt: "2018-05-18 19:56:50.635"
      }
    ],
    todoLists: [
      {
        _id: "0",
        name: "レポートを終わらせる",
        createdAt: "2018-05-18 19:56:50.635"
      }
    ]
  };

  render() {
    return (
      <div>
        <SearchForm search={q => console.log(q)} />
        <Heading type="title">検索結果</Heading>
        <TodoSearchResult results={this.state.todos} />
        <TodoListSearchResult results={this.state.todos} />
      </div>
    );
  }
}
