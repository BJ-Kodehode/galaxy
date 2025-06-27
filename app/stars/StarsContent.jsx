"use client";

import SearchAndFilter from '../components/SearchAndFilter';
import StarList from '../components/StarList';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function StarsContent() {
  const searchParams = useSearchParams();
  const [stars, setStars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const allStars = [
      { id: 1, name: 'Solen', description: 'Vår nærmeste stjerne.' },
      { id: 2, name: 'Sirius', description: 'Den klareste stjernen på nattehimmelen.' },
      { id: 3, name: 'Betelgeuse', description: 'En rød superkjempe.' },
    ];
    let filtered = allStars;
    const q = searchParams.get('q');
    const filter = searchParams.get('filter');
    if (q) filtered = filtered.filter(s => s.name.toLowerCase().includes(q.toLowerCase()));
    if (filter) filtered = filtered.filter(s => s.name === filter);
    setStars(filtered);
    setLoading(false);
  }, [searchParams]);

  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Stjerner i Melkeveien</h1>
      <SearchAndFilter type="stjerne" filters={["Solen", "Sirius", "Betelgeuse"]} />
      {loading ? <div>Laster...</div> : <StarList stars={stars} />}
    </main>
  );
}
