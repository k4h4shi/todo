import * as React from "react";
import styled from "styled-components";

export default () => (
  <Footer>
    <p className="copy-right">
      © 2018 <a href="http://k4h4shi.com">k4h4shi</a>
    </p>
  </Footer>
);

const Footer = styled.footer`
  color: white;
  background-color: #454545;
`;
