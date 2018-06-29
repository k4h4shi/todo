import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FormatDate, ListItem } from "../components";
import { Todo } from "../types";

interface Props {
  results: Todo[];
}

export default ({ results }: Props) => (
  <List>
    {results.map((result, i) => (
      <ListItem>
        <Column>
          <h3>
            <Link key={i} href={`/detail/${result.todoList._id}`}>
              <a>{result.name}</a>
            </Link>
          </h3>
          <Info>
            <Column>
              <p>リスト: {result.todoList.name}</p>
            </Column>
            <Column>
              <p>
                期限: <FormatDate date={result.due} />
              </p>
              <p>
                作成日: <FormatDate date={result.createdAt} />
              </p>
            </Column>
          </Info>
        </Column>
      </ListItem>
    ))}
  </List>
);

const List = styled.ul`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const Info = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;
