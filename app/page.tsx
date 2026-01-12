import { Home as HomeIcon, TrendingUp, MapPin } from 'lucide-react';
import { NeighborhoodFocus } from '@/components/NeighborhoodFocus';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { Testimonials } from '@/components/Testimonials';
import { RealScoutWidget } from '@/components/RealScoutWidget';
import { RealScoutAdvancedSearch } from '@/components/RealScoutAdvancedSearch';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { RealScoutSoldListings } from '@/components/RealScoutSoldListings';
import { HomebotWidget } from '@/components/HomebotWidget';
import { NewsletterSignup } from '@/components/NewsletterSignup';
import { HowIHelp } from '@/components/HowIHelp';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';
import { MarketStat } from '@/components/MarketStat';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
  description: 'A Henderson home just sold for $688K on Marywood Park. Get every Green Valley Ranch sale before Zillow posts it. Expert real estate services for Mystic Bay, The Cottages, and Green Valley Ranch.',
  keywords: [
    'Green Valley Ranch',
    'Henderson NV real estate',
    'Mystic Bay Henderson',
    'The Cottages Henderson',
    'Henderson homes for sale',
    '89052 real estate',
    'Dr. Jan Duffy',
    'Berkshire Hathaway HomeServices',
    'home valuation Henderson',
    'property search Henderson',
    'real estate agent Henderson NV',
  ],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com',
  },
  openGraph: {
    title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    description: 'Get every Green Valley Ranch sale before Zillow posts it. Expert real estate services for Mystic Bay, The Cottages, and Green Valley Ranch.',
    url: 'https://greenvalleyranchinsider.com',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <HomeIcon className="w-8 h-8 text-[#C5A059]" />
            <TrendingUp className="w-8 h-8 text-[#C5A059]" />
            <MapPin className="w-8 h-8 text-[#C5A059]" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Henderson Home Just Sold for <span className="text-[#C5A059]">$688K</span> on Marywood Park
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Get every Green Valley Ranch sale before Zillow posts it
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm">
            <a href="/green-valley-ranch" className="text-[#C5A059] hover:text-[#B8914F] hover:underline font-semibold">
              Green Valley Ranch Guide →
            </a>
            <span className="text-slate-400">|</span>
            <a href="/mystic-bay" className="text-[#C5A059] hover:text-[#B8914F] hover:underline">
              Explore Mystic Bay →
            </a>
            <span className="text-slate-400">|</span>
            <a href="/the-cottages" className="text-[#C5A059] hover:text-[#B8914F] hover:underline">
              Explore The Cottages →
            </a>
          </div>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="sms:+17022221964?body=GVR"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg hover:shadow-xl"
            >
              Text &apos;GVR&apos; to 702-222-1964
            </a>
            <a
              href="tel:+17022221964"
              className="inline-flex items-center justify-center px-6 py-4 text-lg font-semibold bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg hover:bg-[#C5A059]/10 transition-colors"
            >
              Call (702) 222-1964
            </a>
          </div>
        </div>
      </section>

      {/* Office Listings Section - Moved to top position */}
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

      {/* RealScout Home Value Widget Section */}
      <section id="valuation-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              What&apos;s my home worth?
            </h2>
            <p className="text-lg text-slate-600">
              Get a free home value estimate instantly
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 sm:p-8">
            <RealScoutWidget />
          </div>
        </div>
      </section>

      {/* RealScout Advanced Search Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[500px]">
              <RealScoutAdvancedSearch />
            </div>
          </div>
        </div>
      </section>

      {/* How I Help Section */}
      <HowIHelp />

      {/* Neighborhood Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <NeighborhoodFocus />
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy - Condensed */}
      <WhyChooseReasons variant="condensed" showCTA={true} />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Recently Sold Listings Section */}
      <RealScoutSoldListings 
        title="Recently Sold in Las Vegas"
        subtitle="See what homes are actually selling for - updated in real-time"
        priceMin={400000}
        priceMax={700000}
      />

      {/* Newsletter Signup Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <NewsletterSignup />
        </div>
      </section>

      {/* Mobile Sticky CTA - Bottom of page for spacing */}
      <div className="h-20 md:h-0"></div>
      <MobileStickyCTA />
    </main>
  );
}
