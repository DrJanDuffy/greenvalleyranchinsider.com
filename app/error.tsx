'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('Application error:', error);
    }
  }, [error]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertCircle className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-[#0F172A] mb-4">
            Something went wrong!
          </h1>
          <p className="text-lg text-slate-600 mb-2">
            We encountered an unexpected error.
          </p>
          {error.message && (
            <p className="text-sm text-slate-500 mb-8">
              {error.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
            aria-label="Try again to reload the page"
          >
            <RefreshCw className="w-5 h-5" aria-hidden="true" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-200 text-[#0F172A] rounded-lg font-semibold hover:bg-slate-300 transition-colors"
            aria-label="Return to homepage"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            Go Home
          </Link>
        </div>
        
        {/* Additional Help */}
        <div className="mt-8 text-sm text-slate-500">
          <p>If this problem persists, please contact us:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a
              href="tel:+17025001955"
              className="text-[#C5A059] hover:underline"
              aria-label="Call Dr. Jan Duffy at (702) 500-1955"
            >
              (702) 500-1955
            </a>
            <span className="text-slate-400">|</span>
            <a
              href="mailto:DrDuffy@GreenValleyRanchInsider.com"
              className="text-[#C5A059] hover:underline"
            >
              DrDuffy@GreenValleyRanchInsider.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
