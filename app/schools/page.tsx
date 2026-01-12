import type { Metadata } from 'next';
import { GraduationCap, Award, Book, Users, MapPin, Star, Link as LinkIcon, TrendingUp } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'School Information | Green Valley Ranch Insider | Henderson NV Schools',
  description: 'Complete guide to schools serving Green Valley Ranch, Mystic Bay, and The Cottages. Information about Vanderburg Elementary, Glen Taylor Elementary, and area schools.',
  keywords: ['Green Valley Ranch schools', 'Henderson schools', 'Vanderburg Elementary', 'Glen Taylor Elementary', 'Coronado High School', 'school ratings Henderson', '89052 schools'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/schools',
  },
  openGraph: {
    title: 'School Information | Green Valley Ranch Insider',
    description: 'Complete guide to schools serving Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/schools',
  },
};

export default function SchoolsPage() {
  const schools = [
    {
      level: 'Elementary',
      name: 'Vanderburg Elementary School',
      rating: '9/10',
      description: 'Highly-rated elementary school serving Green Valley Ranch. Known for strong academic programs and dedicated teachers.',
      features: ['Strong academic performance', 'Dedicated staff', 'Active PTA', 'After-school programs'],
      distance: 'Within Green Valley Ranch',
    },
    {
      level: 'Elementary',
      name: 'Glen Taylor Elementary School',
      rating: '8/10',
      description: 'Well-regarded elementary school with excellent programs for students. Serves portions of Green Valley Ranch.',
      features: ['Quality education', 'Student support services', 'Extracurricular activities', 'Community involvement'],
      distance: 'Nearby Green Valley Ranch',
    },
    {
      level: 'Elementary',
      name: 'Neil C. Twitchell Elementary',
      rating: '8/10',
      description: 'Elementary school within the Green Valley Ranch master-planned community, offering convenient access for residents.',
      features: ['Convenient location', 'Community-focused', 'Academic excellence', 'Parent engagement'],
      distance: 'Within Green Valley Ranch',
    },
    {
      level: 'Middle',
      name: 'Bob Miller Middle School',
      rating: '8/10',
      description: 'Middle school serving Green Valley Ranch students. Provides strong academic foundation for high school.',
      features: ['Comprehensive curriculum', 'Sports programs', 'Arts programs', 'College preparation'],
      distance: 'Serves Green Valley Ranch',
    },
    {
      level: 'High',
      name: 'Coronado High School',
      rating: '9/10',
      description: 'Top-rated high school serving Green Valley Ranch. Known for academic excellence, sports programs, and college preparation.',
      features: ['AP and honors courses', 'Strong athletics', 'College counseling', 'Extracurricular activities'],
      distance: 'Serves Green Valley Ranch',
    },
  ];

  const schoolDistrict = {
    name: 'Clark County School District',
    description: 'Green Valley Ranch is served by the Clark County School District (CCSD), the fifth-largest school district in the United States. CCSD provides comprehensive educational programs and resources.',
    website: 'https://www.ccsd.net',
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Schools' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <GraduationCap className="w-8 h-8 text-[#C5A059]" />
              <Book className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              School Information
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete guide to schools serving Green Valley Ranch, Mystic Bay, and The Cottages
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Excellent Schools in Green Valley Ranch</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              One of the major advantages of living in Green Valley Ranch is access to highly-rated schools. Whether you have children or are considering resale value, the quality of local schools is an important factor in real estate decisions.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Green Valley Ranch is served by the Clark County School District, with several top-performing schools in close proximity. Schools like Vanderburg Elementary and Coronado High School are consistently rated among the best in Henderson.
            </p>
          </div>
        </div>
      </section>

      {/* Schools List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Schools Serving Green Valley Ranch
          </h2>
          <div className="space-y-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#C5A059] rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-8 h-8 text-[#0F172A]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold mb-2">
                          {school.level}
                        </span>
                        <h3 className="text-2xl font-bold text-[#0F172A]">{school.name}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />
                        <span className="text-xl font-bold text-[#0F172A]">{school.rating}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{school.description}</p>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                      <MapPin className="w-4 h-4" />
                      <span>{school.distance}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {school.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-slate-50 text-slate-700 rounded-full text-xs border border-slate-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School District Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white border border-slate-700">
            <div className="flex items-center gap-4 mb-4">
              <Award className="w-8 h-8 text-[#C5A059]" />
              <h2 className="text-2xl font-bold">{schoolDistrict.name}</h2>
            </div>
            <p className="text-slate-300 mb-4 leading-relaxed">{schoolDistrict.description}</p>
            <a
              href={schoolDistrict.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C5A059] hover:text-[#B8914F] transition-colors font-semibold"
            >
              <LinkIcon className="w-4 h-4" />
              Visit CCSD Website
            </a>
          </div>
        </div>
      </section>

      {/* Why Schools Matter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-8 text-center">
            Why School Quality Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <Users className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">For Families</h3>
              <p className="text-slate-600">
                Top-rated schools provide excellent educational opportunities for your children, with strong academic programs and supportive learning environments.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-slate-200">
              <TrendingUp className="w-8 h-8 text-[#C5A059] mb-4" />
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">For Property Values</h3>
              <p className="text-slate-600">
                Homes in areas with highly-rated schools typically maintain and increase in value better than those in lower-rated school districts.
              </p>
            </div>
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
            Find Your Home Near Great Schools
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Let me help you find the perfect property in Green Valley Ranch with access to top-rated schools
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              Contact Me
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
