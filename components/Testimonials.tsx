'use client';

import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  neighborhood: string;
  transactionType: 'bought' | 'sold';
  year: number;
  quote: string;
  rating: number;
  salePrice?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    neighborhood: 'Mystic Bay',
    transactionType: 'sold',
    year: 2024,
    quote: 'Dr. Duffy helped us sell our home in Mystic Bay for $47,000 over asking. Her knowledge of the Green Valley Ranch market is unmatched, and she made the entire process seamless.',
    rating: 5,
    salePrice: '$47,000 over asking',
  },
  {
    id: '2',
    name: 'Robert & Maria Torres',
    neighborhood: 'The Cottages',
    transactionType: 'bought',
    year: 2024,
    quote: 'As first-time homebuyers, we were nervous about the process. Dr. Duffy guided us through every step and found us the perfect home in The Cottages. Highly recommend!',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Lee',
    neighborhood: 'Green Valley Ranch',
    transactionType: 'sold',
    year: 2024,
    quote: 'Professional, knowledgeable, and always available. Dr. Duffy truly understands the Henderson market and helped us get 3 offers above asking price within the first weekend.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Michael Davidson',
    neighborhood: 'Mystic Bay',
    transactionType: 'sold',
    year: 2023,
    quote: 'The insider knowledge Dr. Duffy has about Green Valley Ranch communities is incredible. She knew exactly how to position our home to attract the right buyers.',
    rating: 5,
  },
];

// Generate Review schema for each testimonial
const reviewSchema = testimonials.map(t => ({
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "RealEstateAgent",
    "name": "Dr. Jan Duffy"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": t.rating,
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": t.name
  },
  "reviewBody": t.quote,
  "datePublished": `${t.year}-01-01`
}));

export function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
      {/* Review Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Real testimonials from satisfied homeowners in Green Valley Ranch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'fill-[#C5A059] text-[#C5A059]'
                        : 'fill-slate-200 text-slate-200'
                    }`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-slate-700 mb-4 italic leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-[#C5A059] to-[#B8914F] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name
                    .split(' ')
                    .map(n => n[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">
                    {testimonial.transactionType === 'sold' ? 'Sold in' : 'Bought in'}{' '}
                    {testimonial.neighborhood} • {testimonial.year}
                    {testimonial.salePrice && (
                      <span className="block text-[#C5A059] font-semibold mt-1">
                        {testimonial.salePrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/search?q=Dr.+Jan+Duffy+Berkshire+Hathaway+Henderson+NV+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C5A059] hover:text-[#B8914F] font-semibold transition-colors"
          >
            Read More Reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
