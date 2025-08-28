import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const TodoFormModal = ({ addTask, editTask, taskToEdit, onClose }) => {
  const [text, setText] = useState(taskToEdit ? taskToEdit.text : "");

  useEffect(() => {
    if (taskToEdit) setText(taskToEdit.text);
    else setText("");
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pattern = /^[a-zA-Z0-9 _-]+$/;
    if (!text.trim()) return alert("Task cannot be empty");
    if (!pattern.test(text)) return alert("Invalid characters!");

    if (taskToEdit) {
      editTask({ ...taskToEdit, text });
    } else {
      addTask(text);
    }

    setText("");
    onClose(); // close modal after submit
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
