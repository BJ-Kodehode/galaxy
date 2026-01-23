"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import MemeSlider from "./MemeSlider";
import BackgroundMusic from "./BackgroundMusic";

/* ===== Types ===== */
type MemeSound = {
  name: string;
  img: string;
  sound: string;
};

const memeSounds: MemeSound[] = [
  { name: "LOTR", img: "/Meme/LOTR.jpg", sound: "/sound/LOTR.mp3" },
  { name: "Ringing", img: "/Meme/Ringing.jpeg", sound: "/sound/Ringing.mp3" },
  { name: "among", img: "/Meme/among.jpg", sound: "/sound/among.mp3" },
  { name: "fart", img: "/Meme/fart.jpg", sound: "/sound/fart.mp3" },
  { name: "fugl", img: "/Meme/fugl.jpg", sound: "/sound/fugl.mp3" },
  { name: "get-out-meme", img: "/Meme/get-out-meme.jpg", sound: "/sound/get-out-meme.mp3" },
  { name: "mario", img: "/Meme/mario.jpg", sound: "/sound/mario.mp3" },
  { name: "pew", img: "/Meme/pew.jpeg", sound: "/sound/pew.mp3" },
  { name: "quack_5", img: "/Meme/quack_5.jpeg", sound: "/sound/quack_5.mp3" },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [memeOpen, setMemeOpen] = useState<boolean>(false);
  const [activeMeme, setActiveMeme] = useState<MemeSound | null>(null);
  const [memeUnlocked, setMemeUnlocked] = useState<boolean>(false);

  // Konami-kode
  const konami: string[] = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  const [input, setInput] = useState<string[]>([]);

  /* ===== Konami listener ===== */
  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      setInput((prev) => {
        const next = [...prev, e.key].slice(-konami.length);
        if (next.join(",") === konami.join(",")) {
          setMemeUnlocked(true);
        }
        return next;
      });
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [konami]);

  const handleToggleMeme = (): void => {
    if (!memeOpen) {
      setMemeOpen(true);
    } else {
      setMemeOpen(false);
      setActiveMeme(null);
    }
  };

  // Når BackgroundMusic spiller lyd, oppdater aktiv meme
  const handleSoundChange = (src: string): void => {
    const found = memeSounds.find((m) => m.sound === src) ?? null;
    setActiveMeme(found);
  };

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50 w-full">
      <div>
        <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4 px-2 sm:px-6 gap-2 sm:gap-0 relative">
          <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
            <Link
              href="/"
              className="font-bold text-lg sm:text-xl hover:text-blue-400 transition mr-4 sm:mr-8"
            >
              Home
            </Link>

            <button
              className={`ml-2 flex items-center gap-2 px-3 py-1 rounded-full border-2 ${
                memeOpen
                  ? "bg-yellow-400 border-yellow-600"
                  : "bg-gray-700 border-gray-500"
              } transition ${
                !memeUnlocked ? "opacity-60 cursor-not-allowed" : ""
              }`}
              onClick={memeUnlocked ? handleToggleMeme : undefined}
              aria-label="Meme lyd av/på"
              disabled={!memeUnlocked}
              title={
                !memeUnlocked
                  ? "Lås opp med Konami-koden!"
                  : "Meme lyd av/på"
              }
            >
              <span
                className={`w-5 h-5 rounded-full ${
                  memeOpen ? "bg-yellow-600" : "bg-gray-400"
                } transition flex items-center justify-center`}
              >
                {!memeUnlocked && (
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7"
                      stroke="#555"
                      strokeWidth="2"
                    />
                    <path
                      d="M8 10v2"
                      stroke="#555"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="8" cy="8" r="2" fill="#555" />
                  </svg>
                )}
              </span>
              <span
                className={`font-bold text-xs ${
                  memeOpen ? "text-gray-900" : "text-white"
                }`}
              >
                Meme
              </span>
            </button>
          </div>

          {/* Desktop & mobile menus beholdt uendret */}

        </nav>

        <BackgroundMusic
          play={memeOpen}
          onSoundChange={handleSoundChange}
          onSoundEnd={() => setActiveMeme(null)}
        />

        <MemeSlider show={memeOpen} meme={activeMeme} />
      </div>
    </header>
  );
}
