"use client";

export default function OverviewContent() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700 drop-shadow">Oversikt over Melkeveien</h1>
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://images-assets.nasa.gov/image/PIA12348/PIA12348~orig.jpg"
          alt="Melkeveien sett fra rommet (NASA)"
          className="w-full max-w-2xl rounded shadow mb-4"
        />
        <span className="text-xs text-gray-500">Bilde: NASA/JPL-Caltech/R. Hurt (Milky Way Galaxy)</span>
      </div>
      <div className="bg-white/80 rounded-xl shadow-lg p-6 border border-gray-200 max-w-3xl mx-auto text-lg text-gray-800 space-y-4">
        <p><b>Melkeveien</b> er galaksen vi bor i, og inneholder mellom 200 og 400 milliarder stjerner, inkludert vår egen sol. Galaksen er en stavspiralgalakse med en diameter på rundt 100 000 lysår.</p>
        <p>Melkeveien er over 13 milliarder år gammel og består av stjerner, planeter, gass, støv og mørk materie. Sola og solsystemet vårt befinner seg i en av spiralarmene, kalt Orion-armen, omtrent 27 000 lysår fra sentrum.</p>
        <p>I sentrum av Melkeveien finnes et supermassivt sort hull, Sagittarius A*, med en masse på over 4 millioner ganger solas masse.</p>
        <p>Galaksen er en del av Den lokale gruppe, som består av rundt 50 galakser, inkludert Andromedagalaksen og de Magellanske skyene.</p>
        <p>Sett fra jorda ser vi Melkeveien som et lysende bånd på nattehimmelen, spesielt godt synlig på mørke steder uten lysforurensning.</p>
        <p className="italic text-base text-gray-600">Kilde: NASA, Store norske leksikon</p>
      </div>
    </main>
  );
}
