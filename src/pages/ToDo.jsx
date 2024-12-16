import React from "react";

function ToDo({ tasks, onDelete, onToggle }) {
  function calculateProgress() {
    const completedTasks = tasks.filter(task => task.completed).length;
    return tasks.length == 0 ? 0 : Math.round((completedTasks / tasks.length) * 100);
  }

  return (
    <div>
      <ProgressBar progress={calculateProgress()} />

      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task}
            onDelete={() => onDelete(index)}
            onToggle={() => onToggle(index)}
          />
        ))}
      </ul>
    </div>
  );
}

function TodoItem({ task, onDelete, onToggle }) {
  return (
    <li className="flex items-center justify-between p-2 border rounded-lg bg-gray-50">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={onToggle}
          className="mr-2 w-4 h-4 text-blue-600"
        />
        <span
          className={`${
            task.completed ? "line-through text-gray-400" : "text-gray-800"
          }`}
        >
          {task.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-600"
      >
        Delete
      </button>
    </li>
  );
}

function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
      <div
        className="bg-blue-500 h-4 rounded-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ToDo;
