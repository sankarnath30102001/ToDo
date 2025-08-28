import React from "react";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask, startEdit }) => {
  if (tasks.length === 0) return <p className="text-center">No tasks available.</p>;

  return (
    <ListGroup>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          startEdit={startEdit}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
