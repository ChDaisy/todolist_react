import React, { useState, useEffect } from "react";

const EditTodo = ({ todo, setEditingTodo, setTodos }) => {
  const [title, setTitle] = useState(todo.title);

  const handleSave = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === todo.id ? { ...t, title } : t))
    );
    setEditingTodo(null);
  };

  return (
    <div className="edit-todo-modal">
      <div className="edit-todo-content">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Memo</label>
        <textarea></textarea>
        <button onClick={() => setEditingTodo(null)}>undo</button>
        <button onClick={handleSave}>save</button>
      </div>
    </div>
  );
};

export default EditTodo;
