import { useState } from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
  const resetForm = {
    id: crypto.randomUUID(),
    title: "",
    context: "",
  };

  const [todoList, setTodoList] = useState([]);
  const [formList, setFormList] = useState(resetForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formList.title && !formList.context) {
      alert("제목,내용 입력이 되지 않았습니다.");
      return;
    }

    setTodoList([...todoList, { ...formList, id: crypto.randomUUID() }]);
    setFormList(resetForm);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          제목
          <input
            type="text"
            value={formList.title}
            onChange={(e) =>
              setFormList((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </label>
        <label>
          내용
          <input
            type="text"
            value={formList.context}
            onChange={(e) =>
              setFormList((prev) => ({ ...prev, context: e.target.value }))
            }
          />
        </label>
        <button type="submit">추가하기</button>
      </form>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
};

export default TodoForm;
