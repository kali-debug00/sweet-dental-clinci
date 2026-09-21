'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Calendar, Star, ShieldCheck, Heart, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 sm:pt-14 sm:pb-28 lg:pt-16 lg:pb-32">
      {/* Decorative Subtle Organic Wave / Vine Path in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10 opacity-30">
        <svg
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M50 300C200 150 350 450 500 300C650 150 800 450 950 300"
            stroke="#8C9A84"
            strokeWidth="1.25"
            strokeDasharray="6 8"
          />
          <circle cx="200" cy="225" r="4" fill="#387B75" opacity="0.4" />
          <circle cx="500" cy="300" r="4" fill="#C9944A" opacity="0.5" />
          <circle cx="800" cy="375" r="4" fill="#387B75" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline, Trust & CTAs */}
          <FadeIn className="lg:col-span-7 flex flex-col justify-center text-left" duration={0.5} yOffset={24}>
            {/* Trust Pill with Rating */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EFEBE4] border border-[#E6E2DA] w-fit mb-6 text-xs sm:text-sm shadow-botanical-sm">
              <div className="flex items-center text-[#C9944A]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9944A]" />
                ))}
              </div>
              <span className="font-semibold text-[#2D3A31]">4.9 Rating</span>
              <span className="text-[#8C9A84]">•</span>
              <span className="text-[#2D3A31]/80">760+ Five-Star Community Reviews</span>
            </div>

            {/* Main High-Contrast Serif Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] text-[#2D3A31] font-semibold tracking-tight leading-[1.12] mb-6">
              <span className="italic font-normal text-[#387B75]">Gentle, Expert</span>{' '}
              Family & Pediatric Dental Care in{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">San Juan, TX</span>
                <span
                  className="absolute bottom-1.5 left-0 w-full h-3 bg-[#387B75]/15 -z-10 rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-lg sm:text-xl text-[#2D3A31]/80 leading-relaxed max-w-2xl mb-8">
              Backed by over 760 five-star patient reviews, we specialize in a stress-free,
              patient-first experience for adults and children alike.
            </p>

            {/* Primary & Secondary Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/contact"
                prefetch={true}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-all duration-300 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-botanical-md hover:shadow-botanical-lg min-h-[52px]"
                id="hero-book-appointment-btn"
              >
                <Calendar className="w-4 h-4 text-[#C9944A]" />
                <span>Book an Appointment</span>
              </Link>

              <a
                href="tel:+19568002233"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-[#8C9A84] text-[#2D3A31] hover:bg-[#8C9A84]/15 transition-all duration-300 text-xs sm:text-sm font-semibold tracking-widest uppercase min-h-[52px]"
                id="hero-call-now-btn"
              >
                <Phone className="w-4 h-4 text-[#387B75]" />
                <span>Call Now: +1 (956) 800-2233</span>
              </a>
            </div>

            {/* Quick Guarantees Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#E6E2DA]">
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2D3A31]">
                <CheckCircle2 className="w-4 h-4 text-[#387B75] shrink-0" />
                <span>Zero-Pain & Gentle Touch</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2D3A31]">
                <CheckCircle2 className="w-4 h-4 text-[#387B75] shrink-0" />
                <span>Kids & Toddler Specialists</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-[13px] text-[#2D3A31]">
                <CheckCircle2 className="w-4 h-4 text-[#C9944A] shrink-0" />
                <span>Open Late & Saturdays</span>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Architectural Roman Arch Imagery & Layered Card */}
          <FadeIn className="lg:col-span-5 relative flex justify-center" delay={0.15} duration={0.5} yOffset={24}>
            {/* Outer Frame with botanical soft styling */}
            <div className="relative w-full max-w-[420px] sm:max-w-[460px]">
              {/* Decorative Arch Backdrop Accent */}
              <div
                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-full h-full rounded-t-full rounded-b-[40px] bg-[#EFEBE4] border border-[#E6E2DA] -z-10"
                aria-hidden="true"
              />

              {/* Main Roman Arch Image Frame */}
              <div className="relative overflow-hidden rounded-t-full rounded-b-[40px] border border-[#E6E2DA] bg-[#FFFFFF] shadow-botanical-lg aspect-[3/4] sm:aspect-[4/5] group">
                <Image
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  alt="Sweet Dental relaxing modern clinic in San Juan, TX"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                  referrerPolicy="no-referrer"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Soft gradient bottom vignette for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A31]/50 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md border border-[#E6E2DA]/80 text-[#2D3A31] shadow-botanical-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#387B75]">
                      San Juan Dental Sanctuary
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#387B75]/10 text-[#387B75] font-medium">
                      All Ages Welcome
                    </span>
                  </div>
                  <p className="text-xs text-[#2D3A31]/90 font-serif italic">
                    &ldquo;The gentlest dental team in the Valley. Both my kids left with huge smiles.&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating Review Metric Badge (Top Left overlap) */}
              <div className="absolute -top-4 -left-3 sm:-top-6 sm:-left-6 p-4 rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] shadow-botanical-md max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#C9944A]/15 text-[#C9944A] flex items-center justify-center">
                    <Star className="w-4 h-4 fill-[#C9944A]" />
                  </div>
                  <div>
                    <span className="font-serif text-lg font-bold text-[#2D3A31] leading-none block">
                      760+ Reviews
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-[#8C9A84] font-medium">
                      Google Verified
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-[#2D3A31]/75 leading-tight">
                  Ranked #1 for pediatric patience & gentle family treatments.
                </p>
              </div>

              {/* Floating Evening & Saturday Availability Badge (Bottom Right overlap) */}
              <div className="absolute -bottom-4 -right-2 sm:-bottom-5 sm:-right-4 p-3.5 rounded-2xl bg-[#2D3A31] text-[#F9F8F4] shadow-botanical-lg max-w-[200px]">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-4 h-4 text-[#C9944A]" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C9944A]">
                    Convenient Hours
                  </span>
                </div>
                <p className="text-xs font-medium text-white/95 leading-snug">
                  Mon & Wed to 7 PM • Saturdays 9 AM–3 PM
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
