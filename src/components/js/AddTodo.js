import React from "react";
import "../css/AddTodo.css";

const AddTodo = ({ openModal }) => {
  return (
    <div className="add-todo">
      <button className="add_btn" onClick={() => openModal()}>
        ADD NEW +
      </button>
    </div>
  );
};

export default AddTodo;
