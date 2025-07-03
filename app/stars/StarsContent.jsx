"use client";

import SearchAndFilter from '../components/SearchAndFilter';
import StarList from '../components/StarList';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function StarsContent() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-yellow-700 drop-shadow">Stjerner</h1>
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://images-assets.nasa.gov/image/PIA03654/PIA03654~orig.jpg"
          alt="Stjerner i Melkeveien (NASA)"
          className="w-full max-w-2xl rounded shadow mb-4"
        />
        <span className="text-xs text-gray-500">Bilde: NASA/JPL-Caltech (Stjerner i Melkeveien)</span>
      </div>
      <div className="text-lg text-gray-800 max-w-3xl mx-auto bg-white/80 rounded-xl shadow-lg p-8 border border-yellow-200 space-y-4">
        <p><b>Stjerner</b> er enorme, glødende kuler av gass, hovedsakelig hydrogen og helium, som produserer energi gjennom kjernefysisk fusjon. Sola er vår nærmeste stjerne, men Melkeveien inneholder hundrevis av milliarder stjerner av ulike typer og størrelser.</p>
        <p>Stjerner dannes i tette skyer av gass og støv kalt stjernetåker. Når en stjerne har brukt opp drivstoffet sitt, kan den ende som en hvit dverg, nøytronstjerne eller sort hull, avhengig av massen.</p>
        <p>Noen kjente stjerner i Melkeveien er Sirius, Betelgeuse, Vega og vår egen Sol. Mange stjerner har planetsystemer, og tusenvis av eksoplaneter er oppdaget rundt andre stjerner.</p>
        <p>Stjerner kan danne spektakulære stjernehoper og fargerike tåker, og noen avslutter livet sitt i dramatiske supernovaeksplosjoner.</p>
        <p className="italic text-base text-gray-600">Kilde: NASA, Store norske leksikon</p>
      </div>
    </main>
  );
}
