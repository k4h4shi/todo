import "isomorphic-fetch";
import url from "url";

/**
 * APIのクライアントモジュールの基底クラス
 */
export default class BaseResource {
  /**
   * テスト時の基底URL
   */
  TEST_BASE_URL = "http://localhost";

  /**
   * {protocol}://{host}形式のurl
   */
  protected baseUrl: string;

  /**
   * コンストラクタ
   * @param ctx
   */
  constructor(ctx: { req?: any } = { req: null }) {
    this.baseUrl = this.createBaseUrl(ctx);
  }
  /**
   * isomorphicにfetchを呼び出す
   * @param endpoint
   * @param options
   */
  protected callApi(endpoint: string, options?: any) {
    return fetch(`${this.baseUrl}/api/${endpoint}`, {
      ...options,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8"
      }
    }).then(response => this.handleResponse(response));
  }

  /**
   * api呼び出しのレスポンスをハンドリングする
   * @param res
   */
  private handleResponse(res: any) {
    if (res.ok) {
      return this.parseJson(res);
    } else {
      return this.parseJson(res).then(e => {
        throw e;
      });
    }
  }

  /**
   * isomorphicなURLを生成する
   * @param req
   */
  private createBaseUrl(ctx?: any) {
    if (process.env.NODE_ENV === "test") {
      return this.TEST_BASE_URL;
    }
    return ctx && ctx.req
      ? url.format({ protocol: ctx.req.protocol, host: ctx.req.get("host") })
      : `${location.protocol}//${location.host}`;
  }

  /**
   * レスポンスのjsonをパースする
   * @param res
   */
  private parseJson(res: Response) {
    return res.text().then(function(text) {
      return text ? JSON.parse(text) : {};
    });
  }
}
