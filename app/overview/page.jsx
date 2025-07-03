import { Suspense } from 'react';
import OverviewContent from './OverviewContent';

export default function OverviewPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      {/* Overskrift kun i OverviewContent for å unngå duplikat */}
      <Suspense fallback={<div>Laster oversikt...</div>}>
        <OverviewContent />
      </Suspense>
    </main>
  );
}
