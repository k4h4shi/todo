import { Request, Response, NextFunction } from "express";
import TodoList, { ITodoList } from "../models/TodoList";

/**
 * Todoリストの一覧を取得
 * @param _req
 * @param res
 * @param next
 */
export const index = (_req: Request, res: Response, next: NextFunction) => {
  TodoList.find().exec((err: Error, todoLists: ITodoList[]) => {
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
  TodoList.findById(id).exec((err: Error, todoList: ITodoList) => {
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
 * TodoリストにTodoを追加
 * @param req
 * @param res
 * @param next
 */
export const createTodo = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, due } = req.body;
  TodoList.findOneAndUpdate(
    { _id: id },
    {
      $push: {
        todos: {
          name,
          due
        }
      }
    },
    { new: true }
  ).exec((err: Error, todoList: ITodoList) => {
    if (err) {
      return next(err);
    }
    const added = todoList.todos[todoList.todos.length - 1];
    res.status(201).json(added);
  });
};

/**
 * TodoリストのTodoを更新
 * @param req
 * @param res
 * @param next
 */
export const updateTodo = (req: Request, res: Response, next: NextFunction) => {
  const { id, todoId } = req.params;
  const { body } = req;
  TodoList.findOneAndUpdate(
    { _id: id, "todos._id": todoId },
    {
      $set: {
        "todos.$": { ...body, _id: todoId }
      }
    }
  ).exec((err: Error, _todoList: ITodoList) => {
    if (err) {
      return next(err);
    }
    res.sendStatus(200);
  });
};
