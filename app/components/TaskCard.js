"use client";

import deleteIcon from "../assets/trash2.0.png";
import Image from "next/image";

export default function TaskCard({ task }) {
  return (
    <div className="flex items-center p-3 mb-3 border rounded-lg shadow-md bg-blue-200 text-black">
      <input
        type="checkbox"
        checked={task.completed || false} readOnly
        className="w-8 h-3 cursor-pointer"
      />
      <div className="flex-1">{task.title}</div>
      <Image src={deleteIcon} alt="Delete Task" width={20} height={20} className="cursor-pointer" />
    </div>
  );
}
