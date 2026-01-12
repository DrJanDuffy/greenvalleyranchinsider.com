'use client';

import { Phone, Mail, MapPin, Award, Navigation } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-auto pb-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C5A059]">Contact Dr. Jan Duffy</h3>
            <div className="space-y-3">
              <a
                href="tel:+17025001955"
                className="flex items-center gap-3 hover:text-[#C5A059] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(702) 500-1955</span>
              </a>
              <a
                href="tel:+17022221964"
                className="flex items-center gap-3 hover:text-[#C5A059] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(702) 222-1964</span>
              </a>
              <a
                href="mailto:DrDuffy@GreenValleyRanchInsider.com"
                className="flex items-center gap-3 hover:text-[#C5A059] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>DrDuffy@GreenValleyRanchInsider.com</span>
              </a>
              <a
                href="/location"
                className="flex items-start gap-3 hover:text-[#C5A059] transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  360 Mike Koizumi Way<br />
                  Henderson, NV 89011
                </span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=360+Mike+Koizumi+Way,+Henderson,+NV+89011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#C5A059] transition-colors text-sm text-slate-400 hover:text-[#C5A059]"
              >
                <Navigation className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Get Directions →</span>
              </a>
            </div>
          </div>

          {/* License & Brokerage */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C5A059]">License & Brokerage</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Dr. Jan Duffy</p>
                  <p className="text-slate-300 text-sm">License #S.0197614.LLC</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Berkshire Hathaway</p>
                  <p className="text-slate-300 text-sm">HomeServices Nevada Properties</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links - Organized by Category */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C5A059]">Quick Links</h3>
            <div className="space-y-4">
              {/* Neighborhoods */}
              <div>
                <h4 className="text-sm font-semibold text-[#C5A059] mb-2">Neighborhoods</h4>
                <div className="space-y-1">
                  <Link href="/green-valley-ranch" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Green Valley Ranch
                  </Link>
                  <Link href="/mystic-bay" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Mystic Bay
                  </Link>
                  <Link href="/the-cottages" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    The Cottages
                  </Link>
                  <Link href="/neighborhoods" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    All Neighborhoods
                  </Link>
                </div>
              </div>
              
              {/* Services & Resources */}
              <div>
                <h4 className="text-sm font-semibold text-[#C5A059] mb-2">Services & Resources</h4>
                <div className="space-y-1">
                  <Link href="/services" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Services
                  </Link>
                  <Link href="/resources" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Resources
                  </Link>
                  <Link href="/market-insights" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Market Insights
                  </Link>
                  <Link href="/schools" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Schools
                  </Link>
                </div>
              </div>
              
              {/* Guides */}
              <div>
                <h4 className="text-sm font-semibold text-[#C5A059] mb-2">Guides</h4>
                <div className="space-y-1">
                  <Link href="/buyers-guide" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Buyer&apos;s Guide
                  </Link>
                  <Link href="/sellers-guide" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Seller&apos;s Guide
                  </Link>
                  <Link href="/investment-guide" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Investment Guide
                  </Link>
                  <Link href="/area-guide" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Area Guide
                  </Link>
                  <Link href="/moving-guide" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Moving Guide
                  </Link>
                  <Link href="/financing-guide" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Financing Guide
                  </Link>
                  <Link href="/home-staging" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Home Staging
                  </Link>
                </div>
              </div>
              
              {/* About & Contact */}
              <div>
                <h4 className="text-sm font-semibold text-[#C5A059] mb-2">About & Contact</h4>
                <div className="space-y-1">
                  <Link href="/about" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    About
                  </Link>
                  <Link href="/testimonials" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Testimonials
                  </Link>
                  <Link href="/contact" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    Contact
                  </Link>
                  <Link href="/faq" className="block text-slate-300 hover:text-[#C5A059] transition-colors text-sm">
                    FAQ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4 text-center text-[#C5A059]">Office Location</h3>
            <div className="rounded-lg overflow-hidden shadow-lg border border-slate-700 bg-slate-800">
              <iframe
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=360+Mike+Koizumi+Way,+Henderson,+NV+89011&output=embed"
                title="Office Location - 360 Mike Koizumi Way, Henderson, NV 89011"
              />
              <div className="bg-slate-800 p-2 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=360+Mike+Koizumi+Way,+Henderson,+NV+89011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:underline text-sm inline-flex items-center gap-1"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=360+Mike+Koizumi+Way,+Henderson,+NV+89011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href="https://www.google.com/search?q=Dr.+Jan+Duffy+Berkshire+Hathaway+Henderson+NV+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <Award className="w-4 h-4" />
              View Google Reviews
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
          <p>
            © {new Date().getFullYear()} Green Valley Ranch Insider. All rights reserved.
          </p>
          <p className="mt-2">
            Licensed Real Estate Professional | Nevada License #S.0197614.LLC
          </p>
          <p className="mt-2">
            360 Mike Koizumi Way, Henderson, NV 89011
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link href="/sitemap.xml" className="text-slate-400 hover:text-[#C5A059] transition-colors">
              Sitemap
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/privacy" className="text-slate-400 hover:text-[#C5A059] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms" className="text-slate-400 hover:text-[#C5A059] transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/disclaimer" className="text-slate-400 hover:text-[#C5A059] transition-colors">
              Disclaimer
            </Link>
            <span className="text-slate-600">|</span>
            <a
              href="https://www.berkshirehathawayhs.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#C5A059] transition-colors"
            >
              Berkshire Hathaway HomeServices
            </a>
          </div>
        </div>
      </div>

      {/* LocalBusiness Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            '@id': 'https://greenvalleyranchinsider.com/#organization',
            name: 'Dr. Jan Duffy',
            jobTitle: 'Real Estate Agent',
            email: 'DrDuffy@GreenValleyRanchInsider.com',
            telephone: ['+17025001955', '+17022221964'],
            url: 'https://greenvalleyranchinsider.com',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '360 Mike Koizumi Way',
              addressLocality: 'Henderson',
              addressRegion: 'NV',
              postalCode: '89011',
              addressCountry: 'US'
            },
            worksFor: {
              '@type': 'RealEstateAgent',
              name: 'Berkshire Hathaway HomeServices Nevada Properties',
              '@id': 'https://www.berkshirehathawayhs.com/',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '360 Mike Koizumi Way',
                addressLocality: 'Henderson',
                addressRegion: 'NV',
                postalCode: '89011',
                addressCountry: 'US'
              }
            },
            areaServed: [
              {
                '@type': 'City',
                name: 'Henderson',
                addressRegion: 'NV'
              },
              {
                '@type': 'City',
                name: 'Las Vegas',
                addressRegion: 'NV'
              }
            ],
            knowsAbout: [
              'Green Valley Ranch',
              'Mystic Bay',
              'The Cottages',
              'GVR Estates',
              'Henderson Real Estate',
              'Home Valuation',
              'Property Sales'
            ]
          })
        }}
      />
    </footer>
  );
}
