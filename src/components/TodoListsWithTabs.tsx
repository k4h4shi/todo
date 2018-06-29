import styled from "styled-components";
import { Tabs, Tab, TabList, TabPanel } from "./Tabs";
import TodoLists from "./TodoLists";
import { TodoList } from "../types";

interface Props {
  todoLists: TodoList[];
}

export default ({ todoLists }: Props) => (
  <TabWrapper>
    <Tabs>
      <TabList>
        <Tab>すべて</Tab>
        <Tab>未完了</Tab>
        <Tab>完了</Tab>
      </TabList>

      <TabPanel>
        {/* Todoリスト */}
        <TodoLists todoLists={todoLists} />
      </TabPanel>
      <TabPanel>
        {/* Todoを持たないまたは、1つでも完了していないTodoを含むTodoリスト */}
        <TodoLists
          todoLists={todoLists.filter(
            todolist =>
              todolist.todos.length === 0 ||
              todolist.todos.some(todo => !todo.completed)
          )}
        />
      </TabPanel>
      <TabPanel>
        {/* Todoを持ち、かつ全てのTodoが完了しているTodoリスト */}
        <TodoLists
          todoLists={todoLists.filter(
            todolist =>
              todolist.todos.length !== 0 &&
              todolist.todos.every(todo => todo.completed)
          )}
        />
      </TabPanel>
    </Tabs>
  </TabWrapper>
);

const TabWrapper = styled.div`
  padding: 10px;
`;
