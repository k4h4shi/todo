import styled from "styled-components";
import colors from "../config/colors";

interface Props {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (e) => void;
}

export default (props: Props) => <Input {...props} />;

const Input = styled.input`
  flex: 6;
  font-size: 16px;
  margin: 3px;
  padding: 12px 20px;
  border: 1px solid ${colors.lightgrey};
  border-radius: 5px;
  box-sizing: border-box;
`;
