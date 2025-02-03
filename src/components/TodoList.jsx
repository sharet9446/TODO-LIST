import TodoItem from "./TodoItem";

const TodoList = ({ setTodoList, todoList }) => {
  return (
    <>
      Working..
      <TodoItem setTodoList={setTodoList} todoList={todoList} />
      Done..
    </>
  );
};

export default TodoList;
