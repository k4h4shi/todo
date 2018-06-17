import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: JSX.Element;
}

export default ({ children }: Props) => (
  <App>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </App>
);

const App = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  color: #454545;
`;

const Main = styled.main`
  flex: 1;
  margin: 40px 100px;
`;
