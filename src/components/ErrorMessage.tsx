import React from "react";
import Message from "./Message";
import { Error } from "../types";

interface Props {
  error: Error;
}

export default ({ error }: Props) => {
  return error ? <Message type="error">{error.message}</Message> : null;
};
