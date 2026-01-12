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
