import { Request, Response, NextFunction } from "express";
import TodoList from "../models/TodoList";
import Todo, { ITodo } from "../models/Todo";

/**
 * Todoを追加
 * @param req
 * @param res
 * @param next
 */
export const create = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { name, due } = req.body;
  const todo = new Todo({ name, due, todoList: id });
  todo
    .save()
    .then((todo: ITodo) => {
      console.log(todo);
      TodoList.findByIdAndUpdate(
        id,
        {
          $push: {
            todos: todo._id
          }
        },
        { new: true }
      ).exec((err: Error, _todo: ITodo) => {
        if (err) {
          return next(err);
        }
        res.status(201).json(todo);
      });
    })
    .catch(err => {
      next(err);
    });
};

/**
 * Todoを更新
 * @param req
 * @param res
 * @param next
 */
export const update = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const { body } = req;
  Todo.findByIdAndUpdate(
    id,
    {
      $set: { ...body }
    },
    { new: true },
    (err: Error, _todo: ITodo) => {
      if (err) {
        return next(err);
      }
      res.status(200).json(_todo || "");
    }
  );
};
