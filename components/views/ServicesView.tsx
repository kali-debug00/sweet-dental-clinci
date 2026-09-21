'use client';

import React, { lazy, Suspense } from 'react';
import Link from 'next/link';
import { Sparkles, Calendar, Phone, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

// Code-split heavy interactive sub-sections
const ServicesSection = lazy(() => import('@/components/ServicesSection'));
const InsuranceFaqSection = lazy(() => import('@/components/InsuranceFaqSection'));

function SectionLoadingFallback() {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto flex items-center justify-center min-h-[300px]">
      <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#387B75] font-semibold">
        <div className="w-2.5 h-2.5 rounded-full bg-[#387B75] animate-ping" />
        <span>Loading details...</span>
      </div>
    </div>
  );
}

export default function ServicesView() {
  return (
    <div className="bg-[#F9F8F4] text-[#2D3A31]">
      {/* Page Header */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E6E2DA]/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#387B75]/5 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-3xl" duration={0.5} yOffset={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387B75]/10 text-[#387B75] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#387B75]/20">
              <Sparkles className="w-3.5 h-3.5 text-[#387B75]" />
              <span>Full-Spectrum Dental Care</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D3A31] mb-6 leading-tight">
              Gentle Treatments for Every Member of{' '}
              <span className="italic font-normal text-[#387B75]">Your Family</span>
            </h1>
            <p className="text-base sm:text-xl text-[#2D3A31]/80 leading-relaxed font-sans mb-8">
              Whether welcoming your little one for their very first pediatric checkup, restoring a damaged tooth with modern tooth-colored materials, or brightening your smile, our San Juan clinic provides anxiety-free dentistry with modern comfort.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#2D3A31]/90">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <CheckCircle2 className="w-4 h-4 text-[#387B75]" />
                <span className="font-medium">Infant to Senior Care</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <CheckCircle2 className="w-4 h-4 text-[#387B75]" />
                <span className="font-medium">Same-Day Emergency Triage</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C9944A]" />
                <span className="font-medium">Medicaid, CHIP & PPOs Accepted</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 1. Core Services Section with Detail Modals (Code-split with Suspense) */}
      <Suspense fallback={<SectionLoadingFallback />}>
        <ServicesSection />
      </Suspense>

      {/* 2. Insurance Partners & Comprehensive FAQ Section (Code-split with Suspense) */}
      <Suspense fallback={<SectionLoadingFallback />}>
        <InsuranceFaqSection />
      </Suspense>

      {/* Bottom Schedule Banner */}
      <section className="py-16 sm:py-20 bg-[#2D3A31] text-[#F9F8F4] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#387B75]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn duration={0.5} yOffset={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C9A84] mb-3 block">
              Easy Online Scheduling
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F9F8F4] font-semibold mb-5">
              Ready to Book Your Treatment?
            </h2>
            <p className="text-sm sm:text-base text-[#E6E2DA]/80 max-w-2xl mx-auto mb-8 font-sans">
              Choose your preferred date, time window, and let us know if you need any anxiety accommodations. We are here to make your dental care smooth and relaxing.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                prefetch={true}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#F9F8F4] text-[#2D3A31] hover:bg-white hover:text-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shadow-botanical-sm"
              >
                <Calendar className="w-4 h-4 text-[#387B75]" />
                <span>Book Your Appointment</span>
              </Link>
              <a
                href="tel:+19568002233"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#8C9A84] text-[#F9F8F4] hover:bg-[#3C4A40] transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#C9944A]" />
                <span>Call San Juan Office: +1 (956) 800-2233</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
