"use client";



import StarList from '../components/StarList';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function StarsContent() {
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

  useEffect(() => {
    fetchFunFact();
  }, []);

  function getRandomDate() {
    const start = new Date(1995, 5, 16);
    const end = new Date();
    const random = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return random.toISOString().slice(0, 10);
  }

  return (
    <main className="container mx-auto py-6 px-2 sm:py-8 sm:px-4">
      <h1 className="text-2xl sm:text-4xl font-extrabold mb-6 sm:mb-10 text-center text-yellow-700 drop-shadow">Stjerner</h1>
      <div className="flex flex-col items-center mb-4 sm:mb-8">
        <img
          src="https://images-assets.nasa.gov/image/PIA03654/PIA03654~orig.jpg"
          alt="Stjerner i Melkeveien (NASA)"
          className="w-full max-w-xs sm:max-w-2xl rounded shadow mb-2 sm:mb-4"
        />
        <span className="text-xs text-gray-500">Bilde: NASA/JPL-Caltech (Stjerner i Melkeveien)</span>
      </div>
      <div className="text-base sm:text-lg text-gray-800 max-w-full sm:max-w-3xl mx-auto bg-white/80 rounded-xl shadow-lg p-4 sm:p-8 border border-yellow-200 space-y-2 sm:space-y-4">
        <p><b>Stjerner</b> er enorme, glødende kuler av gass, hovedsakelig hydrogen og helium, som produserer energi gjennom kjernefysisk fusjon. Sola er vår nærmeste stjerne, men Melkeveien inneholder hundrevis av milliarder stjerner av ulike typer og størrelser.</p>
        <p>Stjerner dannes i tette skyer av gass og støv kalt stjernetåker. Når en stjerne har brukt opp drivstoffet sitt, kan den ende som en hvit dverg, nøytronstjerne eller sort hull, avhengig av massen.</p>
        <p>Noen kjente stjerner i Melkeveien er Sirius, Betelgeuse, Vega og vår egen Sol. Mange stjerner har planetsystemer, og tusenvis av eksoplaneter er oppdaget rundt andre stjerner.</p>
        <p>Stjerner kan danne spektakulære stjernehoper og fargerike tåker, og noen avslutter livet sitt i dramatiske supernovaeksplosjoner.</p>
        <p className="italic text-base text-gray-600">Kilde: NASA, Store norske leksikon</p>
      </div>



      {/* NASA Fun Fact */}
      <div className="mt-12 mb-4 flex flex-col items-center min-h-[800px]">
        <h2 className="text-lg sm:text-xl font-bold text-yellow-700 mb-2">NASA Fun Fact</h2>
        {loadingFact ? (
          <p className="text-gray-600">Laster ...</p>
        ) : factError ? (
          <p className="text-red-600">{factError}</p>
        ) : funFact ? (
          <div className="max-w-xl text-center">
            <p className="text-gray-800 mb-2 font-semibold text-xl sm:text-2xl">{funFact.title}</p>
            <p className="text-gray-700 text-base sm:text-lg mb-2">{funFact.explanation}</p>
            <span className="text-sm text-gray-500">Kilde: NASA APOD</span>
          </div>
        ) : null}
        <button
          className="mt-3 px-4 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition text-sm"
          onClick={() => fetchFunFact(getRandomDate())}
          disabled={loadingFact}
        >
          {loadingFact ? 'Laster...' : 'Vis en ny fun fact fra NASA'}
        </button>
      </div>
    </main>
  );
}
