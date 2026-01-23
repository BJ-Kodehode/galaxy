"use client";
import { useRef, useEffect } from "react";

interface BackgroundMusicProps {
  play?: boolean;
  onSoundChange?: (sound: string) => void;
  onSoundEnd?: () => void;
}

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

export default function BackgroundMusic({ play = false, onSoundChange, onSoundEnd }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!play) {
      if (audioRef.current) {
        audioRef.current.pause();
        try {
          audioRef.current.removeAttribute('src');
          audioRef.current.load();
        } catch (e) {
          // ignore any errors when clearing the source
        }
      }
      return;
    }

    function playMemeSound(e: PointerEvent | KeyboardEvent) {
      if (!play) return;
      // Kun venstre museknapp
      if (e instanceof PointerEvent && e.button !== 0) return;
      const src = sounds[Math.floor(Math.random() * sounds.length)];
      if (audioRef.current) {
        audioRef.current.src = src;
        audioRef.current.currentTime = 0;
        const p = audioRef.current.play();
        if (p && typeof (p as Promise<void>).catch === 'function') {
          (p as Promise<void>).catch(() => {
            // ignore play() rejections (autoplay blocked or user gesture issues)
          });
        }
        if (typeof onSoundChange === 'function') onSoundChange(src);
        audioRef.current.onended = () => {
          if (typeof onSoundEnd === 'function') onSoundEnd();
        };
      }
    }

    window.addEventListener('pointerdown', playMemeSound as EventListener);
    window.addEventListener('keydown', playMemeSound as EventListener);
    return () => {
      window.removeEventListener('pointerdown', playMemeSound as EventListener);
      window.removeEventListener('keydown', playMemeSound as EventListener);
      if (audioRef.current) {
        audioRef.current.pause();
        try {
          audioRef.current.removeAttribute('src');
          audioRef.current.load();
        } catch (e) {
          // ignore
        }
      }
    };
  }, [play, onSoundChange, onSoundEnd]);

  return <audio ref={audioRef} />;
}
