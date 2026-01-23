import { Suspense } from 'react';
import PageContent from './PageContent';

export default function AboutUsPage() {
  return (
    <Suspense fallback={<div>Laster About Us...</div>}>
      <PageContent />
    </Suspense>
  );
}
