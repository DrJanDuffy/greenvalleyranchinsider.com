'use client';

import { useEffect, useRef, useState } from 'react';
import { Home, TrendingUp } from 'lucide-react';

export function RealScoutWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    const maxRetries = 3;
    let scriptLoaded = false;

    const loadScript = (): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector('script[src*="realscout-web-components"]');
        if (existingScript) {
          // Check if custom elements are defined
          if (customElements.get('realscout-home-value')) {
            scriptLoaded = true;
            resolve();
            return;
          }
          // Wait for script to load
          existingScript.addEventListener('load', () => {
            scriptLoaded = true;
            resolve();
          });
          existingScript.addEventListener('error', reject);
          return;
        }

        // Create and load script
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        
        script.onload = () => {
          scriptLoaded = true;
          resolve();
        };
        script.onerror = () => {
          reject(new Error('Failed to load RealScout script'));
        };
        
        document.head.appendChild(script);
      });
    };

    const initializeWidget = async () => {
      try {
        // Wait for script to load
        await loadScript();
        
        // Wait for custom elements to be defined
        let attempts = 0;
        while (!customElements.get('realscout-home-value') && attempts < 20) {
          await new Promise(resolve => setTimeout(resolve, 100));
          attempts++;
        }

        if (!mounted || !containerRef.current) return;

        // Check if widget already exists
        if (containerRef.current.querySelector('realscout-home-value')) {
          setIsLoading(false);
          return;
        }

        // Add custom styles if not already added
        if (!document.querySelector('#realscout-widget-styles')) {
          const style = document.createElement('style');
          style.id = 'realscout-widget-styles';
          style.textContent = `
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #0F172A;
              --rs-hvw-subtitle-color: rgba(15, 23, 42, 0.6);
              --rs-hvw-primary-button-text-color: #0F172A;
              --rs-hvw-primary-button-color: #C5A059;
              --rs-hvw-secondary-button-text-color: #C5A059;
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
            }
          `;
          document.head.appendChild(style);
        }

        // Create the widget
        const widget = document.createElement('realscout-home-value');
        widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
        widget.setAttribute('include-name', '');
        widget.setAttribute('include-phone', '');
        
        // Listen for widget load
        widget.addEventListener('load', () => {
          if (mounted) setIsLoading(false);
        });

        containerRef.current.appendChild(widget);
        
        // Fallback: hide loading after reasonable time
        setTimeout(() => {
          if (mounted) setIsLoading(false);
        }, 5000);
      } catch (error) {
        console.error('RealScout widget initialization error:', error);
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
      <div className="text-center py-12 px-4">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <Home className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-[#0F172A] mb-2">
          Unable to Load Home Value Tool
        </h3>
        <p className="text-slate-600 mb-4">
          Please try refreshing the page or contact us directly.
        </p>
        <a
          href="tel:+17025001955"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
        >
          Call (702) 500-1955
        </a>
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 bg-white rounded-lg flex items-center justify-center z-10 min-h-[400px]">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#C5A059] border-t-transparent mb-4"></div>
            <p className="text-slate-600 font-medium">Loading home value tool...</p>
            <p className="text-sm text-slate-500 mt-2">This will only take a moment</p>
          </div>
        </div>
      )}
      <div ref={containerRef} className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'} />
    </div>
  );
}
