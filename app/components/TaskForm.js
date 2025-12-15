"use client"

import { useState } from "react";

// TaskForm component allows the user to input a new task
export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  //Prevent empty task titles
  if (title.trim() === "") {
    return null;
  }
  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

  const newTask = 
  {  
    // Generate a unique ID for the new task
    id: crypto.randomUUID(), 
    title: title,
    completed: false,
  };

  onAddTask(newTask); //Will be replaced with event handler function that will add task to firestore
  setTitle(""); //clear form input after submission
}


  return (
    <div className="px-10 ml-0 space-y-6">
      <form onSubmit={handleSubmit} className="flex items-center gap-4 p-8 mb-8 rounded-2xl bg-[#01013D] border border-[#F15A2B] shadow-lg">
        <label htmlFor="taskTitle" className="text-[#F1FAF5] font-semibold whitespace-nowrap text-2xl">
          Title:
        </label>
        <input
          id="taskTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-lg bg-[#000024] text-[#F1FAF5] border border-[#92dad7]/40 placeholder:text-[#92dad7]/60 focus:outline-none focus:ring-2 focus:ring-[#92dad7]"
        />

        <button type="submit" className="px-5 py-2 rounded-lg font-semibold text-[#F1FAF5] bg-[#F15A2B] hover:bg-orange-600 transition-all shadow-md">
          Add
        </button>
      </form>
    </div>
  );
}
