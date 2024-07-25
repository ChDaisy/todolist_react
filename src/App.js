import React, { useEffect, useState } from "react";
import { createTodo, getTodos, updateTodo } from "./api/api";

import Header from "./components/js/Header";
import TodoList from "./components/js/TodoList";
import Footer from "./components/js/Footer";
import Modal from "./components/js/Modal";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const todos = await getTodos();
        console.log("todos :", todos);
        setTodos(todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const openModal = (todo) => {
    setEditingTodo(todo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTodo(null);
    setIsModalOpen(false);
  };

  const handleSaveTodo = async (todo) => {
    if (todo.id) {
      // 수정 모달
      try {
        const updated = await updateTodo(todo.id, todo);
        setTodos((prevTodos) =>
          prevTodos.map((t) => (t.id === todo.id ? updated : t))
        );
      } catch (error) {
        console.error("Error updating todo:", error);
      }
    } else {
      // 생성 모달
      try {
        const created = await createTodo(todo);
        setTodos((prevTodos) => [...prevTodos, created]);
      } catch (error) {
        console.error("Error creating todo:", error);
      }
    }
    closeModal();
  };

  return (
    <div className="app-container">
      <Header />
      <TodoList todos={todos} setTodos={setTodos} openModal={openModal} />
      <Footer todos={todos} setTodos={setTodos} openModal={openModal} />
      {isModalOpen && (
        <Modal
          todo={editingTodo}
          setTodos={setTodos}
          closeModal={closeModal}
          onSave={handleSaveTodo}
        />
      )}
    </div>
  );
}

export default App;
