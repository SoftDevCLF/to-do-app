"use client";

import Image from "next/image";
import NavigationBar from "@/app/components/nav-bar";
import Footer from "@/app/components/footer";
import { useEffect } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { loginWithGithub, loginWithFacebook, loginWithGoogle, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/tasks-list");
    }
  }, [user, router]);

  return (
    <div className="flex flex-col h-screen bg-[#000024] font-sans">
      <NavigationBar displayLogin={false} displayAbout={false} />
      <main className="flex max-w-screen w-full items-center py-14 bg-[#000024] md:items-start">
        <section className="flex w-full text-center md:flex-row gap-1">
          <div className="w-full md:w-3/5 hidden md:block">
            <Image
              src="/todo3.jpg"
              alt="A todo list illustration"
              width={600}
              height={500}
              className=""
            />
          </div>
          <div className="w-full px-10 bg-[#01013d] rounded-xl ps-5 ms-5 me-16">
            <h1 className="text-5xl font-bold mb-6 text-[#F1FAF5] text-left pt-10 pb-10 ps-5">
              Sign up or Login with your account
            </h1>
            <div className="group flex flex-col gap-4 justify-center items-center pt-5 pb-10">
              <Image
                src="/github-mark-white.png"
                alt="GitHub Logo"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300">
                <button onClick={loginWithGithub} className="mt-4 bg-white hover:bg-[#F1FAF5] text-black font-bold py-2 px-4 m-5 rounded-md cursor-pointer">
                  Continue with GitHub
                </button>
              </div>
            </div>
            <div className="group flex flex-col gap-4 justify-center items-center pt-5 pb-10">
              <Image
                src="/Facebook_Logo_Secondary.png"
                alt="Facebook Logo"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300">
                <button onClick={loginWithFacebook} className="mt-4 bg-[#1877F2] hover:bg-[#3b5998] text-white font-bold py-2 px-4 m-5 rounded-md cursor-pointer">
                  Continue with Facebook
                </button>
              </div>
            </div>
            <div className="group flex flex-col gap-4 justify-center items-center pt-5 pb-10">
              <Image
                src="/google-color.svg"
                alt="Google Logo"
                width={100}
                height={100}
                className="rounded-lg"
              />
              <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300">
                <button onClick={loginWithGoogle} className="mt-4 bg-[#EA4335] hover:bg-[#DB4437] text-white font-bold py-2 px-4 m-5 rounded-md cursor-pointer">
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
