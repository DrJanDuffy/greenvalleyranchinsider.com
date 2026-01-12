/**
 * Performance monitoring and optimization utilities
 */

export interface WebVitalsMetric {
  name: string;
  value: number;
  id: string;
  delta: number;
  entries: PerformanceEntry[];
}

export function reportWebVitals(metric: WebVitalsMetric) {
  // Send to analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    const value = metric.name === 'CLS' ? Math.round(metric.value * 1000) : Math.round(metric.value);
    
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: value,
      non_interaction: true,
    });

    // Track Core Web Vitals specifically
    if (['LCP', 'FID', 'CLS', 'FCP', 'TTFB'].includes(metric.name)) {
      (window as any).gtag('event', 'core_web_vital', {
        event_category: 'Core Web Vitals',
        event_label: metric.name,
        value: value,
        non_interaction: true,
      });
    }
  }

  // Log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
  }
}

export function measurePageLoad() {
  if (typeof window === 'undefined') return;

  window.addEventListener('load', () => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    
    if ((window as any).gtag) {
      (window as any).gtag('event', 'page_load_time', {
        event_category: 'Performance',
        value: Math.round(pageLoadTime),
        non_interaction: true,
      });
    }
  });
}

export function lazyLoadImages() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const imageObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    },
    {
      rootMargin: '50px', // Start loading 50px before image enters viewport
    }
  );

  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}

/**
 * Measure and report Core Web Vitals
 * Uses web-vitals library pattern for Next.js
 */
export function measureWebVitals() {
  if (typeof window === 'undefined') return;

  // LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        
        if (lastEntry && (window as any).gtag) {
          (window as any).gtag('event', 'LCP', {
            event_category: 'Web Vitals',
            value: Math.round(lastEntry.renderTime || lastEntry.loadTime),
            non_interaction: true,
          });
        }
      });
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // PerformanceObserver not supported or error
    }

    // FID (First Input Delay) - now INP in newer metrics
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime && (window as any).gtag) {
            const fid = entry.processingStart - entry.startTime;
            (window as any).gtag('event', 'FID', {
              event_category: 'Web Vitals',
              value: Math.round(fid),
              non_interaction: true,
            });
          }
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // PerformanceObserver not supported or error
    }

    // CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries() as any[];
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        // Report CLS periodically
        if ((window as any).gtag && clsValue > 0) {
          (window as any).gtag('event', 'CLS', {
            event_category: 'Web Vitals',
            value: Math.round(clsValue * 1000),
            non_interaction: true,
          });
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // PerformanceObserver not supported or error
    }
  }
}
