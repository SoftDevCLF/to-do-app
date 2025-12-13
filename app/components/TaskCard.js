"use client";

import deleteIcon from "../assets/trash2.0.png";
import editIcon from "../assets/edit.png";
import Image from "next/image";

export default function TaskCard({ task }) {
  return (
    <div className="flex items-center p-3 mb-3 border rounded-lg shadow-md bg-blue-200 text-black hover:bg-blue-300 transition-colors">
      <input
        type="checkbox"
        checked={task.completed || false} readOnly
        className="w-6 h-3"
      />
      <div className="flex-1">{task.title}</div>
      <Image src={editIcon} alt="Edit Task" width={20} height={20} className="cursor-pointer" />
      <Image src={deleteIcon} alt="Delete Task" width={20} height={20} className="cursor-pointer" />
    </div>
  );
}
