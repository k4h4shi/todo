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

export type TodoSearchResult = {
  _id: string,
  list_id: string,
  name: string,
  listname: string,
  due: string,
  createdAt: string
};

export type TodoListSearchResult = {
  _id: string,
  name: string,
  createdAt: string
};
