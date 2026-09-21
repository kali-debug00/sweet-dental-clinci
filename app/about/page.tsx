'use client';

import React, { lazy, Suspense } from 'react';
import PageSkeleton from '@/components/PageSkeleton';

// Page-level code splitting with React.lazy
const AboutView = lazy(() => import('@/components/views/AboutView'));

export default function AboutPage() {
  return (
    <Suspense fallback={<PageSkeleton title="Loading About Sweet Dental..." />}>
      <AboutView />
    </Suspense>
  );
}
