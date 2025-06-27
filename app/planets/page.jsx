"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import SearchAndFilter from "../components/SearchAndFilter";
import PlanetList from "../components/PlanetList";

function PlanetsContent() {
  const searchParams = useSearchParams();
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock-data, bytt ut med API-kall senere
    const allPlanets = [
      { id: 1, name: "Jorden", description: "Vår egen planet." },
      { id: 2, name: "Mars", description: "Den røde planeten." },
      { id: 3, name: "Jupiter", description: "Den største planeten." },
    ];
    let filtered = allPlanets;
    const q = searchParams.get("q");
    const filter = searchParams.get("filter");
    if (q) filtered = filtered.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));
    if (filter) filtered = filtered.filter((p) => p.name === filter);
    setPlanets(filtered);
    setLoading(false);
  }, [searchParams]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Planeter i Melkeveien</h1>
      <SearchAndFilter type="planet" filters={["Jorden", "Mars", "Jupiter"]} />
      {loading ? <div>Laster...</div> : <PlanetList planets={planets} />}
    </>
  );
}

export default function PlanetsPage() {
  return (
    <Suspense fallback={<div>Laster planetsiden...</div>}>
      <PlanetsContent />
    </Suspense>
  );
}
