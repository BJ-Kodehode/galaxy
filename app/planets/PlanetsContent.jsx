"use client";



import { useState } from 'react';

export default function PlanetsContent() {
  // Planetdata som array
  const planets = [
    {
      name: "Merkur",
      img: "/Merkur.jpg",
      facts: [
        "Nærmeste planet til Sola og den minste i solsystemet. Overflaten er dekket av kratre, og temperaturen varierer fra -180°C til 430°C.",
        "Diameter: 4 880 km",
        "Avstand fra Sola: 57,9 millioner km",
        "Atmosfære: Tynn, hovedsakelig oksygen, natrium, hydrogen, helium og kalium",
        "Måner: 0",
      ],
    },
    {
      name: "Venus",
      img: "/Venus.jpg",
      facts: [
        "Den nest nærmeste planeten til Sola og omtrent like stor som Jorden. Kjent for sin tette, giftige atmosfære og ekstreme overflatetemperaturer.",
        "Diameter: 12 104 km",
        "Avstand fra Sola: 108,2 millioner km",
        "Atmosfære: Karbondioksid, nitrogen, svovelsyre",
        "Måner: 0",
      ],
    },
    {
      name: "Jorden",
      img: "/Jorden.jpg",
      facts: [
        "Den eneste planeten vi vet har liv. Har en atmosfære som beskytter mot stråling og gir stabile temperaturer.",
        "Diameter: 12 742 km",
        "Avstand fra Sola: 149,6 millioner km",
        "Atmosfære: Nitrogen, oksygen, argon, karbondioksid",
        "Måner: 1",
      ],
    },
    {
      name: "Mars",
      img: "/Mars.jpg",
      facts: [
        "Kjent som den røde planeten. Har iskalde ørkener, tynn atmosfære og spor av tidligere vann.",
        "Diameter: 6 779 km",
        "Avstand fra Sola: 227,9 millioner km",
        "Atmosfære: Karbondioksid, nitrogen, argon",
        "Måner: 2 (Phobos, Deimos)",
      ],
    },
    {
      name: "Jupiter",
      img: "/Jupiter.jpg",
      facts: [
        "Den største planeten i solsystemet. Kjent for sine fargerike skyer og den store røde flekken, en gigantisk storm.",
        "Diameter: 139 820 km",
        "Avstand fra Sola: 778,5 millioner km",
        "Atmosfære: Hydrogen, helium",
        "Måner: 95",
      ],
    },
    {
      name: "Saturn",
      img: "/Saturn.jpg",
      facts: [
        "Berømt for sitt spektakulære ringsystem. Har mange måner, inkludert Titan med tykk atmosfære.",
        "Diameter: 116 460 km",
        "Avstand fra Sola: 1,43 milliarder km",
        "Atmosfære: Hydrogen, helium",
        "Måner: 146",
      ],
    },
    {
      name: "Uranus",
      img: "/Uranus.jpg",
      facts: [
        "En iskjempe med blågrønn farge på grunn av metan i atmosfæren. Roterer 'liggende' på siden.",
        "Diameter: 50 724 km",
        "Avstand fra Sola: 2,87 milliarder km",
        "Atmosfære: Hydrogen, helium, metan",
        "Måner: 28",
      ],
    },
    {
      name: "Neptun",
      img: "/Neptun.jpg",
      facts: [
        "Den ytterste planeten i solsystemet. Kjent for sine sterke vinder og dype blåfarge.",
        "Diameter: 49 244 km",
        "Avstand fra Sola: 4,5 milliarder km",
        "Atmosfære: Hydrogen, helium, metan",
        "Måner: 16",
      ],
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const openModal = (idx) => {
    setCurrentIdx(idx);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const prevPlanet = (e) => {
    e.stopPropagation();
    setCurrentIdx((idx) => (idx === 0 ? planets.length - 1 : idx - 1));
  };

  const nextPlanet = (e) => {
    e.stopPropagation();
    setCurrentIdx((idx) => (idx === planets.length - 1 ? 0 : idx + 1));
  };

  return (
    <main className="container mx-auto py-6 px-2 sm:py-8 sm:px-4">
      <h1 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-10 text-center text-indigo-700 drop-shadow">
        Utforsk planetene
      </h1>
      <div className="flex flex-col items-center mb-4 sm:mb-8">
        <span className="text-xs text-gray-500">
          Kilde: NASA, solarsystem.nasa.gov
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {planets.map((planet, idx) => (
          <div
            key={planet.name}
            className="bg-white/80 rounded-xl shadow-lg p-4 sm:p-6 flex flex-col items-center cursor-pointer hover:scale-105 transition"
            onClick={() => openModal(idx)}
            tabIndex={0}
            aria-label={`Åpne detaljer for ${planet.name}`}
          >
            <img
              src={planet.img}
              alt={planet.name}
              className="mb-2 sm:mb-4 rounded object-scale-down max-w-full max-h-40 sm:max-h-60"
              draggable={false}
            />
            <h2 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800 text-center">
              {planet.name}
            </h2>
            {planet.facts.map((fact, i) => (
              <p className="text-gray-700 mb-1 sm:mb-2 text-center" key={i}>
                {fact}
              </p>
            ))}
            <p className="text-gray-700 text-xs sm:text-sm text-center">Kilde: NASA</p>
          </div>
        ))}
      </div>

      {/* Modal for planetdetaljer */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-2"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-xs sm:max-w-md w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl sm:text-2xl text-gray-500 hover:text-gray-800"
              onClick={closeModal}
              aria-label="Lukk"
            >
              &times;
            </button>
            <img
              src={planets[currentIdx].img}
              alt={planets[currentIdx].name}
              className="mb-2 sm:mb-4 rounded object-scale-down max-w-full max-h-40 sm:max-h-60"
              draggable={false}
            />
            <h2 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2 text-gray-800 text-center">
              {planets[currentIdx].name}
            </h2>
            {planets[currentIdx].facts.map((fact, i) => (
              <p className="text-gray-700 mb-1 sm:mb-2 text-center" key={i}>
                {fact}
              </p>
            ))}
            <div className="flex gap-4 sm:gap-6 mt-2 sm:mt-4">
              <button
                className="px-2 sm:px-4 py-1 sm:py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-xs sm:text-base"
                onClick={prevPlanet}
                aria-label="Forrige planet"
              >
                &#8592; Forrige
              </button>
              <button
                className="px-2 sm:px-4 py-1 sm:py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-xs sm:text-base"
                onClick={nextPlanet}
                aria-label="Neste planet"
              >
                Neste &#8594;
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
