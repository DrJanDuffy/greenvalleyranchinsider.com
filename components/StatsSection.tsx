'use client';

import { TrendingUp, Camera, Target, Megaphone, Handshake, FileCheck, Eye, MapPin, Building, Award, FileText, Phone } from 'lucide-react';
import Link from 'next/link';
import { trackPhoneClick } from '@/lib/analytics';

export function StatsSection() {
  // Top 4 seller services for homepage
  const sellerServices = [
    {
      icon: TrendingUp,
      title: 'Accurate Home Valuation',
      description: 'Based on THIS WEEK\'s Green Valley Ranch sales, not outdated data.',
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'Stunning visuals that make buyers want to see more.',
    },
    {
      icon: Target,
      title: 'Strategic Pricing',
      description: 'Price to attract multiple offers, not sit on the market.',
    },
    {
      icon: Handshake,
      title: 'Expert Negotiation',
      description: 'Maximize your final price and terms.',
    },
  ];

  // Top 4 buyer services for homepage
  const buyerServices = [
    {
      icon: Eye,
      title: 'Early Access to Listings',
      description: 'Get listings before they hit public sites.',
    },
    {
      icon: MapPin,
      title: 'Neighborhood Insights',
      description: 'Inside info only a local knows.',
    },
    {
      icon: Award,
      title: 'Winning Offer Strategy',
      description: 'Craft compelling offers that get accepted.',
    },
    {
      icon: FileText,
      title: 'Contract-to-Close Support',
      description: 'Personalized guidance through every step.',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F172A] to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How I Help Green Valley Ranch Clients
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Comprehensive services tailored to sellers and buyers in GVR
          </p>
        </div>

        {/* Seller Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-[#C5A059] mb-6 text-center">
            For Sellers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {sellerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[#C5A059]">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-300">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href="tel:+17022221964"
              onClick={() => trackPhoneClick('Get Your Home\'s Current Value - Stats Section Seller CTA')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Get Your Home's Current Value
            </a>
          </div>
        </div>

        {/* Buyer Services */}
        <div>
          <h3 className="text-2xl font-bold text-[#C5A059] mb-6 text-center">
            For Buyers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {buyerServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-colors text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-[#0F172A]" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-[#C5A059]">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-300">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <a
              href="tel:+17022221964"
              onClick={() => trackPhoneClick('See GVR Homes First - Stats Section Buyer CTA')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              See GVR Homes First
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
