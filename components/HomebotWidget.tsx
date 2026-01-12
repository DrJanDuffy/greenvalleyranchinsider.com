'use client';

import { useEffect } from 'react';

interface HomebotWidgetProps {
  className?: string;
}

export function HomebotWidget({ className = '' }: HomebotWidgetProps) {
  useEffect(() => {
    // Load Homebot script
    const loadHomebot = () => {
      const w = window as any;
      const d = document;
      const h = '__hb_namespace';
      const namespace = 'Homebot';
      
      w[h] = namespace;
      w[namespace] = w[namespace] || function() {
        (w[namespace].q = w[namespace].q || []).push(arguments);
      };
      
      // Check if script already loaded
      if (!d.querySelector('script[src*="homebotapp.com"]')) {
        const y = d.createElement('script');
        const x = d.getElementsByTagName('script')[0];
        y.async = true;
        y.src = 'https://embed.homebotapp.com/lgw/v1/widget.js';
        x.parentNode?.insertBefore(y, x);
      }
      
      // Initialize widget after script loads
      const initWidget = () => {
        if (w.Homebot && document.getElementById('homebot_homeowner')) {
          try {
            w.Homebot('#homebot_homeowner', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43');
          } catch (error) {
            console.error('Homebot initialization error:', error);
          }
        } else {
          // Retry after a short delay if script not loaded yet
          setTimeout(initWidget, 100);
        }
      };
      
      // Wait for script to load, then initialize
      const script = d.querySelector('script[src*="homebotapp.com"]');
      if (script) {
        script.addEventListener('load', initWidget);
      } else {
        setTimeout(initWidget, 500);
      }
    };

    loadHomebot();
  }, []);

  return (
    <div className={`homebot-widget ${className}`}>
      <div id="homebot_homeowner"></div>
    </div>
  );
}
