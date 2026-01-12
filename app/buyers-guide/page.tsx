import type { Metadata } from 'next';
import { Search, Home, FileText, Shield, TrendingUp, MapPin, Phone, Mail } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Buyer\'s Guide | Green Valley Ranch Insider | Henderson NV Home Buying',
  description: 'Complete guide to buying a home in Green Valley Ranch, Mystic Bay, and The Cottages. Expert tips, neighborhood insights, and step-by-step buying process.',
  keywords: ['buying home Henderson', 'Green Valley Ranch buyer guide', 'home buying process', 'first time home buyer Henderson', 'buying in Mystic Bay', 'Henderson real estate buying'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/buyers-guide',
  },
  openGraph: {
    title: 'Buyer\'s Guide | Green Valley Ranch Insider',
    description: 'Complete guide to buying a home in Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/buyers-guide',
  },
};

export default function BuyersGuidePage() {
  const steps = [
    {
      number: '1',
      title: 'Get Pre-Approved',
      description: 'Work with a trusted lender to determine your budget and get pre-approved for a mortgage. This strengthens your offers and helps you focus on homes within your price range.',
    },
    {
      number: '2',
      title: 'Define Your Priorities',
      description: 'Consider what matters most: neighborhood (Mystic Bay vs The Cottages), home size, features, schools, proximity to amenities, and lifestyle preferences.',
    },
    {
      number: '3',
      title: 'Start Your Search',
      description: 'Use our advanced search tools and work with me to find properties that match your criteria. I\'ll provide insider knowledge about each neighborhood and property.',
    },
    {
      number: '4',
      title: 'View Properties',
      description: 'Schedule showings and open houses. I\'ll help you evaluate each property\'s condition, value, and potential, pointing out things you might miss.',
    },
    {
      number: '5',
      title: 'Make an Offer',
      description: 'I\'ll help you craft a competitive offer based on market analysis, comparable sales, and property condition. We\'ll negotiate terms that work for you.',
    },
    {
      number: '6',
      title: 'Inspection & Due Diligence',
      description: 'Conduct professional inspections, review HOA documents (for gated communities), and verify all property details before moving forward.',
    },
    {
      number: '7',
      title: 'Finalize Financing',
      description: 'Work with your lender to complete the loan process, provide any requested documentation, and secure your mortgage.',
    },
    {
      number: '8',
      title: 'Close & Move In',
      description: 'Complete final walkthrough, sign closing documents, and receive the keys to your new Green Valley Ranch home!',
    },
  ];

  const neighborhoods = [
    {
      name: 'Mystic Bay',
      href: '/mystic-bay',
      description: 'Larger, custom Mediterranean-style homes (2,500+ sq. ft.) in a gated community',
    },
    {
      name: 'The Cottages',
      href: '/the-cottages',
      description: 'Compact, efficient homes (1,500-1,900 sq. ft.) perfect for first-time buyers',
    },
    {
      name: 'Green Valley Ranch',
      href: '/green-valley-ranch',
      description: 'Master-planned community with diverse housing options and amenities',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Buyer\'s Guide', href: '/buyers-guide' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Search className="w-8 h-8 text-[#C5A059]" />
              <Home className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Buyer&apos;s Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your complete guide to buying a home in Green Valley Ranch, Henderson, NV
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Welcome to Green Valley Ranch</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Buying a home in Green Valley Ranch means joining a well-established master-planned community with top-rated schools, excellent amenities, and a variety of neighborhoods to choose from. Whether you're a first-time buyer or looking to upgrade, this guide will help you navigate the process.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              As your Green Valley Ranch Insider, I'll provide expert guidance every step of the way, from initial search to closing day.
            </p>
          </div>
        </div>
      </section>

      {/* Buying Process Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            The Home Buying Process
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

      {/* Neighborhoods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Explore Green Valley Ranch Neighborhoods
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Link
                key={index}
                href={neighborhood.href}
                className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700 hover:border-[#C5A059] transition-colors group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-[#C5A059] group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">{neighborhood.name}</h3>
                </div>
                <p className="text-slate-300 mb-4">{neighborhood.description}</p>
                <span className="text-[#C5A059] font-semibold group-hover:underline">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Insider Tips for Buyers
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-2">Understand HOA Requirements</h3>
                  <p className="text-slate-600">Gated communities like Mystic Bay and The Cottages have HOA rules. Review these carefully to ensure they align with your lifestyle.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <TrendingUp className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-2">Consider Market Timing</h3>
                  <p className="text-slate-600">Green Valley Ranch properties can be competitive. Being pre-approved and ready to move quickly gives you an advantage.</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-[#C5A059] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-2">Research Schools</h3>
                  <p className="text-slate-600">Even if you don't have children, school ratings impact property values. Green Valley Ranch has access to highly-rated schools.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's start your search for the perfect Green Valley Ranch property
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call (702) 500-1955
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
