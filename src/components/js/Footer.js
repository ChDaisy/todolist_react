import React from "react";
import AddTodo from "./AddTodo";
import "../css/Footer.css";

const Footer = ({ todos, openModal }) => {
  return (
    <footer className="footer">
      <span>{todos.length} TASKS</span>
      <AddTodo openModal={openModal} />
    </footer>
  );
};

export default Footer;
