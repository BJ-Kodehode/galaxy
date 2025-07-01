import { Suspense } from 'react';
import InfoContent from './InfoContent';

export default function InfoPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <Suspense fallback={<div>Laster informasjon...</div>}>
        <InfoContent />
      </Suspense>
    </main>
  );
}
