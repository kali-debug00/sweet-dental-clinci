'use client';

import React, { lazy, Suspense } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

// Code-split heavy interactive sections
const LocationHoursSection = lazy(() => import('@/components/LocationHoursSection'));
const AppointmentForm = lazy(() => import('@/components/AppointmentForm'));

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

export default function ContactView() {
  return (
    <div className="bg-[#F9F8F4] text-[#2D3A31]">
      {/* Page Header */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E6E2DA]/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#387B75]/5 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-3xl" duration={0.5} yOffset={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387B75]/10 text-[#387B75] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#387B75]/20">
              <MapPin className="w-3.5 h-3.5 text-[#387B75]" />
              <span>San Juan, TX Location & Scheduling</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D3A31] mb-6 leading-tight">
              Get in Touch & Book Your{' '}
              <span className="italic font-normal text-[#387B75]">Gentle Dental Visit</span>
            </h1>
            <p className="text-base sm:text-xl text-[#2D3A31]/80 leading-relaxed font-sans mb-8">
              We look forward to welcoming you to Sweet Dental. Request your preferred appointment time online below, or call our bilingual team directly during office hours.
            </p>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <Phone className="w-5 h-5 text-[#387B75] mb-2" />
                <span className="text-xs uppercase tracking-wider text-[#8C9A84] font-semibold block">Telephone</span>
                <a href="tel:+19568002233" className="font-serif font-semibold text-sm sm:text-base text-[#2D3A31] hover:text-[#387B75] transition-colors block mt-0.5">
                  +1 (956) 800-2233
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <Clock className="w-5 h-5 text-[#C9944A] mb-2" />
                <span className="text-xs uppercase tracking-wider text-[#8C9A84] font-semibold block">Extended Hours</span>
                <span className="font-serif font-semibold text-sm sm:text-base text-[#2D3A31] block mt-0.5">
                  Evenings & Saturdays
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <MapPin className="w-5 h-5 text-[#387B75] mb-2" />
                <span className="text-xs uppercase tracking-wider text-[#8C9A84] font-semibold block">Office Location</span>
                <span className="font-serif font-semibold text-sm sm:text-base text-[#2D3A31] block mt-0.5">
                  108 State Hwy 495 Ste b
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 1. Location & Operating Hours Section (Code-split with Suspense) */}
      <Suspense fallback={<SectionLoadingFallback />}>
        <LocationHoursSection />
      </Suspense>

      {/* 2. Interactive Appointment Booking Form (Code-split with Suspense) */}
      <Suspense fallback={<SectionLoadingFallback />}>
        <AppointmentForm />
      </Suspense>
    </div>
  );
}
