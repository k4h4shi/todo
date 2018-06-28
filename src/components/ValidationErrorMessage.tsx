import React from "react";
import Message from "./Message";
import { Error } from "../types";

interface Props {
  error: Error;
}

/**
 * 入力チェックエラーのメッセージを生成するコンポーネント
 */
export default ({ error }: Props) => {
  return error ? (
    <div>
      {createErrorMessages(error).map((errorMessage, i) => (
        <Message key={i} type="error">
          {errorMessage}
        </Message>
      ))}
    </div>
  ) : null;
};

function createErrorMessages(error: Error): any[] {
  const { errors } = error;
  return Object.keys(errors).map(errorKey => {
    const errorValue = errors[errorKey];
    const where = createMessageForWhere(error);
    const target = createMessageForTarget(errorKey);
    const kind = createMessageForKind(errorValue);
    return where + target + kind;
  });
}

function createMessageForWhere(error: Error) {
  switch (error._message) {
    case "TodoList validation failed":
      return "ToDoリストの";
    case "Todo validation failed":
      return "ToDoの";
  }
}

function createMessageForTarget(errorKey: string) {
  switch (errorKey) {
    case "name":
      return "名前";
    case "due":
      return "期日";
  }
}

function createMessageForKind(errorValue: {
  kind: string;
  properties: { maxlength?: number };
}) {
  switch (errorValue.kind) {
    case "required":
      return "は必須項目です";
    case "unique":
      return "は同じものが存在してはいけません";
    case "maxlength":
      return `の最大文字数は${errorValue.properties.maxlength}です`;
    case "user defined":
      // 現在はTodoリストのTodoの名称のチェックのみ。
      // 今後独自定義のvalidationが増えた場合は分岐する
      return "は同じものが存在してはいけません";
  }
}
