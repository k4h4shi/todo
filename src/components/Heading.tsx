import React from "react";
import styled from "styled-components";

type Type = "heading" | "title" | "subheading";

interface Props {
  type: Type;
  children: String;
}

export default ({ type, children }: Props) =>
  (type => {
    switch (type) {
      case "heading":
        return <Heading>{children}</Heading>;
      case "title":
        return <Title>{children}</Title>;
      case "subheading":
        return <SubHeading>{children}</SubHeading>;
      default:
        return <p>{children}</p>;
    }
  })(type);

const Heading = styled.h1`
  margin: 8px 8px 30px 8px;
  font-size: 28px;
`;

const Title = styled.h2`
  margin: 8px;
  font-size: 22px;
`;

const SubHeading = styled.h3`
  margin: 10px 8px;
  font-size: 18px;
`;
