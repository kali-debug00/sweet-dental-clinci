'use client';

import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  viewportMargin?: string;
  once?: boolean;
}

/**
 * FadeIn Component
 * Renders immediately without animation or loading delay for maximum page navigation speed.
 */
export function FadeIn({ children, className = '' }: FadeInProps) {
  return <div className={className}>{children}</div>;
}

/**
 * StaggerContainer Component
 * Renders immediately without animation or loading delay for maximum page navigation speed.
 */
export function StaggerContainer({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  viewportMargin?: string;
  once?: boolean;
}) {
  return <div className={className}>{children}</div>;
}

/**
 * StaggerItem Component
 * Renders immediately without animation or loading delay for maximum page navigation speed.
 */
export function StaggerItem({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}) {
  return <div className={className}>{children}</div>;
}

