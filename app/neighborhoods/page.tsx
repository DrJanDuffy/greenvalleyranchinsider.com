import type { Metadata } from 'next';
import { MapPin, Home, Shield, TrendingUp, Users, Building, Link as LinkIcon } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';

export const metadata: Metadata = {
  title: 'Neighborhoods | Green Valley Ranch Insider | Henderson NV Communities',
  description: 'Explore all neighborhoods in Green Valley Ranch including Mystic Bay, The Cottages, and GVR Estates. Compare communities to find your perfect home.',
  keywords: ['Green Valley Ranch neighborhoods', 'Henderson neighborhoods', 'Mystic Bay', 'The Cottages', 'GVR Estates', 'gated communities Henderson', 'Henderson NV communities'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/neighborhoods',
  },
  openGraph: {
    title: 'Neighborhoods | Green Valley Ranch Insider',
    description: 'Explore all neighborhoods in Green Valley Ranch including Mystic Bay, The Cottages, and GVR Estates.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/neighborhoods',
  },
};

export default function NeighborhoodsPage() {
  const neighborhoods = [
    {
      name: 'Mystic Bay',
      href: '/mystic-bay',
      type: 'Gated Subdivision',
      builder: 'American Nevada Corporation',
      homeSize: '2,500+ sq. ft.',
      style: 'Mediterranean',
      priceRange: '$650,000 - $1,200,000+',
      features: ['Gated security', 'Larger homes', 'Custom finishes', 'Luxury appeal'],
      description: 'Premium gated community with larger, custom Mediterranean-style homes. Perfect for families seeking luxury living.',
      icon: Shield,
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'The Cottages',
      href: '/the-cottages',
      type: 'Gated Subdivision',
      builder: 'Pacific Homes',
      homeSize: '1,500 - 1,900 sq. ft.',
      style: 'Cottage',
      priceRange: '$400,000 - $600,000',
      features: ['Gated security', 'Efficient floor plans', 'First-time buyer friendly', 'Great value'],
      description: 'Compact, efficient homes in a gated community. Ideal for first-time buyers and those seeking value.',
      icon: Home,
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'GVR Estates',
      href: '/green-valley-ranch',
      type: 'Master-Planned Community',
      builder: 'Various Builders',
      homeSize: '1,800 - 4,000+ sq. ft.',
      style: 'Various',
      priceRange: '$450,000 - $1,500,000+',
      features: ['Diverse options', 'Multiple builders', 'Established community', 'Strong amenities'],
      description: 'The larger master-planned community with diverse housing options and excellent amenities.',
      icon: Building,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const comparisonFeatures = [
    { feature: 'Gated Security', mysticBay: true, cottages: true, gvrEstates: 'Some' },
    { feature: 'Average Home Size', mysticBay: '2,500+ sq. ft.', cottages: '1,500-1,900 sq. ft.', gvrEstates: '1,800-4,000+ sq. ft.' },
    { feature: 'Price Range', mysticBay: '$650K-$1.2M+', cottages: '$400K-$600K', gvrEstates: '$450K-$1.5M+' },
    { feature: 'Builder', mysticBay: 'American Nevada', cottages: 'Pacific Homes', gvrEstates: 'Various' },
    { feature: 'First-Time Buyer Friendly', mysticBay: false, cottages: true, gvrEstates: 'Some areas' },
    { feature: 'Luxury Appeal', mysticBay: true, cottages: false, gvrEstates: 'Some areas' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Neighborhoods' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#C5A059]" />
              <Home className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Green Valley Ranch Neighborhoods
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore the diverse communities within Green Valley Ranch master-planned community
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Find Your Perfect Community</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Green Valley Ranch is a master-planned community with over a dozen distinct neighborhoods, each offering unique characteristics, home styles, and lifestyles. Whether you're seeking a luxury gated community like Mystic Bay, an efficient first-time buyer option like The Cottages, or the diverse options throughout GVR Estates, there's a perfect fit for every buyer.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              All neighborhoods share access to Green Valley Ranch's excellent amenities, top-rated schools, and prime Henderson location near The District shopping center.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhood Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Featured Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {neighborhoods.map((neighborhood, index) => {
              const Icon = neighborhood.icon;
              return (
                <Link
                  key={index}
                  href={neighborhood.href}
                  className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all hover:border-[#C5A059]"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${neighborhood.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold mb-2">
                      {neighborhood.type}
                    </span>
                    <h3 className="text-2xl font-bold text-[#0F172A] mb-2 group-hover:text-[#C5A059] transition-colors">
                      {neighborhood.name}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">{neighborhood.description}</p>
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Builder:</span>
                      <span className="font-semibold text-[#0F172A]">{neighborhood.builder}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Home Size:</span>
                      <span className="font-semibold text-[#0F172A]">{neighborhood.homeSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Price Range:</span>
                      <span className="font-semibold text-[#C5A059]">{neighborhood.priceRange}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {neighborhood.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-2 py-1 bg-slate-50 text-slate-700 rounded text-xs border border-slate-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#C5A059] font-semibold text-sm group-hover:underline inline-flex items-center gap-1">
                    Explore {neighborhood.name} <LinkIcon className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Neighborhood Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-slate-200 shadow-sm">
              <thead className="bg-[#0F172A] text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Mystic Bay</th>
                  <th className="px-6 py-4 text-center font-semibold">The Cottages</th>
                  <th className="px-6 py-4 text-center font-semibold">GVR Estates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparisonFeatures.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#0F172A]">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-slate-700">
                      {typeof row.mysticBay === 'boolean' ? (
                        row.mysticBay ? (
                          <span className="text-green-600 font-semibold">✓</span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )
                      ) : (
                        row.mysticBay
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-700">
                      {typeof row.cottages === 'boolean' ? (
                        row.cottages ? (
                          <span className="text-green-600 font-semibold">✓</span>
                        ) : (
                          <span className="text-slate-400">—</span>
                        )
                      ) : (
                        row.cottages
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-slate-700">{row.gvrEstates}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Office Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Featured Listings
            </h2>
            <p className="text-lg text-slate-600">
              Explore available properties in Henderson and Las Vegas
            </p>
          </div>
          <RealScoutOfficeListings />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Which Neighborhood is Right for You?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let me help you find the perfect community based on your lifestyle and budget
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              Get Personalized Guidance
            </Link>
            <Link
              href="/buyers-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              View Buyer&apos;s Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
