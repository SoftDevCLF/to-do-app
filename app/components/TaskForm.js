"use client"

import { useState } from "react";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setTitle("");
  }

  const id = crypto.randomUUID();

  const task = { id: crypto.randomUUID(), title };

  console.log("Your new task:", task, "has been added to the To-Do list!");

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center p-3 mb-3 border rounded-lg shadow-md bg-blue-200 text-black">
        <label htmlFor="taskTitle" className="text-black text-xl font-bold mr-2">
          Title:
        </label>

        <input
          id="taskTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-1 rounded"
        />

        <button type="submit" className="bg-blue-500 text-sm rounded border-2 text-white py-1 px-5 ml-25 font-bold  cursor-pointer hover:bg-blue-600">
          Add
        </button>
      </form>
    </div>
  );
}
