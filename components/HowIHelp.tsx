'use client';

import { TrendingUp, Camera, Target, Megaphone, Handshake, FileCheck, Eye, MapPin, Building, Award, FileText, Phone } from 'lucide-react';
import Link from 'next/link';
import { trackPhoneCall } from '@/lib/analytics';

export function HowIHelp() {
  const sellerServices = [
    {
      icon: TrendingUp,
      title: 'Accurate Home Valuation',
      description: 'Based on THIS WEEK\'s Green Valley Ranch sales, not outdated data. Know your home\'s true market value.',
    },
    {
      icon: Camera,
      title: 'Professional Photography & Virtual Tours',
      description: 'Showcase your home\'s best features with stunning visuals that make buyers want to see more.',
    },
    {
      icon: Target,
      title: 'Strategic Pricing',
      description: 'Price your home to attract multiple offers, not sit on the market. We know what works in GVR.',
    },
    {
      icon: Megaphone,
      title: 'Marketing That Reaches Serious Buyers',
      description: 'Beyond Zillow - we market to qualified buyers actively looking in Green Valley Ranch neighborhoods.',
    },
    {
      icon: Handshake,
      title: 'Negotiation to Maximize Final Price',
      description: 'Expert negotiation to get you the best possible terms and highest sale price.',
    },
    {
      icon: FileCheck,
      title: 'Smooth Closing Coordination',
      description: 'Handle all the details so you don\'t have to. From contract to closing, we\'ve got you covered.',
    },
  ];

  const buyerServices = [
    {
      icon: Eye,
      title: 'Access to Listings Before They Hit Public Sites',
      description: 'See new listings as soon as they\'re available, giving you a competitive edge in fast-moving markets.',
    },
    {
      icon: MapPin,
      title: 'Neighborhood Insights Only a Local Knows',
      description: 'Inside info on schools, HOAs, noise levels, and community vibes you won\'t find online.',
    },
    {
      icon: Building,
      title: 'New Construction Guidance & Builder Incentive Intel',
      description: 'Know which builders offer the best incentives and what to expect in new developments.',
    },
    {
      icon: Award,
      title: 'Offer Strategy to Win in Competitive Situations',
      description: 'Craft winning offers that stand out, even when multiple buyers are competing for the same home.',
    },
    {
      icon: FileText,
      title: 'Contract-to-Close Hand-Holding',
      description: 'Guidance through every step - inspections, appraisals, negotiations, and all the paperwork.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mb-4">
            How I Help Green Valley Ranch<br />
            <span className="text-[#C5A059]">Home Buyers & Sellers</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here's what I do for you - no fluff, just the services that actually help you succeed
          </p>
        </div>

        {/* Seller Services */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-12 bg-[#C5A059] rounded-full"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
              For Sellers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sellerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#C5A059] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white text-center">
            <p className="text-xl font-semibold mb-4">Ready to sell your Green Valley Ranch home?</p>
            <a
              href="tel:+17022221964"
              onClick={() => trackPhoneCall('How I Help - Seller CTA')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg text-lg"
            >
              <Phone className="w-5 h-5" />
              Get Your Home&apos;s Current Value
            </a>
            <p className="text-sm text-slate-300 mt-3">Call (702) 222-1964</p>
          </div>
        </div>

        {/* Buyer Services */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-12 bg-[#C5A059] rounded-full"></div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0F172A]">
              For Buyers
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {buyerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-[#C5A059] transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0F172A] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white text-center">
            <p className="text-xl font-semibold mb-4">Ready to find your perfect Green Valley Ranch home?</p>
            <a
              href="tel:+17022221964"
              onClick={() => trackPhoneCall('How I Help - Buyer CTA')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg text-lg"
            >
              <Phone className="w-5 h-5" />
              See GVR Homes First
            </a>
            <p className="text-sm text-slate-300 mt-3">Call (702) 222-1964</p>
          </div>
        </div>
      </div>
    </section>
  );
}
