import { Request, Response, NextFunction } from "express";
import TodoList, { ITodoList } from "../models/TodoList";
import Todo, { ITodo } from "../models/Todo";

/**
 * 検索結果を取得
 * TodoリストとTodoに対し、リクエストのクエリの文字列でLIKE検索する。
 * @param _req
 * @param res
 * @param next
 */
export const index = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.query);
  const { q } = req.query;

  Promise.all([
    TodoList.find({ name: new RegExp(`${q}`) })
      .sort("-createdAt")
      .populate("todos")
      .exec(),
    Todo.find({ name: new RegExp(`${q}`) })
      .sort("-createdAt")
      .populate("todoList")
      .exec()
  ])
    .then((results: [ITodoList[], ITodo[]]) => {
      const [todoLists, todos] = results;
      res.status(200).json({
        todoLists,
        todos
      });
    })
    .catch(err => {
      next(err);
    });
};
