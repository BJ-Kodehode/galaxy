"use client";

import SearchAndFilter from '../components/SearchAndFilter';
import PlanetList from '../components/PlanetList';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PlanetsContent() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 drop-shadow">Utforsk planetene</h1>
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://solarsystem.nasa.gov/system/stellar_items/image_files/4_feature_1600x900_milkyway.jpg"
          alt="Planeter i solsystemet (NASA)"
          className="w-full max-w-2xl rounded shadow mb-4"
        />
        <span className="text-xs text-gray-500">Bilde: NASA/JPL-Caltech (Planeter i solsystemet)</span>
      </div>
      <div className="text-lg text-gray-800 max-w-3xl mx-auto bg-white/80 rounded-xl shadow-lg p-8 border border-indigo-200 space-y-4 mb-10">
        <p><b>Planeter</b> er store himmellegemer som går i bane rundt en stjerne. I vårt solsystem finnes åtte planeter, alle med unike egenskaper. Planeter kan være steinplaneter (terrestriske) eller gasskjemper, og mange har måner og ringer.</p>
        <p>Planeter dannes i skiver av gass og støv rundt unge stjerner. De kan ha atmosfærer, vær, og til og med forhold som gjør liv mulig – slik som på Jorden. Utforskningen av planetene gir oss innsikt i hvordan solsystemet og livet har utviklet seg.</p>
        <p className="italic text-base text-gray-600">Kilde: NASA, solarsystem.nasa.gov</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Merkur */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Merkur.jpg" alt="Merkur" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Merkur</h2>
          <p className="text-gray-700 mb-2">Nærmeste planet til Sola og den minste i solsystemet. Overflaten er dekket av kratre, og temperaturen varierer fra -180°C til 430°C.</p>
          <p className="text-gray-700 mb-2">Diameter: 4 880 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 57,9 millioner km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Tynn, hovedsakelig oksygen, natrium, hydrogen, helium og kalium</p>
          <p className="text-gray-700 mb-2">Måner: 0</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
        {/* Venus */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Venus.jpg" alt="Venus" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Venus</h2>
          <p className="text-gray-700 mb-2">Den nest nærmeste planeten til Sola og omtrent like stor som Jorden. Kjent for sin tette, giftige atmosfære og ekstreme overflatetemperaturer.</p>
          <p className="text-gray-700 mb-2">Diameter: 12 104 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 108,2 millioner km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Karbondioksid, nitrogen, svovelsyre</p>
          <p className="text-gray-700 mb-2">Måner: 0</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
        {/* Jorden */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Jorden.jpg" alt="Jorden" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Jorden</h2>
          <p className="text-gray-700 mb-2">Den eneste planeten vi vet har liv. Har en atmosfære som beskytter mot stråling og gir stabile temperaturer.</p>
          <p className="text-gray-700 mb-2">Diameter: 12 742 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 149,6 millioner km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Nitrogen, oksygen, argon, karbondioksid</p>
          <p className="text-gray-700 mb-2">Måner: 1</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
        {/* Mars */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Mars.jpg" alt="Mars" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Mars</h2>
          <p className="text-gray-700 mb-2">Kjent som den røde planeten. Har iskalde ørkener, tynn atmosfære og spor av tidligere vann.</p>
          <p className="text-gray-700 mb-2">Diameter: 6 779 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 227,9 millioner km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Karbondioksid, nitrogen, argon</p>
          <p className="text-gray-700 mb-2">Måner: 2 (Phobos, Deimos)</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
        {/* Jupiter */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Jupiter.jpg" alt="Jupiter" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Jupiter</h2>
          <p className="text-gray-700 mb-2">Den største planeten i solsystemet. Kjent for sine fargerike skyer og den store røde flekken, en gigantisk storm.</p>
          <p className="text-gray-700 mb-2">Diameter: 139 820 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 778,5 millioner km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Hydrogen, helium</p>
          <p className="text-gray-700 mb-2">Måner: 95</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
        {/* Saturn */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Saturn.jpg" alt="Saturn" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Saturn</h2>
          <p className="text-gray-700 mb-2">Berømt for sitt spektakulære ringsystem. Har mange måner, inkludert Titan med tykk atmosfære.</p>
          <p className="text-gray-700 mb-2">Diameter: 116 460 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 1,43 milliarder km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Hydrogen, helium</p>
          <p className="text-gray-700 mb-2">Måner: 146</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
        {/* Uranus */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Uranus.jpg" alt="Uranus" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Uranus</h2>
          <p className="text-gray-700 mb-2">En iskjempe med blågrønn farge på grunn av metan i atmosfæren. Roterer "liggende" på siden.</p>
          <p className="text-gray-700 mb-2">Diameter: 50 724 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 2,87 milliarder km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Hydrogen, helium, metan</p>
          <p className="text-gray-700 mb-2">Måner: 28</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
        {/* Neptun */}
        <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 flex flex-col items-center">
          <img src="/Neptun.jpg" alt="Neptun" className="w-32 h-32 object-contain mb-4 rounded" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">Neptun</h2>
          <p className="text-gray-700 mb-2">Den ytterste planeten i solsystemet. Kjent for sine sterke vinder og dype blåfarge.</p>
          <p className="text-gray-700 mb-2">Diameter: 49 244 km</p>
          <p className="text-gray-700 mb-2">Avstand fra Sola: 4,5 milliarder km</p>
          <p className="text-gray-700 mb-2">Atmosfære: Hydrogen, helium, metan</p>
          <p className="text-gray-700 mb-2">Måner: 16</p>
          <p className="text-gray-700">Kilde: NASA</p>
        </div>
      </div>
    </main>
  );
}
