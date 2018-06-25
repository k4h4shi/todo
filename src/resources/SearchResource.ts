import BaseResource from "./BaseResource";
import { SearchResult } from "../types";

/**
 * /searchエンドポイントのクライアントクラス。
 */
export default class SearchResource extends BaseResource {
  constructor(ctx = {}) {
    super(ctx);
  }

  /**
   * 検索を行う
   * @param query
   * @param param
   */
  find(query: string): Promise<SearchResult> {
    return this.callApi(`search?q=${query}`);
  }
}
