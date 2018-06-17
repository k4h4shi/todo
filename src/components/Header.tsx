import * as React from "react";
import styled from "styled-components";

export default () => (
  <Header>
    <Brand>TODOリスト</Brand>
  </Header>
);

const Header = styled.header`
  color: white;
  background-color: #454545;
`;

const Brand = styled.h1`
  margin-left: 20px;
  font-size: 28px;
`;
