import React, { useState } from "react";

const TodoForm = ({ addTask, editTask, taskToEdit, cancelEdit }) => {
    const [task, setTask] = useState(taskToEdit ? taskToEdit.text : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        const pattern = /^[a-zA-Z0-9 _-]+$/;
        if (!task.trim()) return alert("Task cannot be empty");
        if (!pattern.test(task)) return alert("Invalid characters in task!");

        if (taskToEdit) {
            if (window.confirm("Are you sure you want to update this task?")) {
                editTask({ ...taskToEdit, text: task });
            }
        } else {
            addTask(task);
        }
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter task"
            />
            <button type="submit">{taskToEdit ? "Update" : "Add"}</button>
            {taskToEdit && <button onClick={cancelEdit}>Cancel</button>}
        </form>
    );
};

export default TodoForm;
