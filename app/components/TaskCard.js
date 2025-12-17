"use client";

// TaskCard component displays a single task item
export default function TaskCard({ task, onToggleComplete, onRequestDelete, onRequestEdit }) {
  
  return (
    <div
      className={`flex items-center justify-between w-full p-8 mb-4 rounded-2xl shadow-lg transition-all ${
        task.completed ? "bg-[#020617] border border-[#1F2937] opacity-60" : "bg-gradient-to-r from-[#020024] to-[#05004A] border border-[#F15A2B]"}`}    >
      <div className="flex items-center gap-4 py-6">
      {/* Checkbox */}
      <input
        type="checkbox"
        checked={task.completed}
        className="w-6 h-6 cursor-pointer rounded border-2 border-[#F15A2B] bg-[#01013D] checked:bg-[#F15A2B] accent-[#F15A2B] transition"
        onChange={() => onToggleComplete(task)}
        aria-label={`Mark task "${task.title}" as ${task.completed ? "incomplete" : "complete"}`}
      />
      </div>
      <div className="flex gap-4 items-center flex-1">
        <div className={`flex-1 text-base font-semibold leading-snug px-3 ${task.completed ? "line-through text-gray-400" : "text-[#F1FAF5]"}`}>{task.title}</div>

        {/* Edit Button */}
        <button type="button" className="px-4 py-2 rounded-lg font-semibold text-[#F1FAF5] bg-[#F15A2B] hover:bg-orange-600 hover:scale-105 transition-all shadow-md"
         onClick={() => onRequestEdit(task)}
        >
          Edit
        </button>
        {/* Delete Button */}
        <button type="button" className="px-4 py-2 rounded-lg font-semibold text-[#F1FAF5] bg-[#F15A2B] hover:bg-red-600 hover:scale-105 transition-all shadow-md"
          onClick={() => onRequestDelete(task)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
