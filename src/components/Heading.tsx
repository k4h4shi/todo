import React from "react";
import styled from "styled-components";

type Type = "heading" | "title" | "subheading";

interface Props {
  type: Type;
  color?: string;
  children: String;
}

export default ({ type, color, children }: Props) =>
  (type => {
    switch (type) {
      case "heading":
        return <Heading color={color}>{children}</Heading>;
      case "title":
        return <Title color={color}>{children}</Title>;
      case "subheading":
        return <SubHeading color={color}>{children}</SubHeading>;
      default:
        return <p color={color}>{children}</p>;
    }
  })(type);

const Heading = styled.h1`
  color: ${props => (props.color ? props.color : "")};
  margin: 8px 8px 30px 8px;
  font-size: 28px;
`;

const Title = styled.h2`
  color: ${props => (props.color ? props.color : "")};
  margin: 10px 8px;
  font-size: 22px;
`;

const SubHeading = styled.h3`
  color: ${props => (props.color ? props.color : "")};
  margin: 15px 8px;
  font-size: 18px;
`;
