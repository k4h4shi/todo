import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import colors from "../config/colors";

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
  color: ${colors.black};
`;

const Main = styled.main`
  flex: 1;
  margin: 40px 100px;
`;
