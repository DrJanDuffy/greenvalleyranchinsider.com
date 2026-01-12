import type { Metadata } from 'next';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Green Valley Ranch Insider',
  description: 'Common questions about selling your home in Green Valley Ranch, Mystic Bay, and The Cottages. Get answers about home valuations, market trends, and the selling process.',
  keywords: ['Green Valley Ranch FAQ', 'Henderson real estate questions', 'selling home FAQ', 'home valuation questions'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Green Valley Ranch Insider',
    description: 'Common questions about selling your home in Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/faq',
  },
};

const faqs = [
  {
    question: 'How do I get a home valuation for my Green Valley Ranch property?',
    answer: 'You can request a custom home valuation by filling out our valuation form on the homepage or contact page. We\'ll analyze your property\'s unique features, recent comparable sales in your neighborhood (Mystic Bay, The Cottages, etc.), and current market conditions to provide you with an accurate estimate.',
  },
  {
    question: 'What makes Mystic Bay different from The Cottages?',
    answer: 'Mystic Bay features larger, custom Mediterranean-style homes (typically over 2,500 sq. ft.) built by American Nevada Corporation, while The Cottages offers more compact, efficient homes (1,500-1,900 sq. ft.) built by Pacific Homes. Both are gated subdivisions within Green Valley Ranch, but cater to different lifestyles and budgets.',
  },
  {
    question: 'How long does it typically take to sell a home in Green Valley Ranch?',
    answer: 'Market conditions vary, but homes in Green Valley Ranch, especially in premium communities like Mystic Bay, often sell faster than the Henderson average due to the desirable location and amenities. With proper pricing and marketing, many homes sell within 30-60 days.',
  },
  {
    question: 'What should I know about selling a home in a gated community?',
    answer: 'Gated communities like Mystic Bay and The Cottages often have HOA rules and regulations that buyers need to be aware of. We\'ll help you navigate these requirements and highlight the security and community benefits that make these neighborhoods attractive to buyers.',
  },
  {
    question: 'Do you work with buyers as well as sellers?',
    answer: 'Yes! While we specialize in helping homeowners in Green Valley Ranch sell their properties, we also assist buyers looking to purchase homes in Mystic Bay, The Cottages, and throughout the Green Valley Ranch master-planned community.',
  },
  {
    question: 'What are the benefits of living in Green Valley Ranch?',
    answer: 'Green Valley Ranch offers proximity to The District shopping center, Green Valley Ranch Resort & Spa, top-rated schools (Neil C. Twitchell Elementary, Bob Miller Middle, Coronado High), easy access to I-215, and a variety of recreational facilities. It\'s a well-established master-planned community with over a dozen distinct neighborhoods.',
  },
  {
    question: 'How do you determine the right listing price for my home?',
    answer: 'We conduct a comprehensive market analysis considering recent comparable sales in your specific neighborhood, your home\'s unique features and condition, current market trends, and the premium positioning of Green Valley Ranch properties. Our insider knowledge of Mystic Bay, The Cottages, and other GVR communities helps us price competitively.',
  },
  {
    question: 'What renovations or improvements should I consider before selling?',
    answer: 'We\'ll provide personalized recommendations based on your specific property and neighborhood. Generally, updates to kitchens and bathrooms, fresh paint, and curb appeal improvements tend to have the best ROI in Green Valley Ranch communities. We can discuss which improvements will maximize your sale price.',
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'FAQ', href: '/faq' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Common questions about selling your home in Green Valley Ranch
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h2 className="text-xl font-bold text-[#0F172A] mb-3 flex items-start gap-3">
                  <span className="text-[#C5A059] flex-shrink-0 mt-1">Q{index + 1}.</span>
                  <span>{faq.question}</span>
                </h2>
                <p className="text-slate-700 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy - Condensed */}
      <WhyChooseReasons variant="condensed" showCTA={true} />

      {/* Office Listings Section */}
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Get in touch with Dr. Jan Duffy for personalized answers about your Green Valley Ranch property
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg hover:bg-[#C5A059]/10 transition-colors"
            >
              Call (702) 500-1955
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
