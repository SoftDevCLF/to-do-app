"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Footer from "@/app/components/Footer";
import NavigationBar from "../components/NavBar";
import SideNavBar from "@/app/components/SideNavBar";
import TaskForm from "../components/Modals/TaskFormModal";
import TaskList from "../components/TaskList";
import SearchBar from "../components/SearchBar";
import ConfirmDeleteModal from "../components/Modals/ConfirmDeleteModal";
import EditTaskModal from "../components/Modals/EditTaskModal";
import Confetti from "react-confetti";
import RandomQuote from "../components/RandomQuote";
import {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
  updateTaskTitle,
} from "./_services/task-list-service";

export default function TaskListPage() {
  const { user } = useAuth();
  const router = useRouter();

  //States for filtering, searching, tasks, and modals
  const [filteredItems, setFilteredItems] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (!user) {
      router.push("/tasks-list/login");
    } else {
      loadTasks();
    }
  }, [user, router]);

  if (!user) return null;

  async function loadTasks() {
    try {
      const data = await getTasks(user.uid);
      setTasks(data);
    } catch (error) {
      console.error("Failed to load tasks");
      alert("Unable to load tasks. Please try again.");
    }
  }

  //CRUD FUNCTIONS TO BE IMPLEMENTED WITH BACKEND API/DATABASE SERVICES CALLS
  //Handle adding a new task
  const handleAddTask = async (newTask) => {
    try {
      await addTask(user.uid, newTask);
      await loadTasks();
      setShowModal(false);
    } catch (error) {
      console.error("Failed to add task");
      alert("Failed to add task. Please try again.");
    }
  };

  //Handle toggling task completion
  const handleToggleComplete = async (task) => {
    try {
      // Toggle task completion
      await toggleTask(user.uid, task.id, !task.completed);
      await loadTasks();

      //Trigger confetti when task is being completed
      if (!task.completed) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 2000); // confetti lasts 2s
      }
    } catch (error) {
      console.error("Failed to update task");
      alert("Could not update task status.");
    }
  };

  //Hande request delete to open modal
  const handleRequestDelete = (task) => {
    setTaskToDelete(task);
  };

  //Handle confirm delete
  const handleConfirmDelete = async (taskId) => {
    try {
      await deleteTask(user.uid, taskId);
      await loadTasks();
      setTaskToDelete(null);
    } catch (error) {
      console.error("Failed to delete task");
      alert("Failed to delete task.");
    }
  };

  //Handle edit task
  const handleRequestEdit = (task) => {
    setTaskToEdit(task);
  };

  //Handle update task
  const handleUpdateTask = async (updatedTask) => {
    try {
      await updateTaskTitle(user.uid, updatedTask.id, updatedTask.title);
      await loadTasks();
      setTaskToEdit(null);
    } catch (error) {
      console.error("Failed to update task");
      alert("Failed to update task.");
    }
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

        <main className="flex-1 flex w-full flex-col items-center bg-[#000024] sm:items-start">
          {/*Render confetti on task completion */}
          {showConfetti && (
            <Confetti
              numberOfPieces={1000}
              recycle={false}
              colors={["#F15A2B", "#F1FAF5", "#01013D"]}
            />
          )}
          <section className="w-full text-center sm:text-left gap-5">
            <h1 className="text-5xl font-bold text-[#F1FAF5] pt-12 pb-10 ps-22">
              Task List
            </h1>
          </section>
          <div className="w-full flex items-center justify-between gap-4 px-22 mb-4">
            <button
              onClick={() => setShowModal(true)}
              className="px-3 py-3 rounded-lg font-semibold text-[#F1FAF5] bg-purple-800 hover:bg-purple-900 transition-all shadow-md"
            >
              Add New Task
            </button>
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            {/* Add task button and modal */}
          </div>
          {showModal && (
            <TaskForm
              onAddTask={handleAddTask}
              onClose={() => setShowModal(false)}
            />
          )}
          <TaskList
            tasks={tasks}
            filter={filteredItems}
            searchTerm={searchTerm}
            onRequestDelete={handleRequestDelete}
            onRequestEdit={handleRequestEdit}
            onToggleComplete={handleToggleComplete}
          />
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
          <RandomQuote />
        </main>
      </div>
      <Footer />
    </div>
  );
}
