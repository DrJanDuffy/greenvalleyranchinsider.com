import type { Metadata } from 'next';
import { Home, Users, Building, MapPin, Heart, TrendingUp, Shield } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'The Cottages at Green Valley Ranch | Henderson NV | Green Valley Ranch Insider',
  description: 'The Cottages at Green Valley Ranch is a gated subdivision in Henderson, NV built by Pacific Homes. Featuring compact, efficient floor plans from 1,500 to 1,900 sq. ft. within the Green Valley Ranch master-planned community.',
  keywords: ['The Cottages Green Valley Ranch', 'The Cottages Henderson NV', 'Pacific Homes Henderson', 'Green Valley Ranch gated community', 'Henderson Nevada neighborhoods', 'compact homes Henderson'],
  openGraph: {
    title: 'The Cottages at Green Valley Ranch | Henderson NV',
    description: 'A gated subdivision built by Pacific Homes with compact, efficient homes ranging from 1,500 to 1,900 sq. ft.',
    type: 'website',
  },
};

export default function TheCottagesPage() {
  const communityData = {
    name: 'The Cottages at Green Valley Ranch',
    city: 'Henderson',
    state: 'NV',
    description: 'The Cottages at Green Valley Ranch is a gated subdivision within the Green Valley Ranch master-planned community. Built by Pacific Homes, this community features smaller, more compact floor plans designed for efficient living without sacrificing quality or style.',
    developer: 'Pacific Homes',
    masterDeveloper: 'American Nevada Corporation (Green Valley Ranch)',
    homeSize: '1,500 to 1,900 sq. ft.',
    architecturalStyle: 'Compact, efficient design',
    communityType: 'Gated subdivision',
    masterCommunity: 'Green Valley Ranch',
    nearbyNeighborhoods: [
      'Mystic Bay',
      'Green Valley Estates',
      'GVR Estates',
      'Carriage Club',
      'Green Valley South',
    ],
    features: [
      'Gated community security',
      'Compact, efficient floor plans',
      'Lower maintenance lifestyle',
      'Access to Green Valley Ranch amenities',
      'Close to The District shopping center',
      'Easy access to I-215',
      'Top-rated schools nearby',
    ],
    advantages: [
      'Affordable entry point into Green Valley Ranch',
      'Lower utility costs',
      'Less maintenance required',
      'Perfect for first-time buyers',
      'Great for downsizing',
      'Ideal for busy professionals',
    ],
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[
            { label: 'Green Valley Ranch', href: '/green-valley-ranch' },
            { label: 'The Cottages' }
          ]} />
          <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="w-8 h-8 text-[#C5A059]" />
            <Building className="w-8 h-8 text-[#C5A059]" />
            <Shield className="w-8 h-8 text-[#C5A059]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-[#C5A059]">The Cottages</span><br />
            at Green Valley Ranch
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {communityData.description}
          </p>

          <div className="mt-10">
            <Link
              href="/#valuation-form"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg hover:shadow-xl"
            >
              Get Your Home Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Community Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Home Size */}
            <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white border border-slate-700">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
                <Home className="w-6 h-6 text-[#0F172A]" />
              </div>
              <p className="text-2xl font-bold mb-2">{communityData.homeSize}</p>
              <p className="text-slate-300 text-sm">Home Size Range</p>
            </div>

            {/* Builder */}
            <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white border border-slate-700">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
                <Building className="w-6 h-6 text-[#0F172A]" />
              </div>
              <p className="text-2xl font-bold mb-2">{communityData.developer}</p>
              <p className="text-slate-300 text-sm">Builder</p>
            </div>

            {/* Community Type */}
            <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white border border-slate-700">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
                <Shield className="w-6 h-6 text-[#0F172A]" />
              </div>
              <p className="text-lg font-bold mb-2">{communityData.communityType}</p>
              <p className="text-slate-300 text-sm">Gated Security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Builder & Development Info */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <Building className="w-6 h-6 text-[#C5A059]" />
                Builder & Development
              </h2>
              <div className="space-y-4 text-slate-700">
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Builder:</p>
                  <p>{communityData.developer}</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Master Community Developer:</p>
                  <p>{communityData.masterDeveloper}</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Master Community:</p>
                  <p>{communityData.masterCommunity}</p>
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A] mb-1">Architectural Style:</p>
                  <p>{communityData.architecturalStyle}</p>
                </div>
              </div>
            </div>

            {/* Community Features */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
                Community Features
              </h2>
              <ul className="space-y-3">
                {communityData.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Why Choose The Cottages?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityData.advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 hover:border-[#C5A059] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Heart className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                  <h3 className="font-semibold text-[#0F172A]">{advantage}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison with Mystic Bay */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Two Distinct Communities in Green Valley Ranch
          </h2>
          
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* The Cottages */}
              <div className="border-r-0 md:border-r border-slate-200 pr-0 md:pr-8">
                <h3 className="text-2xl font-bold text-[#C5A059] mb-4">The Cottages</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Builder:</strong> Pacific Homes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Home Size:</strong> 1,500 to 1,900 sq. ft.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Style:</strong> Compact, efficient design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Ideal For:</strong> First-time buyers, downsizing, busy professionals</span>
                  </li>
                </ul>
              </div>

              {/* Mystic Bay */}
              <div className="pl-0 md:pl-8">
                <h3 className="text-2xl font-bold text-[#C5A059] mb-4">Mystic Bay</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Builder:</strong> American Nevada Corporation with high-end regional builders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Home Size:</strong> Typically over 2,500 sq. ft.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Style:</strong> Custom, Mediterranean feel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#C5A059] mt-1">•</span>
                    <span><strong>Ideal For:</strong> Families, luxury living, larger homes</span>
                  </li>
                </ul>
                <Link
                  href="/mystic-bay"
                  className="inline-flex items-center gap-2 mt-4 text-[#C5A059] hover:underline font-semibold"
                >
                  Learn More About Mystic Bay →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Nearby */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#C5A059]" />
              Location & Nearby Neighborhoods
            </h2>
            <p className="text-slate-700 leading-relaxed mb-6">
              The Cottages is located within the Green Valley Ranch master-planned community in Henderson, Nevada. 
              It shares the same premium location benefits as neighboring Mystic Bay, with easy access to The District 
              at Green Valley Ranch, top-rated schools, and major highways.
            </p>
            <div>
              <h3 className="font-semibold text-[#0F172A] mb-3">Nearby Neighborhoods:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {communityData.nearbyNeighborhoods.map((neighborhood, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-600">
                    <span className="text-[#C5A059]">•</span>
                    {neighborhood}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Communities */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">Explore More of Green Valley Ranch</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/green-valley-ranch"
                className="px-4 py-2 bg-[#0F172A] text-white rounded-lg hover:bg-[#1e293b] transition-colors text-sm font-semibold"
              >
                Green Valley Ranch Guide
              </Link>
              <Link
                href="/mystic-bay"
                className="px-4 py-2 bg-slate-200 text-[#0F172A] rounded-lg hover:bg-slate-300 transition-colors text-sm font-semibold"
              >
                Mystic Bay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Interested in The Cottages?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get your custom home valuation or learn more about available properties in this desirable gated community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#valuation-form"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              Get Your Home Valuation
            </Link>
            <Link
              href="/location"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg hover:bg-[#C5A059]/10 transition-colors"
            >
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
