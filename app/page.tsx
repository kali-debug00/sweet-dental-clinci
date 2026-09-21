'use client';

import React, { lazy, Suspense } from 'react';
import PageSkeleton from '@/components/PageSkeleton';

// Page-level code splitting with React.lazy
const HomeView = lazy(() => import('@/components/views/HomeView'));

export default function HomePage() {
  return (
    <Suspense fallback={<PageSkeleton title="Loading Sweet Dental Home..." />}>
      <HomeView />
    </Suspense>
  );
}
