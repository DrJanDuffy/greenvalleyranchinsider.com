'use client';

import Link from 'next/link';

export function SkipToContent() {
  return (
    <Link
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#C5A059] focus:text-[#0F172A] focus:rounded-lg focus:font-semibold focus:shadow-lg"
    >
      Skip to main content
    </Link>
  );
}
