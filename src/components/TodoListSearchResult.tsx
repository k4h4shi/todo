import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FormatDate, ListItem } from "../components";
import { TodoList } from "../types";

interface Props {
  results: TodoList[];
}

export default ({ results }: Props) => (
  <List>
    {results.map((result, i) => (
      <ListItem>
        <Container>
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
        </Container>
      </ListItem>
    ))}
  </List>
);

const List = styled.ul`
  display: flex;
  padding: 10px;
  flex-direction: column;
`;

const Container = styled.div`
  flex: 1;
`;

const Info = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;
