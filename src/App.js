import React, { useState, useEffect } from "react";
import TodoFormModal from "./componets/TodoFormModal";
import TodoList from "./componets/TodoList";
import { Container, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
    setModalOpen(false);
  };

  const handleEdit = (updatedTask) => {
    const updatedTasks = tasks.map(t => t.id === updatedTask.id ? updatedTask : t);
    setTasks(updatedTasks);
    setTaskToEdit(null);
    setModalOpen(false);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter(t => t.id !== id));
    }
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const openAddModal = () => {
    setTaskToEdit(null);
    setModalOpen(true);
  };

  const openEditModal = (task) => {
    setTaskToEdit(task);
    setModalOpen(true);
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4"> Todo List</h1>
      <div className="text-center mb-3">
        <Button onClick={openAddModal}>Add Task</Button>
      </div>

      <TodoList
        tasks={tasks}
        toggleComplete={handleToggleComplete}
        deleteTask={handleDelete}
        startEdit={openEditModal}
      />

      {modalOpen && (
        <TodoFormModal
          onClose={() => setModalOpen(false)}
          addTask={handleAdd}
          editTask={handleEdit}
          taskToEdit={taskToEdit}
        />
      )}
    </Container>
  );
}

export default App;
