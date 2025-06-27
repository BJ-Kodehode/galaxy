"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Venstre side */}
        <div className="flex items-center gap-3 text-sm">
          <Image src="/logo.png" alt="Børresen logo" width={24} height={24} />
          <span>
            &copy; {new Date().getFullYear()} Melkeveien. All rights reserved.
          </span>
        </div>

        {/* Høyre side */}
        <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0 text-sm">
          <span className="italic text-gray-400">Fixed by Børresen utvikling</span>
          <button className="hover:text-blue-400 transition">About Us</button>
          <button className="hover:text-blue-400 transition">Contact</button>
        </div>
      </div>
    </footer>
  );
}
