"use client";

import { useEffect, useState } from "react";

export default function GalleryContent() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/gallery-images");
        if (!res.ok) throw new Error("Kunne ikke hente bilder");
        const data = await res.json();
        setGalleryImages(data.images || []);
      } catch (e) {
        setError(e.message);
      }
      setLoading(false);
    }
    fetchImages();
  }, []);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Galleri: Bilder fra universet</h1>
      {loading ? (
        <div>Laster bilder...</div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="bg-white rounded shadow p-2 flex flex-col items-center">
              <img src={`/Gallery/${img}`} alt={img} className="w-full h-40 object-contain mb-2" />
              <span className="text-xs text-gray-700 font-semibold break-all">{img}</span>
            </div>
          ))}
        </div>
      )}
      <div className="text-xs text-gray-500 mt-4">Legg til flere bilder i <b>/public/Gallery</b> for å utvide galleriet. Siden oppdateres automatisk.</div>
    </main>
  );
}
