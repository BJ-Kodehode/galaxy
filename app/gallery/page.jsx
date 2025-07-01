import { Suspense } from 'react';
import GalleryContent from './GalleryContent';

export default function GalleryPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Galleri: Melkeveien & Planeter</h1>
      <Suspense fallback={<div>Laster galleri...</div>}>
        <GalleryContent />
      </Suspense>
    </main>
  );
}
