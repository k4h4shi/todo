import BaseResource from "./BaseResource";
import { TodoList } from "../types";

/**
 * /todolistsエンドポイントのクライアントクラス。
 */
export default class TodoListResource extends BaseResource {
  constructor(ctx = {}) {
    super(ctx);
  }

  /**
   * 全てのToDoリストを取得する
   */
  findAll(): Promise<TodoList[]> {
    return this.callApi(`todolists`);
  }

  /**
   * Idをもとに1つのToDoリストを取得する
   * @param _id
   */
  findOneById(_id: string): Promise<TodoList> {
    return this.callApi(`todolists/${_id}`);
  }

  /**
   * ToDoリストを作成する
   * @param todo
   */
  create(todo): Promise<TodoList> {
    return this.callApi(`todolists`, {
      method: "POST",
      body: JSON.stringify(todo)
    });
  }
}
