"use client";

import { useState } from "react";

// TaskForm component allows the user to input a new task
export default function TaskFormModal({ onAddTask, onClose }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    const trimmedTitle = title.trim();

    // Validation (1-45 characters)
    if (trimmedTitle.length < 1 || trimmedTitle.length > 45) {
      setError("Task title must be between 1 and 45 characters.");
      return;
    }

    setError("");

    const newTask = {
      // Generate a unique ID for the new task
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    onAddTask(newTask); //Will be replaced with event handler function that will add task to firestore
    setTitle(""); //clear form input after submission
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 bg-opacity-50 z-50"
      onClick={onClose} //Modal clicked outside closes
    >
      <div
        className="bg-[#01013D] p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-600"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label
            htmlFor="taskTitle"
            className="text-[#F1FAF5] font-semibold text-2xl"
          >
            Title:
          </label>
          <input
            id="taskTitle"
            type="text"
            value={title}
            maxLength={45}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            className="px-4 py-2 rounded-lg bg-[#000024] text-[#F1FAF5] border border-[#92dad7]/40 placeholder:text-[#92dad7]/60 focus:outline-none focus:ring-2 focus:ring-[#92dad7]"
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <p className="text-xs text-[#92dad7]/70 text-right">
            {title.length}/45
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-lg font-semibold text-[#F1FAF5] bg-purple-800 hover:bg-purple-900 transition-all shadow-md border border-purple-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
