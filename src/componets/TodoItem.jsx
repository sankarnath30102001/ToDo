import React from "react";

const TodoItem = ({ task, toggleComplete, deleteTask, startEdit }) => {
    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
            />
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                {task.text}
            </span>
            <button onClick={() => startEdit(task)}>Edit</button>
            <button
                onClick={() => {
                    if (window.confirm("Are you sure you want to delete this task?")) {
                        deleteTask(task.id);
                    }
                }}
            >
                Delete
            </button>
        </li>
    );
};

export default TodoItem;
