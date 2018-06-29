import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FormatDate } from "../components";
import { TodoList } from "../types";
import colors from "../config/colors";

interface Props {
  results: TodoList[];
}

export default ({ results }: Props) => (
  <List>
    {results.map((result, i) => (
      <ListItem>
        <h3>
          <Link key={i} href={`/detail/${result._id}`}>
            <a>{result.name}</a>
          </Link>
        </h3>
        <Info>
          <Column />
          <Column>
            <p>
              作成日: <FormatDate date={result.createdAt} />
            </p>
          </Column>
        </Info>
      </ListItem>
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
