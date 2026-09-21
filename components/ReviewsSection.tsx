'use client';

import React, { useState } from 'react';
import { Star, CheckCircle, Quote, ThumbsUp, Heart, Sparkles, Filter } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ScrollAnimation';

interface Testimonial {
  id: string;
  author: string;
  city: string;
  category: 'kids' | 'staff' | 'painless';
  date: string;
  rating: number;
  highlight: string;
  quote: string;
  treatment: string;
  verified: boolean;
}

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    author: 'Karina Rodriguez',
    city: 'San Juan, TX',
    category: 'kids',
    date: '2 weeks ago',
    rating: 5,
    highlight: 'My toddler actually smiled through her entire checkup!',
    quote:
      'I was so worried about bringing my 3-year-old for her first dental check-up because she gets terrified of doctors. The dental assistant was an absolute angel—she sang Disney songs, showed her Mr. Thirsty the suction straw, and gave her a ring from the treasure chest. Gentle treatment of young children is their superpower here!',
    treatment: 'Pediatric First Visit & Cleaning',
    verified: true,
  },
  {
    id: '2',
    author: 'Daniel Garza',
    city: 'Alamo, TX',
    category: 'staff',
    date: '1 month ago',
    rating: 5,
    highlight: 'The friendliest front desk and assistants you will ever meet',
    quote:
      'From the moment you walk through the door, the staff greets you like family. No cold clinic vibes. The dental assistants are so attentive, checking if you need a blanket or if you want to change what’s playing on the ceiling TV. They also explained every dollar of my insurance beforehand with zero surprises.',
    treatment: 'Routine Check-up & Deep Cleaning',
    verified: true,
  },
  {
    id: '3',
    author: 'Sylvia Menchaca',
    city: 'Pharr, TX',
    category: 'painless',
    date: '3 weeks ago',
    rating: 5,
    highlight: 'Overcame 10 years of dental anxiety in just one visit',
    quote:
      'I avoided the dentist for over a decade because of bad past experiences. Dr. and the team at Sweet Dental completely changed my life. They used a gentle numbing technique that I honestly never felt. They paused whenever I gave a thumbs-up or down. Zero pain, zero judgment.',
    treatment: 'Tooth-Colored Fillings & Restoration',
    verified: true,
  },
  {
    id: '4',
    author: 'Maricela Treviño',
    city: 'San Juan, TX',
    category: 'kids',
    date: '2 months ago',
    rating: 5,
    highlight: 'Convenient Saturday appointments for our whole family',
    quote:
      'Finding a clinic that opens on Saturdays and has late Wednesday evenings is a lifesaver for working parents. We scheduled all 3 of our kids back-to-back. The assistants made it feel like a fun outing. The kids left asking when their 6-month checkup is!',
    treatment: 'Family Pediatric Check-ups',
    verified: true,
  },
  {
    id: '5',
    author: 'Eduardo Cantu',
    city: 'McAllen, TX',
    category: 'staff',
    date: '1 month ago',
    rating: 5,
    highlight: 'Amazing dental assistants and zero lobby wait time',
    quote:
      'I submitted my paperwork online the morning of, arrived at 108 State Hwy 495, and was seated in under 3 minutes. The assistant took digital photos and walked me through each tooth on the screen before the doctor came in. Extremely professional, clean, and warm.',
    treatment: 'Preventative Exam & X-Rays',
    verified: true,
  },
  {
    id: '6',
    author: 'Brenda L.',
    city: 'San Juan, TX',
    category: 'painless',
    date: 'Just recently',
    rating: 5,
    highlight: 'Gentle, transparent, and beautiful clinic atmosphere',
    quote:
      'The clinic smells like lavender, has comfortable seating, and feels more like a relaxing wellness spa than a dental office. The gentle care they took during my cavity filling was unmatched. Truly grateful to have Sweet Dental right here in San Juan.',
    treatment: 'Cavity Treatment & Sealant',
    verified: true,
  },
];

