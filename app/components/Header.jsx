"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50 w-full">
      <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4 px-2 sm:px-6 gap-2 sm:gap-0">
        <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
          <Link href="/" className="font-bold text-lg sm:text-xl hover:text-blue-400 transition mr-4 sm:mr-8">Home</Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end flex-wrap">
          <Link href="/gallery" className="hover:text-blue-400 transition text-base sm:text-lg">Galleri</Link>
          <Link href="/info" className="hover:text-blue-400 transition text-base sm:text-lg">Info</Link>
          <Link href="/planets" className="hover:text-blue-400 transition text-base sm:text-lg">Utforsk planeter</Link>
          <Link href="/stars" className="hover:text-blue-400 transition text-base sm:text-lg">Utforsk stjerner</Link>
        </div>
      </nav>
    </header>
  );
}
