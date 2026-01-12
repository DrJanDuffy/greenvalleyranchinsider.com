import type { Metadata } from 'next';
import { Truck, MapPin, FileText, Home, Phone, Mail, Calendar, CheckCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';

export const metadata: Metadata = {
  title: 'Moving Guide | Green Valley Ranch Insider | Henderson NV Relocation',
  description: 'Complete guide to moving to Green Valley Ranch, Henderson NV. Utilities, services, change of address, and everything you need to know for your relocation.',
  keywords: ['moving to Henderson', 'relocation guide Henderson', 'moving to Green Valley Ranch', 'Henderson utilities', 'change of address Henderson', 'moving checklist'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/moving-guide',
  },
  openGraph: {
    title: 'Moving Guide | Green Valley Ranch Insider',
    description: 'Complete guide to moving to Green Valley Ranch, Henderson NV.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/moving-guide',
  },
};

export default function MovingGuidePage() {
  const checklist = [
    {
      category: 'Before You Move',
      items: [
        'Schedule movers or rent moving truck',
        'Notify current landlord (if renting)',
        'Transfer or cancel utilities at old address',
        'Change address with USPS',
        'Update address with banks and credit cards',
        'Notify insurance companies',
        'Transfer medical records',
        'Register children for new schools',
      ],
    },
    {
      category: 'Setting Up Utilities',
      items: [
        'NV Energy (electricity)',
        'Las Vegas Valley Water District (water)',
        'Republic Services (trash/recycling)',
        'Internet and cable providers',
        'Home security system (if desired)',
      ],
    },
    {
      category: 'After You Arrive',
      items: [
        'Update driver\'s license at DMV',
        'Register vehicle in Nevada',
        'Update voter registration',
        'Find local healthcare providers',
        'Explore neighborhood amenities',
        'Join community groups or HOA',
        'Get to know your neighbors',
      ],
    },
  ];

  const utilities = [
    {
      name: 'NV Energy',
      service: 'Electricity',
      phone: '(702) 402-5555',
      website: 'https://www.nvenergy.com',
      description: 'Primary electricity provider for Henderson and Las Vegas area',
    },
    {
      name: 'Las Vegas Valley Water District',
      service: 'Water & Sewer',
      phone: '(702) 870-4194',
      website: 'https://www.lvvwd.com',
      description: 'Water and sewer services for Henderson residents',
    },
    {
      name: 'Republic Services',
      service: 'Trash & Recycling',
      phone: '(702) 735-5151',
      website: 'https://www.republicservices.com',
      description: 'Waste collection and recycling services',
    },
    {
      name: 'Cox Communications',
      service: 'Internet & Cable',
      phone: '(702) 383-4000',
      website: 'https://www.cox.com',
      description: 'High-speed internet and cable TV services',
    },
  ];

  const importantContacts = [
    {
      name: 'Henderson City Hall',
      phone: '(702) 267-2000',
      description: 'City services and information',
    },
    {
      name: 'Clark County DMV',
      phone: '(702) 486-4368',
      description: 'Driver\'s license and vehicle registration',
    },
    {
      name: 'Clark County School District',
      phone: '(702) 799-5000',
      description: 'School registration and information',
    },
    {
      name: 'USPS Change of Address',
      phone: '1-800-275-8777',
      description: 'Forward your mail',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Moving Guide' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Truck className="w-8 h-8 text-[#C5A059]" />
              <Home className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Moving Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Everything you need to know about moving to Green Valley Ranch, Henderson, NV
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Welcome to Green Valley Ranch!</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Moving to a new area can be overwhelming, but we're here to help make your transition to Green Valley Ranch as smooth as possible. This guide covers everything you need to know about setting up utilities, changing your address, and getting settled in your new community.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              As your local real estate expert, I'm available to answer questions and help you get connected with local services and resources.
            </p>
          </div>
        </div>
      </section>

      {/* Moving Checklist */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Moving Checklist
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {checklist.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#C5A059]" />
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Utilities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Setting Up Utilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {utilities.map((utility, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">{utility.name}</h3>
                <p className="text-sm text-slate-500 mb-4">{utility.service}</p>
                <p className="text-slate-600 mb-4">{utility.description}</p>
                <div className="space-y-2">
                  <a
                    href={`tel:${utility.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2 text-[#C5A059] hover:text-[#B8914F] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{utility.phone}</span>
                  </a>
                  <a
                    href={utility.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#C5A059] hover:text-[#B8914F] transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Visit Website</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Contacts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Important Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {importantContacts.map((contact, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{contact.name}</h3>
                <p className="text-slate-600 mb-3 text-sm">{contact.description}</p>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '').replace(/-/g, '')}`}
                  className="flex items-center gap-2 text-[#C5A059] hover:text-[#B8914F] transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </a>
              </div>
            ))}
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
            Need Help With Your Move?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            I'm here to help make your transition to Green Valley Ranch as smooth as possible
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
          </div>
        </div>
      </section>
    </main>
  );
}
