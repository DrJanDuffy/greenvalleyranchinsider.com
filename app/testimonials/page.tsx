import type { Metadata } from 'next';
import { Star, Quote, Users, Award } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Client Testimonials | Green Valley Ranch Insider | Henderson NV Real Estate',
  description: 'Read what clients say about Dr. Jan Duffy\'s real estate services in Green Valley Ranch, Mystic Bay, and The Cottages. Real testimonials from satisfied homeowners.',
  keywords: ['Dr. Jan Duffy reviews', 'Green Valley Ranch real estate testimonials', 'Henderson realtor reviews', 'real estate agent testimonials', 'client reviews Henderson'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | Green Valley Ranch Insider',
    description: 'Read what clients say about Dr. Jan Duffy\'s real estate services in Green Valley Ranch.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/testimonials',
  },
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'Mystic Bay Resident',
      rating: 5,
      text: 'Dr. Duffy helped us sell our home in Mystic Bay for top dollar. Her knowledge of the Green Valley Ranch market is unmatched, and she made the entire process seamless. We couldn\'t have asked for a better experience.',
      highlight: 'Sold for top dollar',
    },
    {
      name: 'Robert T.',
      location: 'The Cottages',
      rating: 5,
      text: 'As first-time homebuyers, we were nervous about the process. Dr. Duffy guided us through every step and found us the perfect home in The Cottages. Highly recommend!',
      highlight: 'First-time buyer success',
    },
    {
      name: 'Jennifer L.',
      location: 'Green Valley Ranch',
      rating: 5,
      text: 'Professional, knowledgeable, and always available. Dr. Duffy truly understands the Henderson market and helped us get multiple offers above asking price.',
      highlight: 'Multiple offers above asking',
    },
    {
      name: 'Michael D.',
      location: 'Mystic Bay',
      rating: 5,
      text: 'The insider knowledge Dr. Duffy has about Green Valley Ranch communities is incredible. She knew exactly how to position our home to attract the right buyers.',
      highlight: 'Expert positioning',
    },
    {
      name: 'Lisa K.',
      location: 'GVR Estates',
      rating: 5,
      text: 'We worked with Dr. Duffy to purchase our dream home in GVR Estates. Her attention to detail and negotiation skills saved us thousands. Exceptional service!',
      highlight: 'Saved thousands',
    },
    {
      name: 'David P.',
      location: 'The Cottages',
      rating: 5,
      text: 'Dr. Duffy\'s expertise in The Cottages helped us understand the community before we even moved in. She made our relocation from out of state stress-free.',
      highlight: 'Out-of-state relocation',
    },
    {
      name: 'Maria S.',
      location: 'Mystic Bay',
      rating: 5,
      text: 'From listing to closing, Dr. Duffy was professional and responsive. Our home sold in just 3 weeks with multiple offers. Couldn\'t be happier!',
      highlight: 'Sold in 3 weeks',
    },
    {
      name: 'James W.',
      location: 'Green Valley Ranch',
      rating: 5,
      text: 'Dr. Duffy\'s market analysis was spot-on. She helped us price our home perfectly, and we received offers within days. Her knowledge of the area is impressive.',
      highlight: 'Perfect pricing strategy',
    },
  ];

  const stats = [
    { label: '5-Star Reviews', value: '100%', icon: Star },
    { label: 'Satisfied Clients', value: '500+', icon: Users },
    { label: 'Years Experience', value: '30+', icon: Award },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Testimonials' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Star className="w-8 h-8 text-[#C5A059]" />
              <Quote className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Real experiences from homeowners in Green Valley Ranch, Mystic Bay, and The Cottages
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-[#C5A059] rounded-full mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#0F172A]" />
                  </div>
                  <div className="text-4xl font-bold text-[#0F172A] mb-2">{stat.value}</div>
                  <div className="text-slate-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#C5A059] text-[#C5A059]" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                      <p className="text-sm text-slate-600">{testimonial.location}</p>
                    </div>
                    <span className="px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] rounded-full text-xs font-semibold">
                      {testimonial.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white">
            <Award className="w-12 h-12 text-[#C5A059] mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Read More Reviews</h2>
            <p className="text-slate-300 mb-6">
              See what other clients are saying on Google Reviews
            </p>
            <a
              href="https://www.google.com/search?q=Dr.+Jan+Duffy+Berkshire+Hathaway+Henderson+NV+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Star className="w-5 h-5" />
              View Google Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Dr. Jan Duffy - Condensed */}
      <WhyChooseReasons variant="condensed" showCTA={true} />

      {/* Office Listings */}
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
            Ready to Experience Exceptional Service?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join hundreds of satisfied clients who chose Dr. Jan Duffy for their real estate needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/#valuation-form"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              Get Your Valuation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
