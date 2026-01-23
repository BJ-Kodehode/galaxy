"use client";

interface MemeSoundItem {
  name: string;
  img: string;
  sound: string;
}

interface MemeSliderProps {
  show: boolean;
  meme: MemeSoundItem | null;
}

export default function MemeSlider({ show, meme }: MemeSliderProps) {
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
