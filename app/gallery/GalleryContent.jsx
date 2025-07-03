"use client";

import { useEffect, useState } from "react";

export default function GalleryContent() {
  const [planetImages, setPlanetImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const planets = [
      { name: "Merkur", query: "mercury planet" },
      { name: "Venus", query: "venus planet" },
      { name: "Jorden", query: "earth planet" },
      { name: "Mars", query: "mars planet" },
      { name: "Jupiter", query: "jupiter planet" },
      { name: "Saturn", query: "saturn planet" },
      { name: "Uranus", query: "uranus planet" },
      { name: "Neptun", query: "neptune planet" },
    ];

    async function fetchPlanetImages() {
      setLoading(true);
      const results = await Promise.all(
        planets.map(async (planet) => {
          try {
            const res = await fetch(`https://images-api.nasa.gov/search?q=${encodeURIComponent(planet.query)}&media_type=image`);
            const data = await res.json();
            const item = data.collection.items.find(i => i.links && i.links[0].href);
            return {
              name: planet.name,
              url: item ? item.links[0].href : '',
              title: item ? (item.data[0].title || planet.name) : planet.name
            };
          } catch {
            return { name: planet.name, url: '', title: planet.name };
          }
        })
      );
      setPlanetImages(results);
      setLoading(false);
    }
    fetchPlanetImages();
  }, []);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Galleri: Planeter i solsystemet</h1>
      {loading ? (
        <div>Laster bilder...</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {planetImages.map((img, idx) => (
            <div key={idx} className="bg-white rounded shadow p-2 flex flex-col items-center">
              {img.url ? (
                <img src={img.url} alt={img.title} className="w-full h-32 object-contain mb-2" />
              ) : (
                <div className="w-full h-32 flex items-center justify-center bg-gray-100 text-gray-400 mb-2">Ingen bilde</div>
              )}
              <span className="text-xs text-gray-700 font-semibold">{img.name}</span>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
