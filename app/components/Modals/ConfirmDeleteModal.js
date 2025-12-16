"use client";

export default function ConfirmDeleteModal({ task, onConfirm, onCancel }) {
  if (!task) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/60 z-50"
      onClick={onCancel}
    >
      <div
        className="bg-[#01013D] p-8 rounded-2xl shadow-xl w-full max-w-md border border-[#F15A2B]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          Delete Task?
        </h2>

        <p className="text-[#92dad7] mb-6">
          Are you sure you want to delete{" "}
          <span className="text-white font-semibold">
            “{task.title}”
          </span>
          ?
        </p>

        <div className="flex justify-end gap-3">
          <button onClick={() => onConfirm(task.id)} 
            className="px-4 py-2 rounded-lg bg-[#F15A2B] hover:bg-orange-600 text-white "
          >
            Yes 
          </button>
          <button onClick={onCancel} 
            className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
