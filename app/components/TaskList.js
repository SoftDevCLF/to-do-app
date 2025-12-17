"use client";
import TaskCard from "./TaskCard";
import { useState } from "react";

//TaskList component displays a list of tasks
export default function TaskList({
  tasks,
  filter,
  searchTerm,
  onToggleComplete,
  onRequestDelete,
  onRequestEdit,
}) {
  //Make tasks reactive
  const [tasksList, setTaskList] = useState(tasks);

  //Filter tasks
  const filteredTasks = tasksList
    .filter((task) => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="px-22 ml-0 gap-x-20 grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onRequestDelete={onRequestDelete}
          onRequestEdit={onRequestEdit}
        />
      ))}
    </div>
  );
}
