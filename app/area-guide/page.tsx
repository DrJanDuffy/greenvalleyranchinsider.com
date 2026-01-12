import type { Metadata } from 'next';
import { MapPin, ShoppingBag, UtensilsCrossed, Film, Dumbbell, Car, GraduationCap, Building, TreePine, Heart } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Henderson NV Area Guide | Green Valley Ranch Insider | Living in Henderson',
  description: 'Complete guide to living in Henderson, Nevada. Information about amenities, dining, shopping, entertainment, and lifestyle in the Green Valley Ranch area.',
  keywords: ['Henderson Nevada guide', 'living in Henderson', 'Henderson amenities', 'Henderson restaurants', 'Henderson shopping', 'Henderson lifestyle', 'Las Vegas area guide'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/area-guide',
  },
  openGraph: {
    title: 'Henderson NV Area Guide | Green Valley Ranch Insider',
    description: 'Complete guide to living in Henderson, Nevada near Green Valley Ranch.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/area-guide',
  },
};

export default function AreaGuidePage() {
  const amenities = [
    {
      icon: ShoppingBag,
      title: 'The District at Green Valley Ranch',
      description: 'Premier shopping and dining destination with over 50 stores and restaurants. Walking distance from many Green Valley Ranch neighborhoods.',
      distance: 'Within Green Valley Ranch',
    },
    {
      icon: TreePine,
      title: 'Parks & Recreation',
      description: 'Multiple parks, walking trails, and recreational facilities throughout Green Valley Ranch. Perfect for families and outdoor enthusiasts.',
      distance: 'Throughout community',
    },
    {
      icon: Film,
      title: 'Entertainment',
      description: 'Movie theaters, community events, and easy access to Las Vegas Strip entertainment just 17 miles away.',
      distance: 'Nearby',
    },
    {
      icon: Dumbbell,
      title: 'Green Valley Ranch Resort & Spa',
      description: 'Luxury resort with spa, golf course, and dining options. A major amenity for Green Valley Ranch residents.',
      distance: 'Within Green Valley Ranch',
    },
    {
      icon: Car,
      title: 'Transportation',
      description: 'Easy access to I-215, I-15, and major highways. Harry Reid International Airport approximately 10 miles away.',
      distance: 'Convenient access',
    },
    {
      icon: GraduationCap,
      title: 'Top-Rated Schools',
      description: 'Access to highly-rated schools including Vanderburg Elementary, Coronado High School, and more.',
      distance: 'Serving area',
    },
  ];

  const nearbyAreas = [
    {
      name: 'Las Vegas Strip',
      distance: '17 miles',
      description: 'World-famous entertainment, dining, and nightlife',
    },
    {
      name: 'Downtown Henderson',
      distance: '6 miles',
      description: 'Historic downtown with local shops and restaurants',
    },
    {
      name: 'Lake Mead',
      distance: '25 miles',
      description: 'Recreation area with boating, fishing, and hiking',
    },
    {
      name: 'Red Rock Canyon',
      distance: '20 miles',
      description: 'Scenic national conservation area for hiking and climbing',
    },
  ];

  const lifestyle = [
    {
      icon: Heart,
      title: 'Family-Friendly',
      description: 'Safe neighborhoods, excellent schools, and community events make Green Valley Ranch ideal for families.',
    },
    {
      icon: Building,
      title: 'Master-Planned Community',
      description: 'Well-designed community with thoughtful planning, amenities, and infrastructure.',
    },
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Close to Las Vegas amenities while maintaining suburban tranquility and safety.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Area Guide', href: '/area-guide' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-[#C5A059]" />
              <Heart className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Henderson, NV Area Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover what makes Green Valley Ranch and Henderson a great place to live
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Welcome to Henderson, Nevada</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Henderson is Nevada's second-largest city and consistently ranked among the safest cities in America. Green Valley Ranch, located in the heart of Henderson, offers the perfect blend of suburban tranquility and urban convenience.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With easy access to Las Vegas amenities, top-rated schools, excellent shopping and dining, and a strong sense of community, Green Valley Ranch provides an exceptional quality of life for residents.
            </p>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Local Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{amenity.title}</h3>
                  <p className="text-slate-600 mb-3 leading-relaxed">{amenity.description}</p>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin className="w-4 h-4" />
                    <span>{amenity.distance}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Nearby Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nearbyAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-6 text-white border border-slate-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold">{area.name}</h3>
                  <span className="text-[#C5A059] font-semibold text-sm">{area.distance}</span>
                </div>
                <p className="text-slate-300 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Lifestyle Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lifestyle.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm text-center"
                >
                  <div className="w-16 h-16 bg-[#C5A059] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#0F172A]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
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
            Ready to Call Henderson Home?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let me help you find the perfect property in Green Valley Ranch
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <Link
              href="/buyers-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              View Buyer&apos;s Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
