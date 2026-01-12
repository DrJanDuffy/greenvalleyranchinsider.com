import type { Metadata } from 'next';
import { TrendingUp, BarChart, Home, MapPin, Calendar, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Market Insights | Green Valley Ranch Insider | Henderson NV Real Estate Trends',
  description: 'Current market trends, statistics, and insights for Green Valley Ranch, Mystic Bay, and The Cottages. Expert analysis of Henderson NV real estate market.',
  keywords: ['Henderson real estate market', 'Green Valley Ranch market trends', 'Henderson home prices', 'real estate market analysis', 'Henderson NV market statistics', '89052 real estate'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/market-insights',
  },
  openGraph: {
    title: 'Market Insights | Green Valley Ranch Insider',
    description: 'Current market trends, statistics, and insights for Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/market-insights',
  },
};

export default function MarketInsightsPage() {
  const marketStats = [
    {
      label: 'Average Days on Market',
      value: '32',
      change: '+5%',
      trend: 'up',
      description: 'Properties in Green Valley Ranch sell faster than Henderson average',
    },
    {
      label: 'Median Sale Price',
      value: '$625,000',
      change: '+3.2%',
      trend: 'up',
      description: 'Steady appreciation in Green Valley Ranch communities',
    },
    {
      label: 'Price per Square Foot',
      value: '$245',
      change: '+2.8%',
      trend: 'up',
      description: 'Premium pricing reflects community desirability',
    },
    {
      label: 'Inventory Level',
      value: '2.1 months',
      change: '-8%',
      trend: 'down',
      description: 'Low inventory indicates strong seller\'s market',
    },
  ];

  const neighborhoodStats = [
    {
      name: 'Mystic Bay',
      avgPrice: '$750,000',
      avgSqft: '2,800',
      daysOnMarket: '28',
      pricePerSqft: '$268',
      description: 'Luxury gated community with larger homes and premium features',
    },
    {
      name: 'The Cottages',
      avgPrice: '$485,000',
      avgSqft: '1,700',
      daysOnMarket: '35',
      pricePerSqft: '$285',
      description: 'Efficient floor plans with strong value per square foot',
    },
    {
      name: 'Green Valley Ranch',
      avgPrice: '$625,000',
      avgSqft: '2,200',
      daysOnMarket: '32',
      pricePerSqft: '$284',
      description: 'Master-planned community with diverse housing options',
    },
  ];

  const trends = [
    {
      title: 'Strong Demand for Gated Communities',
      description: 'Mystic Bay and The Cottages continue to see high demand due to security, amenities, and community feel. Properties in these communities often receive multiple offers.',
      icon: Home,
    },
    {
      title: 'Premium Pricing for Location',
      description: 'Proximity to The District shopping center, top-rated schools, and I-215 access commands premium pricing. Homes near these amenities sell 5-8% above average.',
      icon: MapPin,
    },
    {
      title: 'Seasonal Patterns',
      description: 'Spring and early fall see peak activity, but well-priced properties sell year-round. Winter months can offer less competition for buyers.',
      icon: Calendar,
    },
    {
      title: 'Renovation ROI',
      description: 'Kitchen and bathroom updates, fresh paint, and curb appeal improvements show the best return on investment in Green Valley Ranch properties.',
      icon: TrendingUp,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Market Insights', href: '/market-insights' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BarChart className="w-8 h-8 text-[#C5A059]" />
              <TrendingUp className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Market Insights
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Current trends and statistics for Green Valley Ranch, Henderson, NV real estate market
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Green Valley Ranch Market Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketStats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-slate-600">{stat.label}</p>
                  {stat.trend === 'up' ? (
                    <ArrowUp className="w-5 h-5 text-green-600" />
                  ) : (
                    <ArrowDown className="w-5 h-5 text-red-600" />
                  )}
                </div>
                <div className="text-3xl font-bold text-[#0F172A] mb-2">{stat.value}</div>
                <div className={`text-sm font-semibold mb-2 ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change} vs last year
                </div>
                <p className="text-xs text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhood Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Neighborhood Market Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {neighborhoodStats.map((neighborhood, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-2xl font-bold text-[#0F172A] mb-4">{neighborhood.name}</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Avg. Sale Price</span>
                    <span className="font-bold text-[#0F172A]">{neighborhood.avgPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Avg. Square Feet</span>
                    <span className="font-bold text-[#0F172A]">{neighborhood.avgSqft}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Days on Market</span>
                    <span className="font-bold text-[#0F172A]">{neighborhood.daysOnMarket}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Price per Sq. Ft.</span>
                    <span className="font-bold text-[#C5A059]">{neighborhood.pricePerSqft}</span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 pt-4 border-t border-slate-200">{neighborhood.description}</p>
                <Link
                  href={neighborhood.name === 'Mystic Bay' ? '/mystic-bay' : neighborhood.name === 'The Cottages' ? '/the-cottages' : '/green-valley-ranch'}
                  className="mt-4 inline-block text-[#C5A059] hover:underline font-semibold text-sm"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Trends */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Current Market Trends
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trends.map((trend, index) => {
              const Icon = trend.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#0F172A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3">{trend.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{trend.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy - Condensed */}
      <WhyChooseReasons variant="condensed" showCTA={true} />

      {/* Office Listings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
            Get Your Personalized Market Analysis
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Understand your property\'s value in today\'s market with a custom analysis
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#valuation-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <DollarSign className="w-5 h-5" />
              Get Your Valuation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              Contact for Market Report
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
