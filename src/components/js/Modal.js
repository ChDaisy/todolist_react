import React, { useState } from "react";
import "../css/Modal.css";

const Modal = ({ setTodos, closeModal }) => {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), title, completed: false },
    ]);
    setTitle("");
    setMemo("");
    closeModal();
  };

  return (
    <div className="modal-background">
      <div className="modal">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add new task"
            />
            <label
              htmlFor="memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
            >
              Memo
            </label>
            <textarea id="memo"></textarea>
            <div className="modal-buttons">
              <button
                className="btn btn_warning"
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
              <button className="btn btn_primary" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
