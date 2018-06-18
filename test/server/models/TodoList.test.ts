import TodoList from "../../../src/server/models/TodoList";

describe("TodoList", () => {
  it("は名前、作成日、更新日のプロパティを持つ", () => {
    const name = "Todoアプリを作る";
    const todoList = new TodoList({
      name
    });
    expect(todoList).toBeTruthy();
    expect(todoList.name).toEqual(name);
    todoList.save(() => {
      expect(todoList.createdAt).toBeTruthy();
      expect(todoList.updatedAt).toBeTruthy();
    });
  });

  it("は名前が空の場合、バリデーションエラーを発生させる", () => {
    const todoList = new TodoList();
    todoList.validate(err => {
      expect(err.errors.name.message).toEqual("Path `name` is required.");
    });
  });

  it("は名前が空文字列の場合、バリデーションエラーを発生させる", () => {
    const todoList = new TodoList({ name: "" });
    todoList.validate(err => {
      expect(err.errors.name.message).toEqual("Path `name` is required.");
    });
  });

  it("は名前が31文字以上の場合、バリデーションエラーを発生させる", () => {
    const todoList = new TodoList({
      name: Array(31)
        .fill("a")
        .join("")
    });
    todoList.validate(err => {
      expect(err.errors.name.message).toEqual(
        "Path `name` (`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`) is longer than the maximum allowed length (30)."
      );
    });
  });
});
