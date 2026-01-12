'use client';

import { useEffect, useRef, useState } from 'react';
import { Phone, TrendingDown, RefreshCw } from 'lucide-react';
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
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    const maxRetries = 3;

    const loadScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        const existingScript = document.querySelector('script[src*="realscout-web-components"]');
        if (existingScript) {
          if (customElements.get('realscout-office-listings')) {
            resolve();
            return;
          }
          existingScript.addEventListener('load', () => resolve());
          existingScript.addEventListener('error', reject);
          return;
        }

        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load RealScout script'));
        
        document.head.appendChild(script);
      });
    };

    const initializeWidget = async () => {
      try {
        await loadScript();
        
        let attempts = 0;
        while (!customElements.get('realscout-office-listings') && attempts < 20) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (!mounted || !containerRef.current) return;

        if (containerRef.current.querySelector('realscout-office-listings')) {
          setIsLoading(false);
          return;
        }

        const widget = document.createElement('realscout-office-listings');
        widget.setAttribute('agent-encoded-id', AGENT_ENCODED_ID);
        widget.setAttribute('sort-order', 'NEWEST');
        widget.setAttribute('listing-status', 'Sold');
        widget.setAttribute('property-types', `,${propertyTypes}`);
        widget.setAttribute('price-min', priceMin.toString());
        widget.setAttribute('price-max', priceMax.toString());
        
        widget.addEventListener('load', () => {
          if (mounted) setIsLoading(false);
        });

        containerRef.current.appendChild(widget);
        
        setTimeout(() => {
          if (mounted) setIsLoading(false);
        }, 5000);
      } catch (error) {
        console.error('RealScout sold listings initialization error:', error);
        if (mounted) {
          if (retryCount < maxRetries) {
            setRetryCount(prev => prev + 1);
            setTimeout(initializeWidget, 1000 * (retryCount + 1));
          } else {
            setHasError(true);
            setIsLoading(false);
          }
        }
      }
    };

    initializeWidget();

    return () => {
      mounted = false;
    };
  }, [priceMin, priceMax, propertyTypes, retryCount]);

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
        
        {/* RealScout Widget with Loading State */}
        <div className="max-w-6xl mx-auto relative">
          {isLoading && (
            <div className="absolute inset-0 bg-slate-50 rounded-lg flex items-center justify-center z-10 min-h-[500px] border border-slate-200">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#C5A059] border-t-transparent mb-4"></div>
                <p className="text-slate-700 font-medium">Loading recent sales...</p>
                <p className="text-sm text-slate-500 mt-2">Fetching the latest sold properties</p>
              </div>
            </div>
          )}
          {hasError && (
            <div className="text-center py-12 px-4 bg-white rounded-lg border border-slate-200">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <TrendingDown className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
                Unable to Load Recent Sales
              </h3>
              <p className="text-slate-600 mb-4">
                Please try refreshing the page or contact us for recent sales data.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => {
                    setHasError(false);
                    setRetryCount(0);
                    setIsLoading(true);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Again
                </button>
                <a
                  href="tel:+17025001955"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
                >
                  Call (702) 500-1955
                </a>
              </div>
            </div>
          )}
          <div 
            ref={containerRef} 
            className={isLoading || hasError ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'} 
          />
        </div>
        
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
