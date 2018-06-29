import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FormatDate } from "../components";
import { Todo } from "../types";
import colors from "../config/colors";

interface Props {
  results: Todo[];
}

export default ({ results }: Props) => (
  <List>
    {results.map((result, i) => (
      <Link key={i} href={`/detail/${result.todoList._id}`}>
        <ListItem>
          <h4>{result.name}</h4>
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
        </ListItem>
      </Link>
    ))}
  </List>
);

const List = styled.ul`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const ListItem = styled.li`
  list-style: none;
  margin: 3px;
  padding: 12px 20px;
  border: 1px solid ${colors.lightgrey};
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;
