import { Request, Response, NextFunction } from "express";
import TodoList, { ITodoList } from "../models/TodoList";

export const index = (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  TodoList.find().exec((err: Error, todoLists: ITodoList[]) => {
    if (err) {
      return next(err);
    }
    res.json(todoLists);
  });
};

export const show = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  TodoList.findById(id).exec((err: Error, todoList: ITodoList) => {
    if (err) {
      return next(err);
    }
    res.json(todoList);
  });
};

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
