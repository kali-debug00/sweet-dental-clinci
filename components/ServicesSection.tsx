'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sparkles, Shield, HeartHandshake, Smile, Check, ArrowRight, X, Calendar, Clock, HelpCircle } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/ScrollAnimation';

interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  idealFor: string;
  duration: string;
  image: string;
  procedures: string[];
  gentleApproach: string[];
  faq: { q: string; a: string };
}

const servicesData: ServiceDetail[] = [
  {
    id: 'general-cleaning',
    title: 'General Dental Check-ups & Cleanings',
    tagline: 'Gentle ultrasonic hygiene & thorough preventative wellness',
    description:
      'Healthy smiles begin with unhurried preventive care. Our gentle cleanings remove plaque and tartar without scraping discomfort, accompanied by ultra-low radiation digital X-rays and full gum health evaluations.',
    badge: 'Preventative Care',
    idealFor: 'Adults, Teens & Children (Every 6 Months)',
    duration: '45 – 60 Minutes',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    procedures: [
      'Gentle ultrasonic scaling & polishing',
      'Low-dose digital cavity detection X-rays',
      'Oral cancer and gum tissue wellness check',
      'Personalized enamel remineralization & hygiene advice',
    ],
    gentleApproach: [
      'Topical numbing gel available on request for sensitive teeth',
      'No-judgment approach to lapsed appointments',
      'Full visual tour of your teeth with intraoral camera',
    ],
    faq: {
      q: 'Will my cleaning hurt if I have sensitive gums?',
      a: 'Not at all. We utilize feather-light ultrasonic instruments and can apply soothing desensitizing gels beforehand to ensure complete comfort.',
    },
  },
  {
    id: 'pediatric-dentistry',
    title: 'Pediatric & Family Dentistry',
    tagline: 'Warm, positive dental milestones for infants, toddlers, & kids',
    description:
      'We turn dental visits into positive adventures! From baby teeth examinations to protective dental sealants and teen orthodontics checks, our patient assistants make young patients feel proud and confident.',
    badge: 'Kids & Families',
    idealFor: 'Ages 1 to 18 & Whole Family Appointments',
    duration: '30 – 45 Minutes',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    procedures: [
      'Infant & toddler "Happy Visits" (Ages 1+)',
      'Tooth-protecting fluoride varnishes & BPA-free sealants',
      'Gentle cavity treatment & space maintainers',
      'Custom sports mouthguards for young athletes',
    ],
    gentleApproach: [
      'Child-friendly terms ("sugar bugs" and "tooth counter")',
      'Ceiling screens broadcasting cartoons during care',
      'Treasure chest toy reward at the end of every visit',
    ],
    faq: {
      q: 'When should my child visit the dentist for the first time?',
      a: 'The American Academy of Pediatric Dentistry recommends bringing your child when their first tooth erupts or by their first birthday. We keep first visits fun and stress-free!',
    },
  },
  {
    id: 'restorative-care',
    title: 'Restorative Care (Fillings & Cavity Treatments)',
    tagline: 'Natural-looking, pain-free tooth restoration & repair',
    description:
      'If you have a cavity or damaged tooth, our conservative restorative treatments restore strength and beauty seamlessly. We use modern, tooth-colored composite resins that blend flawlessly with your natural smile.',
    badge: 'Painless Restoration',
    idealFor: 'Toothaches, Cavities, Chipped Teeth & Worn Enamel',
    duration: '45 – 90 Minutes',
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    procedures: [
      'Tooth-colored composite fillings (100% Mercury-Free)',
      'Gentle pediatric restorations & stainless crowns',
      'Custom ceramic dental crowns and bridges',
      'Emergency toothache diagnostics and relief',
    ],
    gentleApproach: [
      'Pre-numbing warming technology for near-imperceptible injections',
      'Frequent check-ins and hand-signal pause system',
      'Precision microscopes that preserve maximum natural tooth enamel',
    ],
    faq: {
      q: 'How noticeable are the tooth-colored fillings?',
      a: 'They are virtually invisible! We custom-shade match the biocompatible resin to the exact hue and translucency of your natural tooth.',
    },
  },
  {
    id: 'patient-consultations',
    title: 'Patient-Centered Consultations',
    tagline: 'Dedicated 1-on-1 smile roadmap & anxiety-free guidance',
    description:
      'Have questions about your oral health, cosmetic whitening, or treatment alternatives? Our unhurried consultations give you dedicated time with the doctor to explore your goals, review digital photos, and receive upfront pricing.',
    badge: '1-on-1 Guidance',
    idealFor: 'New Patients, Second Opinions & Smile Enhancements',
    duration: '30 – 40 Minutes',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
    procedures: [
      'Comprehensive digital photography smile assessments',
      'Anxiety management & mild sedation planning',
      'Professional enamel-safe teeth whitening consultations',
      'Second opinions with full insurance benefit coordination',
    ],
    gentleApproach: [
      'Sit face-to-face in a calm consultation setting—not laid back in a chair',
      'Clear transparent printed fee breakdowns',
      'Zero high-pressure sales—take all the time you need to decide',
    ],
    faq: {
      q: 'Can I just come in to talk about my dental anxiety first?',
      a: 'Yes, absolutely! Many of our patients begin with a simple chat consultation. We never start any treatment until you feel completely safe and confident.',
    },
  },
];

