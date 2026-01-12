import type { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Building, Navigation, Award } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';

export const metadata: Metadata = {
  title: 'Office Location | 360 Mike Koizumi Way, Henderson NV | Green Valley Ranch Insider',
  description: 'Visit our office at 360 Mike Koizumi Way in Henderson, Nevada. Conveniently located in Green Valley near The District at Green Valley Ranch.',
  keywords: ['office location', 'Henderson NV real estate office', '360 Mike Koizumi Way', 'Berkshire Hathaway Henderson', 'Green Valley Ranch office'],
};

async function getLocationData() {
  try {
    // Use absolute URL for server-side fetch
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 
                    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 
                    'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/location`, {
      cache: 'no-store', // Always fetch fresh data
    });

    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching location data:', error);
    // Return fallback data if fetch fails
    return {
      address: {
        street: '360 Mike Koizumi Way',
        city: 'Henderson',
        state: 'NV',
        zip: '89011',
        full: '360 Mike Koizumi Way, Henderson, NV 89011',
      },
      nearby: {
        amenities: [
          'The District at Green Valley Ranch (shopping & dining)',
          'Green Valley Ranch Resort & Spa',
          'I-215 freeway access',
          'Multiple parks and recreational facilities',
        ],
      },
    };
  }
}

export default async function LocationPage() {
  const locationData = await getLocationData();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Office Location' }]} />
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-[#C5A059]" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Office Location
            </h1>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl">
            Visit us at our Henderson office in the heart of Green Valley Ranch
          </p>
        </div>
      </section>

      {/* Address & Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Address Card */}
            <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <Building className="w-6 h-6 text-[#C5A059]" />
                Office Address
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A059] mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg text-[#0F172A]">
                      {locationData?.address?.full || '360 Mike Koizumi Way'}
                    </p>
                    <p className="text-slate-600">
                      {locationData?.address?.city || 'Henderson'}, {locationData?.address?.state || 'NV'} {locationData?.address?.zip || '89011'}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-200 pt-4 space-y-3">
                  <a
                    href="tel:+17025001955"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#C5A059] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(702) 500-1955</span>
                  </a>
                  <a
                    href="tel:+17022221964"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#C5A059] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>(702) 222-1964</span>
                  </a>
                  <a
                    href="mailto:DrDuffy@GreenValleyRanchInsider.com"
                    className="flex items-center gap-3 text-slate-700 hover:text-[#C5A059] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>DrDuffy@GreenValleyRanchInsider.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Map Embed */}
            <div className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200">
              <iframe
                width="100%"
                height="400"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=360+Mike+Koizumi+Way,+Henderson,+NV+89011&output=embed"
                title="Office Location - 360 Mike Koizumi Way, Henderson, NV 89011"
                className="w-full h-full"
              />
              <div className="bg-slate-800 p-4 text-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=360+Mike+Koizumi+Way,+Henderson,+NV+89011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C5A059] hover:underline text-sm inline-flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=360+Mike+Koizumi+Way,+Henderson,+NV+89011"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Get Directions
            </a>
            <a
              href="https://www.google.com/search?q=Dr.+Jan+Duffy+Berkshire+Hathaway+Henderson+NV+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <Award className="w-5 h-5" />
              View Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Amenities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Nearby Amenities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData?.nearby?.amenities?.map((amenity: string, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700"
              >
                <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-[#0F172A]" />
                </div>
                <p className="text-slate-300 leading-relaxed">{amenity}</p>
              </div>
            )) || (
              <>
                <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700">
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    The District at Green Valley Ranch (shopping & dining)
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700">
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Green Valley Ranch Resort & Spa
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700">
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    I-215 freeway access
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700">
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Multiple parks and recreational facilities
                  </p>
                </div>
              </>
            )}
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

      {/* Office Hours & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-[#C5A059]" />
                Office Hours
              </h2>
              <div className="space-y-3 text-slate-700">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>By Appointment</span>
                </div>
                <div className="pt-4 border-t border-slate-200 text-sm text-slate-600">
                  <p>* Hours may vary. Please call ahead to confirm availability.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-[#C5A059]" />
                License & Brokerage
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg text-[#0F172A]">Dr. Jan Duffy</p>
                  <p className="text-slate-600">License #S.0197614.LLC</p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-lg text-[#0F172A]">Berkshire Hathaway</p>
                  <p className="text-slate-600">HomeServices Nevada Properties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '360 Mike Koizumi Way',
              addressLocality: 'Henderson',
              addressRegion: 'NV',
              postalCode: '89011',
              addressCountry: 'US',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '36.0395',
              longitude: '-115.0442',
            },
            telephone: ['+17025001955', '+17022221964'],
            email: 'DrDuffy@GreenValleyRanchInsider.com',
            url: 'https://greenvalleyranchinsider.com',
            openingHours: 'Mo-Fr 09:00-18:00, Sa 10:00-16:00',
            priceRange: '$$',
          }),
        }}
      />
    </main>
  );
}
