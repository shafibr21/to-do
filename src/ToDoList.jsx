import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
      alert("Please enter a task");
    }
  }

  function deleteTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  function moveUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="main-div">
      <h1 className="text-3xl font-bold pt-5 text-6xl drop-shadow-lg ">
        My To-Do-List
      </h1>
      <div className="mt-7 p-2 input-div flex justify-center h-16">
        <input
          className="border-2 rounded shadow-2xl hover:border-slate-400 w-max"
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={handleChange}
        />
        <button
          onClick={addTask}
          className=" ml-4 bg-cyan-500 hover:bg-cyan-600 text-white border rounded shadow-2xl w-20"
        >
          Add
        </button>
      </div>
      <ol className="my-auto">
        {tasks.map((task, index) => (
          <li key={index} className="list-div">
            <span className="task">{task}</span>
            <button
              className="delete-button p-2 m-2 border shadow-2xl hover:bg-red-400 rounded"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="up-button p-2 m-2 border shadow-2xl  hover:bg-green-200 rounded"
              onClick={() => moveUp(index)}
            >
              Move Up
            </button>
            <button
              className="down-button border shadow-2xl p-2 m-2  hover:bg-blue-300 rounded"
              onClick={() => moveDown(index)}
            >
              Move Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
