import Todo from "../../../src/server/models/Todo";

describe("Todo", () => {
  it("は名前、期日、完了フラグ、作成日、更新日のプロパティを持つ", () => {
    const name = "Todoアプリを作る";
    const due = "2018-01-01";
    const todo = new Todo({
      name,
      due
    });
    expect(todo).toBeTruthy();
    expect(todo.name).toEqual(name);
    expect(todo.due).toEqual(new Date(due));
    expect(todo.completed).toEqual(false);
    todo.save(() => {
      expect(todo.createdAt).toBeTruthy();
      expect(todo.updatedAt).toBeTruthy();
    });
  });

  it("は名前が空の場合、バリデーションエラーを発生させる", () => {
    const todo = new Todo();
    todo.validate(err => {
      expect(err.errors.name.message).toEqual("Path `name` is required.");
    });
  });

  it("は名前が空文字列の場合、バリデーションエラーを発生させる", () => {
    const todo = new Todo({ name: "" });
    todo.validate(err => {
      expect(err.errors.name.message).toEqual("Path `name` is required.");
    });
  });

  it("は名前が31文字以上の場合、バリデーションエラーを発生させる", () => {
    const todo = new Todo({
      name: Array(31)
        .fill("a")
        .join("")
    });
    todo.validate(err => {
      expect(err.errors.name.message).toEqual(
        "Path `name` (`aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`) is longer than the maximum allowed length (30)."
      );
    });
  });

  it("は期日が空の場合、バリデーションエラーを発生させる", () => {
    const todo = new Todo();
    todo.validate(err => {
      expect(err.errors.due.message).toEqual("Path `due` is required.");
    });
  });

  it("は期日が不正なフォーマットの場合、バリデーションエラーを発生させる", () => {
    const todo = new Todo({
      due: "invalid"
    });
    todo.validate(err => {
      expect(err.errors.due.message).toEqual(
        'Cast to Date failed for value "invalid" at path "due"'
      );
    });
  });

  it("は完了フラグが渡されなかった場合、falseをデフォルト値とする", () => {
    const todo = new Todo();
    expect(todo.completed).toEqual(false);
  });

  it("には完了フラグ設定できる", () => {
    const todo = new Todo({
      completed: true
    });
    expect(todo.completed).toEqual(true);
  });
});
