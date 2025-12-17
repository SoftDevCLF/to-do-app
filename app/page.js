"use client";
import NavigationBar from "./components/nav-bar";
import Footer from "./components/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const loginPageNav = () => {
    router.push("/tasks-list/login");
  };
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <NavigationBar />
      <main className="flex-1 max-w-screen w-full items-center py-12 bg-[#000024] sm:items-start">
        <section className="flex w-full text-center sm:text-left gap-5">
          <div className="w-full ps-16">
            <h1 className="text-5xl font-bold mb-6 text-[#F1FAF5]">
              Focus on what’s next.
              <br /> One task at a time.
            </h1>
            <p className="text-lg mb-8 text-[#F1FAF5]">
              Organize your tasks efficiently and boost your productivity with
              our intuitive To Do WebApp: Listo.
            </p>
            <button
              className="px-6 py-3 bg-[#F15A2B] text-white rounded-lg hover:bg-[#D14A1F]"
              onClick={loginPageNav}
            >
              Get Started
            </button>
          </div>
          <div className="w-full hidden md:block">
            <Image
              src="/todo4.jpg"
              alt="To Do WebApp"
              width={800}
              height={500}
              className="rounded-lg"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
