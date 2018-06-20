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
    .populate("todos")
    .exec((err: Error, todoLists: ITodoList[]) => {
      if (err) {
        return next(err);
      }
      res.json(todoLists);
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
