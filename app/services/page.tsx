import type { Metadata } from 'next';
import { Home, TrendingUp, Search, FileText, Camera, Users, BarChart, Shield, Phone, Mail } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';

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
  const sellerServices = [
    {
      icon: TrendingUp,
      title: 'Custom Home Valuation',
      description: 'Get an accurate, data-driven estimate of your home\'s value based on recent sales, market trends, and unique property features in your neighborhood.',
    },
    {
      icon: Camera,
      title: 'Professional Marketing',
      description: 'High-quality photography, virtual tours, and strategic marketing across multiple platforms to showcase your property\'s best features.',
    },
    {
      icon: BarChart,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis including comparable sales, pricing strategy, and timing recommendations for maximum return.',
    },
    {
      icon: Users,
      title: 'Buyer Qualification',
      description: 'Thorough screening of potential buyers to ensure serious, qualified prospects and smooth transactions.',
    },
    {
      icon: FileText,
      title: 'Transaction Management',
      description: 'Expert handling of all paperwork, negotiations, and coordination from listing to closing.',
    },
    {
      icon: Shield,
      title: 'Neighborhood Expertise',
      description: 'Deep knowledge of Green Valley Ranch communities to position your property effectively and attract the right buyers.',
    },
  ];

  const buyerServices = [
    {
      icon: Search,
      title: 'Property Search',
      description: 'Access to comprehensive MLS listings and off-market opportunities in Green Valley Ranch and surrounding areas.',
    },
    {
      icon: Home,
      title: 'Neighborhood Guidance',
      description: 'Expert insights into Mystic Bay, The Cottages, and other GVR communities to find your perfect match.',
    },
    {
      icon: BarChart,
      title: 'Market Insights',
      description: 'Current market conditions, pricing trends, and investment potential analysis for informed decision-making.',
    },
    {
      icon: Shield,
      title: 'Negotiation Expertise',
      description: 'Skilled negotiation to secure the best price and terms for your new home purchase.',
    },
    {
      icon: FileText,
      title: 'Transaction Support',
      description: 'Guidance through inspections, appraisals, financing, and all steps to a successful closing.',
    },
    {
      icon: Users,
      title: 'Network Access',
      description: 'Connections with trusted lenders, inspectors, contractors, and other professionals in the Henderson area.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Services' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Home className="w-8 h-8 text-[#C5A059]" />
              <TrendingUp className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real Estate Services
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive services for sellers and buyers in Green Valley Ranch and Henderson, NV
            </p>
          </div>
        </div>
      </section>

      {/* Seller Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Services for Sellers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Everything you need to sell your Green Valley Ranch home for top dollar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Buyer Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Services for Buyers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Expert guidance to find your perfect home in Green Valley Ranch
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buyerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
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
