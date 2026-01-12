import type { Metadata } from 'next';
import { Home, TrendingUp, Search, FileText, Camera, Users, BarChart, Shield, Phone, Mail } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { HowIHelp } from '@/components/HowIHelp';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Real Estate Services | Green Valley Ranch Insider | Henderson NV',
  description: 'Comprehensive real estate services for sellers and buyers in Green Valley Ranch, Mystic Bay, and The Cottages. Home valuations, marketing, and expert guidance.',
  keywords: ['real estate services Henderson', 'home selling services', 'home buying services', 'property marketing', 'home valuation services', 'Green Valley Ranch real estate'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/services',
  },
  openGraph: {
    title: 'Real Estate Services | Green Valley Ranch Insider',
    description: 'Comprehensive real estate services for sellers and buyers in Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Services', href: '/services' }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Home className="w-8 h-8 text-[#C5A059]" />
            <TrendingUp className="w-8 h-8 text-[#C5A059]" />
            <Shield className="w-8 h-8 text-[#C5A059]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Real Estate <span className="text-[#C5A059]">Services</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Comprehensive services for sellers and buyers in Green Valley Ranch, Mystic Bay, and The Cottages
          </p>
        </div>
      </section>

      {/* How I Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <HowIHelp />
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss how I can help with your real estate needs
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
            <Link
              href="/#valuation-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <TrendingUp className="w-5 h-5" />
              Get Valuation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
