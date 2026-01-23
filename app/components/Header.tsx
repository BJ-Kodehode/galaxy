"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import MemeSlider from './MemeSlider';

interface MemeSoundItem {
  name: string;
  img: string;
  sound: string;
}

const memeSounds: MemeSoundItem[] = [
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
  const [activeMeme, setActiveMeme] = useState<MemeSoundItem | null>(null);
  const [memeUnlocked, setMemeUnlocked] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Konami-kode: ↑ ↑ ↓ ↓ ← → ← → B A
  const konami: string[] = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'
  ];
  const [input, setInput] = useState<string[]>([]);

  // Lytt etter Konami-kode
  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      setInput(prev => {
        const next = [...prev, e.key].slice(-konami.length);
        if (next.join(',') === konami.join(',')) {
          setMemeUnlocked(true);
        }
        return next;
      });
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function handleToggleMeme() {
    if (!memeOpen) {
      setMemeOpen(true);
    } else {
      setMemeOpen(false);
      setActiveMeme(null);
    }
  }

  function handleMemeSelect(meme: MemeSoundItem) {
    setActiveMeme(meme);
    // Play the sound
    if (audioRef.current) {
      audioRef.current.src = meme.sound;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  return (
    <header className="relative z-40 bg-gray-900 border-b border-gray-700 text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
          🚀 Melkeveien
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className={`${open ? 'block' : 'hidden'} md:flex gap-6 absolute md:static top-full left-0 right-0 md:top-auto bg-gray-900 md:bg-transparent p-4 md:p-0 border-b md:border-0 border-gray-700`}>
          <Link href="/planets" className="block md:inline hover:text-blue-400 transition">Planeter</Link>
          <Link href="/stars" className="block md:inline hover:text-blue-400 transition">Stjerner</Link>
          <Link href="/info" className="block md:inline hover:text-blue-400 transition">Info</Link>
          <Link href="/gallery" className="block md:inline hover:text-blue-400 transition">Galleri</Link>
          <Link href="/quiz" className="block md:inline hover:text-blue-400 transition">Quiz</Link>
          <Link href="/aboutus" className="block md:inline hover:text-blue-400 transition">Om Oss</Link>
          <Link href="/contact" className="block md:inline hover:text-blue-400 transition">Kontakt</Link>
        </nav>

        {memeUnlocked && (
          <button
            onClick={handleToggleMeme}
            className="hidden md:block text-xl"
            title="Secret meme menu unlocked!"
          >
            👽
          </button>
        )}
      </div>

      <MemeSlider show={memeOpen && !!activeMeme} meme={activeMeme} />
      <audio ref={audioRef} />

      {memeOpen && memeUnlocked && (
        <div className="bg-gray-800 border-t border-gray-700 p-4 flex flex-wrap gap-2">
          {memeSounds.map(meme => (
            <button
              key={meme.name}
              onClick={() => handleMemeSelect(meme)}
              className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-sm transition"
            >
              {meme.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
