import type { Metadata } from 'next';
import { TrendingUp, Home, Camera, FileText, BarChart, Shield, Phone, Mail } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Seller\'s Guide | Green Valley Ranch Insider | Henderson NV Home Selling',
  description: 'Complete guide to selling your home in Green Valley Ranch, Mystic Bay, and The Cottages. Expert tips, pricing strategy, and step-by-step selling process.',
  keywords: ['selling home Henderson', 'Green Valley Ranch seller guide', 'home selling process', 'how to sell home', 'selling in Mystic Bay', 'Henderson real estate selling'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/sellers-guide',
  },
  openGraph: {
    title: 'Seller\'s Guide | Green Valley Ranch Insider',
    description: 'Complete guide to selling your home in Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/sellers-guide',
  },
};

export default function SellersGuidePage() {
  const steps = [
    {
      number: '1',
      title: 'Get Your Home Valuation',
      description: 'Receive a comprehensive, data-driven valuation based on recent sales in your neighborhood, market conditions, and your home\'s unique features. This is your starting point for pricing strategy.',
    },
    {
      number: '2',
      title: 'Prepare Your Home',
      description: 'Make necessary repairs, declutter, and stage your home to showcase its best features. I\'ll provide specific recommendations based on what sells in Green Valley Ranch.',
    },
    {
      number: '3',
      title: 'Professional Photography & Marketing',
      description: 'High-quality photos, virtual tours, and strategic marketing across multiple platforms to attract qualified buyers. Your listing will stand out in the competitive market.',
    },
    {
      number: '4',
      title: 'Price Strategically',
      description: 'Set the right price based on market analysis, comparable sales, and current conditions. Pricing too high can lead to extended time on market; too low leaves money on the table.',
    },
    {
      number: '5',
      title: 'Showings & Open Houses',
      description: 'Coordinate showings and open houses to maximize exposure. I\'ll help you prepare and provide feedback from potential buyers.',
    },
    {
      number: '6',
      title: 'Review & Negotiate Offers',
      description: 'Evaluate offers not just on price, but also on terms, financing, and buyer qualifications. I\'ll negotiate to get you the best deal.',
    },
    {
      number: '7',
      title: 'Accept Offer & Enter Escrow',
      description: 'Once an offer is accepted, we\'ll enter escrow. I\'ll coordinate inspections, appraisals, and any requested repairs or credits.',
    },
    {
      number: '8',
      title: 'Close & Move Forward',
      description: 'Complete final walkthrough, sign closing documents, and receive your proceeds. Congratulations on a successful sale!',
    },
  ];

  const tips = [
    {
      icon: TrendingUp,
      title: 'Timing Matters',
      description: 'Spring and early fall typically see the most buyer activity in Green Valley Ranch. However, the right price sells any time of year.',
    },
    {
      icon: Home,
      title: 'Highlight Neighborhood Features',
      description: 'Emphasize proximity to The District, top-rated schools, gated security (for Mystic Bay/Cottages), and community amenities.',
    },
    {
      icon: BarChart,
      title: 'Know Your Competition',
      description: 'I\'ll provide a competitive market analysis showing similar homes for sale, recently sold, and how your property compares.',
    },
    {
      icon: Shield,
      title: 'Understand HOA Requirements',
      description: 'If selling in a gated community, ensure all HOA requirements are met and provide buyers with necessary documentation.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Seller\'s Guide', href: '/sellers-guide' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#C5A059]" />
              <Home className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Seller&apos;s Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your complete guide to selling your home in Green Valley Ranch for top dollar
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Sell Your Green Valley Ranch Home for Top Dollar</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Selling a home in Green Valley Ranch, especially in premium communities like Mystic Bay or The Cottages, requires a strategic approach. With my insider knowledge of these neighborhoods and the Henderson market, I'll help you maximize your sale price and minimize time on market.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              This guide walks you through the entire selling process, from initial valuation to closing day, with specific insights for Green Valley Ranch properties.
            </p>
          </div>
        </div>
      </section>

      {/* Selling Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            The Home Selling Process
          </h2>
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-[#0F172A]">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Insider Tips for Sellers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => {
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
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                        {tip.title}
                      </h3>
                      <p className="text-slate-600">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy - Seller Focused */}
      <WhyChooseReasons variant="seller-focused" showCTA={true} />

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
            Ready to Sell Your Home?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get your custom home valuation and learn how to maximize your sale price
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#valuation-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <TrendingUp className="w-5 h-5" />
              Get Your Valuation
            </Link>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (702) 500-1955
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
