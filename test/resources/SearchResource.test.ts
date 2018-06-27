import fetchMock from "fetch-mock";
import SearchResource from "../../src/resources/SearchResource";

describe("SearchResource", () => {
  let searchResource;
  beforeEach(() => {
    searchResource = new SearchResource();
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("は検索結果を取得する: 成功", () => {
    const query = "test";
    const body = { todolists: [], todos: [] };
    fetchMock.getOnce(`${searchResource.TEST_BASE_URL}/api/search?q=${query}`, {
      body,
      headers: { "content-type": "application/json" }
    });
    const expected = body;
    searchResource.find(query).then(json => {
      expect(json).toEqual(expected);
    });
  });
  it("は検索結果を取得する: 失敗", () => {
    const query = "test";
    const body = {
      message: "something went wrong"
    };
    fetchMock.getOnce(`${searchResource.TEST_BASE_URL}/api/search?q=${query}`, {
      body,
      status: 500,
      headers: { "content-type": "application/json" }
    });

    searchResource.find(query).catch(error => {
      expect(error).toEqual(body);
    });
  });
});
