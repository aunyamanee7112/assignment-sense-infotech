import React, { useState } from "react";

interface ITask {
  id: number;
  message: string;
  completed: boolean;
}
const TodoList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const handleChangeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTaskList([
      ...taskList,
      { id: Date.now(), message: task, completed: false },
    ]);
    setTask(""); // Clear input after adding
  };
  const toggleTaskCompletion = (id: number) => {
    setTaskList((item) =>
      item.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTaskList((item) => item.filter((task) => task.id !== id));
  };
  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleChangeTask}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration:task.completed? "line-through" : "none",
              }}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              {index + 1}. {task.message}
            </span>
            <button id="delete" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
