'use client';

import React, { lazy, Suspense } from 'react';
import PageSkeleton from '@/components/PageSkeleton';

// Page-level code splitting with React.lazy
const ServicesView = lazy(() => import('@/components/views/ServicesView'));

export default function ServicesPage() {
  return (
    <Suspense fallback={<PageSkeleton title="Loading Dental Services & Treatments..." />}>
      <ServicesView />
    </Suspense>
  );
}
