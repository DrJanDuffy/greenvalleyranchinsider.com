'use client';

import { useEffect, useRef } from 'react';
import { Phone } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

// Dr. Duffy's RealScout Agent ID
const AGENT_ENCODED_ID = 'QWdlbnQtMjI1MDUw';

interface RealScoutSoldListingsProps {
  title?: string;
  subtitle?: string;
  priceMin?: number;
  priceMax?: number;
  propertyTypes?: string; // 'SFR' | 'MFR' | 'TC' | 'LL' | 'MH' | 'OTHER'
  className?: string;
}

export function RealScoutSoldListings({ 
  title = 'Recently Sold in Las Vegas',
  subtitle = 'See what homes are actually selling for - updated in real-time',
  priceMin = 400000,
  priceMax = 700000,
  propertyTypes = 'SFR',
  className = ''
}: RealScoutSoldListingsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load RealScout script if not already loaded
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    // Create the widget element after script loads
    if (containerRef.current && !containerRef.current.querySelector('realscout-office-listings')) {
      const widget = document.createElement('realscout-office-listings');
      widget.setAttribute('agent-encoded-id', AGENT_ENCODED_ID);
      widget.setAttribute('sort-order', 'NEWEST');
      widget.setAttribute('listing-status', 'Sold');
      widget.setAttribute('property-types', `,${propertyTypes}`);
      widget.setAttribute('price-min', priceMin.toString());
      widget.setAttribute('price-max', priceMax.toString());
      containerRef.current.appendChild(widget);
    }
  }, [priceMin, priceMax, propertyTypes]);

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-2">
            {title}
          </h2>
          <p className="text-lg text-slate-600">
            {subtitle}
          </p>
        </div>
        
        {/* RealScout Widget */}
        <div className="max-w-6xl mx-auto" ref={containerRef}></div>
        
        {/* CTA & Disclaimer */}
        <div className="text-center mt-10">
          <p className="text-xs text-slate-500 mb-6">
            © {new Date().getFullYear()} Greater Las Vegas Association of Realtors (GLVAR). Information Deemed Reliable But Not Guaranteed.
          </p>
          <a 
            href="tel:+17022221964"
            onClick={() => trackPhoneClick('What\'s YOUR Home Worth? - Sold Listings CTA')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
          >
            <Phone className="w-5 h-5" />
            What&apos;s YOUR Home Worth?
          </a>
          <p className="text-slate-600 text-sm mt-3">Call/text (702) 222-1964</p>
        </div>
      </div>
    </section>
  );
}
