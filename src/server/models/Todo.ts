import Mongoose, { Document, Model } from "mongoose";
import timestamps from "mongoose-timestamp";
import { ITodoList } from "./TodoList";
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
    maxlength: 30
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

const Todo: Model<ITodo> = Mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;
