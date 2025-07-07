"use client";
import React, { useRef, useState, useEffect } from "react";
import ReactPlayer from "react-player";

export default function BackgroundMusic() {
  const [play, setPlay] = useState(false);
  const hasStarted = useRef(false);

  useEffect(() => {
    function startMusic() {
      if (!hasStarted.current) {
        setPlay(true);
        hasStarted.current = true;
      }
    }
    window.addEventListener("pointerdown", startMusic, { once: true });
    window.addEventListener("keydown", startMusic, { once: true });
    return () => {
      window.removeEventListener("pointerdown", startMusic);
      window.removeEventListener("keydown", startMusic);
    };
  }, []);

  return (
    <div style={{ width: 0, height: 0, overflow: "hidden", position: "fixed", zIndex: -1 }}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LLFhKaqnWwk"
        playing={play}
        loop
        controls={false}
        volume={0.5}
        width={0}
        height={0}
        config={{ youtube: { playerVars: { modestbranding: 1 } } }}
      />
    </div>
  );
}
