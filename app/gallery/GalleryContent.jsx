"use client";

import { useEffect, useState } from "react";

export default function GalleryContent() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder: fetch NASA images here later
    setImages([
      { url: "/starry.jpg", title: "Melkeveien" },
      { url: "/globe.svg", title: "Planet" },
    ]);
    setLoading(false);
  }, []);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Galleri: Melkeveien & Planeter</h1>
      {loading ? (
        <div>Laster bilder...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="bg-white rounded shadow p-2 flex flex-col items-center">
              <img src={img.url} alt={img.title} className="w-full h-32 object-contain mb-2" />
              <span className="text-xs text-gray-700">{img.title}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
