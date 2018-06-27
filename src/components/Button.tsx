import styled from "styled-components";
import colors from "../config/colors";

type Type = "success" | "error" | undefined;

interface Props {
  type: string;
  onClick?: () => void;
  colorType?: Type;
  children: string;
}

export default (props: Props) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};

const Button = styled.button`
  flex: 1;
  font-size: 16px;
  margin: 3px;
  padding: 12px 20px;
  border-radius: 5px;
  color: white;
  background-color: ${(props: { colorType?: Type }) => {
    switch (props.colorType) {
      case "error":
        return colors.red;
      case "success":
        return colors.green;
      default:
        return colors.grey;
    }
  }};
`;