export default function ServicesSection() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setSelectedService(null);
    const formElement = document.getElementById('appointment-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/contact#appointment-form');
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] border-t border-[#E6E2DA]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" duration={0.5} yOffset={24}>
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-3 block">
            Our Gentle Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
            Comprehensive Dentistry,{' '}
            <span className="italic font-normal text-[#387B75]">Delivered with Warmth</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2D3A31]/75 leading-relaxed">
            From your toddler’s very first baby tooth to lifelong restorative care, we provide
            gentle treatments tailored to every stage of life in our San Juan clinic.
          </p>
        </FadeIn>

        {/* 2x2 Core Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10" staggerDelay={0.12}>
          {servicesData.map((service) => (
            <StaggerItem key={service.id} yOffset={24} duration={0.5} className="h-full">
              <div
                className="rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-7 sm:p-9 shadow-botanical-sm hover:shadow-botanical-lg transition-all duration-500 ease-out hover:-translate-y-1.5 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Header row: badge and duration */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="text-xs font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#387B75]/10 text-[#387B75] border border-[#387B75]/20">
                      {service.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-[#8C9A84]">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-serif text-2xl sm:text-[1.65rem] text-[#2D3A31] font-semibold mb-2 group-hover:text-[#387B75] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-[#C9944A] uppercase tracking-wide mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#2D3A31]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Procedures Checklist */}
                  <div className="bg-[#F9F8F4] p-4 sm:p-5 rounded-2xl border border-[#E6E2DA] mb-6">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2D3A31]/70 block mb-2.5">
                      What is Included:
                    </span>
                    <ul className="space-y-2">
                      {service.procedures.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#2D3A31]/90">
                          <Check className="w-3.5 h-3.5 text-[#387B75] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-[#E6E2DA] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#387B75] hover:text-[#2D3A31] transition-colors py-2"
                  >
                    <span>View Details & Expectations</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <Link
                    href="/contact#appointment-form"
                    className="px-4 py-2 rounded-full bg-[#EFEBE4] text-[#2D3A31] hover:bg-[#2D3A31] hover:text-white transition-all text-xs font-semibold uppercase tracking-wider"
                  >
                    Book
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Pediatric & Family Reassurance Banner */}
        <FadeIn className="mt-12 rounded-3xl bg-[#EFEBE4] border border-[#E6E2DA] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-botanical-sm" delay={0.15} duration={0.5} yOffset={24}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#387B75] text-white flex items-center justify-center shrink-0 shadow-botanical-sm">
              <Smile className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#2D3A31]">
                Need Same-Day Emergency Relief or Gentle Pediatric First Visit?
              </h4>
              <p className="text-xs sm:text-sm text-[#2D3A31]/75">
                We accommodate urgent toothache emergencies and family bundle visits every week.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href="tel:+19568002233"
              className="w-full md:w-auto text-center px-6 py-3 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-colors text-xs font-semibold tracking-wider uppercase shadow-botanical-sm"
            >
              Call (956) 800-2233
            </a>
          </div>
        </FadeIn>
      </div>

      {/* Interactive Service Detail Modal / Drawer */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2D3A31]/60 backdrop-blur-sm animate-in fade-in duration-300"
        >
          <div className="relative w-full max-w-2xl bg-[#F9F8F4] rounded-3xl border border-[#E6E2DA] shadow-botanical-xl overflow-hidden max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="p-6 sm:p-7 border-b border-[#E6E2DA] bg-white flex items-start justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#387B75] block mb-1">
                  {selectedService.badge} • {selectedService.idealFor}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#2D3A31] font-semibold">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-[#EFEBE4] text-[#2D3A31] transition-colors"
                aria-label="Close service details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8C9A84] mb-2">
                  Overview
                </h4>
                <p className="text-sm text-[#2D3A31]/80 leading-relaxed font-sans">
                  {selectedService.description}
                </p>
              </div>

              {/* Procedures included */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] mb-3">
                  Key Procedures & Diagnostics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.procedures.map((proc, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white border border-[#E6E2DA] text-xs text-[#2D3A31]">
                      <Check className="w-3.5 h-3.5 text-[#387B75] shrink-0" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Gentle Promise */}
              <div className="p-5 rounded-2xl bg-[#387B75]/10 border border-[#387B75]/20">
                <div className="flex items-center gap-2 mb-2 text-[#387B75]">
                  <Sparkles className="w-4 h-4" />
                  <h4 className="text-xs font-semibold uppercase tracking-wider">
                    Our Gentle Comfort Promise
                  </h4>
                </div>
                <ul className="space-y-1.5 text-xs text-[#2D3A31]/90">
                  {selectedService.gentleApproach.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#387B75]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common FAQ */}
              <div className="p-4 rounded-2xl bg-[#EFEBE4] border border-[#E6E2DA]">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#C9944A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold text-[#2D3A31] mb-1">
                      {selectedService.faq.q}
                    </h5>
                    <p className="text-xs text-[#2D3A31]/80 leading-relaxed">
                      {selectedService.faq.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 sm:p-6 border-t border-[#E6E2DA] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs text-[#8C9A84]">
                <span>Typical visit: </span>
                <strong className="text-[#2D3A31]">{selectedService.duration}</strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full border border-[#8C9A84] text-xs font-semibold uppercase tracking-wider text-[#2D3A31]"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => handleSelectServiceForBooking(selectedService.title)}
                  className="w-1/2 sm:w-auto px-6 py-2.5 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shadow-botanical-sm"
                >
                  Book This Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
