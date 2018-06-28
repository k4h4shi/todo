import Mongoose, { Document, Model } from "mongoose";
import timestamps from "mongoose-timestamp";

import TodoList, { ITodoList } from "./TodoList";
import { Timestamp } from "bson";

export interface ITodo extends Document {
  name: string;
  due: string;
  completed: boolean;
  todoList: ITodoList;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export const TodoSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30,
    validate: {
      isAsync: true,
      validator: nameValidator
    }
  },
  due: {
    type: Date,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  todoList: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: "TodoList"
  }
});

TodoSchema.plugin(timestamps);

/**
 * todoリストの無いのtodoの名前が一位である事をを検証するvalidator
 * @param _value
 * @param cb
 */
function nameValidator(_value, cb) {
  const todo = this as ITodo;
  TodoList.findById(todo.todoList)
    .populate("todos")
    .exec((err, todoList) => {
      if (err) {
        cb(false, err);
        return;
      }
      // todoが含まれるリストに同じ名前のtodoがあるか
      const isSameNameExists = todoList.todos.some(t => {
        return t.name === todo.name;
      });
      if (isSameNameExists) {
        cb(false, "Error, expected `name` to be unique.");
        return;
      }
      cb(true);
    });
}

const Todo: Model<ITodo> = Mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;
