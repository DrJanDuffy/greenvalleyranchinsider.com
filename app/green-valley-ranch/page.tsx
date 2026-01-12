import type { Metadata } from 'next';
import { Home, ShoppingBag, GraduationCap, Car, MapPin, Building, TreePine, UtensilsCrossed, Film, Dumbbell, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Green Valley Ranch Henderson NV | Master-Planned Community Guide | Green Valley Ranch Insider',
  description: 'Green Valley Ranch is a well-established master-planned community in Henderson, NV with over a dozen gated and public communities. Features The District shopping center, top-rated schools, and luxury amenities.',
  keywords: ['Green Valley Ranch Henderson', 'Green Valley Ranch neighborhood', 'Henderson master-planned community', 'The District Green Valley Ranch', 'Green Valley Ranch Resort', 'Henderson Nevada neighborhoods'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/green-valley-ranch',
  },
  openGraph: {
    title: 'Green Valley Ranch Henderson NV | Master-Planned Community Guide',
    description: 'A well-established master-planned community offering suburban tranquility and urban amenities.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/green-valley-ranch',
  },
};

export default function GreenValleyRanchPage() {
  // Data from Homes.com local guide
  const communityData = {
    name: 'Green Valley Ranch',
    city: 'Henderson',
    state: 'Nevada',
    description: 'Green Valley Ranch in Henderson, Nevada, is a well-established, master-planned community offering a blend of suburban tranquility and urban amenities. The neighborhood comprises over a dozen gated and public communities, managed by the Green Valley Ranch master association.',
    housingOptions: {
      singleFamily: {
        description: 'Single-family homes with stucco facades and tile roofing',
        styles: ['Spanish design', 'Mediterranean design'],
        features: ['In-ground pools', 'Multi-car garages'],
      },
      condos: {
        description: 'Condos with views of The District shopping center',
      },
      luxuryEstates: {
        description: 'Luxury estates with premium finishes and amenities',
      },
    },
    communities: [
      'Mystic Bay',
      'The Cottages',
      'Green Valley Estates',
      'GVR Estates',
      'Carriage Club',
      'Carriage Hills',
      'Carriage Lane',
      'And more...',
    ],
    amenities: {
      shopping: {
        name: 'The District',
        description: 'Mixed-use development offering brand-name stores, chain restaurants, and attractions like a splash pad',
        dining: ['Bella Vita - upscale Italian restaurant'],
      },
      resort: {
        name: 'Green Valley Ranch Resort Spa and Casino',
        features: ['Steakhouse', 'Movie theater', 'Spa services'],
      },
      recreation: [
        'Parks throughout the community',
        'Dollar Loan Center for minor league sports',
        'Henderson Multigenerational Center with athletic facilities and community spaces',
      ],
    },
    schools: {
      district: 'Clark County School District',
      elementary: 'Neil C. Twitchell Elementary',
      middle: 'Bob Miller Middle',
      high: 'Coronado High School',
      rating: 'Highly rated',
    },
    transportation: {
      public: 'Some public bus stops available',
      primary: 'Most residents rely on cars',
      distances: {
        downtownHenderson: 'Approximately 6 miles east via I-215',
        airport: 'Harry Reid International Airport about 10 miles away',
        lasVegasStrip: 'Roughly 17 miles north',
      },
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 px-4">
            <Breadcrumbs items={[{ name: 'Green Valley Ranch', href: '/green-valley-ranch' }]} />
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Home className="w-8 h-8 text-[#C5A059]" />
              <Building className="w-8 h-8 text-[#C5A059]" />
              <Sparkles className="w-8 h-8 text-[#C5A059]" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#C5A059]">Green Valley Ranch</span><br />
              Master-Planned Community
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              {communityData.description}
            </p>

            <div className="mt-10">
              <Link
                href="/#valuation-form"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg hover:shadow-xl"
              >
                Get Your Home Valuation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Community Overview</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Green Valley Ranch offers a balanced lifestyle with its combination of residential comfort, 
              recreational opportunities, and convenient access to shopping and entertainment venues. 
              The master association manages over a dozen distinct communities, each with its own character 
              and appeal.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C5A059] mb-2">12+</div>
                <div className="text-slate-600">Gated & Public Communities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C5A059] mb-2">Master</div>
                <div className="text-slate-600">Planned Community</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#C5A059] mb-2">Est.</div>
                <div className="text-slate-600">Well-Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Housing Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Housing Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Single Family Homes */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
                <Home className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Single-Family Homes</h3>
              <p className="text-slate-700 mb-4">{communityData.housingOptions.singleFamily.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-[#0F172A]">Architectural Styles:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  {communityData.housingOptions.singleFamily.styles.map((style, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#C5A059]">•</span>
                      {style}
                    </li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-[#0F172A] mt-3">Common Features:</p>
                <ul className="space-y-1 text-sm text-slate-600">
                  {communityData.housingOptions.singleFamily.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-[#C5A059]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Condos */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
                <Building className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Condos</h3>
              <p className="text-slate-700">{communityData.housingOptions.condos.description}</p>
            </div>

            {/* Luxury Estates */}
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4">
                <Sparkles className="w-6 h-6 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Luxury Estates</h3>
              <p className="text-slate-700">{communityData.housingOptions.luxuryEstates.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Within GVR */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Communities Within Green Valley Ranch
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {communityData.communities.map((community, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-4 border border-slate-200 text-center hover:border-[#C5A059] transition-colors"
              >
                <p className="font-semibold text-[#0F172A]">{community}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-[#C5A059]">Featured Communities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/mystic-bay"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">Mystic Bay</h4>
                <p className="text-slate-300 text-sm">
                  Gated subdivision with larger, custom Mediterranean-style homes (2,500+ sq. ft.) 
                  built by American Nevada Corporation.
                </p>
                <span className="text-[#C5A059] text-sm font-semibold mt-2 inline-block">
                  Learn More →
                </span>
              </Link>
              <Link
                href="/the-cottages"
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <h4 className="text-xl font-bold mb-2">The Cottages</h4>
                <p className="text-slate-300 text-sm">
                  Gated subdivision with compact, efficient homes (1,500-1,900 sq. ft.) 
                  built by Pacific Homes. Perfect for first-time buyers and downsizing.
                </p>
                <span className="text-[#C5A059] text-sm font-semibold mt-2 inline-block">
                  Learn More →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities & Recreation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Amenities & Recreation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The District */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-6 h-6 text-[#C5A059]" />
                <h3 className="text-2xl font-bold text-[#0F172A]">{communityData.amenities.shopping.name}</h3>
              </div>
              <p className="text-slate-700 mb-4">{communityData.amenities.shopping.description}</p>
              <div>
                <p className="font-semibold text-[#0F172A] mb-2">Featured Dining:</p>
                <ul className="space-y-1">
                  {communityData.amenities.shopping.dining.map((restaurant, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-600">
                      <UtensilsCrossed className="w-4 h-4 text-[#C5A059]" />
                      {restaurant}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Green Valley Ranch Resort */}
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-[#C5A059]" />
                <h3 className="text-2xl font-bold text-[#0F172A]">{communityData.amenities.resort.name}</h3>
              </div>
              <p className="text-slate-700 mb-4">Additional entertainment and relaxation options</p>
              <ul className="space-y-2">
                {communityData.amenities.resort.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-600">
                    <span className="text-[#C5A059]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recreation Facilities */}
          <div className="mt-8 bg-white rounded-xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Dumbbell className="w-6 h-6 text-[#C5A059]" />
              <h3 className="text-2xl font-bold text-[#0F172A]">Recreation Facilities</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {communityData.amenities.recreation.map((facility, index) => (
                <div key={index} className="flex items-start gap-2 text-slate-700">
                  <TreePine className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Education
          </h2>
          
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-[#C5A059]" />
              <h3 className="text-2xl font-bold">{communityData.schools.district}</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Green Valley Ranch is served by highly rated schools in the Clark County School District.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-sm text-slate-400 mb-1">Elementary</p>
                <p className="text-xl font-bold">{communityData.schools.elementary}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-sm text-slate-400 mb-1">Middle School</p>
                <p className="text-xl font-bold">{communityData.schools.middle}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <p className="text-sm text-slate-400 mb-1">High School</p>
                <p className="text-xl font-bold">{communityData.schools.high}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-10 text-center">
            Transportation & Location
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <Car className="w-6 h-6 text-[#C5A059]" />
                <h3 className="text-2xl font-bold text-[#0F172A]">Getting Around</h3>
              </div>
              <p className="text-slate-700 mb-4">{communityData.transportation.primary}</p>
              <p className="text-slate-600 text-sm">{communityData.transportation.public}</p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#C5A059]" />
                <h3 className="text-2xl font-bold text-[#0F172A]">Key Distances</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A059] mt-1">•</span>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Downtown Henderson</p>
                    <p className="text-slate-600 text-sm">{communityData.transportation.distances.downtownHenderson}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A059] mt-1">•</span>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Harry Reid International Airport</p>
                    <p className="text-slate-600 text-sm">{communityData.transportation.distances.airport}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A059] mt-1">•</span>
                  <div>
                    <p className="font-semibold text-[#0F172A]">Las Vegas Strip</p>
                    <p className="text-slate-600 text-sm">{communityData.transportation.distances.lasVegasStrip}</p>
                  </div>
                </li>
              </ul>
            </div>
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Call Green Valley Ranch Home?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get your custom home valuation or learn more about available properties in this desirable master-planned community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#valuation-form"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              Get Your Home Valuation
            </Link>
            <Link
              href="/location"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg hover:bg-[#C5A059]/10 transition-colors"
            >
              Visit Our Office
            </Link>
          </div>
        </div>
      </section>

      {/* Source Attribution */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center text-sm text-slate-500">
          <p>
            Community information sourced from{' '}
            <a
              href="https://www.homes.com/local-guide/henderson-nv/green-valley-ranch-neighborhood/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:underline"
            >
              Homes.com Local Guide
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
