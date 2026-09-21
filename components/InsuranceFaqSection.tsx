'use client';

import React, { useState } from 'react';
import { ChevronDown, Shield, CreditCard, Sparkles, HeartHandshake, Phone } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 'kids-calm',
    question: 'How do you keep young children and toddlers calm during their appointment?',
    answer:
      'We use a gentle "Tell-Show-Do" technique. Before placing any instrument in your child’s mouth, we show it to them, explain it in playful terms (like "Mr. Thirsty" for the suction straw), and let them count teeth with us. Kids can watch their favorite cartoons on overhead ceiling screens, wrap themselves in warm cozy blankets, and pick a toy from our treasure chest after their visit.',
  },
  {
    id: 'anxiety-relief',
    question: 'I haven’t been to the dentist in years and have severe dental anxiety. How do you handle that?',
    answer:
      'You are in safe hands with zero judgment. A huge portion of our 760+ five-star reviews come from adults who avoided dental care for years. We start with a relaxed face-to-face consultation to understand your fears. During treatments, we use gentle pre-numbing gels, establish a simple hand-signal pause system, and move at your exact comfort pace. We never rush.',
  },
  {
    id: 'evening-saturday',
    question: 'How do your evening and Saturday appointments work?',
    answer:
      'We know working parents and busy families can rarely take time off during regular business hours. That is why Sweet Dental stays open until 7:00 PM on Mondays and Wednesdays, and offers Saturday morning and afternoon appointments (9:00 AM – 3:00 PM). These slots fill up fast, so we encourage requesting your spot in advance.',
  },
  {
    id: 'insurance-coverage',
    question: 'What insurances and payment plans do you accept?',
    answer:
      'We are in-network with most major dental PPO plans (including Delta Dental, MetLife, Cigna, Guardian, Aetna, Humana, BCBS, and United Concordia). We also proudly accept Texas Medicaid and CHIP for pediatric patients! For out-of-pocket costs, we provide upfront printed cost breakdowns and offer 0% interest flexible payment plans through CareCredit.',
  },
  {
    id: 'emergency-visits',
    question: 'What should I do if I or my child has a dental emergency?',
    answer:
      'Call our clinic immediately at +1 (956) 800-2233. We reserve daily emergency slots for sudden severe toothaches, chipped teeth, knocked-out teeth, or pediatric falls. We prioritize quick relief so nobody has to stay in pain.',
  },
];

const insuranceList = [
  'Texas Medicaid (Kids)',
  'CHIP Dental',
  'Delta Dental PPO',
  'Cigna Dental',
  'MetLife',
  'Guardian',
  'Aetna Dental',
  'Humana',
  'United Concordia',
  'CareCredit 0% Financing',
];

export default function InsuranceFaqSection() {
  const [openFaq, setOpenFaq] = useState<string | null>('kids-calm');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section id="insurance-faq" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] border-t border-[#E6E2DA]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 sm:mb-20" duration={0.5} yOffset={24}>
          <span className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-[#387B75] mb-3 block">
            Transparency & Common Questions
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
            Insurance, Payments &{' '}
            <span className="italic font-normal text-[#387B75]">Peace of Mind</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#2D3A31]/75 leading-relaxed">
            We believe dental care should be straightforward, affordable, and transparent.
            Here is everything you need to know about insurances, financing, and what to expect.
          </p>
        </FadeIn>

        {/* Insurance Partners Bar */}
        <FadeIn className="rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-7 sm:p-9 shadow-botanical-sm mb-16" delay={0.1} duration={0.5} yOffset={24}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-[#E6E2DA]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#387B75]/10 text-[#387B75] flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#2D3A31]">
                  Accepted Insurances & Financing
                </h3>
                <span className="text-xs text-[#8C9A84]">
                  Direct electronic claim filing and complimentary benefit verification
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#387B75]/10 text-[#387B75]">
                Medicaid & CHIP Accepted for Kids
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {insuranceList.map((ins, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA] text-center flex items-center justify-center text-xs font-semibold text-[#2D3A31] hover:bg-[#EFEBE4] transition-colors"
              >
                {ins}
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 text-center text-xs text-[#8C9A84]">
            Don’t see your insurance listed? Call us at{' '}
            <a href="tel:+19568002233" className="font-semibold text-[#387B75] underline">
              +1 (956) 800-2233
            </a>
            —we verify out-of-network benefits and provide custom estimates for every plan!
          </div>
        </FadeIn>

        {/* FAQs Accordion Grid */}
        <FadeIn className="max-w-4xl mx-auto space-y-4" delay={0.15} duration={0.5} yOffset={24}>
          {faqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] overflow-hidden transition-all duration-300 shadow-botanical-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 hover:bg-[#F9F8F4] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-semibold text-[#2D3A31] leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-[#E6E2DA] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#387B75] text-white border-[#387B75]' : 'text-[#8C9A84]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 pt-1 border-t border-[#E6E2DA]/50 animate-in fade-in duration-300">
                    <p className="font-sans text-sm text-[#2D3A31]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </FadeIn>

        {/* Still Have Questions CTA */}
        <FadeIn className="mt-14 text-center" delay={0.2} duration={0.5} yOffset={20}>
          <p className="text-sm text-[#2D3A31]/80 mb-3">
            Have a unique situation or want to speak with our treatment coordinator?
          </p>
          <a
            href="tel:+19568002233"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#8C9A84] text-[#2D3A31] hover:bg-[#2D3A31] hover:text-white transition-colors text-xs font-semibold tracking-wider uppercase"
          >
            <Phone className="w-4 h-4 text-[#387B75]" />
            <span>Speak with Our Team: +1 (956) 800-2233</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
