'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Calendar, Navigation, ExternalLink, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

export default function LocationHoursSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('108 State Hwy 495 Ste b, San Juan, TX 78589');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const schedule = [
    { day: 'Monday', hours: '10:00 AM – 7:00 PM', tag: 'Evening Hours', highlight: true },
    { day: 'Tuesday', hours: '9:00 AM – 5:00 PM', tag: 'Standard Day', highlight: false },
    { day: 'Wednesday', hours: '10:00 AM – 7:00 PM', tag: 'Evening Hours', highlight: true },
    { day: 'Thursday', hours: '9:00 AM – 5:00 PM', tag: 'Standard Day', highlight: false },
    { day: 'Friday', hours: '9:00 AM – 2:00 PM', tag: 'Early Afternoon', highlight: false },
    { day: 'Saturday', hours: '9:00 AM – 3:00 PM', tag: 'Weekend Care', highlight: true },
    { day: 'Sunday', hours: 'Closed', tag: 'Family Day', highlight: false },
  ];

  return (
    <section id="hours-location" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] border-t border-[#E6E2DA]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" duration={0.5} yOffset={24}>
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-3 block">
            Visit Our San Juan Office
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
            Convenient Care with{' '}
            <span className="italic font-normal text-[#387B75]">Evening & Saturday</span> Hours
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2D3A31]/75 leading-relaxed">
            Conveniently situated on State Highway 495 in San Juan, TX, right between Pharr and
            Alamo with ample free front-door parking.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Hours Card */}
          <FadeIn className="lg:col-span-6 rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-7 sm:p-9 shadow-botanical-sm flex flex-col justify-between" duration={0.5} yOffset={24}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#387B75]/10 text-[#387B75] flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#2D3A31]">
                      Office Hours
                    </h3>
                    <span className="text-xs text-[#8C9A84]">Designed around family schedules</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#387B75]/10 text-[#387B75] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#387B75] animate-pulse" />
                  <span>Accepting Patients</span>
                </span>
              </div>

              {/* Hours Schedule List */}
              <div className="space-y-3 mb-8">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition-colors ${
                      item.highlight
                        ? 'bg-[#EFEBE4]/70 border border-[#E6E2DA]'
                        : 'bg-[#F9F8F4] border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-semibold text-[#2D3A31] w-28">
                        {item.day}
                      </span>
                      {item.highlight && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C9944A]/15 text-[#9C6E25]">
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        item.hours === 'Closed' ? 'text-[#8C9A84]' : 'text-[#2D3A31]'
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              {/* Highlight Box for Evenings & Saturdays */}
              <div className="p-4 rounded-2xl bg-[#387B75]/10 border border-[#387B75]/20 flex items-start gap-3 text-xs text-[#2D3A31]">
                <Sparkles className="w-4 h-4 text-[#387B75] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-[#387B75] font-semibold mb-0.5">
                    No Missed Work or School
                  </strong>
                  Our Monday and Wednesday evening slots until 7:00 PM and Saturday hours give
                  parents complete peace of mind.
                </div>
              </div>
            </div>

            {/* Click to Call Action in Hours Card */}
            <div className="mt-8 pt-6 border-t border-[#E6E2DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#8C9A84] font-semibold block">
                  Questions or Urgent Need?
                </span>
                <span className="text-xs text-[#2D3A31]">Our friendly team is ready to help</span>
              </div>
              <a
                href="tel:+19568002233"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-all duration-300 text-xs font-semibold tracking-wider uppercase shadow-botanical-sm"
              >
                <Phone className="w-4 h-4 text-[#C9944A]" />
                <span>Call (956) 800-2233</span>
              </a>
            </div>
          </FadeIn>

          {/* Right Column: Location, Map & Directions */}
          <FadeIn className="lg:col-span-6 rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-7 sm:p-9 shadow-botanical-sm flex flex-col justify-between" delay={0.15} duration={0.5} yOffset={24}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-[#C9944A]/10 text-[#C9944A] flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-semibold text-[#2D3A31]">
                      Clinic Location
                    </h3>
                    <span className="text-xs text-[#8C9A84]">San Juan, Rio Grande Valley</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="text-xs text-[#387B75] hover:text-[#2D3A31] font-semibold px-3 py-1.5 rounded-full border border-[#E6E2DA] hover:bg-[#EFEBE4] transition-all"
                >
                  {copiedAddress ? 'Copied!' : 'Copy Address'}
                </button>
              </div>

              {/* Address Highlight */}
              <div className="p-5 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA] mb-6">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8C9A84] block mb-1">
                  Physical Address
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#2D3A31] font-semibold leading-snug mb-1">
                  108 State Hwy 495 Ste b
                </p>
                <p className="text-sm text-[#2D3A31]/80 font-medium">
                  San Juan, TX 78589
                </p>
                <span className="text-xs text-[#8C9A84] mt-2 block">
                  Ground-floor suite • Wheelchair accessible • Dedicated clinic parking
                </span>
              </div>

              {/* Interactive Travel Times from Nearby Cities */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31]/70 block mb-3">
                  Estimated Travel Times
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="p-3 rounded-2xl bg-[#EFEBE4]/60 border border-[#E6E2DA] text-center">
                    <span className="text-xs font-bold text-[#2D3A31] block">Alamo</span>
                    <span className="text-[11px] text-[#387B75] font-semibold">3 mins</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#EFEBE4]/60 border border-[#E6E2DA] text-center">
                    <span className="text-xs font-bold text-[#2D3A31] block">Pharr</span>
                    <span className="text-[11px] text-[#387B75] font-semibold">5 mins</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#EFEBE4]/60 border border-[#E6E2DA] text-center">
                    <span className="text-xs font-bold text-[#2D3A31] block">McAllen</span>
                    <span className="text-[11px] text-[#387B75] font-semibold">12 mins</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-[#EFEBE4]/60 border border-[#E6E2DA] text-center">
                    <span className="text-xs font-bold text-[#2D3A31] block">Edinburg</span>
                    <span className="text-[11px] text-[#387B75] font-semibold">14 mins</span>
                  </div>
                </div>
              </div>

              {/* Visual Map Representation Card */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E6E2DA] bg-[#EFEBE4] h-48 flex flex-col items-center justify-center p-6 text-center shadow-botanical-sm group">
                {/* Stylized geometric road grid background */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2D3A31" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Map Pin Badge */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#2D3A31] text-[#F9F8F4] flex items-center justify-center shadow-botanical-md mb-2 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-[#C9944A]" />
                </div>
                <div className="relative z-10">
                  <span className="font-serif text-base font-semibold text-[#2D3A31] block">
                    Sweet Dental San Juan
                  </span>
                  <span className="text-xs text-[#2D3A31]/75">
                    Hwy 495 (Ferguson Ave) & Nebraska Rd corridor
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Navigation Button */}
            <div className="mt-8 pt-6 border-t border-[#E6E2DA]">
              <a
                href="https://maps.google.com/?q=108+State+Hwy+495+Ste+b,+San+Juan,+TX+78589"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#8C9A84] text-[#2D3A31] hover:bg-[#2D3A31] hover:text-white transition-all duration-300 text-xs font-semibold tracking-wider uppercase"
              >
                <Navigation className="w-4 h-4 text-[#387B75]" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
