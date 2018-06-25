import BaseResource from "./BaseResource";
import { Todo } from "../types";

/**
 * /todosエンドポイントのクライアントクラス。
 */
export default class TodoResource extends BaseResource {
  constructor(ctx = {}) {
    super(ctx);
  }

  /**
   * ToDoを作成する
   * @param todoListId
   * @param param
   */
  create(
    todoListId: string,
    param: { name: string; due: string }
  ): Promise<Todo> {
    return this.callApi(`todolists/${todoListId}/todos`, {
      method: "POST",
      body: JSON.stringify(param)
    });
  }

  /**
   * ToDoを更新する
   * @param todoId
   * @param param
   */
  update(todoId: string, param: Partial<Todo>): Promise<Todo> {
    return this.callApi(`todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify(param)
    });
  }
}
