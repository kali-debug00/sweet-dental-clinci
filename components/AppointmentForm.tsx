'use client';

import React, { useState } from 'react';
import { Calendar, Clock, Phone, User, Mail, Sparkles, CheckCircle2, ShieldCheck, Heart, AlertCircle, RefreshCw } from 'lucide-react';
import { FadeIn } from '@/components/ScrollAnimation';

interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  patientType: 'adult' | 'pediatric' | 'family';
  service: string;
  preferredDay: string;
  preferredTime: string;
  comfortNotes: string[];
  additionalNotes: string;
}

const initialFormData: BookingFormData = {
  fullName: '',
  phone: '',
  email: '',
  patientType: 'pediatric',
  service: 'General Dental Check-ups & Cleanings',
  preferredDay: 'Monday (Evening available)',
  preferredTime: 'Evening (4:00 PM – 7:00 PM)',
  comfortNotes: [],
  additionalNotes: '',
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<{
    refNumber: string;
    data: BookingFormData;
  } | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter patient name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter phone number';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleToggleComfort = (note: string) => {
    setFormData((prev) => {
      const exists = prev.comfortNotes.includes(note);
      return {
        ...prev,
        comfortNotes: exists
          ? prev.comfortNotes.filter((n) => n !== note)
          : [...prev.comfortNotes, note],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      const randomRef = 'SD-' + Math.floor(100000 + Math.random() * 900000);
      setSubmittedBooking({
        refNumber: randomRef,
        data: { ...formData },
      });
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setFormData(initialFormData);
    setErrors({});
  };

  return (
    <section id="appointment-form" className="py-20 sm:py-28 lg:py-32 bg-[#F9F8F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context, Trust Guarantees & Click-to-Call */}
          <FadeIn className="lg:col-span-5 flex flex-col justify-center" duration={0.5} yOffset={24}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFEBE4] border border-[#E6E2DA] w-fit mb-4 text-xs font-semibold uppercase tracking-widest text-[#387B75] shadow-botanical-sm">
              <Calendar className="w-3.5 h-3.5 text-[#387B75]" />
              <span>Easy Online Scheduling</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D3A31] font-semibold tracking-tight mb-5 leading-tight">
              Request Your Family’s{' '}
              <span className="italic font-normal text-[#387B75]">Gentle Visit</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#2D3A31]/80 leading-relaxed mb-8">
              Take the first step toward stress-free dental care. Fill out our simple form below
              or call our San Juan office directly. We will confirm your preferred chair time
              promptly.
            </p>

            {/* Prominent Click-to-Call Card */}
            <div className="p-6 rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] shadow-botanical-md mb-8">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#387B75]/10 text-[#387B75] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#8C9A84] block">
                    Prefer to speak with us?
                  </span>
                  <a
                    href="tel:+19568002233"
                    className="font-serif text-2xl font-bold text-[#2D3A31] hover:text-[#387B75] transition-colors leading-tight"
                    id="contact-call-btn"
                  >
                    +1 (956) 800-2233
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#2D3A31]/75">
                Our bilingual front desk assistants are ready to answer insurance questions and book
                immediate slots.
              </p>
            </div>

            {/* Reassurance Checklist */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#2D3A31] uppercase tracking-wider">
                    Zero-Judgment Care
                  </h4>
                  <p className="text-xs text-[#2D3A31]/70 mt-0.5">
                    Haven&apos;t seen a dentist in years? You will only receive warmth and encouragement here.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#2D3A31] uppercase tracking-wider">
                    Evenings & Saturdays Available
                  </h4>
                  <p className="text-xs text-[#2D3A31]/70 mt-0.5">
                    Appointments as late as 7:00 PM on Mondays and Wednesdays, plus Saturday mornings.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9944A]/10 text-[#C9944A] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#2D3A31] uppercase tracking-wider">
                    Insurance & Medicaid Coordination
                  </h4>
                  <p className="text-xs text-[#2D3A31]/70 mt-0.5">
                    We check your benefits in advance so you know exact copays before you arrive.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Interactive Appointment Form or Confirmation Screen */}
          <FadeIn className="lg:col-span-7" delay={0.15} duration={0.5} yOffset={24}>
            {submittedBooking ? (
              /* Success / Confirmation Screen */
              <div className="rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-8 sm:p-10 shadow-botanical-lg animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#387B75]/10 text-[#387B75] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div className="text-center mb-8">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#387B75] block mb-2">
                    Request Received
                  </span>
                  <h3 className="font-serif text-3xl font-semibold text-[#2D3A31] mb-2">
                    We Look Forward to Welcoming You!
                  </h3>
                  <p className="text-sm text-[#2D3A31]/75 max-w-md mx-auto">
                    Thank you, <strong className="text-[#2D3A31]">{submittedBooking.data.fullName}</strong>.
                    Our San Juan team will call or text you shortly to finalize your exact chair time.
                  </p>
                </div>

                {/* Booking Receipt Summary Card */}
                <div className="p-6 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA] mb-8 space-y-4 text-xs sm:text-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-[#E6E2DA]">
                    <span className="text-[#8C9A84] font-medium">Request Reference</span>
                    <span className="font-mono font-bold text-[#387B75] bg-[#387B75]/10 px-2.5 py-0.5 rounded-full">
                      {submittedBooking.refNumber}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#E6E2DA]">
                    <span className="text-[#8C9A84] font-medium">Patient Type</span>
                    <span className="font-semibold text-[#2D3A31] capitalize">
                      {submittedBooking.data.patientType} Care
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#E6E2DA]">
                    <span className="text-[#8C9A84] font-medium">Requested Service</span>
                    <span className="font-semibold text-[#2D3A31] text-right">
                      {submittedBooking.data.service}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[#E6E2DA]">
                    <span className="text-[#8C9A84] font-medium">Preferred Time Window</span>
                    <span className="font-semibold text-[#2D3A31] text-right">
                      {submittedBooking.data.preferredDay} • {submittedBooking.data.preferredTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#8C9A84] font-medium">Phone for Confirmation</span>
                    <span className="font-semibold text-[#2D3A31]">
                      {submittedBooking.data.phone}
                    </span>
                  </div>
                </div>

                {/* What to Bring Checklist */}
                <div className="p-5 rounded-2xl bg-[#EFEBE4] border border-[#E6E2DA] mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] mb-2.5">
                    What to Bring to Your First Visit:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#2D3A31]/80">
                    <li className="flex items-center gap-2">
                      <span className="text-[#387B75]">✓</span>
                      <span>Government-issued photo ID</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#387B75]">✓</span>
                      <span>Dental insurance card or Medicaid/CHIP card (if applicable)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#387B75]">✓</span>
                      <span>List of any regular medications or allergies</span>
                    </li>
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="tel:+19568002233"
                    className="w-full sm:w-1/2 py-3.5 rounded-full bg-[#2D3A31] text-white text-center hover:bg-[#387B75] transition-colors text-xs font-semibold uppercase tracking-wider shadow-botanical-sm"
                  >
                    Call Office Directly
                  </a>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-1/2 py-3.5 rounded-full border border-[#8C9A84] text-[#2D3A31] text-center hover:bg-[#EFEBE4] transition-colors text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Interactive Form */
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-[#FFFFFF] border border-[#E6E2DA] p-7 sm:p-10 shadow-botanical-md"
              >
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-[#2D3A31]">
                      Online Appointment Request
                    </h3>
                    <p className="text-xs text-[#8C9A84] mt-1">
                      No payment required now • Fast confirmation within 1 business hour
                    </p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#387B75]/10 text-[#387B75] font-semibold hidden sm:inline-block">
                    San Juan Clinic
                  </span>
                </div>

                {/* Patient Category Radio Pills */}
                <div className="mb-6">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-2.5">
                    1. Who is this visit for?
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { value: 'pediatric', label: 'Toddler / Child', hint: 'Ages 1–17' },
                      { value: 'adult', label: 'Adult Patient', hint: 'Gentle care' },
                      { value: 'family', label: 'Whole Family', hint: 'Back-to-back' },
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() =>
                          setFormData({
                            ...formData,
                            patientType: item.value as 'adult' | 'pediatric' | 'family',
                          })
                        }
                        className={`p-3 rounded-2xl text-left border transition-all ${
                          formData.patientType === item.value
                            ? 'bg-[#387B75]/10 border-[#387B75] text-[#2D3A31] shadow-botanical-sm'
                            : 'bg-[#F9F8F4] border-[#E6E2DA] text-[#2D3A31]/70 hover:bg-[#EFEBE4]'
                        }`}
                      >
                        <span className="text-xs font-bold block">{item.label}</span>
                        <span className="text-[10px] text-[#8C9A84] block mt-0.5">{item.hint}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Patient Contact Info */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-1.5">
                      2. Patient Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="e.g. Maria Hernandez (or Child's name)"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F9F8F4] border ${
                          errors.fullName ? 'border-red-400' : 'border-[#E6E2DA]'
                        } text-sm text-[#2D3A31] placeholder-[#8C9A84] focus:outline-none focus:border-[#387B75] transition-colors`}
                      />
                    </div>
                    {errors.fullName && (
                      <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="(956) 555-0199"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className={`w-full px-4 py-3 rounded-2xl bg-[#F9F8F4] border ${
                          errors.phone ? 'border-red-400' : 'border-[#E6E2DA]'
                        } text-sm text-[#2D3A31] placeholder-[#8C9A84] focus:outline-none focus:border-[#387B75] transition-colors`}
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-600 mt-1 block flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phone}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="patient@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA] text-sm text-[#2D3A31] placeholder-[#8C9A84] focus:outline-none focus:border-[#387B75] transition-colors"
                      />
                    </div>
                  </div>
                </div>

                {/* Service Selection */}
                <div className="mb-6">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-1.5">
                    3. Desired Dental Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA] text-sm text-[#2D3A31] focus:outline-none focus:border-[#387B75] transition-colors cursor-pointer"
                  >
                    <option value="General Dental Check-ups & Cleanings">
                      General Dental Check-ups & Cleanings
                    </option>
                    <option value="Pediatric & Family Dentistry">
                      Pediatric & Family Dentistry (Ages 1+)
                    </option>
                    <option value="Restorative Care (Fillings & Cavity Treatments)">
                      Restorative Care (Fillings & Cavity Treatments)
                    </option>
                    <option value="Patient-Centered Consultations">
                      Patient-Centered Consultations / Second Opinion
                    </option>
                    <option value="Emergency Toothache Relief">
                      Emergency Toothache / Urgent Concern
                    </option>
                  </select>
                </div>

                {/* Day & Time Preferences with Evening & Saturday Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-1.5">
                      4. Preferred Day
                    </label>
                    <select
                      value={formData.preferredDay}
                      onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA] text-sm text-[#2D3A31] focus:outline-none focus:border-[#387B75] transition-colors cursor-pointer"
                    >
                      <option value="Monday (Evening available to 7 PM)">
                        Monday (Open late to 7:00 PM)
                      </option>
                      <option value="Tuesday">Tuesday (9:00 AM – 5:00 PM)</option>
                      <option value="Wednesday (Evening available to 7 PM)">
                        Wednesday (Open late to 7:00 PM)
                      </option>
                      <option value="Thursday">Thursday (9:00 AM – 5:00 PM)</option>
                      <option value="Friday">Friday (9:00 AM – 2:00 PM)</option>
                      <option value="Saturday (Weekend Care)">
                        Saturday (Weekend: 9:00 AM – 3:00 PM)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#F9F8F4] border border-[#E6E2DA] text-sm text-[#2D3A31] focus:outline-none focus:border-[#387B75] transition-colors cursor-pointer"
                    >
                      <option value="Evening (4:00 PM – 7:00 PM)">
                        Evening (4:00 PM – 7:00 PM) ⭐ Popular
                      </option>
                      <option value="Morning (9:00 AM – 12:00 PM)">
                        Morning (9:00 AM – 12:00 PM)
                      </option>
                      <option value="Early Afternoon (12:00 PM – 4:00 PM)">
                        Early Afternoon (12:00 PM – 4:00 PM)
                      </option>
                      <option value="Saturday Morning (9:00 AM – 12:00 PM)">
                        Saturday Morning (9:00 AM – 12:00 PM)
                      </option>
                      <option value="Saturday Afternoon (12:00 PM – 3:00 PM)">
                        Saturday Afternoon (12:00 PM – 3:00 PM)
                      </option>
                    </select>
                  </div>
                </div>

                {/* Comfort & Special Needs Checkboxes */}
                <div className="mb-6">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#2D3A31] block mb-2">
                    5. Any Comfort Preferences? (We cater to your needs)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Nervous or dental anxiety patient',
                      'First dentist visit for child/toddler',
                      'Prefer Spanish-speaking assistant',
                      'Need pre-visit insurance estimation',
                    ].map((note) => (
                      <button
                        key={note}
                        type="button"
                        onClick={() => handleToggleComfort(note)}
                        className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                          formData.comfortNotes.includes(note)
                            ? 'bg-[#387B75]/10 border-[#387B75] text-[#2D3A31] font-medium'
                            : 'bg-[#F9F8F4] border-[#E6E2DA] text-[#2D3A31]/75 hover:bg-[#EFEBE4]'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                            formData.comfortNotes.includes(note)
                              ? 'bg-[#387B75] border-[#387B75] text-white'
                              : 'border-[#8C9A84] bg-white'
                          }`}
                        >
                          {formData.comfortNotes.includes(note) && <CheckCircle2 className="w-3 h-3" />}
                        </div>
                        <span>{note}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-all duration-300 text-xs sm:text-sm font-semibold tracking-widest uppercase shadow-botanical-md hover:shadow-botanical-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  id="submit-appointment-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Reserving Your Chair...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 text-[#C9944A]" />
                      <span>Confirm Appointment Request</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-[#8C9A84] text-center mt-3">
                  🔒 HIPAA Compliant & Private • No upfront payment required
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
