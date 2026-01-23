import { Suspense } from 'react';
import InfoContent from './InfoContent';

export default function InfoPage() {
  return (
    <Suspense fallback={<div>Laster info...</div>}>
      <InfoContent />
    </Suspense>
  );
}
