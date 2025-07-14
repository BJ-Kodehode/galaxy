"use client";
import { useRef, useEffect } from "react";

const sounds = [
  "/sound/LOTR.mp3",
  "/sound/Ringing.mp3",
  "/sound/among.mp3",
  "/sound/fart.mp3",
  "/sound/fugl.mp3",
  "/sound/get-out-meme.mp3",
  "/sound/mario.mp3",
  "/sound/pew.mp3",
  "/sound/quack_5.mp3",
];

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    function playRandomSound() {
      if (audioRef.current) {
        // Velg tilfeldig lyd
        const src = sounds[Math.floor(Math.random() * sounds.length)];
        audioRef.current.src = src;
        audioRef.current.currentTime = 0;
        audioRef.current.play();
      }
    }
    window.addEventListener("pointerdown", playRandomSound);
    window.addEventListener("keydown", playRandomSound);
    return () => {
      window.removeEventListener("pointerdown", playRandomSound);
      window.removeEventListener("keydown", playRandomSound);
    };
  }, []);

  return <audio ref={audioRef} style={{ display: "none" }} />;
}
