"use client";
import TaskCard from "./TaskCard";
import tasks from "../testingpage/tasks.json";

export default function TaskList() {
  console.log("Loaded tasks:", tasks); // debug check

  return (
    <div className="p-4 max-w-md mx-auto">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
