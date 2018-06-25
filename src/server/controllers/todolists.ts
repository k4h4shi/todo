import { Request, Response, NextFunction } from "express";
import TodoList, { ITodoList } from "../models/TodoList";

/**
 * Todoリストの一覧を取得
 * @param _req
 * @param res
 * @param next
 */
export const index = (_req: Request, res: Response, next: NextFunction) => {
  TodoList.find()
    // Todoリストに紐付くtodoを作成日が新しい順に並び替えた上で連結する
    .populate({
      path: "todos",
      options: {
        sort: "-createdAt"
      }
    })
    .exec((err: Error, todoLists: ITodoList[]) => {
      if (err) {
        return next(err);
      }
      const sorted = sortTodoLists(todoLists);
      res.json(sorted);
    });
};

/**
 * 任意のTodoリストを取得
 * @param req
 * @param res
 * @param next
 */
export const show = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  TodoList.findById(id)
    .populate("todos")
    .exec((err: Error, todoList: ITodoList) => {
      if (err) {
        return next(err);
      }
      res.json(todoList);
    });
};

/**
 * Todoリストを作成
 * @param req
 * @param res
 * @param next
 */
export const create = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  const todoList = new TodoList(body);
  todoList.save((err: Error) => {
    if (err) {
      return next(err);
    }
    res.status(201).json(todoList);
  });
};

/**
 * Todoリストの配列の要素を、ToDoリストに登録されているToDoの作成日が新しい順に並び替える。
 * @param todoLists
 */
function sortTodoLists(todoLists: ITodoList[]) {
  const sorted = todoLists.sort((t1, t2) => {
    const t1FirstTodo = t1.todos[0];
    const t2FirstTodo = t2.todos[0];
    if (t1FirstTodo && t2FirstTodo) {
      if (t1FirstTodo.createdAt < t2FirstTodo.createdAt) {
        return 1;
      } else if (t1FirstTodo.createdAt > t2FirstTodo.createdAt) {
        return -1;
      } else {
        return 0;
      }
    } else if (t2FirstTodo) {
      return 1;
    } else if (t1FirstTodo) {
      return -1;
    } else {
      return 0;
    }
  });
  return sorted;
}
