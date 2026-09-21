'use client';

import React, { lazy, Suspense } from 'react';
import PageSkeleton from '@/components/PageSkeleton';

// Page-level code splitting with React.lazy
const ContactView = lazy(() => import('@/components/views/ContactView'));

export default function ContactPage() {
  return (
    <Suspense fallback={<PageSkeleton title="Loading Office Hours & Contact..." />}>
      <ContactView />
    </Suspense>
  );
}
