"use client";
import { useEffect, useState } from "react";

interface ApodData {
  title: string;
  url: string;
  explanation: string;
  media_type: string;
}

export default function Home() {
  const [apod, setApod] = useState<ApodData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchApod() {
      setLoading(true);
      setError(null);
      const today = new Date().toISOString().slice(0, 10);
      const cached = localStorage.getItem('apod-data');
      const cachedDate = localStorage.getItem('apod-date');
      if (cached && cachedDate === today) {
        setApod(JSON.parse(cached));
        setLoading(false);
        return;
      }
      try {
        const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        if (!res.ok) throw new Error("API-feil");
        const data: ApodData = await res.json();
        setApod(data);
        localStorage.setItem('apod-data', JSON.stringify(data));
        localStorage.setItem('apod-date', today);
      } catch (e) {
        setError("Kunne ikke hente dagens bilde fra NASA.");
      } finally {
        setLoading(false);
      }
    }
    fetchApod();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-16 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Velkommen til Melkeveien Explorer
        </h1>
        <p className="text-base sm:text-lg max-w-full sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-center px-2">
          Utforsk universets mysterier! Her finner du fakta, bilder og quiz om planeter, stjerner og galakser – med dagens bilde fra NASA.
        </p>
        <div className="w-full flex flex-col items-center mb-4 sm:mb-6 px-1">
          {loading ? (
            <p className="text-gray-600">Laster dagens bilde fra NASA ...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : apod ? (
            <div className="flex flex-col items-center w-full max-w-2xl">
              {apod.media_type === 'image' && (
                <img
                  src={apod.url}
                  alt={apod.title}
                  className="w-full rounded shadow mb-4"
                />
              )}
              {apod.media_type === 'video' && (
                <iframe
                  src={apod.url}
                  title={apod.title}
                  className="w-full aspect-video rounded shadow mb-4"
                  allowFullScreen
                />
              )}
              <p className="text-center mb-2 font-semibold">{apod.title}</p>
              <p className="text-sm text-gray-600 text-center max-w-xl">{apod.explanation}</p>
            </div>
          ) : null}
        </div>
      </main>
    </div>
  );
}
