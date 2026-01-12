import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ValuationForm } from '@/components/ValuationForm';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Green Valley Ranch Insider | Henderson NV Real Estate',
  description: 'Contact Dr. Jan Duffy for expert real estate services in Green Valley Ranch, Mystic Bay, and The Cottages. Call (702) 500-1955 or visit our Henderson office.',
  keywords: ['contact real estate agent Henderson', 'Dr. Jan Duffy contact', 'Green Valley Ranch real estate', 'Henderson NV realtor'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/contact',
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Green Valley Ranch Insider',
    description: 'Contact Dr. Jan Duffy for expert real estate services in Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Ready to sell your Green Valley Ranch home? Let's discuss your real estate needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white text-center border border-slate-700">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4 mx-auto">
                <Phone className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a
                href="tel:+17025001955"
                className="text-[#C5A059] hover:text-[#B8914F] transition-colors text-lg font-semibold block mb-1"
              >
                (702) 500-1955
              </a>
              <a
                href="tel:+17022221964"
                className="text-slate-300 hover:text-[#C5A059] transition-colors text-sm"
              >
                (702) 222-1964
              </a>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white text-center border border-slate-700">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4 mx-auto">
                <Mail className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a
                href="mailto:DrDuffy@GreenValleyRanchInsider.com"
                className="text-[#C5A059] hover:text-[#B8914F] transition-colors break-all"
              >
                DrDuffy@GreenValleyRanchInsider.com
              </a>
            </div>

            {/* Office */}
            <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white text-center border border-slate-700">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4 mx-auto">
                <MapPin className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold mb-2">Office</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                360 Mike Koizumi Way<br />
                Henderson, NV 89011
              </p>
              <a
                href="/location"
                className="text-[#C5A059] hover:text-[#B8914F] transition-colors text-sm font-semibold mt-2 inline-block"
              >
                Get Directions →
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white rounded-xl p-8 border border-slate-200 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-[#C5A059]" />
              <h2 className="text-2xl font-bold text-[#0F172A]">Office Hours</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-semibold text-[#0F172A] mb-1">Monday - Friday</p>
                <p className="text-slate-600">9:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-1">Saturday</p>
                <p className="text-slate-600">10:00 AM - 4:00 PM</p>
              </div>
              <div>
                <p className="font-semibold text-[#0F172A] mb-1">Sunday</p>
                <p className="text-slate-600">By Appointment</p>
              </div>
            </div>
            <p className="text-sm text-slate-500 mt-4">
              * Hours may vary. Please call ahead to confirm availability.
            </p>
          </div>
        </div>
      </section>

      {/* Valuation Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
                Request Your Home Valuation
              </h2>
            </div>
            <p className="text-lg text-slate-600">
              Fill out the form below and we'll get back to you with a customized valuation report
            </p>
          </div>
          <ValuationForm />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy - Condensed */}
      <WhyChooseReasons variant="condensed" showCTA={true} />

      {/* Quick Actions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a
              href="tel:+17025001955"
              className="flex items-center justify-center gap-3 p-6 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=360+Mike+Koizumi+Way,+Henderson,+NV+89011"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-slate-100 text-[#0F172A] rounded-lg font-semibold hover:bg-slate-200 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
            <a
              href="mailto:DrDuffy@GreenValleyRanchInsider.com"
              className="flex items-center justify-center gap-3 p-6 bg-slate-100 text-[#0F172A] rounded-lg font-semibold hover:bg-slate-200 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
            <a
              href="https://www.google.com/search?q=Dr.+Jan+Duffy+Berkshire+Hathaway+Henderson+NV+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 bg-slate-100 text-[#0F172A] rounded-lg font-semibold hover:bg-slate-200 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              View Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Office Listings Section */}
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
    </main>
  );
}
