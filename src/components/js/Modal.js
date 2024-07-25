import React, { useEffect, useState } from "react";
import { createTodo } from "../../api/api";
import "../css/Modal.css";

const Modal = ({ todo, closeModal, onSave }) => {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");

  useEffect(() => {
    if (todo) {
      setTitle(todo.title);
      setMemo(todo.memo);
    }
  }, [todo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedTodo = { ...todo, title, memo };
      await onSave(updatedTodo);
    } catch (error) {
      console.error("Error creating todo:", error);
    }
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
            <textarea
              id="memo"
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder="Add memo"
            />
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
