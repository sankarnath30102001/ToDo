import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const TodoItem = ({ task, deleteTask, startEdit }) => {
  return (
    <ListGroup.Item className="d-flex align-items-center justify-content-between">
      <span>{task.text}</span>
      <div>
        <Button
          size="sm"
          variant="warning"
          className="me-2"
          onClick={() => startEdit(task)}
        >
          Edit
        </Button>
        <Button
          size="sm"
          variant="danger"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
