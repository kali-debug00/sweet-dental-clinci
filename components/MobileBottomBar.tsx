'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#F9F8F4]/95 backdrop-blur-md border-t border-[#E6E2DA] p-3 shadow-botanical-lg flex items-center gap-2">
      <a
        href="tel:+19568002233"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-[#8C9A84] text-[#2D3A31] text-xs font-semibold uppercase tracking-wider bg-white active:bg-gray-50"
      >
        <Phone className="w-3.5 h-3.5 text-[#387B75]" />
        <span>Call Now</span>
      </a>
      <Link
        href="/contact"
        prefetch={true}
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#2D3A31] text-white text-xs font-semibold uppercase tracking-wider shadow-botanical-sm active:bg-[#387B75]"
      >
        <Calendar className="w-3.5 h-3.5 text-[#C9944A]" />
        <span>Book Visit</span>
      </Link>
    </div>
  );
}
