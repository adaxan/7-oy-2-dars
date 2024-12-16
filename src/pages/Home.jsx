import React, { useState } from "react";
import ToDo from "./ToDo";

function Home() {
  const [tasks, setTasks] = useState([]);
  const [inputt, setInputt] = useState("");

  function handleAddTask() {
    if (inputt.trim() == "") return;
    setTasks([...tasks, { text: inputt, completed: false }]);
    setInputt("");
  }

  function handleDeleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i != index);
    setTasks(updatedTasks);
  }

  function handleToggleTask(index) {
    const updatedTasks = tasks.map((task, i) => {
      if (i == index) {
        return { ...task, completed: !task.completed };
      } 
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <div className="container mx-auto min-h-screen bg-gray-100 p-6">
      <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Task Manager</h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={inputt}
            onChange={(e) => setInputt(e.target.value)}
            placeholder="Enter a task"
          />
          <button
            onClick={handleAddTask}
            className="ml-2 btn btn-primary"
          >
            Add Task
          </button>
        </div>

        <ToDo
          tasks={tasks}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
      </div>
    </div>
  );
}

export default Home;