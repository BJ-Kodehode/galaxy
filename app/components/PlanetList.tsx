"use client";

interface Planet {
  id: string;
  name: string;
  description: string;
}

interface PlanetListProps {
  planets: Planet[];
}

export default function PlanetList({ planets }: PlanetListProps) {
  if (!planets || planets.length === 0) return <div>Ingen planeter funnet.</div>;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {planets.map(planet => (
        <li key={planet.id} className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">{planet.name}</h2>
          <div className="text-gray-700">{planet.description}</div>
        </li>
      ))}
    </ul>
  );
}
