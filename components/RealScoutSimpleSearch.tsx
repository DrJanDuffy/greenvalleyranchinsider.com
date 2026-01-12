'use client';

import { useEffect, useRef } from 'react';

export function RealScoutSimpleSearch() {
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
    if (containerRef.current && !containerRef.current.querySelector('realscout-simple-search')) {
      const widget = document.createElement('realscout-simple-search');
      widget.setAttribute('agent-encoded-id', 'QWdlbnQtMjI1MDUw');
      containerRef.current.appendChild(widget);
    }
  }, []);

  return <div ref={containerRef} />;
}
