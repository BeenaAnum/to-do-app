'use client'
import { useState } from "react";

function ToDoApp() {

  const [tasks, setTasks] = useState<string[]>([]); // List of tasks
  const [task, setTask] = useState(""); // Current task input
  const [showTasks, setShowTasks] = useState(false); // To toggle task display

  // Add a task to the list
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]); // Add new task
      setTask(""); // Clear input
    }
  };

  // Toggle displaying tasks
  const toggleTasks = () => {
    setShowTasks(!showTasks); // Show/Hide task list
  };

  // Delete a task
  const deleteTask = (index:any) => {
    setTasks(tasks.filter((_, i) => i !== index)); // Remove selected task
  };

  return (
    <div  className="flex flex-col gap-5 justify-center items-center border-2 bg-cyan-200 h-screen relative">
      <h1 className="text-teal-950 font-bold text-3xl lg:text-5xl">ToDo List App</h1>

      {/* Input Field and Add Button */}
      <input className="w-96 h-16 rounded-2xl text-gray-900 font-bold text-2xl px-3"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="bg-purple-800 text-white px-6 py-2 rounded-xl font-bold text-2xl" onClick={addTask}>Add Task</button>

      {/* Show Tasks Button */}
      <button className="bg-pink-600 text-white px-6 py-2 rounded-xl font-bold text-2xl" onClick={toggleTasks}>
        {showTasks ? "Hide Tasks" : "Show Tasks"}
      </button>

      {/* Task List */}
      {showTasks && (
        <ul className="text-black font-bold text-3xl">
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button className="bg-cyan-700 text-white px-6 py-2 rounded-xl font-bold text-2xl m-4" onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      ) 
      }
     
    </div>
  );
}

export default ToDoApp;
