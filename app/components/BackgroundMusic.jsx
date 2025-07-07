"use client";
import { useRef, useEffect, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    function start() {
      if (!started && audioRef.current) {
        audioRef.current.play();
        setStarted(true);
      }
    }
    window.addEventListener("pointerdown", start, { once: true });
    window.addEventListener("keydown", start, { once: true });
    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
  }, [started]);

  return (
    <audio
      ref={audioRef}
      src="/remix.mp3"
      loop
      style={{ display: "none" }}
    />
  );
}
