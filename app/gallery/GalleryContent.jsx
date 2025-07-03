"use client";

import { useEffect, useState } from "react";

export default function GalleryContent() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAPOD() {
      setLoading(true);
      try {
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=8`);
        const data = await res.json();
        // data is an array if count is used, or an object if not
        const images = Array.isArray(data)
          ? data.filter(item => item.media_type === "image").map(item => ({ url: item.url, title: item.title }))
          : data.media_type === "image" ? [{ url: data.url, title: data.title }] : [];
        setImages(images);
      } catch (e) {
        setImages([]);
      }
      setLoading(false);
    }
    fetchAPOD();
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
