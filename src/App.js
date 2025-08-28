import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import TodoList from "./componets/TodoList";
import TodoFormModal from "./componets/TodoFormModal";
import "./App.css";

function App() {
  // Lazy initialize from localStorage to avoid wiping saved data on first mount
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("tasks");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error("Failed to parse tasks from localStorage:", e);
      return [];
    }
  });

  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Persist whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (e) {
      console.error("Failed to save tasks to localStorage:", e);
    }
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const editTask = (updatedTask) => {
    setTasks((prev) => prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
  };

  const deleteTask = (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const openAddModal = () => {
    setTaskToEdit(null);
    setShowModal(true);
  };

  const startEdit = (task) => {
    setTaskToEdit(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setTaskToEdit(null);
    setShowModal(false);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Todo List</h1>
      <div className="text-center mb-3">
        <Button onClick={openAddModal}>Add Task</Button>
      </div>

      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        startEdit={startEdit}
      />

      {showModal && (
        <TodoFormModal
          addTask={addTask}
          editTask={editTask}
          taskToEdit={taskToEdit}
          onClose={closeModal}
        />
      )}
    </Container>
  );
}

export default App;
