import { ValuationForm } from '@/components/ValuationForm';
import { Home as HomeIcon, TrendingUp, MapPin } from 'lucide-react';
import { NeighborhoodFocus } from '@/components/NeighborhoodFocus';
import { MobileStickyCTA } from '@/components/MobileStickyCTA';
import { Testimonials } from '@/components/Testimonials';
import { PropertySearchWidget } from '@/components/PropertySearchWidget';
import { StatsSection } from '@/components/StatsSection';

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
            The Insider Advantage:<br />
            <span className="text-[#C5A059]">Selling Your Green Valley Ranch Home for Top Dollar</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community.
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
              href="#valuation-form"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg hover:shadow-xl"
            >
              Get Your Custom Insider Valuation
            </a>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center px-6 py-4 text-lg font-semibold bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg hover:bg-[#C5A059]/10 transition-colors"
            >
              (702) 500-1955
            </a>
          </div>
        </div>
      </section>

      {/* Property Search Widget */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <PropertySearchWidget />
        </div>
      </section>

      {/* Neighborhood Focus Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <NeighborhoodFocus />
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Valuation Form Section */}
      <section id="valuation-form" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
              Discover Your Home&apos;s True Value
            </h2>
            <p className="text-lg text-slate-600">
              Get a customized valuation report tailored to your Green Valley Ranch property
            </p>
          </div>
          <ValuationForm />
        </div>
      </section>

      {/* Mobile Sticky CTA - Bottom of page for spacing */}
      <div className="h-20 md:h-0"></div>
      <MobileStickyCTA />
    </main>
  );
}
