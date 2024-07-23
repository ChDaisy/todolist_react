import React, { useState } from "react";
import Header from "./components/js/Header";
import TodoList from "./components/js/TodoList";
import EditTodo from "./components/js/EditTodo";
import Footer from "./components/js/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Morning run", completed: false },
    { id: 2, title: "Meeting", completed: false },
    { id: 3, title: "Lunch with Jun", completed: false },
    { id: 4, title: "Pay bills", completed: true },
    { id: 5, title: "Renew gym membership", completed: false },
  ]);
  const [editingTodo, setEditingTodo] = useState(null);

  return (
    <div className="todoBox">
      <Header />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        setEditingTodo={setEditingTodo}
      />
      <Footer todos={todos} setTodos={setTodos} />
      {editingTodo && (
        <EditTodo
          todo={editingTodo}
          setEditingTodo={setEditingTodo}
          setTodos={setTodos}
        />
      )}
    </div>
  );
}

export default App;
