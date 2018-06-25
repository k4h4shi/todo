import fetchMock from "fetch-mock";
import TodoResource from "../../src/resources/TodoResource";

describe("TodoResource", () => {
  let todoResource;
  beforeEach(() => {
    todoResource = new TodoResource();
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("は新たなTodoを作成する: 成功", () => {
    const todoListId = "0";
    const body = { _id: "0", name: "todo", due: "2018-01-01" };
    fetchMock.postOnce(
      `${todoResource.TEST_BASE_URL}/api/todolists/${todoListId}/todos`,
      {
        body,
        headers: { "content-type": "application/json" }
      }
    );
    const expected = body;
    todoResource
      .create(todoListId, { name: "todo", due: "2018-01-01" })
      .then(json => {
        expect(json).toEqual(expected);
      });
  });
  it("は新たなTodoを作成する: 失敗", () => {
    const todoListId = "0";
    const body = {
      message: "something went wrong"
    };
    fetchMock.postOnce(
      `${todoResource.TEST_BASE_URL}/api/todolists/${todoListId}/todos`,
      {
        body,
        status: 500,
        headers: { "content-type": "application/json" }
      }
    );

    const expected = new Error(body.message);
    todoResource
      .create(todoListId, { name: "todo", due: "2018-01-01" })
      .catch(error => {
        expect(error).toEqual(expected);
      });
  });

  it("はTodoを更新する: 成功", () => {
    const todoId = "0";
    const body = { _id: "0", name: "todo", due: "2018-01-01" };
    fetchMock.patchOnce(`${todoResource.TEST_BASE_URL}/api/todos/${todoId}`, {
      body,
      headers: { "content-type": "application/json" }
    });
    const expected = body;
    todoResource
      .update(todoId, { name: "todo", due: "2018-01-01" })
      .then(json => {
        expect(json).toEqual(expected);
      });
  });

  it("はTodoを更新する: 成功(更新なし)", () => {
    const todoId = "0";
    fetchMock.patchOnce(`${todoResource.TEST_BASE_URL}/api/todos/${todoId}`, {
      body: "",
      headers: { "content-type": "application/json" }
    });
    const expected = {};
    todoResource
      .update(todoId, { name: "todo", due: "2018-01-01" })
      .then(json => {
        expect(json).toEqual(expected);
      });
  });
  it("はTodoを更新する: 失敗", () => {
    const todoId = "0";
    const body = {
      message: "something went wrong"
    };
    fetchMock.patchOnce(`${todoResource.TEST_BASE_URL}/api/todos/${todoId}`, {
      body,
      status: 500,
      headers: { "content-type": "application/json" }
    });

    const expected = new Error(body.message);
    todoResource
      .update(todoId, { name: "todo", due: "2018-01-01" })
      .catch(error => {
        expect(error).toEqual(expected);
      });
  });
});
