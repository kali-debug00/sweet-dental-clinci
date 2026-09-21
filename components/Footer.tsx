'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Calendar, Heart, Shield, ArrowUp } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D3A31] text-[#F9F8F4] pt-20 pb-12 border-t border-[#3C4A40] relative overflow-hidden">
      {/* Decorative subtle background botanical curve */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#387B75]/10 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#3C4A40]" duration={0.5} yOffset={24}>
          {/* Col 1: Brand & Gentle Care Promise (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-[#387B75]/25 border border-[#387B75]/50 flex items-center justify-center text-[#F9F8F4]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7.5 3 11 1 2.3 2 3 3 3s2-.7 3-3c1.5-3.5 3-7.5 3-11 0-3.5-2.5-6-6-6Z" />
                  <path d="M12 2v8" />
                  <path d="M9.5 6.5C10.5 7.5 12 8 13.5 7.5" />
                </svg>
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold tracking-tight text-white block">
                  Sweet Dental
                </span>
                <span className="text-[11px] tracking-widest uppercase font-sans text-[#8C9A84] font-semibold block">
                  Family & Pediatric Dentistry
                </span>
              </div>
            </div>

            <p className="text-sm text-[#E6E2DA]/80 leading-relaxed max-w-sm mb-6 font-sans">
              A peaceful, gentle dental home in San Juan, TX dedicated to pediatric comfort,
              stress-free adult dentistry, and compassionate community care for Rio Grande Valley families.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#E6E2DA]/90">
              <span className="px-3 py-1 rounded-full bg-[#387B75]/20 text-[#8C9A84] border border-[#387B75]/30">
                Se Habla Español
              </span>
              <span className="px-3 py-1 rounded-full bg-[#C9944A]/20 text-[#E6E2DA] border border-[#C9944A]/30">
                4.9 ★★★★★ 760+ Reviews
              </span>
            </div>
          </div>

          {/* Col 2: San Juan Clinic Location & Contact (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8C9A84] mb-4">
              San Juan Clinic
            </h4>

            <div className="space-y-3.5 text-xs text-[#E6E2DA]/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9944A] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Sweet Dental Office</strong>
                  <span>108 State Hwy 495 Ste b</span>
                  <br />
                  <span>San Juan, TX 78589</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#387B75] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Direct Telephone</strong>
                  <a
                    href="tel:+19568002233"
                    className="text-[#F9F8F4] hover:text-[#C9944A] transition-colors font-semibold text-sm"
                  >
                    +1 (956) 800-2233
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8C9A84] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-medium">Convenient Hours</strong>
                  <span>Mon & Wed: 10:00 AM – 7:00 PM (Late Evenings)</span>
                  <br />
                  <span>Tue & Thu: 9:00 AM – 5:00 PM</span>
                  <br />
                  <span>Fri: 9:00 AM – 2:00 PM</span>
                  <br />
                  <span className="text-[#C9944A] font-medium">Sat: 9:00 AM – 3:00 PM (Weekend Care)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation & Emergency (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#8C9A84] mb-4">
              Explore & Schedule
            </h4>

            <ul className="space-y-2 text-xs text-[#E6E2DA]/80 mb-6">
              <li>
                <Link href="/" prefetch={true} className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" prefetch={true} className="hover:text-white transition-colors">
                  General & Pediatric Services
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={true} className="hover:text-white transition-colors">
                  Office Hours & Driving Directions
                </Link>
              </li>
              <li>
                <Link href="/about" prefetch={true} className="hover:text-white transition-colors">
                  About Our Philosophy & Team
                </Link>
              </li>
              <li>
                <Link href="/about#testimonials" prefetch={true} className="hover:text-white transition-colors">
                  760+ Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/services#insurance-faq" prefetch={true} className="hover:text-white transition-colors">
                  Medicaid, CHIP & Insurance FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" prefetch={true} className="text-[#C9944A] hover:underline font-medium">
                  Book Online Now →
                </Link>
              </li>
            </ul>

            <div className="p-3.5 rounded-2xl bg-[#3C4A40]/60 border border-[#4C5B50] text-[11px] text-[#E6E2DA]/80">
              <strong className="block text-white font-semibold mb-1">
                Dental Emergencies
              </strong>
              Experiencing intense toothache or trauma? Please call +1 (956) 800-2233 right away for
              priority same-day triage.
            </div>
          </div>
        </FadeIn>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C9A84]">
          <p>© {new Date().getFullYear()} Sweet Dental. All rights reserved. San Juan, Texas.</p>
          <div className="flex items-center gap-6">
            <span>HIPAA Compliant Practice</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#E6E2DA] hover:text-[#C9944A] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
