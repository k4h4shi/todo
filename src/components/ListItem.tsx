import styled from "styled-components";
import colors from "../config/colors";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export default ({ children }: Props) => <ListItem>{children}</ListItem>;

const ListItem = styled.li`
  display: flex;
  list-style: none;
  margin: 3px;
  padding: 12px 20px;
  border: 1px solid ${colors.lightgrey};
  border-radius: 5px;
`;
