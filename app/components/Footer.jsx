"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const now = new Date().getFullYear();
    if (now !== currentYear) setCurrentYear(now);
  }, [currentYear]);
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-2 sm:px-6 gap-2 sm:gap-0 text-xs sm:text-base">
        <div className="text-sm">&copy; {currentYear} Melkeveien. All rights reserved.</div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <Link href="/aboutus" className="hover:text-blue-400 transition">About Us</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
