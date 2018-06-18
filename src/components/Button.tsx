import styled from "styled-components";

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
        return "#f76776";
      case "success":
        return "#72eaa6";
      default:
        return "#c8c8c8";
    }
  }};
`;
