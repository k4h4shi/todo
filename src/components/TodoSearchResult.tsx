import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Heading, FormatDate } from "../components";
import { TodoSearchResult } from "../types";

interface Props {
  results: TodoSearchResult[];
}

export default ({ results }: Props) => (
  <div>
    <Heading type="subheading">{`ToDoが${
      results.length
    }件見つかりました。`}</Heading>
    <List>
      {results.map((result, i) => (
        <Link key={i} href={`/detail/${result.list_id}`}>
          <ListItem>
            <h4>{result.name}</h4>
            <Info>
              <Column>
                <p>リスト: {result.listname}</p>
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