'use client';

import { useEffect, useRef } from 'react';

export function RealScoutWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the script is loaded
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    // Add custom styles for RealScout widget
    if (!document.querySelector('#realscout-widget-styles')) {
      const style = document.createElement('style');
      style.id = 'realscout-widget-styles';
      style.textContent = `
        realscout-home-value {
          --rs-hvw-background-color: #ffffff;
          --rs-hvw-title-color: #000000;
          --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
          --rs-hvw-primary-button-text-color: #ffffff;
          --rs-hvw-primary-button-color: rgb(35, 93, 137);
          --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
          --rs-hvw-secondary-button-color: #ffffff;
          --rs-hvw-widget-width: auto;
        }
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `;
      document.head.appendChild(style);
    }

    // Create the custom element after script loads
    if (containerRef.current && !containerRef.current.querySelector('realscout-home-value')) {
      const widget = document.createElement('realscout-home-value');
      widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('include-name', '');
      widget.setAttribute('include-phone', '');
      containerRef.current.appendChild(widget);
    }
  }, []);

  return <div ref={containerRef} />;
}
