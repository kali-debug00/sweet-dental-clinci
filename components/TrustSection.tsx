'use client';

import React, { useState } from 'react';
import { Heart, Sparkles, Eye, Clock, ShieldCheck, Smile, Check, Tv, Music, Coffee, UserCheck } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ScrollAnimation';

interface TrustPillar {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  quoteAuthor: string;
  highlights: string[];
  icon: React.ReactNode;
  accentBg: string;
  staggered?: boolean;
}

const trustPillars: TrustPillar[] = [
  {
    id: 'pediatric-focus',
    tag: 'Tender & Specialized',
    title: 'Family & Pediatric Focus',
    subtitle: 'Gentle, joyful visits for toddlers to teens',
    description:
      'Exceptionally patient and gentle with toddlers, children, and specialized care needs. Our team moves at your child’s pace with prize chests, ceiling entertainment, and friendly storytelling so the dentist is never scary.',
    quote:
      'My 4-year-old daughter used to cry at other clinics. At Sweet Dental, the assistant showed her every tool first and she asked when she can come back!',
    quoteAuthor: 'Lorena M. • Mother of 2 in San Juan',
    highlights: [
      'Tell-Show-Do pediatric approach',
      'Ceiling screens streaming kids’ favorite shows',
      'Treasure chest rewards & graduation certificates',
      'Gentle care for children with sensory sensitivity',
    ],
    icon: <Smile className="w-6 h-6 text-[#387B75]" />,
    accentBg: 'bg-[#387B75]/10',
    staggered: false,
  },
  {
    id: 'step-transparency',
    tag: 'Zero Surprises',
    title: 'Step-by-Step Transparency',
    subtitle: 'Clear explanations before any treatment begins',
    description:
      'We walk you through every procedure so you always feel informed and comfortable. Using high-definition intraoral cameras, we show you exactly what we see and outline plain-English options with honest pricing.',
    quote:
      'No mystery fees or pushy sales. They printed a transparent breakdown with my insurance before doing anything. The doctor explained every step.',
    quoteAuthor: 'Hector V. • Patient since 2023',
    highlights: [
      'High-res camera scans you can view together',
      'Clear, written treatment estimates upfront',
      'Plain-language explanations without medical jargon',
      'You are always in control—we pause whenever you ask',
    ],
    icon: <Eye className="w-6 h-6 text-[#C9944A]" />,
    accentBg: 'bg-[#C9944A]/10',
    staggered: true, // staggered down for botanical rhythm
  },
  {
    id: 'seamless-insurance',
    tag: 'Fast & Stress-Free',
    title: 'Minimal Wait Times & Seamless Insurance Handling',
    subtitle: 'Fast check-ins and smooth payment processing',
    description:
      'We deeply respect your family’s time. With paperless digital intake, appointments start promptly. Our dedicated insurance coordinators verify your benefits in advance and submit all claims on your behalf.',
    quote:
      'Checked in, seated within 4 minutes, and my insurance paperwork was already filed. Best dental experience in Hidalgo County.',
    quoteAuthor: 'Maria Elena G. • Alamo, TX',
    highlights: [
      'Under 5-minute average lobby wait time',
      'In-network with major PPOs, Medicaid & CHIP for kids',
      'Direct insurance verification prior to your arrival',
      'Flexible 0% interest dental financing via CareCredit',
    ],
    icon: <Clock className="w-6 h-6 text-[#387B75]" />,
    accentBg: 'bg-[#387B75]/10',
    staggered: false,
  },
];

export default function TrustSection() {
  const [activeAmenity, setActiveAmenity] = useState<string>('blankets');

  return (
    <section id="why-patients-love-us" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" duration={0.5} yOffset={24}>
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-3 block">
            Why Patients Love Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
            Designed to Make Every Family Member Feel{' '}
            <span className="italic font-normal text-[#387B75]">Heard & Safe</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2D3A31]/75 leading-relaxed">
            Real feedback from over 760 local families shaped our patient-first approach.
            Here is what makes Sweet Dental your trusted healthcare home in San Juan.
          </p>
        </FadeIn>

        {/* Botanical Staggered Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start mb-20" staggerDelay={0.12}>
          {trustPillars.map((pillar) => (
            <StaggerItem
              key={pillar.id}
              yOffset={24}
              duration={0.5}
              className={`h-full ${pillar.staggered ? 'md:translate-y-10 lg:translate-y-12' : ''}`}
            >
              <div
                className="rounded-3xl p-8 sm:p-9 bg-[#FFFFFF] border border-[#E6E2DA] shadow-botanical-sm hover:shadow-botanical-lg transition-all duration-500 ease-out hover:-translate-y-2 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Header with pill icon and tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl ${pillar.accentBg} flex items-center justify-center border border-[#E6E2DA] shadow-botanical-sm`}
                    >
                      {pillar.icon}
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EFEBE4] text-[#2D3A31]/80">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Card Title & Subtitle */}
                  <h3 className="font-serif text-2xl text-[#2D3A31] font-semibold mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#387B75] font-medium tracking-wide uppercase mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#2D3A31]/80 leading-relaxed mb-6 font-sans">
                    {pillar.description}
                  </p>

                  {/* Key Bullet Highlights */}
                  <ul className="space-y-2.5 mb-8">
                    {pillar.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#2D3A31]/90">
                        <div className="w-4 h-4 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Real Patient Quote Snippet */}
                <div className="pt-6 border-t border-[#E6E2DA] bg-[#F9F8F4]/70 -mx-8 sm:-mx-9 -mb-8 sm:-mb-9 p-6 rounded-b-3xl">
                  <p className="font-serif italic text-xs text-[#2D3A31] leading-relaxed mb-2">
                    &ldquo;{pillar.quote}&rdquo;
                  </p>
                  <span className="text-[11px] font-semibold text-[#8C9A84] block">
                    — {pillar.quoteAuthor}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Soothing Patient Comfort Amenities Bar */}
        <FadeIn className="rounded-3xl bg-[#EFEBE4] border border-[#E6E2DA] p-8 sm:p-10 shadow-botanical-sm" delay={0.1} duration={0.5} yOffset={24}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#387B75] block mb-2">
                Comfort Amenities Included
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#2D3A31] font-semibold mb-3">
                Dental Care in a <span className="italic font-normal text-[#387B75]">Spa-Like</span> Calm
              </h3>
              <p className="text-xs sm:text-sm text-[#2D3A31]/75 leading-relaxed">
                Whether you or your child feel slight jitters or deep dental anxiety, we provide
                tailored soothing touches designed to turn clinical tension into relaxed comfort.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[#E6E2DA] text-center shadow-botanical-sm flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center mb-2.5">
                  <Tv className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#2D3A31] block">Ceiling TVs</span>
                <span className="text-[11px] text-[#8C9A84] mt-0.5">Kids & Adults</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E2DA] text-center shadow-botanical-sm flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center mb-2.5">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#2D3A31] block">Cozy Blankets</span>
                <span className="text-[11px] text-[#8C9A84] mt-0.5">Warm & Soft</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E2DA] text-center shadow-botanical-sm flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#C9944A]/10 text-[#C9944A] flex items-center justify-center mb-2.5">
                  <Music className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#2D3A31] block">Audio Headsets</span>
                <span className="text-[11px] text-[#8C9A84] mt-0.5">Noise Canceling</span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E6E2DA] text-center shadow-botanical-sm flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center mb-2.5">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold text-[#2D3A31] block">Bilingual Staff</span>
                <span className="text-[11px] text-[#8C9A84] mt-0.5">English & Español</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
