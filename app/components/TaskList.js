"use client";
import TaskCard from "./TaskCard";
import tasks from "../data/tasks.json";

// TaskList component displays a list of tasks
export default function TaskList() {

  return (
    <div className="px-10 ml-0 gap-x-20 grid grid-cols-1 md:grid-cols-2 gap-6">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
