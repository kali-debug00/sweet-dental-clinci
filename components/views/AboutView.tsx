'use client';

import React, { lazy, Suspense } from 'react';
import Link from 'next/link';
import { Heart, Shield, Sparkles, CheckCircle2, Phone, Calendar, Users } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

// Code-split heavy interactive sub-sections
const TrustSection = lazy(() => import('@/components/TrustSection'));
const ReviewsSection = lazy(() => import('@/components/ReviewsSection'));

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

export default function AboutView() {
  return (
    <div className="bg-[#F9F8F4] text-[#2D3A31]">
      {/* Page Header */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-[#E6E2DA]/80 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#387B75]/5 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="max-w-3xl" duration={0.5} yOffset={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387B75]/10 text-[#387B75] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#387B75]/20">
              <Heart className="w-3.5 h-3.5 fill-[#387B75]" />
              <span>Our Story & Philosophy</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#2D3A31] mb-6 leading-tight">
              A Gentle Dental Home Built for{' '}
              <span className="italic font-normal text-[#387B75]">Rio Grande Valley</span> Families
            </h1>
            <p className="text-base sm:text-xl text-[#2D3A31]/80 leading-relaxed font-sans mb-8">
              At Sweet Dental in San Juan, TX, we believe nobody should ever avoid the dentist out of embarrassment, fear of pain, or unpredictable bills. We designed our practice from the ground up to be peaceful, judgment-free, and profoundly gentle.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#2D3A31]/90">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <CheckCircle2 className="w-4 h-4 text-[#387B75]" />
                <span className="font-medium">100% Judgment-Free Care</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <CheckCircle2 className="w-4 h-4 text-[#387B75]" />
                <span className="font-medium">Se Habla Español</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E6E2DA] shadow-botanical-sm">
                <CheckCircle2 className="w-4 h-4 text-[#C9944A]" />
                <span className="font-medium">4.9 ★ (760+ Google Reviews)</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 1. Core Trust Pillars & Comfort Amenities Bar (Code-split with Suspense) */}
      <Suspense fallback={<SectionLoadingFallback />}>
        <TrustSection />
      </Suspense>

      {/* 2. Community Roots & Our Commitment */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <FadeIn className="lg:col-span-6" duration={0.5} yOffset={24}>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-3 block">
                Deep Valley Roots
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
                Caring for Our Neighbors in{' '}
                <span className="italic font-normal text-[#387B75]">San Juan, Alamo & Pharr</span>
              </h2>
              <p className="text-sm sm:text-base text-[#2D3A31]/80 leading-relaxed mb-6">
                Rio Grande Valley families have unique needs, busy work shifts, and diverse schedules. That is why we offer extended Monday and Wednesday evening appointments until 7:00 PM and full Saturday care from 9:00 AM to 3:00 PM.
              </p>
              <p className="text-sm sm:text-base text-[#2D3A31]/80 leading-relaxed mb-8">
                Our bilingual team speaks English and Spanish fluently, ensuring seamless, warm communication for every member of your family—from curious toddlers visiting for their first happy checkup to grandparents seeking comfortable dentures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA]">
                  <Users className="w-6 h-6 text-[#387B75] mb-2" />
                  <h4 className="font-serif font-semibold text-base text-[#2D3A31]">All Generations</h4>
                  <p className="text-xs text-[#2D3A31]/75 mt-1">
                    Specialized pediatric care for children alongside comprehensive adult and senior dentistry.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA]">
                  <Shield className="w-6 h-6 text-[#C9944A] mb-2" />
                  <h4 className="font-serif font-semibold text-base text-[#2D3A31]">Transparent Estimates</h4>
                  <p className="text-xs text-[#2D3A31]/75 mt-1">
                    We accept Medicaid, CHIP, and top PPO insurances with zero surprise fees or hidden costs.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-6" delay={0.15} duration={0.5} yOffset={24}>
              <div className="rounded-3xl bg-[#EFEBE4] border border-[#E6E2DA] p-8 sm:p-10 shadow-botanical-md relative">
                <div className="w-12 h-12 rounded-2xl bg-[#387B75] text-white flex items-center justify-center mb-6 shadow-botanical-sm">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#2D3A31] mb-3">
                  Our Promise to Every Patient
                </h3>
                <ul className="space-y-4 text-xs sm:text-sm text-[#2D3A31]/85 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      1
                    </span>
                    <span>
                      <strong>We will never judge or lecture you:</strong> If it has been five, ten, or fifteen years since your last dental visit, you will only receive empathy and genuine encouragement.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      2
                    </span>
                    <span>
                      <strong>We prioritize pain-free dentistry:</strong> Slow, feathered topical numbing, gentle instruments, and warm support ensure you are comfortable at every second.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      3
                    </span>
                    <span>
                      <strong>Clear upfront pricing:</strong> You receive an itemized treatment breakdown with verified copays before any procedure begins.
                    </span>
                  </li>
                </ul>

                <Link
                  href="/contact"
                  prefetch={true}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shadow-botanical-sm"
                >
                  <Calendar className="w-4 h-4 text-[#C9944A]" />
                  <span>Schedule Your First Gentle Visit</span>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Verified Patient Reviews Showcase (Code-split with Suspense) */}
      <Suspense fallback={<SectionLoadingFallback />}>
        <ReviewsSection />
      </Suspense>

      {/* Call to Action Banner */}
      <section className="py-16 sm:py-20 bg-[#2D3A31] text-[#F9F8F4] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#387B75]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <FadeIn duration={0.5} yOffset={20}>
            <span className="text-xs uppercase tracking-widest font-semibold text-[#8C9A84] mb-3 block">
              Experience the Sweet Dental Difference
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F9F8F4] font-semibold mb-5">
              Ready for a Calm, Comfortable Dental Visit?
            </h2>
            <p className="text-sm sm:text-base text-[#E6E2DA]/80 max-w-2xl mx-auto mb-8 font-sans">
              Schedule your visit online in under two minutes, or give our friendly San Juan office a call. We look forward to welcoming you and your family!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                prefetch={true}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#F9F8F4] text-[#2D3A31] hover:bg-white hover:text-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shadow-botanical-sm"
              >
                <Calendar className="w-4 h-4 text-[#387B75]" />
                <span>Book an Appointment Online</span>
              </Link>
              <a
                href="tel:+19568002233"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-[#8C9A84] text-[#F9F8F4] hover:bg-[#3C4A40] transition-colors text-xs font-semibold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#C9944A]" />
                <span>Call Us: +1 (956) 800-2233</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