export default function ReviewsSection() {
  const [filter, setFilter] = useState<'all' | 'kids' | 'staff' | 'painless'>('all');

  const filteredTestimonials =
    filter === 'all'
      ? testimonialsData
      : testimonialsData.filter((t) => t.category === filter);

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Hero Badge */}
        <FadeIn className="max-w-4xl mx-auto mb-16 text-center" duration={0.5} yOffset={24}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFEBE4] border border-[#E6E2DA] mb-4 shadow-botanical-sm">
            <span className="w-2 h-2 rounded-full bg-[#387B75] animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-semibold text-[#387B75]">
              Patient Praise & Verified Feedback
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
            Loved by Over{' '}
            <span className="italic font-normal text-[#387B75]">760 Local Families</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2D3A31]/75 max-w-2xl mx-auto leading-relaxed mb-8">
            Read firsthand experiences from parents, toddlers, and adults who made Sweet Dental
            their dental home in San Juan and the Rio Grande Valley.
          </p>

          {/* 4.9 Rating Highlight Showcase Box */}
          <div className="rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-6 sm:p-8 shadow-botanical-md max-w-3xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center divide-y sm:divide-y-0 sm:divide-x divide-[#E6E2DA]">
              {/* Score Col */}
              <div className="flex flex-col items-center">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl sm:text-6xl font-bold text-[#2D3A31]">
                    4.9
                  </span>
                  <span className="text-lg text-[#8C9A84] font-medium">/ 5.0</span>
                </div>
                <div className="flex items-center gap-1 text-[#C9944A] my-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9944A]" />
                  ))}
                </div>
                <span className="text-xs text-[#2D3A31]/70 font-medium">
                  Based on 760+ Google Patient Reviews
                </span>
              </div>

              {/* Staff & Pediatric Praise Metric */}
              <div className="flex flex-col items-center pt-4 sm:pt-0 px-2 text-center">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#387B75] mb-1">
                  99.4%
                </span>
                <span className="text-xs font-semibold text-[#2D3A31] uppercase tracking-wider mb-1">
                  Friendly Staff & Assistants
                </span>
                <span className="text-[11px] text-[#8C9A84]">
                  Recognized for patience, warm welcoming & gentle touch
                </span>
              </div>

              {/* Wait Time Metric */}
              <div className="flex flex-col items-center pt-4 sm:pt-0 px-2 text-center">
                <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#C9944A] mb-1">
                  &lt; 5 min
                </span>
                <span className="text-xs font-semibold text-[#2D3A31] uppercase tracking-wider mb-1">
                  Average Wait Time
                </span>
                <span className="text-[11px] text-[#8C9A84]">
                  Prompt seating & seamless pre-verified insurance
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Filter Pills */}
        <FadeIn className="flex flex-wrap items-center justify-center gap-2.5 mb-12" delay={0.1} duration={0.5} yOffset={16}>
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === 'all'
                ? 'bg-[#2D3A31] text-white shadow-botanical-sm'
                : 'bg-white border border-[#E6E2DA] text-[#2D3A31]/80 hover:bg-[#EFEBE4]'
            }`}
          >
            All Reviews ({testimonialsData.length})
          </button>
          <button
            type="button"
            onClick={() => setFilter('kids')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === 'kids'
                ? 'bg-[#2D3A31] text-white shadow-botanical-sm'
                : 'bg-white border border-[#E6E2DA] text-[#2D3A31]/80 hover:bg-[#EFEBE4]'
            }`}
          >
            Gentle for Young Children
          </button>
          <button
            type="button"
            onClick={() => setFilter('staff')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === 'staff'
                ? 'bg-[#2D3A31] text-white shadow-botanical-sm'
                : 'bg-white border border-[#E6E2DA] text-[#2D3A31]/80 hover:bg-[#EFEBE4]'
            }`}
          >
            Friendly Staff & Assistants
          </button>
          <button
            type="button"
            onClick={() => setFilter('painless')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              filter === 'painless'
                ? 'bg-[#2D3A31] text-white shadow-botanical-sm'
                : 'bg-white border border-[#E6E2DA] text-[#2D3A31]/80 hover:bg-[#EFEBE4]'
            }`}
          >
            Painless & Anxiety Relief
          </button>
        </FadeIn>

        {/* Testimonials Masonry / Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" staggerDelay={0.08}>
          {filteredTestimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id} yOffset={24} duration={0.5} className="h-full">
              <div
                className="rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-7 sm:p-8 shadow-botanical-sm hover:shadow-botanical-lg transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Header: Stars & Google Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-[#C9944A]">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C9944A]" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#387B75] bg-[#387B75]/10 px-2.5 py-0.5 rounded-full">
                      <CheckCircle className="w-3 h-3 text-[#387B75]" />
                      <span>Google Patient</span>
                    </span>
                  </div>

                  {/* Highlight */}
                  <h4 className="font-serif text-lg font-semibold text-[#2D3A31] mb-3 leading-snug">
                    &ldquo;{testimonial.highlight}&rdquo;
                  </h4>

                  {/* Main Quote */}
                  <p className="font-sans text-xs sm:text-sm text-[#2D3A31]/80 leading-relaxed mb-6">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author & Treatment */}
                <div className="pt-4 border-t border-[#E6E2DA] flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-xs text-[#2D3A31] block">
                      {testimonial.author}
                    </span>
                    <span className="text-[11px] text-[#8C9A84]">
                      {testimonial.city} • {testimonial.treatment}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#8C9A84]/70 uppercase font-medium">
                    {testimonial.date}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Leave a review / Community notice */}
        <FadeIn className="mt-12 text-center text-xs text-[#8C9A84]" delay={0.15} duration={0.5} yOffset={20}>
          <span>Are you an existing Sweet Dental patient? We love hearing your feedback! </span>
          <a
            href="https://maps.google.com/?q=108+State+Hwy+495+Ste+b,+San+Juan,+TX+78589"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#387B75] font-semibold underline underline-offset-4 hover:text-[#2D3A31] transition-colors"
          >
            Leave a Google Review
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
