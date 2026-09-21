'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ScrollAnimation';
import {
  Heart,
  Shield,
  Sparkles,
  Smile,
  ArrowRight,
  Star,
  Clock,
  MapPin,
  Calendar,
  Phone,
} from 'lucide-react';

export default function HomeView() {
  const featuredServices = [
    {
      title: 'Pediatric Dental Care',
      tagline: 'Fun, gentle, fear-free visits for babies, kids & teens',
      icon: Smile,
      badge: 'Parent Favorite',
      highlight: 'Fluoride, sealants & positive dental habits',
      href: '/services',
    },
    {
      title: 'Preventive & Hygiene',
      tagline: 'Ultrasonic painless cleanings & digital low-radiation scans',
      icon: Shield,
      badge: 'Routine Care',
      highlight: 'Thorough gentle plaque removal & oral health check',
      href: '/services',
    },
    {
      title: 'Restorative Dentistry',
      tagline: 'Tooth-colored composite fillings & porcelain crowns',
      icon: Sparkles,
      badge: 'Pain-Free Repair',
      highlight: 'Strong, aesthetic restorations matching your natural teeth',
      href: '/services',
    },
    {
      title: 'Cosmetic Enhancements',
      tagline: 'Chairside teeth whitening, aligners & smile makeovers',
      icon: Heart,
      badge: 'Confidence Boost',
      highlight: 'Brighten and align your smile with zero enamel damage',
      href: '/services',
    },
  ];

  const reviewHighlights = [
    {
      author: 'Maria G. & Family',
      role: 'San Juan Resident',
      text: 'My 5-year-old daughter was terrified of dental visits. The staff at Sweet Dental spoke Spanish gently, put on her favorite movie on the ceiling TV, and she actually giggled during the cleaning! We will never go anywhere else.',
      treatment: 'Pediatric Checkup & Cleaning',
    },
    {
      author: 'Roberto D.',
      role: 'Pharr, TX',
      text: 'I hadn’t been to a dentist in over 8 years due to shame. The doctor didn’t judge me once. They numbed my gum so gently I didn’t feel a single pinch. Real pricing was given to me upfront before starting.',
      treatment: 'Restorative & Deep Cleaning',
    },
    {
      author: 'Clarissa M.',
      role: 'Alamo, TX',
      text: 'Having Saturday and evening hours until 7 PM is a lifesaver for working parents. Friendly front desk, spotlessly clean clinic, and fast insurance verification with our Medicaid plan.',
      treatment: 'Family Checkups & Routine Care',
    },
  ];

  return (
    <div className="bg-[#F9F8F4] text-[#2D3A31]">
      {/* 1. Hero Section (Home) */}
      <Hero />

      {/* 2. Services Section (After Home: Services) */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn className="max-w-2xl" duration={0.5} yOffset={20}>
              <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-3 block">
                Comprehensive Dentistry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight leading-tight">
                Gentle Care for Every Smile
              </h2>
              <p className="text-sm sm:text-base text-[#2D3A31]/75 mt-3 font-sans">
                From a toddler’s first preventive visit to complete cosmetic enhancements, we provide tailored dental care under one roof.
              </p>
            </FadeIn>

            <FadeIn delay={0.1} duration={0.5} yOffset={20}>
              <Link
                href="/services"
                prefetch={true}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#EFEBE4] text-[#2D3A31] hover:bg-[#2D3A31] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider shrink-0"
              >
                <span>View All Services & FAQ</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.08}>
            {featuredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="p-7 rounded-3xl bg-[#F9F8F4] border border-[#E6E2DA] flex flex-col justify-between h-full hover:shadow-botanical-md transition-all duration-300 group">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-[#387B75]/10 text-[#387B75] flex items-center justify-center group-hover:bg-[#387B75] group-hover:text-white transition-colors duration-300">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white border border-[#E6E2DA] text-[#8C9A84]">
                          {service.badge}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl font-semibold text-[#2D3A31] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#2D3A31]/75 leading-relaxed mb-6 font-sans">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E6E2DA]">
                      <div className="text-[11px] text-[#8C9A84] mb-3">
                        {service.highlight}
                      </div>
                      <Link
                        href={service.href}
                        prefetch={true}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#387B75] hover:text-[#2D3A31] transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 3. Hours and Contact Section (After Services: Hours and Contact) */}
      <section className="py-20 sm:py-28 bg-[#F9F8F4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="rounded-3xl bg-[#2D3A31] text-[#F9F8F4] p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-botanical-lg" duration={0.5} yOffset={24}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#387B75]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-7">
                <span className="text-xs uppercase tracking-widest font-semibold text-[#8C9A84] mb-3 block">
                  San Juan Dental Clinic
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 leading-tight">
                  Evenings & Saturdays Built Around Your Family’s Schedule
                </h2>
                <p className="text-sm sm:text-base text-[#E6E2DA]/80 leading-relaxed mb-6 font-sans">
                  No need to take time off work or pull children from school. We are open Monday & Wednesday evenings until 7:00 PM and Saturdays from 9:00 AM to 3:00 PM.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#E6E2DA]/90 mb-8">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C9944A] shrink-0" />
                    <span>108 State Hwy 495 Ste b, San Juan, TX</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#387B75] shrink-0" />
                    <span>Mon & Wed to 7 PM • Sat 9 AM – 3 PM</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/contact"
                    prefetch={true}
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#F9F8F4] text-[#2D3A31] hover:bg-white hover:text-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shadow-botanical-sm"
                  >
                    <Calendar className="w-4 h-4 text-[#387B75]" />
                    <span>Book Your Visit Online</span>
                  </Link>
                  <a
                    href="tel:+19568002233"
                    className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-[#8C9A84] text-[#F9F8F4] hover:bg-[#3C4A40] transition-colors text-xs font-semibold uppercase tracking-wider"
                  >
                    <Phone className="w-4 h-4 text-[#C9944A]" />
                    <span>Call +1 (956) 800-2233</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#3C4A40]/50 border border-[#4C5B50] rounded-2xl p-6 sm:p-8">
                <h4 className="font-serif text-lg font-semibold text-white mb-4">
                  Weekly Operating Schedule
                </h4>
                <div className="space-y-2.5 text-xs text-[#E6E2DA]/90">
                  <div className="flex justify-between py-1.5 border-b border-[#4C5B50]/60">
                    <span className="font-medium text-white">Monday & Wednesday</span>
                    <span className="text-[#C9944A] font-semibold">10:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#4C5B50]/60">
                    <span>Tuesday & Thursday</span>
                    <span>9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#4C5B50]/60">
                    <span>Friday</span>
                    <span>9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-[#4C5B50]/60">
                    <span className="font-medium text-white">Saturday</span>
                    <span className="text-[#C9944A] font-semibold">9:00 AM – 3:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-[#8C9A84]">Sunday</span>
                    <span className="text-[#8C9A84]">Closed for Family</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#4C5B50]/60 flex items-center justify-between text-xs">
                  <span className="text-[#8C9A84]">Need same-day triage?</span>
                  <Link href="/contact" prefetch={true} className="text-[#C9944A] hover:underline font-medium">
                    Contact Us →
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. About Section (After Hours and Contact: About) */}
      <section className="py-20 sm:py-28 bg-[#FFFFFF] border-t border-b border-[#E6E2DA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why Patients Trust Us */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-16" duration={0.5} yOffset={24}>
            <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-3 block">
              The Sweet Dental Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
              Why San Juan Families{' '}
              <span className="italic font-normal text-[#387B75]">Trust Us</span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#2D3A31]/75 leading-relaxed">
              We know dental anxiety is real. Our entire team is trained to deliver calm, judgment-free care with modern gentle techniques.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
            {/* Pillar 1 */}
            <StaggerItem>
              <div className="p-8 rounded-3xl bg-[#F9F8F4] border border-[#E6E2DA] h-full flex flex-col justify-between hover:shadow-botanical-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#387B75]/10 text-[#387B75] flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2D3A31] mb-3">
                    Zero Scolding & Judgment
                  </h3>
                  <p className="text-sm text-[#2D3A31]/80 leading-relaxed font-sans mb-4">
                    Life happens. Whether it has been six months or fifteen years since your last dental visit, we greet you with compassion and support—never guilt.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E6E2DA] text-xs font-semibold text-[#387B75]">
                  Safe, Welcoming Atmosphere
                </div>
              </div>
            </StaggerItem>

            {/* Pillar 2 */}
            <StaggerItem>
              <div className="p-8 rounded-3xl bg-[#F9F8F4] border border-[#E6E2DA] h-full flex flex-col justify-between hover:shadow-botanical-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#387B75]/10 text-[#387B75] flex items-center justify-center mb-6">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2D3A31] mb-3">
                    Gentle, Pain-Free Techniques
                  </h3>
                  <p className="text-sm text-[#2D3A31]/80 leading-relaxed font-sans mb-4">
                    We take extra time to ensure you are completely numb before beginning. Our feather-light touch and slow anesthesia ensure your comfort throughout.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E6E2DA] text-xs font-semibold text-[#387B75]">
                  Ceiling Netflix & Warm Blankets
                </div>
              </div>
            </StaggerItem>

            {/* Pillar 3 */}
            <StaggerItem>
              <div className="p-8 rounded-3xl bg-[#F9F8F4] border border-[#E6E2DA] h-full flex flex-col justify-between hover:shadow-botanical-md transition-all duration-300">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#C9944A]/10 text-[#C9944A] flex items-center justify-center mb-6">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#2D3A31] mb-3">
                    Upfront, Honest Pricing
                  </h3>
                  <p className="text-sm text-[#2D3A31]/80 leading-relaxed font-sans mb-4">
                    No surprise charges or hidden medical bills. We verify out-of-network and in-network insurance benefits, Medicaid, and CHIP before treatment begins.
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E6E2DA] text-xs font-semibold text-[#C9944A]">
                  Total Financial Transparency
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Patient Reviews Spotlight */}
          <div className="mt-20 pt-16 border-t border-[#E6E2DA]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
              <FadeIn duration={0.5} yOffset={20}>
                <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-2 block">
                  Real Stories from Real Neighbors
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2D3A31] font-semibold tracking-tight">
                  Over 760 Five-Star Experiences
                </h3>
              </FadeIn>

              <FadeIn delay={0.1} duration={0.5} yOffset={20}>
                <div className="flex items-center gap-3 bg-[#F9F8F4] px-5 py-3 rounded-2xl border border-[#E6E2DA]">
                  <div className="flex text-[#C9944A]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <div className="text-xs font-semibold text-[#2D3A31]">
                    4.9 Rating on Google
                  </div>
                </div>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8" staggerDelay={0.12}>
              {reviewHighlights.map((review, i) => (
                <StaggerItem key={i}>
                  <div className="p-7 rounded-3xl bg-[#F9F8F4] border border-[#E6E2DA] flex flex-col justify-between h-full hover:shadow-botanical-sm transition-all">
                    <div>
                      <div className="flex text-[#C9944A] mb-4">
                        {[...Array(5)].map((_, starIdx) => (
                          <Star key={starIdx} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <p className="text-xs sm:text-sm text-[#2D3A31]/85 leading-relaxed italic mb-6">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#E6E2DA]/80">
                      <strong className="block text-sm text-[#2D3A31] font-semibold">
                        {review.author}
                      </strong>
                      <span className="text-xs text-[#8C9A84] block mt-0.5">
                        {review.role} • {review.treatment}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <FadeIn className="mt-14 text-center" delay={0.2} duration={0.5} yOffset={20}>
            <Link
              href="/about"
              prefetch={true}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shadow-botanical-sm group"
            >
              <span>Discover Our Full Story, Mission & Amenities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
