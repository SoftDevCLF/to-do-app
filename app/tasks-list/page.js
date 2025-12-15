"use client";

import { useState } from "react";
import Footer from "../components/footer";
import NavigationBar from "../components/nav-bar";
import SideNavBar from "@/app/components/side-nav-bar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";


export default function TaskListPage() {
  const [filteredItems, setFilteredItems] = useState("all");
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
            <h1 className="text-5xl font-bold mb-6 text-[#F1FAF5] py-12 ps-5">
              Task List
            </h1>
          </section>
          <TaskForm />
          <TaskList filter={filteredItems}/>

        </main>
      </div>
      <Footer />
    </div>
  );
}
