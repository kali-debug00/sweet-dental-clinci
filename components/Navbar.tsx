'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Calendar, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Hours & Contact', href: '/contact' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Main Navigation Bar */}
      <nav className="bg-[#F9F8F4]/95 backdrop-blur-md border-b border-[#E6E2DA] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Botanical Tooth Emblem */}
          <Link href="/" prefetch={true} className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-[#387B75]/10 border border-[#387B75]/25 flex items-center justify-center text-[#387B75] group-hover:bg-[#387B75] group-hover:text-white transition-all duration-300 shadow-botanical-sm">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                {/* Tooth contour blended with a gentle leaf sprout */}
                <path d="M12 2C8.5 2 6 4.5 6 8c0 3.5 1.5 7.5 3 11 1 2.3 2 3 3 3s2-.7 3-3c1.5-3.5 3-7.5 3-11 0-3.5-2.5-6-6-6Z" />
                <path d="M12 2v8" />
                <path d="M9.5 6.5C10.5 7.5 12 8 13.5 7.5" />
              </svg>
            </div>
            <div>
              <span className="font-serif text-2xl sm:text-2xl font-semibold tracking-tight text-[#2D3A31] block leading-none">
                Sweet Dental
              </span>
              <span className="text-[11px] tracking-widest uppercase font-sans text-[#387B75] font-semibold block mt-1">
                Family & Pediatric Care
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={true}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#387B75] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#387B75]'
                      : 'text-[#2D3A31]/80 hover:text-[#387B75]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+19568002233"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#8C9A84] text-[#2D3A31] hover:bg-[#8C9A84]/10 transition-colors text-xs font-semibold tracking-wider uppercase h-11"
            >
              <Phone className="w-3.5 h-3.5 text-[#387B75]" />
              <span className="hidden xl:inline">Call Office</span>
              <span className="xl:hidden">(956) 800-2233</span>
            </a>
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2D3A31] text-white hover:bg-[#387B75] transition-all duration-300 text-xs font-semibold tracking-wider uppercase shadow-botanical-sm h-11"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:+19568002233"
              className="p-2.5 rounded-full bg-[#387B75]/10 text-[#387B75] border border-[#387B75]/20"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-[#E6E2DA] text-[#2D3A31] hover:bg-[#EFEBE4] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[#E6E2DA] bg-[#F9F8F4] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-2 font-medium text-base text-[#2D3A31]">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3.5 py-2.5 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#387B75]/10 text-[#387B75] font-semibold'
                        : 'hover:bg-[#EFEBE4] text-[#2D3A31]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-[#E6E2DA] space-y-2">
              <Link
                href="/contact"
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#2D3A31] text-white text-xs font-semibold uppercase tracking-wider shadow-botanical-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </Link>
              <a
                href="tel:+19568002233"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full border border-[#8C9A84] text-[#2D3A31] text-xs font-semibold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-[#387B75]" />
                <span>Call Now: +1 (956) 800-2233</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
