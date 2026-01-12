'use client';

import { Shield, Home, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function NeighborhoodFocus() {
  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-2xl p-8 sm:p-12 text-white shadow-2xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-[#C5A059]">Mystic Bay</span> Spotlight
        </h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
          A peaceful neighborhood in Henderson, NV, known for well-maintained homes and friendly community. Perfect for families and retirees.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400 mt-6">
          <span><strong className="text-[#C5A059]">212</strong> Residents</span>
          <span><strong className="text-[#C5A059]">$94K</strong> Avg Income</span>
          <span><strong className="text-[#C5A059]">68%</strong> Homeowners</span>
          <span><strong className="text-[#C5A059]">52</strong> Avg Age</span>
        </div>
        <p className="text-xs text-slate-500 mt-4">
          Data from <a href="https://nextdoor.com/neighborhood/mysticbaynv--henderson--nv/" target="_blank" rel="noopener noreferrer" className="text-[#C5A059] hover:underline">Nextdoor.com</a>
        </p>
        <div className="mt-6">
          <Link
            href="/mystic-bay"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors"
          >
            Learn More About Mystic Bay →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {/* Stat 1: Gated Security */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
            <Shield className="w-6 h-6 text-[#0F172A]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Gated Security</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            24/7 gated access and security services ensure privacy and peace of mind for all residents.
          </p>
        </div>

        {/* Stat 2: Luxury Appeal */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
            <Home className="w-6 h-6 text-[#0F172A]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Luxury Living</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Premium homes featuring upscale finishes, spacious floor plans, and meticulously maintained landscapes.
          </p>
        </div>

        {/* Stat 3: Market Value */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
            <TrendingUp className="w-6 h-6 text-[#0F172A]" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Strong Market Position</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Consistently outperforms surrounding areas with premium pricing and faster time-to-sale.
          </p>
        </div>
      </div>

      {/* Additional Neighborhood Info */}
      <div className="mt-10 pt-10 border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C5A059]">Prime Location</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Walking distance to The District at Green Valley Ranch</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Minutes from top-rated schools (Vanderburg & Glen Taylor Elementary)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Easy access to I-215 and Las Vegas Strip</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[#C5A059]">Community Features</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Gated subdivision within Green Valley Ranch</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Larger homes, typically over 2,500 sq. ft.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Custom Mediterranean-style architecture</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Built by American Nevada Corporation</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C5A059] mr-2">•</span>
                <span>Well-maintained common areas and landscaping</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-sm text-slate-400 mb-2">Also explore:</p>
              <Link
                href="/the-cottages"
                className="text-[#C5A059] hover:text-[#B8914F] text-sm font-semibold hover:underline"
              >
                The Cottages at Green Valley Ranch →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
