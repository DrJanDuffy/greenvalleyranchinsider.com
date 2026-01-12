'use client';

import { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-home-value': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'agent-encoded-id'?: string;
          'include-name'?: boolean;
          'include-phone'?: boolean;
        },
        HTMLElement
      >;
    }
  }
}

export function RealScoutWidget() {
  useEffect(() => {
    // Ensure the script is loaded
    if (typeof window !== 'undefined' && !document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <realscout-home-value 
      agent-encoded-id="QWdlbnQtMjI1MDUw" 
      include-name 
      include-phone
    />
  );
}
