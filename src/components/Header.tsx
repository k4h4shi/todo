import * as React from "react";
import Link from "next/link";
import styled from "styled-components";
import colors from "../config/colors";

export default () => (
  <Header>
    <Link href={"/"}>
      <Brand>TODOリスト</Brand>
    </Link>
    <Link href={"/search"}>
      <SearchLink>検索</SearchLink>
    </Link>
  </Header>
);

const Header = styled.header`
  display: flex;
  color: ${colors.white};
  background-color: ${colors.black};
`;

const Brand = styled.h1`
  margin-left: 20px;
  font-size: 28px;
`;

const SearchLink = styled.h1`
  margin-left: auto;
  font-size: 28px;
  margin-right: 40px;
`;
