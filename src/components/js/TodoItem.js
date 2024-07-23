import React from "react";
import "../css/TodoItem.css";

const TodoItem = ({ todo, setTodos, setEditingTodo }) => {
  const toggleComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleEdit = () => {
    setEditingTodo(todo);
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  // 각 task별 체크박스와 라벨에 고유Id 부여
  const checkboxId = `chk-${todo.id}`;

  return (
    <div className="todo-item">
      <div className="title_box">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          id={checkboxId}
        />
        <label for={checkboxId}></label>
        <label for={checkboxId} className={todo.completed ? "completed" : ""}>
          {todo.title}
        </label>
      </div>

      <div className="btn_box">
        <button className="modify btn btn_warning" onClick={handleEdit}>
          modify
        </button>
        <button className="delete btn btn_primary" onClick={handleDelete}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
