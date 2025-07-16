"use client";
// ...existing code...

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

import { useEffect, useState } from "react";

export default function MemeSlider({ show, meme }) {
  if (!show || !meme) return null;
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[9999] pointer-events-none">
      <div className="flex flex-col items-center">
        <img src={meme.img} alt={meme.name} className="w-32 h-32 object-cover rounded shadow mb-2" />
        <span className="text-lg font-bold text-blue-700 bg-white px-2 rounded shadow">{meme.name}</span>
      </div>
    </div>
  );
}
