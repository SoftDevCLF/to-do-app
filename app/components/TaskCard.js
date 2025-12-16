"use client";

// TaskCard component displays a single task item
export default function TaskCard({ task, onToggleComplete, onRequestDelete }) {
  
  return (
    <div className="flex items-center justify-between w-full p-8 mb-4 border border-[#F15A2B] rounded-2xl bg-[#01013D] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all ">
      <div className="flex items-center gap-4 py-6">
      <input
        type="checkbox"
        checked={task.completed || false}
        className="w-6 h-6 appearance-none cursor-pointer rounded border-2 border-[#F15A2B] bg-[#01013D] checked:bg-[#F15A2B] transition"
        onChange={() => onToggleComplete(task.id)}
      />
      </div>
      <div className="flex gap-4 items-center flex-1">
        <div className="flex-1 text-base font-semibold leading-snug px-3">{task.title}</div>
        {/* Edit Button */}
        <button type="button" className="px-4 py-2 rounded-lg font-semibold text-[#F1FAF5] bg-[#F15A2B] hover:bg-orange-600 hover:scale-105 transition-all shadow-md"
          // onClick={() => onEditTask(task.id)} // Uncomment and implement onEditTask when edit functionality is added
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
