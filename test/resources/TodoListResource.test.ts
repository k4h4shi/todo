import fetchMock from "fetch-mock";
import TodoListResource from "../../src/resources/TodoListResource";

describe("TodoListResource", () => {
  let todolistResource;
  beforeEach(() => {
    todolistResource = new TodoListResource();
  });
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it("should find all todolists: success", () => {
    const body = { todolists: ["todo1", "todo2", "todo3"] };
    fetchMock.getOnce(`${todolistResource.TEST_BASE_URL}/api/todolists`, {
      body,
      headers: { "content-type": "application/json" }
    });
    const expected = body;
    todolistResource.findAll().then(json => {
      expect(json).toEqual(expected);
    });
  });
  it("should find all todolists: fail", () => {
    const body = {
      message: "something went wrong"
    };
    fetchMock.getOnce(`${todolistResource.TEST_BASE_URL}/api/todolists`, {
      body,
      status: 500,
      headers: { "content-type": "application/json" }
    });

    const expected = new Error(body.message);
    todolistResource.findAll().catch(error => {
      expect(error).toEqual(expected);
    });
  });

  it("should create new todolist: success", () => {
    const body = { _id: "0", name: "name" };
    fetchMock.postOnce(`${todolistResource.TEST_BASE_URL}/api/todolists`, {
      body,
      status: 201,
      headers: { "content-type": "application/json" }
    });

    const expected = body;
    todolistResource.create({ name: "name" }).then(json => {
      expect(json).toEqual(expected);
    });
  });
  it("should create new todolist: fail", () => {
    const errorMessage =
      "Todo validation failed: name: Path `name` is required.";
    const body = {
      message: errorMessage
    };
    fetchMock.postOnce(`${todolistResource.TEST_BASE_URL}/api/todolists`, {
      body,
      status: 400,
      headers: { "content-type": "application/json" }
    });

    const expected = new Error(errorMessage);
    todolistResource.create(body).catch(error => {
      expect(error).toEqual(expected);
    });
  });

  it("should get a todolist: success", () => {
    const _id = "0";
    const body = { _id, name: "name" };
    fetchMock.getOnce(
      `${todolistResource.TEST_BASE_URL}/api/todolists/${_id}`,
      {
        body,
        status: 201,
        headers: { "content-type": "application/json" }
      }
    );

    const expected = body;
    todolistResource.findOneById(_id).then(json => {
      expect(json).toEqual(expected);
    });
  });
  it("should get a todolist: fail", () => {
    const _id = "0";
    const errorMessage =
      "Todo validation failed: name: Path `name` is required.";
    const body = {
      message: errorMessage
    };
    fetchMock.getOnce(
      `${todolistResource.TEST_BASE_URL}/api/todolists/${_id}`,
      {
        body,
        status: 400,
        headers: { "content-type": "application/json" }
      }
    );

    const expected = new Error(errorMessage);
    todolistResource.findOneById(_id).catch(error => {
      expect(error).toEqual(expected);
    });
  });
});
