"use client";

import { useEffect, useState } from "react";

export default function GalleryContent() {
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

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

  const openModal = (idx) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % galleryImages.length);
  };

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
            <button
              key={idx}
              className="flex flex-col items-center focus:outline-none"
              onClick={() => openModal(idx)}
              style={{ background: "none", border: "none", padding: 0 }}
            >
              <img
                src={`/Gallery/${img}`}
                alt="Galleri-bilde"
                className="mb-2 object-scale-down max-w-full max-h-[400px] rounded-lg shadow-lg border-2 border-red-500/80 hover:border-red-400 focus:ring-2 focus:ring-red-400 transition"
                style={{ boxShadow: "0 0 12px 2px #ff6f00aa" }}
              />
            </button>
          ))}
        </div>
      )}
      {/* Modal for bildevisning */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={closeModal}
        >
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2 py-1 bg-black/40 rounded hover:bg-black/70"
            onClick={prevImg}
            aria-label="Forrige bilde"
          >&#8592;</button>
          <img
            src={`/Gallery/${galleryImages[currentIdx]}`}
            alt="Galleri-bilde stort"
            className="max-h-[80vh] max-w-[90vw] rounded-lg border-2 border-red-500 shadow-2xl"
            style={{ boxShadow: "0 0 32px 8px #ff6f00cc" }}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl px-2 py-1 bg-black/40 rounded hover:bg-black/70"
            onClick={nextImg}
            aria-label="Neste bilde"
          >&#8594;</button>
          <button
            className="absolute top-4 right-4 text-white text-3xl bg-black/40 rounded px-3 py-1 hover:bg-black/70"
            onClick={closeModal}
            aria-label="Lukk"
          >&#10005;</button>
        </div>
      )}
    </main>
  );
}
