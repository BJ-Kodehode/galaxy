import React, { useEffect, useState } from "react";

export default function ISSTracker() {
  const [issData, setIssData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;
    async function fetchISS() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("https://api.wheretheiss.at/v1/satellites/25544");
        if (!res.ok) throw new Error("API-feil");
        const data = await res.json();
        setIssData(data);
      } catch (e) {
        setError("Kunne ikke hente ISS-data.");
      } finally {
        setLoading(false);
      }
    }
    fetchISS();
    interval = setInterval(fetchISS, 5000); // Oppdater hvert 5. sekund
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-12 mb-8 flex flex-col items-center bg-white/80 rounded-xl shadow-lg p-6 border border-blue-200 max-w-2xl mx-auto">
      <h2 className="text-2xl font-extrabold text-blue-700 mb-2 text-center">Live ISS Tracker</h2>
      <p className="text-base text-gray-700 mb-4 text-center max-w-xl">
        Den internasjonale romstasjonen (ISS) er et bemannet romlaboratorium i bane rundt jorden. ISS går i bane ca. 400 km over bakken, beveger seg med over 27 000 km/t, og går én runde rundt jorden på ca. 90 minutter. Her kan du følge ISS sin posisjon i sanntid!
      </p>
      {loading ? (
        <p className="text-gray-600">Laster ISS-data ...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : issData ? (
        <div className="w-full flex flex-col items-center">
          <iframe
            title="ISS Live Map"
            src="https://www.n2yo.com/iframe/?s=25544&w=600&h=320&lang=en"
            width="100%"
            height="320"
            className="rounded shadow mb-4 border border-blue-300"
            style={{ minWidth: 280, maxWidth: 600 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="text-sm text-gray-800 mb-2">
            <b>Latitude:</b> {issData.latitude.toFixed(2)}<br />
            <b>Longitude:</b> {issData.longitude.toFixed(2)}<br />
            <b>Høyde over bakken:</b> {issData.altitude.toFixed(0)} km<br />
            <b>Fart:</b> {issData.velocity.toFixed(0)} km/t
          </div>
          <span className="text-xs text-gray-500">Kart: n2yo.com | Data: wheretheiss.at API</span>
        </div>
      ) : null}
    </section>
  );
}
