import React from "react";
import { ListGroup, Button, Form } from "react-bootstrap";

const TodoItem = ({ task, toggleComplete, deleteTask, startEdit }) => {
  return (
    <ListGroup.Item className="d-flex align-items-center">
      <Form.Check
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        label={
          <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
          </span>
        }
      />
      <div className="ms-auto">
        <Button size="sm" variant="warning" className="me-2" onClick={() => startEdit(task)}>Edit</Button>
        <Button size="sm" variant="danger" onClick={() => deleteTask(task.id)}>Delete</Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
