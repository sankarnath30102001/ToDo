import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const TodoFormModal = ({ addTask, editTask, taskToEdit, onClose }) => {
  const [text, setText] = useState(taskToEdit ? taskToEdit.text : "");

  useEffect(() => {
    setText(taskToEdit ? taskToEdit.text : "");
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pattern = /^[a-zA-Z0-9 _-]+$/;
    if (!text.trim()) return alert("Task cannot be empty");
    if (!pattern.test(text)) return alert("Invalid characters! (Allowed: letters, numbers, space, _ and -)");

    if (taskToEdit) {
      // Requirement: confirmation before update
      if (!window.confirm("Are you sure you want to update this task?")) return;
      editTask({ ...taskToEdit, text });
    } else {
      addTask(text);
    }

    setText("");
    onClose();
  };

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{taskToEdit ? "Edit Task" : "Add Task"}</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Control
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter task"
            autoFocus
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            {taskToEdit ? "Update" : "Add"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default TodoFormModal;
