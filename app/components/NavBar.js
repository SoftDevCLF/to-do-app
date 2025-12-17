"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/contexts/AuthContext";

export default function NavigationBar({
  displayLogin = true,
  displayAbout = true,
  displayLogout = false,
}) {
  const router = useRouter();
  const { logout } = useAuth();

  const loginPageNav = () => {
    router.push("/tasks-list/login");
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/");
  };

  return (
    <header className="w-full bg-[#000024] border-b border-[#011D33]">
      <nav className="flex items-center justify-between py-2 px-22">
        <Link href="/" className="text-2xl font-bold text-white">
          <Image
            src="/logow.png"
            alt="Logo"
            width={80}
            height={80}
            className="py-2"
          />
        </Link>
        <ul className="flex space-x-8 text-white">
          {displayLogin && (
            <li>
              <button
                className="px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 font-bold transition"
                onClick={loginPageNav}
              >
                Login
              </button>
            </li>
          )}
          {displayLogout && (
            <li>
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition font-bold"
              >
                Logout
              </button>
            </li>
          )}
          {displayAbout && (
            <li className="py-2">
              <Link href="/about" className="hover:opacity-80 transition">
                About
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
