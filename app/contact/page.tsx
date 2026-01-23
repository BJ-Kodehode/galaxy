import { Suspense } from 'react';
import ContactContent from './ContactContent';

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Laster kontakt...</div>}>
      <ContactContent />
    </Suspense>
  );
}
