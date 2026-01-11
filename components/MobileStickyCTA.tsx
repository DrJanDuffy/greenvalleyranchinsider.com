'use client';

import { Phone } from 'lucide-react';

export function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:+17025001955"
        className="flex items-center justify-center gap-3 w-full bg-[#C5A059] text-[#0F172A] py-4 px-6 font-semibold text-lg shadow-lg hover:bg-[#B8914F] transition-colors"
      >
        <Phone className="w-5 h-5" />
        <span>Call (702) 500-1955</span>
      </a>
    </div>
  );
}
