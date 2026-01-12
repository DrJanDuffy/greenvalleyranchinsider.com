'use client';

import { useEffect, useRef } from 'react';

export function RealScoutOfficeListings() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the script is loaded (already added in layout, but check anyway)
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    // Create the custom element after script loads
    if (containerRef.current && !containerRef.current.querySelector('realscout-office-listings')) {
      const widget = document.createElement('realscout-office-listings');
      widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      widget.setAttribute('sort-order', 'NEWEST');
      widget.setAttribute('listing-status', 'For Sale');
      widget.setAttribute('property-types', ',SFR');
      widget.setAttribute('price-min', '400000');
      widget.setAttribute('price-max', '700000');
      containerRef.current.appendChild(widget);
    }
  }, []);

  return <div ref={containerRef} />;
}
