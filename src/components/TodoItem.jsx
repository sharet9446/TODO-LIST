const TodoItem = ({ setTodoList, todoList }) => {
  const todoDelete = (id) => {
    setTodoList(todoList.filter((list) => list.id !== id));
  };

  return (
    <div>
      {todoList.map((list) => (
        <div key={list.id}>
          <h2>{list.title}</h2>
          <p>{list.context}</p>
          <button onClick={() => todoDelete(list.id)}>삭제하기</button>
          <button>완료</button>
        </div>
      ))}
    </div>
  );
};

export default TodoItem;
