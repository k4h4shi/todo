// api response
export type Todo = {
  _id: string,
  name: string,
  todoList: TodoList,
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

export type SearchResult {
  todoLists: TodoList[],
  todos: Todo[]
}

// error
export type Error {
  message: string,
  errors?: {
    [key: string]: {
      kind: string;
      properties: { maxlength?: number };
    }
  }
  _message: string
}