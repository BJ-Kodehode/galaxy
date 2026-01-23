"use client";

interface Star {
  id: string;
  name: string;
  description: string;
}

interface StarListProps {
  stars: Star[];
}

export default function StarList({ stars }: StarListProps) {
  if (!stars || stars.length === 0) return <div>Ingen stjerner funnet.</div>;
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stars.map(star => (
        <li key={star.id} className="bg-white rounded shadow p-4">
          <h2 className="text-xl font-bold mb-2">{star.name}</h2>
          <div className="text-gray-700">{star.description}</div>
        </li>
      ))}
    </ul>
  );
}
