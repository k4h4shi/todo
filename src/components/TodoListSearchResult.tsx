import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Heading, FormatDate } from "../components";
import { TodoListSearchResult } from "../types";

interface Props {
  results: TodoListSearchResult[];
}

export default ({ results }: Props) => (
  <div>
    <Heading type="subheading">{`ToDoリストが${
      results.length
    }件見つかりました。`}</Heading>
    <List>
      {results.map((result, i) => (
        <Link key={i} href={`/detail/${result._id}`}>
          <ListItem>
            <h4>{result.name}</h4>
            <Info>
              <Column />
              <Column>
                <p>
                  作成日: <FormatDate date={result.createdAt} />
                </p>
              </Column>
            </Info>
          </ListItem>
        </Link>
      ))}
    </List>
  </div>
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
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Info = styled.div`
  display: flex;
`;

const Column = styled.div`
  flex: 1;
`;