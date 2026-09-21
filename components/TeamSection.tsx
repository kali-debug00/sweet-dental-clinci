'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Heart,
  Sparkles,
  Calendar,
  GraduationCap,
  ShieldCheck,
  Languages,
  ArrowRight,
  Info,
  CheckCircle2,
} from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'dentist' | 'hygienist';
  credentials: string;
  education: string;
  experienceYears: number;
  languages: string[];
  photoUrl: string;
  gentlePledge: string;
  bio: string;
  specialties: string[];
}

export default function TeamSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dentist' | 'hygienist'>('all');
  const [activeMobileId, setActiveMobileId] = useState<string | null>(null);

  const team: TeamMember[] = [
    {
      id: 'dr-elena-garza',
      name: 'Dr. Elena Garza, DDS',
      role: 'Lead General & Cosmetic Dentist',
      category: 'dentist',
      credentials: 'DDS, FAGD • Texas Dental License #31204',
      education: 'UT Health San Antonio School of Dentistry',
      experienceYears: 14,
      languages: ['English', 'Español'],
      photoUrl:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600',
      gentlePledge:
        '“I treat every patient with the gentle tenderness I would want for my own mother. No lectures, slow feathered anesthesia, and complete control in your hands at every moment.”',
      bio: 'Raised in the Rio Grande Valley, Dr. Garza founded Sweet Dental with a mission to eliminate dental shame. She completed advanced residency training in dental anxiety management, slow-drip painless local anesthesia, and minimally invasive biomimetic restorations that preserve natural tooth structure.',
      specialties: [
        'Slow Pain-Free Numbing',
        'Biomimetic Tooth-Colored Fillings',
        'Dental Anxiety Rehabilitation',
        'Crowns & Restorative Care',
      ],
    },
    {
      id: 'dr-marcus-vance',
      name: 'Dr. Marcus Vance, DMD',
      role: 'Pediatric & Family Dentist',
      category: 'dentist',
      credentials: 'DMD • Pediatric Dentistry Specialist',
      education: 'Texas A&M University College of Dentistry',
      experienceYears: 10,
      languages: ['English', 'Español'],
      photoUrl:
        'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=600',
      gentlePledge:
        '“A child’s first dental impressions last a lifetime. My goal is for every boy and girl to walk out smiling, holding a prize, and excited to come back for their next visit.”',
      bio: 'Dr. Vance specializes in compassionate pediatric behavior management and neurodivergent-friendly dental visits. He believes in the “tell-show-do” philosophy, ensuring kids feel completely safe while watching Netflix on ceiling displays during their exams.',
      specialties: [
        'Infant & Toddler First Visits',
        'Ceiling TV Distraction Care',
        'Gentle Nitrous Oxide (“Happy Air”)',
        'Protective Fluoride & Sealants',
      ],
    },
    {
      id: 'sofia-morales',
      name: 'Sofia Morales, RDH',
      role: 'Lead Registered Dental Hygienist',
      category: 'hygienist',
      credentials: 'RDH, BSDH • Certified Ultrasonic Specialist',
      education: 'University of Texas Rio Grande Valley (UTRGV)',
      experienceYears: 9,
      languages: ['English', 'Español'],
      photoUrl:
        'https://images.unsplash.com/photo-1594824813501-48c52084c688?auto=format&fit=crop&q=80&w=600',
      gentlePledge:
        '“Cleanings should never feel like an ordeal or an interrogation. I use fine-tuned warm ultrasonic water tips and warm blankets to ensure total relaxation.”',
      bio: 'Sofia is renowned across San Juan for her delicate, calming touch with patients suffering from sensitive teeth or gum tenderness. She educates patients with genuine encouragement rather than guilt, customizing at-home oral care plans for busy families.',
      specialties: [
        'Ultrasonic Gentle Cleanings',
        'Deep Periodontal Pocket Therapy',
        'Sensitivity Desensitizing Care',
        'Compassionate Patient Education',
      ],
    },
    {
      id: 'javier-trevino',
      name: 'Javier Treviño, RDH',
      role: 'Pediatric & Preventive Dental Hygienist',
      category: 'hygienist',
      credentials: 'RDH • Nitrous Oxide & CPR Certified',
      education: 'South Texas College Dental Hygiene Program',
      experienceYears: 7,
      languages: ['English', 'Español'],
      photoUrl:
        'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=600',
      gentlePledge:
        '“When cleaning little teeth, patience is everything. I turn every tool into a friendly character—the ‘water whistle’ and ‘electric tickle brush’—so children leave with high-fives.”',
      bio: 'Javier has a natural gift for calming nervous children and teens. Fluent in Spanish and English, he takes extra time to explain each instrument before touching a tooth, building trust that transforms anxious young patients into proud dental champions.',
      specialties: [
        'Child-Friendly “Tickle” Cleanings',
        'Enamel-Strengthening Varnish',
        'Sports Mouthguard Fittings',
        'Bilingual Family Guidance',
      ],
    },
  ];

  const filteredTeam = activeFilter === 'all'
    ? team
    : team.filter((member) => member.category === activeFilter);

  return (
    <section id="meet-the-team" className="py-20 sm:py-28 bg-[#F9F8F4] relative overflow-hidden">
      {/* Subtle decorative botanical blurs */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#387B75]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#C9944A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeIn className="max-w-2xl" duration={0.5} yOffset={20}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#387B75]/10 text-[#387B75] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#387B75]/20">
              <Heart className="w-3.5 h-3.5 fill-[#387B75]" />
              <span>Compassionate Care Providers</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight leading-tight">
              Meet the Gentle Hands & Hearts Behind{' '}
              <span className="italic font-normal text-[#387B75]">Sweet Dental</span>
            </h2>
            <p className="text-sm sm:text-base text-[#2D3A31]/80 mt-3 font-sans leading-relaxed">
              Hover over each team member to read their personal gentle philosophy, educational background, and clinical commitment to anxiety-free dentistry.
            </p>
          </FadeIn>

          {/* Filter Pills */}
          <FadeIn delay={0.1} duration={0.5} yOffset={20}>
            <div className="flex items-center gap-2 bg-[#EFEBE4] p-1.5 rounded-full border border-[#E6E2DA] shrink-0">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === 'all'
                    ? 'bg-[#2D3A31] text-white shadow-botanical-sm'
                    : 'text-[#2D3A31]/80 hover:text-[#2D3A31] hover:bg-white/60'
                }`}
              >
                All Team ({team.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('dentist')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === 'dentist'
                    ? 'bg-[#2D3A31] text-white shadow-botanical-sm'
                    : 'text-[#2D3A31]/80 hover:text-[#2D3A31] hover:bg-white/60'
                }`}
              >
                Dentists (2)
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('hygienist')}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  activeFilter === 'hygienist'
                    ? 'bg-[#2D3A31] text-white shadow-botanical-sm'
                    : 'text-[#2D3A31]/80 hover:text-[#2D3A31] hover:bg-white/60'
                }`}
              >
                Hygienists (2)
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredTeam.map((member, idx) => {
            const isMobileActive = activeMobileId === member.id;

            return (
              <FadeIn
                key={member.id}
                delay={idx * 0.08}
                duration={0.4}
                yOffset={20}
                className="h-full"
              >
                <div
                  className="group relative rounded-3xl bg-white border border-[#E6E2DA] overflow-hidden shadow-botanical-sm hover:shadow-botanical-lg transition-all duration-300 flex flex-col h-[520px]"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveMobileId(isMobileActive ? null : member.id);
                    }
                  }}
                >
                  {/* Photo Section with Aspect Ratio & Badges */}
                  <div className="relative h-64 w-full bg-[#EFEBE4] overflow-hidden shrink-0">
                    <Image
                      src={member.photoUrl}
                      alt={`${member.name}, ${member.role} at Sweet Dental`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient vignette for legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D3A31]/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-semibold text-[#387B75] uppercase tracking-wider shadow-sm border border-[#E6E2DA]/60">
                        <Sparkles className="w-3 h-3 text-[#387B75]" />
                        <span>{member.category === 'dentist' ? 'Doctor' : 'Hygienist'}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#2D3A31]/90 backdrop-blur-md text-[10px] font-medium text-[#F9F8F4] tracking-wider uppercase">
                        <Languages className="w-3 h-3 text-[#C9944A]" />
                        <span>EN / ES</span>
                      </span>
                    </div>

                    {/* Hover Prompt Hint */}
                    <div className="absolute bottom-3 right-3 sm:hidden">
                      <button
                        type="button"
                        onClick={() => setActiveMobileId(isMobileActive ? null : member.id)}
                        className="p-2 rounded-full bg-white/90 text-[#2D3A31] shadow-sm text-xs flex items-center gap-1"
                        aria-label="Toggle bio details"
                      >
                        <Info className="w-3.5 h-3.5 text-[#387B75]" />
                      </button>
                    </div>
                  </div>

                  {/* Card Body - Default State */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white relative">
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-[#387B75] font-semibold block mb-1">
                        {member.role}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-[#2D3A31] leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs text-[#8C9A84] mt-1 flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-[#C9944A] shrink-0" />
                        <span className="truncate">{member.education}</span>
                      </p>

                      <div className="mt-4 pt-3 border-t border-[#E6E2DA]/70">
                        <span className="text-[11px] font-semibold text-[#2D3A31] block mb-1">
                          Gentle Care Focus:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {member.specialties.slice(0, 2).map((item, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[10px] px-2 py-0.5 rounded-full bg-[#F9F8F4] border border-[#E6E2DA] text-[#2D3A31]/80"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Hover Prompt Cue on Desktop */}
                    <div className="pt-4 border-t border-[#E6E2DA]/70 flex items-center justify-between text-xs text-[#387B75] font-semibold group-hover:text-[#2D3A31] transition-colors">
                      <span className="text-[11px] uppercase tracking-wider flex items-center gap-1.5">
                        <Heart className="w-3 h-3 text-[#387B75]" />
                        <span>Hover for gentle bio</span>
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* OVERLAY HOVER STATE (Revealed on Desktop Hover & Mobile Tap) */}
                  <div
                    className={`absolute inset-0 bg-[#2D3A31] text-[#F9F8F4] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ease-in-out z-20 ${
                      isMobileActive
                        ? 'opacity-100 pointer-events-auto translate-y-0'
                        : 'opacity-0 pointer-events-none translate-y-4 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0'
                    }`}
                  >
                    <div className="space-y-4 overflow-y-auto pr-1">
                      {/* Close button for mobile */}
                      <div className="flex items-center justify-between pb-2 border-b border-[#4C5B50]">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-[#8C9A84] font-semibold block">
                            {member.category === 'dentist' ? 'Dentist Profile' : 'Hygienist Profile'}
                          </span>
                          <h4 className="font-serif text-lg font-semibold text-white">
                            {member.name}
                          </h4>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMobileId(null);
                          }}
                          className="sm:hidden text-xs text-[#8C9A84] underline"
                        >
                          Close
                        </button>
                      </div>

                      {/* Gentle Philosophy Pledge */}
                      <div className="bg-[#3C4A40]/70 border border-[#4C5B50] rounded-2xl p-3.5 relative">
                        <div className="flex items-center gap-1.5 text-xs text-[#C9944A] font-semibold uppercase tracking-wider mb-1.5">
                          <Heart className="w-3 h-3 fill-current" />
                          <span>Gentle Care Promise</span>
                        </div>
                        <p className="text-xs text-[#E6E2DA] leading-relaxed italic font-sans">
                          {member.gentlePledge}
                        </p>
                      </div>

                      {/* Professional Bio */}
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C9A84] block mb-1">
                          Background & Approach
                        </span>
                        <p className="text-xs text-[#E6E2DA]/90 leading-relaxed font-sans">
                          {member.bio}
                        </p>
                      </div>

                      {/* Specialties / Gentle Accreditations */}
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-semibold text-[#8C9A84] block mb-1.5">
                          Key Clinical Focus
                        </span>
                        <ul className="space-y-1 text-xs text-[#E6E2DA]/90">
                          {member.specialties.map((spec, sIdx) => (
                            <li key={sIdx} className="flex items-center gap-1.5 text-[11px]">
                              <CheckCircle2 className="w-3 h-3 text-[#387B75] shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Action CTA */}
                    <div className="pt-4 border-t border-[#4C5B50] mt-3">
                      <Link
                        href="/contact"
                        prefetch={true}
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#F9F8F4] text-[#2D3A31] hover:bg-[#387B75] hover:text-white transition-colors text-xs font-semibold uppercase tracking-wider shadow-sm"
                      >
                        <Calendar className="w-3.5 h-3.5 text-[#387B75]" />
                        <span>Book With Our Team</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* Gentle Practice Philosophy Callout Footer */}
        <FadeIn className="mt-14" delay={0.2} duration={0.5} yOffset={20}>
          <div className="rounded-3xl bg-[#EFEBE4] border border-[#E6E2DA] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#387B75]/10 text-[#387B75] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-semibold text-[#2D3A31]">
                  Our Continuous “Fear-Free” Clinical Training
                </h4>
                <p className="text-xs sm:text-sm text-[#2D3A31]/80 leading-relaxed font-sans mt-0.5">
                  Every doctor, hygienist, and assistant at Sweet Dental undergoes ongoing education in dental anxiety reduction, feather-light numbing, and compassionate communication.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shrink-0 shadow-botanical-sm"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9944A]" />
              <span>Schedule an Anxiety-Free Visit</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
