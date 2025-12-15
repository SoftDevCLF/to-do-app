"use client";

// TaskCard component displays a single task item
export default function TaskCard({ task }) {
  return (
    <div className="flex items-center justify-between w-full p-8 mb-4 border border-[#F15A2B] rounded-2xl bg-[#01013D] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all ">
      <div className="flex items-center gap-4 py-6">
      <input
        type="checkbox"
        checked={task.completed || false} readOnly
        className="w-6 h-6 appearance-none cursor-pointer rounded border-2 border-[#F15A2B] bg-[#01013D] checked:bg-[#F15A2B] transition"
      />
      </div>

      <div className="flex-1 text-base font-semibold leading-snug px-3">{task.title}</div>
      <button type="button" className="px-9 py-2 rounded-lg font-semibold text-[#F1FAF5] bg-[#F15A2B] hover:bg-orange-600 transition-all shadow-md"
        onClick={() => console.log(`Delete task with id: ${task.id}`)}
      >
        Delete
      </button>
    </div>
  );
}
