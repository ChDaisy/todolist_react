import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, setEditingTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          setTodos={setTodos}
          setEditingTodo={setEditingTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
