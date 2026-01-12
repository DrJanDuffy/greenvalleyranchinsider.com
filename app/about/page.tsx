import type { Metadata } from 'next';
import { Award, GraduationCap, TrendingUp, Users, Home, Shield, Phone, Mail, MapPin, Handshake } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Green Valley Ranch Insider | Henderson NV Real Estate Expert',
  description: 'Meet Dr. Jan Duffy, a top-performing real estate agent with 30+ years of experience in Las Vegas and Henderson. Expert in Green Valley Ranch, Mystic Bay, and The Cottages communities.',
  keywords: ['Dr. Jan Duffy', 'Henderson real estate agent', 'Green Valley Ranch realtor', 'Berkshire Hathaway agent', 'Las Vegas real estate expert', 'top real estate agent Henderson'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/about',
  },
  openGraph: {
    title: 'About Dr. Jan Duffy | Green Valley Ranch Insider',
    description: 'Meet Dr. Jan Duffy, a top-performing real estate agent with 30+ years of experience in Las Vegas and Henderson.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/about',
  },
};

export default function AboutPage() {
  const credentials = [
    {
      icon: GraduationCap,
      title: '30+ Years Experience',
      description: 'Decades of experience and deep local knowledge of Green Valley Ranch. Las Vegas real estate expertise spanning over three decades.',
    },
    {
      icon: TrendingUp,
      title: '135+ Domains Managed',
      description: 'Neighborhood-focused websites demonstrating expertise in targeted real estate marketing and digital presence.',
    },
    {
      icon: Award,
      title: 'Top Agent Performance',
      description: 'Consistently ranked among top performers at Berkshire Hathaway HomeServices Nevada Properties.',
    },
    {
      icon: Shield,
      title: 'Expert Green Valley Ranch Insider',
      description: 'Insider knowledge & insights into Mystic Bay, The Cottages, and the entire Green Valley Ranch master-planned community.',
    },
  ];

  const specialties = [
    'Green Valley Ranch master-planned community',
    'Mystic Bay gated subdivision',
    'The Cottages at Green Valley Ranch',
    'GVR Estates and luxury properties',
    'Henderson NV real estate market',
    'Home valuations and market analysis',
    'Luxury home sales and marketing',
    'Neighborhood-specific expertise',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Users className="w-8 h-8 text-[#C5A059]" />
              <Award className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About Dr. Jan Duffy
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your trusted real estate expert in Green Valley Ranch, Henderson, and Las Vegas
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Your Green Valley Ranch Insider</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              With over 30 years of experience in the Las Vegas and Henderson real estate markets, Dr. Jan Duffy brings unparalleled expertise to every transaction. As a top-performing agent with Berkshire Hathaway HomeServices Nevada Properties, she specializes in the prestigious Green Valley Ranch master-planned community and its exclusive subdivisions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Dr. Duffy's deep knowledge of neighborhoods like Mystic Bay, The Cottages, and GVR Estates goes beyond what you'll find in a typical listing. She understands the unique characteristics, market trends, and insider details that make each community special—knowledge that comes from years of working directly with homeowners and buyers in these areas.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you're selling your home for top dollar or finding your perfect property, Dr. Duffy combines data-driven insights with personalized service to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C5A059] mb-2">30+</div>
              <div className="text-lg font-semibold text-[#0F172A] mb-1">Years Experience</div>
              <div className="text-sm text-slate-600">Las Vegas real estate expertise</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C5A059] mb-2">135+</div>
              <div className="text-lg font-semibold text-[#0F172A] mb-1">Domains Managed</div>
              <div className="text-sm text-slate-600">Neighborhood-focused websites</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C5A059] mb-2">Top</div>
              <div className="text-lg font-semibold text-[#0F172A] mb-1">Agent Performance</div>
              <div className="text-sm text-slate-600">Berkshire Hathaway HomeServices</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-[#C5A059] mb-2">Expert</div>
              <div className="text-lg font-semibold text-[#0F172A] mb-1">Green Valley Ranch</div>
              <div className="text-sm text-slate-600">Insider knowledge & insights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4 text-center">
            Why Choose Dr. Jan Duffy?
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Real expertise goes beyond credentials. Here's what you get when you work with someone who makes the decisions that truly matter in your transaction.
          </p>

          {/* Pricing & Valuation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#C5A059]" />
              Pricing & Valuation Decisions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Final list price recommendation (owning the number)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Price reduction timing and amount decisions</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Interpreting why comps sold—not just what they sold for</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Adjusting for unique features AI can't quantify (views, noise, smell, vibe)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Reading seller motivation to set realistic expectations</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Advising on offer price strategy for buyers</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Knowing when a property is overpriced vs. worth it</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Predicting appraisal risk and advising accordingly</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Recommending pre-listing improvements ROI</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Identifying hidden value (lot potential, ADU opportunity)</p>
              </div>
            </div>
          </div>

          {/* Negotiation & Deal Strategy */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <Handshake className="w-6 h-6 text-[#C5A059]" />
              Negotiation & Deal Strategy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Counter-offer strategy and timing</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Reading the other agent's tells and client situation</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Knowing when to push vs. walk away</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Inspection negotiation—what to ask for, what to let go</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Repair credit vs. repair completion recommendations</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Escalation clause advice</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Multiple offer situation guidance</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Backup offer positioning</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Creative deal structuring (seller financing, assumable loans)</p>
              </div>
            </div>
          </div>

          {/* Client Advisory & Counseling */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-[#C5A059]" />
              Client Advisory & Counseling
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Recommending buy vs. rent based on client situation</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Advising sell-first vs. buy-first timing</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Reading emotional readiness to transact</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Guiding divorce clients through equitable solutions</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Advising heirs on probate property decisions</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Helping relocating buyers prioritize neighborhoods</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Counseling anxious first-time buyers through fear</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Managing seller expectations on timeline</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Advising on 1031 exchange timing and strategy</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Retirement community fit assessment (55+ lifestyle match)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Investment property portfolio strategy</p>
              </div>
            </div>
          </div>

          {/* Risk Assessment & Problem-Solving */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#C5A059]" />
              Risk Assessment & Problem-Solving
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Identifying red flags in disclosures</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Recommending additional inspections (sewer scope, pool, roof)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Advising on title issues and resolution paths</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Recognizing financing risk before it kills a deal</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Spotting appraisal problems early</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Managing low appraisal situations</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Navigating HOA issues and restrictions</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Handling permit and code violation discoveries</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Advising on environmental concerns (mold, asbestos, radon)</p>
              </div>
            </div>
          </div>

          {/* Physical Execution & Local Knowledge */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
              <Home className="w-6 h-6 text-[#C5A059]" />
              Physical Execution & Local Knowledge
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Walking properties with buyers (in-person, not virtual)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Noticing deferred maintenance during walkthrough</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Smelling mold, smoke, pets (what AI can't detect)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Hearing traffic, airport, neighbor noise in real-time</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Driving neighborhoods to know inventory intimately</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Knowing which streets flood after rain</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Learning school drop-off traffic patterns</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Identifying noise sources (flight paths, highways)</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Discovering hidden neighborhood gems</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Building relationships with HOA boards</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Knowing local business owners by name</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <p className="text-slate-700 text-sm">Understanding microclimate differences (wind, sun)</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white text-center">
            <p className="text-xl font-semibold mb-4">This is the difference between an agent and an expert</p>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              When you work with Dr. Jan Duffy, you get someone who makes the decisions that truly matter—not just someone who processes paperwork.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg text-lg"
              >
                <Phone className="w-5 h-5" />
                Let's Talk About Your Goals
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Areas of Specialization
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200"
              >
                <Home className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                <span className="text-slate-700">{specialty}</span>
              </div>
            ))}
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss your real estate goals and how I can help you achieve them
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
              Send Message
            </Link>
            <Link
              href="/location"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Visit Office
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
