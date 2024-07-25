import React from "react";
import { deleteTodo, updateTodo } from "../../api/api";
import "../css/TodoItem.css";

const TodoItem = ({ todo, setTodos, openModal }) => {
  const toggleComplete = async () => {
    const updatedTodo = { ...todo, completed: !todo.completed };

    try {
      await updateTodo(todo.id, updatedTodo);
      setTodos((prevTodos) =>
        prevTodos.map((t) => (t.id === todo.id ? updatedTodo : t))
      );
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  const handleEdit = () => {
    openModal(todo);
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="todo-item">
      <div className="title_box">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={toggleComplete}
          id={`chk-${todo.id}`}
        />
        <label htmlFor={`chk-${todo.id}`}></label>
        <label
          htmlFor={`chk-${todo.id}`}
          className={todo.completed ? "completed" : ""}
        >
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
