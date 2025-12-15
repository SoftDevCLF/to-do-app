"use client";
import TaskCard from "./TaskCard";
import tasks from "../data/tasks.json";
import { useState } from "react";

//TaskList component displays a list of tasks
export default function TaskList({filter, searchTerm}) {

 //Make tasks reactive
  const [tasksList, setTaskList] = useState(tasks);

  //Toggle a task's completion
  const handleToggleComplete = (taskId) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  //Delete a task
  const handleDeleteTask = (taskId) => {
    setTaskList(prev => prev.filter(task => task.id !== taskId));
  };

  //Filter tasks
  const filteredTasks = tasksList
    .filter(task => {
      if (filter === "completed") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    })
    .filter(task =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );


  return (
    <div className="px-10 ml-0 gap-x-20 grid grid-cols-1 md:grid-cols-2 gap-6">
      {filteredTasks.map(task => (
        <TaskCard key={task.id} task={task} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
}
