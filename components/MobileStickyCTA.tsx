'use client';

import { Phone, MessageSquare } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

export function MobileStickyCTA() {
  const handleCallClick = () => {
    trackPhoneClick('Mobile Sticky CTA - Call');
  };

  const handleTextClick = () => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'text_click', {
        event_category: 'engagement',
        event_label: 'Mobile Sticky CTA - Text',
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-lg">
      <div className="flex gap-3 p-3 max-w-lg mx-auto">
        {/* Call Button */}
        <a
          href="tel:+17022221964"
          onClick={handleCallClick}
          className="flex-1 bg-[#C5A059] hover:bg-[#B8914F] text-[#0F172A] font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        
        {/* Text Button */}
        <a
          href="sms:+17022221964?body=Hi%20Dr.%20Duffy%2C%20I'm%20interested%20in%20Green%20Valley%20Ranch%20real%20estate."
          onClick={handleTextClick}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          Text Now
        </a>
      </div>
    </div>
  );
}
