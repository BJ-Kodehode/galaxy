"use client";

export default function InfoContent() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-700 drop-shadow">Informasjon om Melkeveien</h1>
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://images-assets.nasa.gov/image/PIA12348/PIA12348~orig.jpg"
          alt="Melkeveien sett fra rommet (NASA)"
          className="w-full max-w-2xl rounded shadow mb-4"
        />
        <span className="text-xs text-gray-500">Bilde: NASA/JPL-Caltech/R. Hurt (Milky Way Galaxy)</span>
      </div>
      <div className="text-lg text-gray-800 max-w-3xl mx-auto bg-white/80 rounded-xl shadow-lg p-8 border border-indigo-200 space-y-4">
        <h2 className="text-2xl font-bold mb-2 text-indigo-800">Melkeveien</h2>
        <p>Melkeveien er galaksen vi bor i, og inneholder mellom 200 og 400 milliarder stjerner, inkludert vår egen sol. Galaksen er en stavspiralgalakse med en diameter på rundt 100 000 lysår.</p>
        <p>Melkeveien er over 13 milliarder år gammel og består av stjerner, planeter, gass, støv og mørk materie. Sola og solsystemet vårt befinner seg i en av spiralarmene, kalt Orion-armen, omtrent 27 000 lysår fra sentrum.</p>
        <p>I sentrum av Melkeveien finnes et supermassivt sort hull, Sagittarius A*, med en masse på over 4 millioner ganger solas masse.</p>
        <p>Galaksen er en del av Den lokale gruppe, som består av rundt 50 galakser, inkludert Andromedagalaksen og de Magellanske skyene.</p>
        <p>Sett fra jorda ser vi Melkeveien som et lysende bånd på nattehimmelen, spesielt godt synlig på mørke steder uten lysforurensning.</p>
        <h3 className="text-xl font-semibold mt-6 mb-1 text-indigo-700">Størrelse og struktur</h3>
        <p>Melkeveien er en stavspiralgalakse som roterer med armene slepende etter. Den roterende galakseskiven har en diameter på rundt 100 000 lysår og er bare rundt 1000 lysår tykk. Skiven består av unge, lyssterke stjerner, åpne stjernehoper, stjernetåker, gass og støv.</p>
        <p>Haloen er lyssvak og sfærisk, og består hovedsakelig av gamle stjerner, kulehoper og gass. I sentrum av galaksen skjuler det seg et supermassivt sort hull, kalt Sagittarius A*.</p>
        <h3 className="text-xl font-semibold mt-6 mb-1 text-indigo-700">Solsystemets plassering</h3>
        <p>Solen befinner seg i Orionarmen. Avstanden til sentrum av galaksen, som ligger i retning av stjernebildet Skytten, er omtrent 27 000 lysår.</p>
        <p>Solens omløpstid rundt sentrum på 250 millioner år kalles et galaktisk år, og banehastigheten er 900 000 kilometer i timen.</p>
        <p className="italic text-base text-gray-600">Kilde: NASA, Store norske leksikon</p>
      </div>
    </main>
  );
}
