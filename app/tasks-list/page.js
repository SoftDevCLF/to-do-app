"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../contexts/AuthContext";
import Footer from "../components/footer";
import NavigationBar from "../components/nav-bar";
import SideNavBar from "@/app/components/side-nav-bar";

export default function TaskListPage() {
  const { user } = useAuth();
  const router = useRouter();

  const [filteredItems, setFilteredItems] = useState("all");

  useEffect(() => {
    if (!user) {
      router.push("/tasks-list/login");
    }
  }, [user, router]);

  if (!user) return null;

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
        </main>
      </div>
      <Footer />
    </div>
  );
}
