import Mongoose, { Document, Model } from "mongoose";
import timestamps from "mongoose-timestamp";
import { ITodo } from "./Todo";
import { Timestamp } from "bson";

export interface ITodoList extends Document {
  name: string;
  todos: ITodo[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export const TodoListSchema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 30
  },
  todos: [
    {
      type: Mongoose.Schema.Types.ObjectId,
      ref: "Todo"
    }
  ]
});

TodoListSchema.plugin(timestamps);

const TodoList: Model<ITodoList> = Mongoose.model<ITodoList>(
  "TodoList",
  TodoListSchema
);

export default TodoList;
