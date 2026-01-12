import type { Metadata } from 'next';
import { TrendingUp, DollarSign, BarChart, Home, MapPin, Calculator, Shield, Phone, Mail } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Real Estate Investment Guide | Green Valley Ranch Insider | Henderson NV',
  description: 'Complete guide to real estate investing in Green Valley Ranch, Henderson NV. Market analysis, ROI strategies, and investment opportunities in Mystic Bay, The Cottages, and GVR Estates.',
  keywords: ['real estate investment Henderson', 'Green Valley Ranch investment', 'Henderson rental properties', 'investment properties', 'real estate ROI', 'Henderson investment guide'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/investment-guide',
  },
  openGraph: {
    title: 'Real Estate Investment Guide | Green Valley Ranch Insider',
    description: 'Complete guide to real estate investing in Green Valley Ranch, Henderson NV.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/investment-guide',
  },
};

export default function InvestmentGuidePage() {
  const investmentStrategies = [
    {
      icon: Home,
      title: 'Buy and Hold',
      description: 'Purchase properties for long-term rental income and appreciation. Green Valley Ranch properties offer strong rental demand and steady appreciation.',
      benefits: ['Steady cash flow', 'Long-term appreciation', 'Tax advantages', 'Portfolio diversification'],
    },
    {
      icon: TrendingUp,
      title: 'Fix and Flip',
      description: 'Purchase undervalued properties, renovate, and sell for profit. The Cottages and older GVR properties often present good opportunities.',
      benefits: ['Quick returns', 'Value creation', 'Market timing', 'Renovation ROI'],
    },
    {
      icon: DollarSign,
      title: 'Short-Term Rentals',
      description: 'Leverage Henderson\'s proximity to Las Vegas for vacation rental income. Properties near The District and I-215 see strong demand.',
      benefits: ['Higher rental rates', 'Flexibility', 'Tourism market', 'Premium pricing'],
    },
    {
      icon: BarChart,
      title: 'Portfolio Building',
      description: 'Build a diverse portfolio across different Green Valley Ranch neighborhoods to spread risk and maximize returns.',
      benefits: ['Risk diversification', 'Multiple income streams', 'Market coverage', 'Scalability'],
    },
  ];

  const marketFactors = [
    {
      factor: 'Population Growth',
      impact: 'High',
      description: 'Henderson continues to grow, driving demand for housing in Green Valley Ranch',
    },
    {
      factor: 'Job Market',
      impact: 'High',
      description: 'Strong employment in Las Vegas metro area supports rental demand',
    },
    {
      factor: 'School Quality',
      impact: 'High',
      description: 'Top-rated schools maintain property values and attract families',
    },
    {
      factor: 'Amenities',
      impact: 'Medium',
      description: 'The District, parks, and community amenities increase desirability',
    },
    {
      factor: 'Location',
      impact: 'High',
      description: 'Proximity to Las Vegas Strip and I-215 provides excellent access',
    },
  ];

  const roiConsiderations = [
    {
      title: 'Rental Yield',
      description: 'Average rental yields in Green Valley Ranch range from 4-6% depending on property type and location.',
      icon: Calculator,
    },
    {
      title: 'Appreciation Potential',
      description: 'Historical appreciation in Green Valley Ranch has been strong, with steady growth over the past decade.',
      icon: TrendingUp,
    },
    {
      title: 'Tax Benefits',
      description: 'Real estate investments offer depreciation, mortgage interest deductions, and 1031 exchange opportunities.',
      icon: DollarSign,
    },
    {
      title: 'Market Stability',
      description: 'Green Valley Ranch\'s established community and amenities provide stability compared to newer developments.',
      icon: Shield,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Investment Guide', href: '/investment-guide' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-[#C5A059]" />
              <DollarSign className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Real Estate Investment Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert insights for investing in Green Valley Ranch, Henderson, NV real estate
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Why Invest in Green Valley Ranch?</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Green Valley Ranch offers attractive investment opportunities for real estate investors. The master-planned community's established reputation, strong schools, and prime Henderson location create a stable foundation for rental income and property appreciation.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Whether you're interested in long-term rental properties, fix-and-flip opportunities, or building a portfolio, Green Valley Ranch's diverse neighborhoods provide options for various investment strategies.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              As your local real estate expert, I can help identify the best investment opportunities based on your goals, budget, and risk tolerance.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Investment Strategies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {investmentStrategies.map((strategy, index) => {
              const Icon = strategy.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#0F172A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{strategy.title}</h3>
                      <p className="text-slate-600 mb-4">{strategy.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {strategy.benefits.map((benefit, benefitIndex) => (
                      <span
                        key={benefitIndex}
                        className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-xs border border-slate-200"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Market Factors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Key Market Factors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketFactors.map((factor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-[#0F172A]">{factor.factor}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    factor.impact === 'High' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {factor.impact} Impact
                  </span>
                </div>
                <p className="text-slate-600 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Considerations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Return on Investment Considerations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roiConsiderations.map((consideration, index) => {
              const Icon = consideration.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#0F172A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{consideration.title}</h3>
                      <p className="text-slate-600">{consideration.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
            Ready to Start Investing?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let's discuss your investment goals and identify the best opportunities in Green Valley Ranch
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
              href="/market-insights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <BarChart className="w-5 h-5" />
              View Market Insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
