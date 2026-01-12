'use client';

import { useEffect } from 'react';
import { measurePageLoad, lazyLoadImages, measureWebVitals } from '@/lib/performance';

export function ClientPerformance() {
  useEffect(() => {
    measurePageLoad();
    lazyLoadImages();
    measureWebVitals();
  }, []);

  return null;
}
