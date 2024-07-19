import React, { useState } from "react";

const ToDoList = () => {
  // State to manage tasks and input value
  const [tasks, setTasks] = useState([]);
  const [inputTask, setInputTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (inputTask.trim() !== "") {
      setTasks([...tasks, inputTask]);
      setInputTask("");
    }
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="container Box List">
        <h1>To-Do List</h1>

        {/* Task input and add button */}
        <div className="row">
          <div className="col-12">
            <label className="ms-2">Enter Tasks:
            <input
              type="text"
              value={inputTask}
              onChange={(e) => setInputTask(e.target.value)}
              placeholder="Add a new task"
            /></label>
            <button className="btn btn-primary BUTTON " onClick={addTask}>
              Add Task
            </button>
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>
                  {task}
                  <button
                    className="btn btn-primary R"
                    onClick={() => removeTask(index)}
                  >
                    Remove Task
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
