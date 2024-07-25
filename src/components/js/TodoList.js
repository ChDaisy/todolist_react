import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, openModal }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          setTodos={setTodos}
          openModal={openModal}
        />
      ))}
    </div>
  );
};

export default TodoList;
