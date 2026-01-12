'use client';

import { useEffect, useRef, useState } from 'react';
import { Search, RefreshCw } from 'lucide-react';

export function RealScoutAdvancedSearch() {
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
          if (customElements.get('realscout-advanced-search')) {
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
        while (!customElements.get('realscout-advanced-search') && attempts < 20) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (!mounted || !containerRef.current) return;

        if (containerRef.current.querySelector('realscout-advanced-search')) {
          setIsLoading(false);
          return;
        }

        const widget = document.createElement('realscout-advanced-search');
        widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
        
        widget.addEventListener('load', () => {
          if (mounted) setIsLoading(false);
        });

        containerRef.current.appendChild(widget);
        
        setTimeout(() => {
          if (mounted) setIsLoading(false);
        }, 5000);
      } catch (error) {
        console.error('RealScout advanced search initialization error:', error);
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
  }, [retryCount]);

  if (hasError) {
    return (
      <div className="text-center py-12 px-4 bg-white rounded-lg border border-slate-200">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <Search className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
          Unable to Load Search Tool
        </h3>
        <p className="text-slate-600 mb-4">
          Please try refreshing the page or contact us for property searches.
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
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center z-10 min-h-[400px] border border-slate-200">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#C5A059] border-t-transparent mb-4"></div>
            <p className="text-slate-700 font-medium">Loading property search...</p>
            <p className="text-sm text-slate-500 mt-2">Setting up your search tool</p>
          </div>
        </div>
      )}
      <div ref={containerRef} className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'} />
    </div>
  );
}
