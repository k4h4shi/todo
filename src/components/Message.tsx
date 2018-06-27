import React from "react";
import styled from "styled-components";
import colors from "../config/colors";

type Type = "success" | "error";

interface Props {
  children: string;
  type: Type;
}

export default ({ children, type }: Props) => (
  <Wrapper>
    <Text type={type}>{children}</Text>
  </Wrapper>
);

const Text = styled.p`
  color: ${(props: { type: Type }) => {
    switch (props.type) {
      case "error":
        return colors.red;
      case "success":
        return colors.green;
      default:
        return colors.black;
    }
  }};
`;

const Wrapper = styled.div`
  padding-top: 5px;
  padding-left: 10px;
  padding-right: 10px;
`;
