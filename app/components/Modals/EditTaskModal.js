"use client";
import { useState } from "react";

export default function EditTaskModal({ task, onUpdate, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (trimmedTitle.length < 1 || trimmedTitle.length > 45) {
      setError("Task title must be between 1 and 45 characters.");
      return;
    }

    setError("");

    const updatedTask = {
      ...task,
      title,
    };

    onUpdate(updatedTask);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      onClick={onCancel}
    >
      <div
        className="bg-[#01013D] p-8 rounded-2xl shadow-xl w-full max-w-md border border-purple-600"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-white">Edit Task 📝</h2>
          <input
            type="text"
            value={title}
            maxLength={45}
            onChange={(e) => setTitle(e.target.value)}
            className="text-white w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#F15A2B]"
            placeholder="Task Title"
            required
          />
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <p className="text-xs text-gray-400 text-right">{title.length}/45</p>
          <div className="flex justify-end gap-3">
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-purple-800 hover:bg-purple-900 text-white"
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
