import React from "react";
import AddTodo from "./AddTodo";
import "../css/Footer.css";

const Footer = ({ todos, setTodos }) => {
  return (
    <footer className="footer">
      <span>{todos.length} TASKS</span>
      <AddTodo setTodos={setTodos} />
    </footer>
  );
};

export default Footer;
