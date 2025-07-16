"use client";

import React, { useState } from 'react';
import PlanetCard from '../components/PlanetCard';

export default function PlanetsContent() {
  // Planetdata som array
  const planets = [
    {
      name: "Merkur",
      img: "/Planeter/Merkur.jpg",
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
      img: "/Planeter/Venus.jpg",
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
      img: "/Planeter/Jorden.jpg",
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
      img: "/Planeter/Mars.jpg",
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
      img: "/Planeter/Jupiter.jpg",
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
      img: "/Planeter/Saturn.jpg",
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
      img: "/Planeter/Uranus.jpg",
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
      img: "/Planeter/Neptun.jpg",
      facts: [
        "Den ytterste planeten i solsystemet. Kjent for sine sterke vinder og dype blåfarge.",
        "Diameter: 49 244 km",
        "Avstand fra Sola: 4,5 milliarder km",
        "Atmosfære: Hydrogen, helium, metan",
        "Måner: 16",
      ],
    },
  ];

  // Dvergplaneter
  const dwarfPlanets = [
    {
      name: "Pluto",
      img: "/Planeter/Pluto.jpg",
      facts: [
        "Pluto var tidligere regnet som den niende planeten, men er nå klassifisert som en dvergplanet.",
        "Diameter: 2 377 km",
        "Avstand fra Sola: 5,9 milliarder km",
        "Atmosfære: Nitrogen, metan, karbonmonoksid",
        "Måner: 5 (bl.a. Charon)",
      ],
    },
    {
      name: "Eris",
      img: "/Planeter/Eris.jpg",
      facts: [
        "Eris er den mest massive kjente dvergplaneten i solsystemet og er litt mindre enn Pluto.",
        "Diameter: 2 326 km",
        "Avstand fra Sola: ca. 10,1 milliarder km",
        "Atmosfære: Ingen kjent",
        "Måner: 1 (Dysnomia)",
      ],
    },
    {
      name: "Haumea",
      img: "/Planeter/Haumea.jpg",
      facts: [
        "Haumea har en avlang form og roterer svært raskt.",
        "Diameter: ca. 1 632 × 996 km",
        "Avstand fra Sola: ca. 6,5 milliarder km",
        "Atmosfære: Ingen kjent",
        "Måner: 2",
      ],
    },
    {
      name: "Makemake",
      img: "/Planeter/Makemake.jpg",
      facts: [
        "Makemake er en lys og isrik dvergplanet i Kuiperbeltet.",
        "Diameter: ca. 1 430 km",
        "Avstand fra Sola: ca. 6,8 milliarder km",
        "Atmosfære: Ingen kjent",
        "Måner: 1",
      ],
    },
    {
      name: "Ceres",
      img: "/Planeter/Ceres.jpg",
      facts: [
        "Ceres er den største asteroiden i asteroidebeltet og den eneste dvergplaneten i den indre delen av solsystemet.",
        "Diameter: 940 km",
        "Avstand fra Sola: 413 millioner km",
        "Atmosfære: Tynn, vanndamp",
        "Måner: 0",
      ],
    },
  ];

  // NASA APOD Fun Fact
  const [funFact, setFunFact] = useState(null);
  const [loadingFact, setLoadingFact] = useState(false);
  const [factError, setFactError] = useState(null);

  async function fetchFunFact(date) {
    setLoadingFact(true);
    setFactError(null);
    let url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`;
    if (date) url += `&date=${date}`;
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('API-feil');
      const data = await res.json();
      setFunFact(data);
    } catch (e) {
      setFactError('Kunne ikke hente fun fact fra NASA.');
    } finally {
      setLoadingFact(false);
    }
  }

  React.useEffect(() => {
    fetchFunFact();
  }, []);

  function getRandomDate() {
    const start = new Date(1995, 5, 16);
    const end = new Date();
    const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return random.toISOString().slice(0, 10);
  }

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
          <PlanetCard
            key={planet.name}
            name={planet.name}
            img={planet.img}
            facts={planet.facts}
            onClick={() => openModal(idx)}
            tabIndex={0}
            ariaLabel={`Åpne detaljer for ${planet.name}`}
          />
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
            <PlanetCard
              name={planets[currentIdx].name}
              img={planets[currentIdx].img}
              facts={planets[currentIdx].facts}
              source="Kilde: NASA"
            />
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

      {/* Dvergplaneter */}
      <h2 className="text-xl sm:text-2xl font-bold mt-12 mb-4 text-center text-indigo-700 drop-shadow">Dvergplaneter i solsystemet</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
        {dwarfPlanets.map((planet) => (
          <PlanetCard
            key={planet.name}
            name={planet.name}
            img={planet.img}
            facts={planet.facts}
            source="Kilde: NASA, Wikipedia"
            tabIndex={0}
            ariaLabel={`Detaljer for dvergplaneten ${planet.name}`}
          />
        ))}
      </div>

      {/* NASA Fun Fact */}
      <div className="mt-12 mb-4 flex flex-col items-center">
        <h2 className="text-lg sm:text-xl font-bold text-indigo-700 mb-2">NASA Fun Fact</h2>
        {loadingFact ? (
          <p className="text-gray-600">Laster ...</p>
        ) : factError ? (
          <p className="text-red-600">{factError}</p>
        ) : funFact ? (
          <div className="max-w-xl text-center">
            <p className="text-gray-800 mb-2 font-semibold">{funFact.title}</p>
            <p className="text-red-600 text-sm mb-2">{funFact.explanation}</p>
            <span className="text-xs text-gray-500">Kilde: NASA APOD</span>
          </div>
        ) : null}
        <button
          className="mt-3 px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition text-sm"
          onClick={() => fetchFunFact(getRandomDate())}
          disabled={loadingFact}
        >
          {loadingFact ? 'Laster...' : 'Ny fun fact'}
        </button>
      </div>
    </main>
  );
}
