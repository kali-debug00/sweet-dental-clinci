'use client';

import React from 'react';

interface PageSkeletonProps {
  title?: string;
}

export default function PageSkeleton({ title = 'Loading...' }: PageSkeletonProps) {
  return (
    <div
      role="status"
      aria-label={title}
      className="min-h-[70vh] bg-[#F9F8F4] text-[#2D3A31] py-16 px-4 sm:px-6 lg:px-8 animate-pulse"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Skeleton */}
        <div className="max-w-3xl space-y-4">
          <div className="h-6 w-36 bg-[#E6E2DA] rounded-full" />
          <div className="h-12 w-3/4 sm:w-2/3 bg-[#E6E2DA] rounded-2xl" />
          <div className="h-5 w-full bg-[#EFEBE4] rounded-lg" />
          <div className="h-5 w-4/5 bg-[#EFEBE4] rounded-lg" />
        </div>

        {/* Content Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white/70 border border-[#E6E2DA] space-y-4 h-64 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#E6E2DA]" />
                <div className="h-6 w-3/4 bg-[#E6E2DA] rounded-lg" />
                <div className="h-4 w-full bg-[#EFEBE4] rounded" />
                <div className="h-4 w-2/3 bg-[#EFEBE4] rounded" />
              </div>
              <div className="h-4 w-1/3 bg-[#E6E2DA] rounded-full" />
            </div>
          ))}
        </div>

        {/* Banner Skeleton */}
        <div className="h-48 rounded-3xl bg-[#EFEBE4]/60 border border-[#E6E2DA]" />
      </div>
    </div>
  );
}
