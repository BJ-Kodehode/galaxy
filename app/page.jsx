
"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchApod() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");
        if (!res.ok) throw new Error("API-feil");
        const data = await res.json();
        setApod(data);
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
          Siden om planeter og stjerner. Utforsk Melkeveien med oss!
        </p>
        <div className="w-full flex flex-col items-center mb-4 sm:mb-6 px-1">
          {loading ? (
            <p className="text-gray-600">Laster dagens bilde fra NASA ...</p>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : apod ? (
            <>
              {apod.media_type === "image" ? (
                <img
                  src={apod.url}
                  alt={apod.title}
                  className="rounded-lg shadow-lg w-full max-w-xl mb-2"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <iframe
                  src={apod.url}
                  title={apod.title}
                  className="rounded-lg shadow-lg w-full max-w-xl mb-2"
                  style={{ minHeight: 320, height: 320 }}
                  allowFullScreen
                />
              )}
              <h2 className="text-lg font-bold text-blue-700 mb-2 text-center">{apod.title}</h2>
              <p className="text-base text-white text-center mb-2">{apod.explanation}</p>
              <span className="text-xs text-gray-500">Kilde: NASA APOD</span>
            </>
          ) : null}
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-xs sm:text-sm px-2">
        <span className="text-sm text-gray-500"></span>
      </footer>
    </div>
  );
}

// Legg til animasjon i globals.css eller som style jsx:
/*
@keyframes galaxy-fade {
  0% { opacity: 0.2; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0.2; }
}
.animate-galaxy-fade {
  animation: galaxy-fade 12s linear infinite;
}
*/
