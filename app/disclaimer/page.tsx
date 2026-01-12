import type { Metadata } from 'next';
import { AlertTriangle, Info, Shield } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | Green Valley Ranch Insider | Henderson NV Real Estate',
  description: 'Disclaimer for Green Valley Ranch Insider. Important information about property valuations, market data, and real estate services.',
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/disclaimer',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Disclaimer', href: '/disclaimer' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-[#C5A059]" />
              <Info className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Disclaimer
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Important information about our services and website content
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1 mr-3" />
              <div>
                <h3 className="font-bold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700">
                  The information on this website is provided for general informational purposes only and should not be considered as professional real estate, legal, or financial advice.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Property Valuations</h2>
          <p className="text-slate-700 mb-6">
            Home valuations and property estimates provided on this website are automated estimates based on available data and should not be considered as professional appraisals. Actual property values may vary significantly based on condition, location, market conditions, and other factors. For accurate property valuations, please consult with a licensed real estate professional or certified appraiser.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Market Information</h2>
          <p className="text-slate-700 mb-6">
            Market statistics, trends, and analysis provided on this website are based on available data and are subject to change. Past performance does not guarantee future results. Real estate markets are dynamic and can change rapidly. All market information should be verified independently.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Property Listings</h2>
          <p className="text-slate-700 mb-6">
            Property listings displayed on this website are provided by third-party services and may not be complete or current. All property information, including prices, availability, and features, should be verified independently. We are not responsible for the accuracy of third-party listing information.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">No Warranty</h2>
          <p className="text-slate-700 mb-6">
            The materials on Green Valley Ranch Insider&apos;s website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Real Estate Services</h2>
          <p className="text-slate-700 mb-6">
            Real estate services are provided by Dr. Jan Duffy, a licensed real estate agent (Nevada License #S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. All real estate transactions are subject to applicable laws, regulations, and professional standards. Results may vary and are not guaranteed.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Third-Party Content</h2>
          <p className="text-slate-700 mb-6">
            This website may contain content, links, or references to third-party websites, services, or information. We are not responsible for the accuracy, completeness, or reliability of third-party content. Your use of third-party services is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Equal Housing Opportunity</h2>
          <p className="text-slate-700 mb-6">
            We are committed to and support equal housing opportunity. We do not discriminate on the basis of race, color, religion, sex, handicap, familial status, national origin, sexual orientation, gender identity, or any other protected class under applicable law.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Contact Information</h2>
          <p className="text-slate-700 mb-4">
            If you have questions about this disclaimer, please contact us:
          </p>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-8">
            <p className="text-slate-700 mb-2"><strong>Dr. Jan Duffy</strong></p>
            <p className="text-slate-700 mb-2">Green Valley Ranch Insider</p>
            <p className="text-slate-700 mb-2">360 Mike Koizumi Way, Henderson, NV 89011</p>
            <p className="text-slate-700 mb-2">
              <a href="tel:+17025001955" className="text-[#C5A059] hover:underline">(702) 500-1955</a>
            </p>
            <p className="text-slate-700">
              <a href="mailto:DrDuffy@GreenValleyRanchInsider.com" className="text-[#C5A059] hover:underline">
                DrDuffy@GreenValleyRanchInsider.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            Have Questions?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us for accurate, professional real estate guidance
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
