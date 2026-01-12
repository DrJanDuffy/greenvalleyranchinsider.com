'use client';

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Mystic Bay Resident',
    rating: 5,
    text: 'Dr. Duffy helped us sell our home in Mystic Bay for top dollar. Her knowledge of the Green Valley Ranch market is unmatched, and she made the entire process seamless.',
  },
  {
    name: 'Robert T.',
    location: 'The Cottages',
    rating: 5,
    text: 'As first-time homebuyers, we were nervous about the process. Dr. Duffy guided us through every step and found us the perfect home in The Cottages. Highly recommend!',
  },
  {
    name: 'Jennifer L.',
    location: 'Green Valley Ranch',
    rating: 5,
    text: 'Professional, knowledgeable, and always available. Dr. Duffy truly understands the Henderson market and helped us get multiple offers above asking price.',
  },
  {
    name: 'Michael D.',
    location: 'Mystic Bay',
    rating: 5,
    text: 'The insider knowledge Dr. Duffy has about Green Valley Ranch communities is incredible. She knew exactly how to position our home to attract the right buyers.',
  },
];

export function Testimonials() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C5A059] text-[#C5A059]"
                  />
                ))}
              </div>
              <Quote className="w-8 h-8 text-[#C5A059] mb-4 opacity-50" />
              <p className="text-slate-700 mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="pt-4 border-t border-slate-200">
                <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                <p className="text-sm text-slate-500">{testimonial.location}</p>
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
