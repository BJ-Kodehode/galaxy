"use client";


import Link from 'next/link';
import { useState } from 'react';
import MemeSlider from './MemeSlider';
import BackgroundMusic from './BackgroundMusic';
const memeSounds = [
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
  const [open, setOpen] = useState(false);
  const [memeOpen, setMemeOpen] = useState(false);
  const [activeMeme, setActiveMeme] = useState(null);
  // Fjern audio-state, styres av BackgroundMusic

  function handleToggleMeme() {
    if (!memeOpen) {
      setMemeOpen(true);
    } else {
      setMemeOpen(false);
      setActiveMeme(null);
    }
  }

  // Når BackgroundMusic spiller lyd, oppdater aktiv meme
  function handleSoundChange(src) {
    const found = memeSounds.find(m => m.sound === src);
    setActiveMeme(found || null);
  }
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50 w-full">
      <div>
        <nav className="container mx-auto flex flex-col sm:flex-row items-center justify-between py-2 sm:py-4 px-2 sm:px-6 gap-2 sm:gap-0 relative">
          <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start">
            <Link href="/" className="font-bold text-lg sm:text-xl hover:text-blue-400 transition mr-4 sm:mr-8">Home</Link>
            {/* Meme slider switch */}
            <button
              className={`ml-2 flex items-center gap-2 px-3 py-1 rounded-full border-2 ${memeOpen ? 'bg-yellow-400 border-yellow-600' : 'bg-gray-700 border-gray-500'} transition`}
              onClick={handleToggleMeme}
              aria-label="Meme lyd av/på"
            >
              <span className={`w-5 h-5 rounded-full ${memeOpen ? 'bg-yellow-600' : 'bg-gray-400'} transition`}></span>
              <span className={`font-bold text-xs ${memeOpen ? 'text-gray-900' : 'text-white'}`}>Meme</span>
            </button>
          </div>
          {/* Hamburger for mobile, bytt til kryss når åpen */}
          {!open ? (
            <button
              className="sm:hidden absolute right-4 top-2 p-2 focus:outline-none"
              aria-label="Åpne meny"
              onClick={() => setOpen(true)}
            >
              <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
              <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
              <span className="block w-6 h-0.5 bg-white rounded"></span>
            </button>
          ) : (
            <button
              className="sm:hidden absolute right-4 top-2 p-2 flex items-center justify-center focus:outline-none"
              aria-label="Lukk meny"
              onClick={() => setOpen(false)}
              style={{ width: 40, height: 40, position: 'absolute', right: 16, top: 8 }}
            >
              <span
                className="absolute block w-6 h-0.5 bg-white rounded"
                style={{ left: '50%', top: '50%', width: '24px', height: '3px', transform: 'translate(-50%, -50%) rotate(45deg)' }}
              ></span>
              <span
                className="absolute block w-6 h-0.5 bg-white rounded"
                style={{ left: '50%', top: '50%', width: '24px', height: '3px', transform: 'translate(-50%, -50%) rotate(-45deg)' }}
              ></span>
            </button>
          )}
          {/* Desktop meny */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-end flex-wrap">
            <Link href="/gallery" className="hover:text-blue-400 transition text-base sm:text-lg">Galleri</Link>
            <Link href="/info" className="hover:text-blue-400 transition text-base sm:text-lg">Info</Link>
            <Link href="/planets" className="hover:text-blue-400 transition text-base sm:text-lg">Utforsk planeter</Link>
            <Link href="/stars" className="hover:text-blue-400 transition text-base sm:text-lg">Utforsk stjerner</Link>
            <Link href="/quiz" className="hover:text-yellow-400 transition text-base sm:text-lg font-bold">Quiz</Link>
          </div>
          {/* Mobil meny */}
          {open && (
            <div className="flex flex-col gap-2 absolute top-12 right-2 bg-gray-900 border border-gray-700 rounded shadow-lg p-4 z-50 w-48 animate-fade-in sm:hidden">
              <Link href="/gallery" className="hover:text-blue-400 transition text-base" onClick={() => setOpen(false)}>Galleri</Link>
              <Link href="/info" className="hover:text-blue-400 transition text-base" onClick={() => setOpen(false)}>Info</Link>
              <Link href="/planets" className="hover:text-blue-400 transition text-base" onClick={() => setOpen(false)}>Utforsk planeter</Link>
              <Link href="/stars" className="hover:text-blue-400 transition text-base" onClick={() => setOpen(false)}>Utforsk stjerner</Link>
              <Link href="/quiz" className="hover:text-yellow-400 transition text-base font-bold" onClick={() => setOpen(false)}>Quiz</Link>
            </div>
          )}
        </nav>
        <BackgroundMusic play={memeOpen} onSoundChange={handleSoundChange} onSoundEnd={() => setActiveMeme(null)} />
        <MemeSlider show={memeOpen} meme={activeMeme} />
      </div>
    </header>
  );
}
