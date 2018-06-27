import * as React from "react";
import styled from "styled-components";
import colors from "../config/colors";

export default () => (
  <Footer>
    <CopyRight>
      © 2018 <HomepageLink href="http://k4h4shi.com">k4h4shi</HomepageLink>
    </CopyRight>
  </Footer>
);

const Footer = styled.footer`
  color: white;
  background-color: ${colors.black};
`;

const CopyRight = styled.p`
  text-align: center;
`;

const HomepageLink = styled.a`
  color: ${colors.white};
  text-decoration: none;
`;
