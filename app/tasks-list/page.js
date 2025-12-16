"use client";

import { useState } from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/nav-bar";
import SideNavBar from "@/app/components/side-nav-bar";
import TaskForm from "../components/Modals/TaskFormModal";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import ConfirmDeleteModal from "../components/Modals/ConfirmDeleteModal";
import EditTaskModal from "../components/Modals/EditTaskModal";
import testTasks from "../data/tasks.json";
//import { getTasks } from "./_services/taskService";


export default function TaskListPage() {

  //States for filtering, searching, tasks, and modals
  const [filteredItems, setFilteredItems] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState(testTasks);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  

  //Handle adding a new task
  const handleAddTask = (newTask) => {
  setTasks((prev) => [...prev, newTask]);
  setShowModal(false);                    
  };

  //Hande request delete to open modal
  const handleRequestDelete = (task) => {
    setTaskToDelete(task);
  };

  //Handle confirm delete
  const handleConfirmDelete = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    setTaskToDelete(null);
  }

  //Handle edit task
  const handleRequestEdit = (task) => {
    setTaskToEdit(task);
  };

  //Handle update task 
  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setTaskToEdit(null);
  };



  return (
    <div className="flex flex-col h-screen bg-[#000024] font-sans">
      <NavigationBar
        displayLogin={false}
        displayAbout={false}
        displayLogout={true}
      />
      <div className="flex flex-1 w-full">
        <SideNavBar onClick={setFilteredItems} />

        <main className="flex max-w-screen w-full flex-col items-center bg-[#000024] sm:items-start">
          <section className="w-full text-center sm:text-left gap-5">
            <h1 className="text-5xl font-bold mb-6 text-[#F1FAF5] py-12 ps-10">
              Task List
            </h1>
          </section>
          <div className="w-full flex items-center justify-between gap-4 px-10 mb-4">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            {/* Add task button and modal */}
              <button onClick={() => setShowModal(true)} className="mr-4 px-3 py-3 rounded-lg font-semibold text-[#F1FAF5] bg-[#F15A2B] hover:bg-orange-600 transition-all shadow-md">
              Add New Task
              </button>
          </div>
          {showModal && (
            <TaskForm
              onAddTask={handleAddTask}
              onClose={() => setShowModal(false)}
            />
          )}
          <TaskList tasks={tasks} filter={filteredItems} searchTerm={searchTerm} onRequestDelete={handleRequestDelete} onRequestEdit={handleRequestEdit} />
          {taskToDelete && (
            <ConfirmDeleteModal
              task={taskToDelete} 
              onConfirm={handleConfirmDelete}
              onCancel={() => setTaskToDelete(null)}
            />
          )}
          {taskToEdit && (
            <EditTaskModal
              task={taskToEdit}
              onUpdate={handleUpdateTask}
              onCancel={() => setTaskToEdit(null)}
            />
          )}
        </main>
      </div>
      <Footer />
    </div>
  );
}
