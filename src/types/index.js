export type Todo = {
  _id: string,
  name: string,
  completed: boolean,
  due: string,
  createdAt: string,
  updatedAt: string
};

export type TodoList = {
  _id: string,
  name: string,
  todos: Todo[],
  createdAt: string,
  updatedAt: string
};
