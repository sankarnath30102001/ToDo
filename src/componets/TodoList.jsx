import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, toggleComplete, deleteTask, startEdit }) => {
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <TodoItem
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    startEdit={startEdit}
                />
            ))}
        </ul>
    );
};

export default TodoList;
