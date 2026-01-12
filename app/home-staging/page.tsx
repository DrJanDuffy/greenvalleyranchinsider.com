import type { Metadata } from 'next';
import { Home, Sparkles, Paintbrush, Camera, TrendingUp, CheckCircle, Phone, Mail } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Home Staging Guide | Green Valley Ranch Insider | Henderson NV Home Staging',
  description: 'Complete guide to staging your home for sale in Green Valley Ranch. Expert tips, room-by-room staging advice, and strategies to maximize your sale price.',
  keywords: ['home staging Henderson', 'staging tips', 'home staging guide', 'how to stage home', 'home staging for sale', 'Green Valley Ranch staging'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/home-staging',
  },
  openGraph: {
    title: 'Home Staging Guide | Green Valley Ranch Insider',
    description: 'Complete guide to staging your home for sale in Green Valley Ranch, Henderson NV.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/home-staging',
  },
};

export default function HomeStagingPage() {
  const stagingTips = [
    {
      room: 'Living Room',
      tips: [
        'Remove personal items and family photos',
        'Create conversation areas with furniture arrangement',
        'Add fresh flowers or plants',
        'Ensure good lighting (natural and artificial)',
        'Declutter and remove excess furniture',
      ],
      icon: Home,
    },
    {
      room: 'Kitchen',
      tips: [
        'Clear countertops completely',
        'Deep clean appliances and surfaces',
        'Replace old hardware if needed',
        'Add a bowl of fresh fruit or decorative items',
        'Ensure all lights work and are bright',
      ],
      icon: Sparkles,
    },
    {
      room: 'Bedrooms',
      tips: [
        'Use neutral bedding and linens',
        'Remove personal items from nightstands',
        'Create a hotel-like atmosphere',
        'Ensure closets are organized and not overstuffed',
        'Make beds every day during showings',
      ],
      icon: Home,
    },
    {
      room: 'Bathrooms',
      tips: [
        'Remove all personal items from counters',
        'Add fresh, clean towels',
        'Ensure mirrors and fixtures sparkle',
        'Replace old shower curtains',
        'Add subtle, pleasant scents',
      ],
      icon: Sparkles,
    },
  ];

  const generalTips = [
    {
      icon: Paintbrush,
      title: 'Neutral Color Palette',
      description: 'Paint walls in neutral colors (whites, grays, beiges) to appeal to the widest range of buyers. Bold colors can be distracting.',
    },
    {
      icon: TrendingUp,
      title: 'Curb Appeal',
      description: 'First impressions matter. Ensure your exterior is well-maintained: fresh paint, clean landscaping, and welcoming entryway.',
    },
    {
      icon: Camera,
      title: 'Photography Ready',
      description: 'Stage your home as if every room will be photographed. Remove clutter, open curtains, and ensure good lighting throughout.',
    },
    {
      icon: Home,
      title: 'Depersonalize',
      description: 'Remove personal items, family photos, and collections. Buyers need to envision themselves living in the space.',
    },
  ];

  const roiImprovements = [
    {
      improvement: 'Fresh Paint (Neutral Colors)',
      cost: '$500 - $2,000',
      roi: 'High',
      description: 'One of the best ROI improvements. Fresh, neutral paint makes spaces feel clean and updated.',
    },
    {
      improvement: 'Deep Cleaning',
      cost: '$200 - $500',
      roi: 'Very High',
      description: 'Professional cleaning makes a huge difference in buyer perception. Essential for all homes.',
    },
    {
      improvement: 'Decluttering & Organizing',
      cost: '$0 - $500',
      roi: 'Very High',
      description: 'Free or low-cost improvement that makes spaces feel larger and more appealing.',
    },
    {
      improvement: 'Minor Repairs',
      cost: '$100 - $1,000',
      roi: 'High',
      description: 'Fix leaky faucets, squeaky doors, and other minor issues that signal maintenance concerns.',
    },
    {
      improvement: 'Landscaping',
      cost: '$300 - $1,500',
      roi: 'Medium-High',
      description: 'Well-maintained landscaping improves curb appeal and first impressions.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Home Staging', href: '/home-staging' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-[#C5A059]" />
              <Home className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Home Staging Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert tips to stage your Green Valley Ranch home for maximum appeal and sale price
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Why Staging Matters</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Properly staged homes sell faster and for higher prices. In competitive markets like Green Valley Ranch, staging can be the difference between multiple offers and a home sitting on the market.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Staging helps buyers visualize themselves living in your home, highlights your property's best features, and creates an emotional connection that leads to offers. Even small staging improvements can significantly impact your sale price.
            </p>
          </div>
        </div>
      </section>

      {/* Room-by-Room Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Room-by-Room Staging Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stagingTips.map((room, index) => {
              const Icon = room.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#C5A059] rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0F172A]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0F172A]">{room.room}</h3>
                  </div>
                  <ul className="space-y-2">
                    {room.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* General Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            General Staging Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generalTips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#0F172A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{tip.title}</h3>
                      <p className="text-slate-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Improvements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            High-ROI Staging Improvements
          </h2>
          <div className="space-y-4">
            {roiImprovements.map((improvement, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#0F172A]">{improvement.improvement}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        improvement.roi === 'Very High' 
                          ? 'bg-green-100 text-green-700'
                          : improvement.roi === 'High'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {improvement.roi} ROI
                      </span>
                    </div>
                    <p className="text-slate-600 mb-2">{improvement.description}</p>
                    <p className="text-sm text-slate-500">Estimated Cost: <span className="font-semibold text-[#0F172A]">{improvement.cost}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy - Condensed */}
      <WhyChooseReasons variant="condensed" showCTA={true} />

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
            Need Staging Advice?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get personalized staging recommendations for your Green Valley Ranch home
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Schedule Consultation
            </Link>
            <Link
              href="/sellers-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <TrendingUp className="w-5 h-5" />
              View Seller&apos;s Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
