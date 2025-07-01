import { Suspense } from 'react';
import OverviewContent from './OverviewContent';

export default function OverviewPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Oversikt over Melkeveien</h1>
      <Suspense fallback={<div>Laster oversikt...</div>}>
        <OverviewContent />
      </Suspense>
    </main>
  );
}
