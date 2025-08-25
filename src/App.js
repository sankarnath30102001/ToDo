import React, { useState, useEffect } from "react";
import TodoForm from "./componets/TodoForm";
import TodoList from "./componets/TodoList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setTaskToEdit(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const startEdit = (task) => setTaskToEdit(task);
  const cancelEdit = () => setTaskToEdit(null);

  return (
    <div className="app">
      <h1>React To-Do List</h1>
      <TodoForm
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
        cancelEdit={cancelEdit}
      />
      <TodoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        startEdit={startEdit}
      />
    </div>
  );
}

export default App;
