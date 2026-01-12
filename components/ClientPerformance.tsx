'use client';

import { useEffect } from 'react';
import { measurePageLoad, lazyLoadImages } from '@/lib/performance';

export function ClientPerformance() {
  useEffect(() => {
    measurePageLoad();
    lazyLoadImages();
  }, []);

  return null;
}
