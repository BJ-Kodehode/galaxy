import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 pb-16 gap-8 sm:p-10 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-3xl mx-auto">
       
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
          Velkommen til Melkeveien Explorer
        </h1>
        <p className="text-base sm:text-lg max-w-full sm:max-w-2xl mx-auto mb-6 sm:mb-8 text-center px-2">
          Dette er en side om Melkeveien og dens stjerner og planeter. Utforsk
          galaksen vår, søk og filtrer blant planeter og stjerner, og se flotte
          bilder fra NASA sitt arkiv.
        </p>
        <div className="w-full flex justify-center mb-4 sm:mb-6 px-1">
          <video
            className="galaxy-video-fade rounded-lg shadow-lg"
            src="https://cdn.pixabay.com/video/2018/09/30/18492-292594998_large.mp4"
            width="720"
            height="280"
            style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover' }}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full">
          <a
            href="/planets"
            className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
          >
            Utforsk Planeter
          </a>
          <a
            href="/stars"
            className="bg-yellow-500 text-white px-6 py-3 rounded shadow hover:bg-yellow-600 transition"
          >
            Utforsk Stjerner
          </a>
          <a
            href="/gallery"
            className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-900 transition"
          >
            Galleri
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-xs sm:text-sm px-2">
        <span className="text-sm text-gray-500">
          
        </span>
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
