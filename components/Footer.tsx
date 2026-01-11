'use client';

import { Phone, Mail, MapPin, Award } from 'lucide-react';
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
                href="https://www.google.com/maps/dir/?api=1&destination=360+Mike+Koizumi+Way,+Henderson,+NV+89011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-[#C5A059] transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  360 Mike Koizumi Way<br />
                  Henderson, NV 89011
                </span>
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

          {/* Service Area */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#C5A059]">Service Area</h3>
            <div className="space-y-2 text-slate-300">
              <p>Green Valley Ranch</p>
              <p>Mystic Bay</p>
              <p>The Cottages</p>
              <p>GVR Estates</p>
              <p>Henderson, NV 89052</p>
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
