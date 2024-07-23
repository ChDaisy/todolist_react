import React, { useState } from "react";
import Modal from "./Modal.js";
import "../css/AddTodo.css";

const AddTodo = ({ setTodos }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="add-todo">
      <button className="add_btn" onClick={openModal}>
        ADD NEW +
      </button>
      {isModalOpen && <Modal setTodos={setTodos} closeModal={closeModal} />}
    </div>
  );
};

export default AddTodo;
