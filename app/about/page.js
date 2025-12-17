"use client";

import NavigationBar from "../components/nav-bar";
import Image from "next/image";
import Footer from "../components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#000024] text-[#F1FAF5]">
      <NavigationBar
        displayLogin={true}
        displayAbout={false}
        displayLogout={false}
      />

      
      <main className="flex-1 px-16 py-20"> 
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          <div className="relative w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/about1.jpg"
              alt="Planning tasks"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="pt-2">

            <h1 className="text-6xl font-bold leading-tight mb-8">
              Built to keep you focused.
              <br />
              Designed to keep it simple.
            </h1>

            <p className="text-lg text-[#92dad7] mb-5 leading-relaxed">
              <strong>Listo</strong> is a modern task management web application
              designed to help users stay organized, focused, and productive.
            </p>

            <p className="text-lg text-[#92dad7] mb-5 leading-relaxed">
              Users can create, edit, delete, and track tasks in real time.
              Tasks are securely stored using Firebase, ensuring that each user
              only has access to their own data.
            </p>

            <p className="text-lg text-[#92dad7] mb-10 leading-relaxed">
              This project was developed as part of the{" "}
              <strong>CPRG 306 – Web Application Development II</strong> course
              at <strong>SAIT</strong>, with an emphasis on clean UI design,
              responsive layouts, and modern development best practices.
            </p>

            <div className="mb-10">
              <h2 className="text-2xl font-semibold mb-4 text-[#F1FAF5]">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-[#92dad7]">
                <li>Secure user authentication</li>
                <li>Create, edit, and delete tasks</li>
                <li>Mark tasks as complete or incomplete</li>
                <li>Filter and search tasks</li>
                <li>Cloud persistence with Firebase</li>
              </ul>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-[#01013D] border border-[#F15A2B]/30 text-sm italic text-[#92dad7] shadow-lg">
              This app was built with productivity in mind…
              but we can’t guarantee it will stop you from adding
              <strong> “Fix one last bug”</strong> or
              <strong> “Submit assignment at 11:59 PM”</strong>.
              <span className="block mt-3 text-right text-[#F1FAF5]/70">
                — The Developers 😄
              </span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
