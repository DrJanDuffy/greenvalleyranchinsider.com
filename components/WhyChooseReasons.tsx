'use client';

import { TrendingUp, Handshake, Users, Shield, Home, Phone } from 'lucide-react';
import Link from 'next/link';

type WhyChooseReasonsProps = {
  variant?: 'full' | 'buyer-focused' | 'seller-focused' | 'condensed';
  showCTA?: boolean;
  className?: string;
};

export function WhyChooseReasons({
  variant = 'full',
  showCTA = true,
  className = '',
}: WhyChooseReasonsProps) {
  const allReasons = {
    pricing: [
      'Final list price recommendation (owning the number)',
      'Price reduction timing and amount decisions',
      'Interpreting why comps sold—not just what they sold for',
      'Adjusting for unique features AI can\'t quantify (views, noise, smell, vibe)',
      'Reading seller motivation to set realistic expectations',
      'Advising on offer price strategy for buyers',
      'Knowing when a property is overpriced vs. worth it',
      'Predicting appraisal risk and advising accordingly',
      'Recommending pre-listing improvements ROI',
      'Identifying hidden value (lot potential, ADU opportunity)',
    ],
    negotiation: [
      'Counter-offer strategy and timing',
      'Reading the other agent\'s tells and client situation',
      'Knowing when to push vs. walk away',
      'Inspection negotiation—what to ask for, what to let go',
      'Repair credit vs. repair completion recommendations',
      'Escalation clause advice',
      'Multiple offer situation guidance',
      'Backup offer positioning',
      'Creative deal structuring (seller financing, assumable loans)',
    ],
    counseling: [
      'Recommending buy vs. rent based on client situation',
      'Advising sell-first vs. buy-first timing',
      'Reading emotional readiness to transact',
      'Guiding divorce clients through equitable solutions',
      'Advising heirs on probate property decisions',
      'Helping relocating buyers prioritize neighborhoods',
      'Counseling anxious first-time buyers through fear',
      'Managing seller expectations on timeline',
      'Advising on 1031 exchange timing and strategy',
      'Retirement community fit assessment (55+ lifestyle match)',
      'Investment property portfolio strategy',
    ],
    risk: [
      'Identifying red flags in disclosures',
      'Recommending additional inspections (sewer scope, pool, roof)',
      'Advising on title issues and resolution paths',
      'Recognizing financing risk before it kills a deal',
      'Spotting appraisal problems early',
      'Managing low appraisal situations',
      'Navigating HOA issues and restrictions',
      'Handling permit and code violation discoveries',
      'Advising on environmental concerns (mold, asbestos, radon)',
    ],
    physical: [
      'Walking properties with buyers (in-person, not virtual)',
      'Noticing deferred maintenance during walkthrough',
      'Smelling mold, smoke, pets (what AI can\'t detect)',
      'Hearing traffic, airport, neighbor noise in real-time',
      'Driving neighborhoods to know inventory intimately',
      'Knowing which streets flood after rain',
      'Learning school drop-off traffic patterns',
      'Identifying noise sources (flight paths, highways)',
      'Discovering hidden neighborhood gems',
      'Building relationships with HOA boards',
      'Knowing local business owners by name',
      'Understanding microclimate differences (wind, sun)',
    ],
  };

  const buyerReasons = {
    pricing: allReasons.pricing.filter(r => r.includes('buyer') || r.includes('offer price') || r.includes('overpriced')),
    negotiation: allReasons.negotiation,
    counseling: allReasons.counseling.filter(r => r.includes('buy') || r.includes('rent') || r.includes('Buyer') || r.includes('first-time')),
    risk: allReasons.risk,
    physical: allReasons.physical.filter(r => r.includes('buyer') || r.includes('Walking') || r.includes('neighborhood')),
  };

  const sellerReasons = {
    pricing: allReasons.pricing.filter(r => r.includes('list price') || r.includes('seller') || r.includes('pre-listing')),
    negotiation: allReasons.negotiation,
    counseling: allReasons.counseling.filter(r => r.includes('sell') || r.includes('Seller') || r.includes('expectations')),
    risk: allReasons.risk,
    physical: allReasons.physical.filter(r => r.includes('walkthrough') || r.includes('deferred') || r.includes('Smelling')),
  };

  const reasons = variant === 'buyer-focused' ? buyerReasons :
                  variant === 'seller-focused' ? sellerReasons :
                  variant === 'condensed' ? {
                    pricing: allReasons.pricing.slice(0, 4),
                    negotiation: allReasons.negotiation.slice(0, 4),
                    counseling: allReasons.counseling.slice(0, 4),
                    risk: allReasons.risk.slice(0, 4),
                    physical: allReasons.physical.slice(0, 4),
                  } : allReasons;

  const sections = [
    { icon: TrendingUp, title: 'Pricing & Valuation Decisions', items: reasons.pricing, color: 'text-[#C5A059]' },
    { icon: Handshake, title: 'Negotiation & Deal Strategy', items: reasons.negotiation, color: 'text-[#C5A059]' },
    { icon: Users, title: 'Client Advisory & Counseling', items: reasons.counseling, color: 'text-[#C5A059]' },
    { icon: Shield, title: 'Risk Assessment & Problem-Solving', items: reasons.risk, color: 'text-[#C5A059]' },
    { icon: Home, title: 'Physical Execution & Local Knowledge', items: reasons.physical, color: 'text-[#C5A059]' },
  ].filter(section => section.items.length > 0);

  if (variant === 'condensed') {
    return (
      <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-slate-50 ${className}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0F172A] mb-4">
              Why Choose Dr. Jan Duffy?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real expertise goes beyond credentials—here's what you get when you work with someone who makes the decisions that truly matter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {sections.slice(0, 6).flatMap(section => 
              section.items.slice(0, 4).map((item, index) => (
                <div
                  key={`${section.title}-${index}`}
                  className="bg-white rounded-lg p-4 border border-slate-200 hover:border-[#C5A059] transition-colors"
                >
                  <p className="text-slate-700 text-sm">{item}</p>
                </div>
              ))
            )}
          </div>

          {showCTA && (
            <div className="text-center">
              <Link
                href="/about#why-choose"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
              >
                View All Reasons →
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-4">
            Why Choose Dr. Jan Duffy?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Real expertise goes beyond credentials. Here's what you get when you work with someone who makes the decisions that truly matter in your transaction.
          </p>
        </div>

        {sections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <div key={sectionIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-[#0F172A] mb-6 flex items-center gap-3">
                <Icon className={`w-6 h-6 ${section.color}`} />
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 border border-slate-200 hover:border-[#C5A059] transition-colors"
                  >
                    <p className="text-slate-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {showCTA && (
          <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white text-center">
            <p className="text-xl font-semibold mb-4">This is the difference between an agent and an expert</p>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              When you work with Dr. Jan Duffy, you get someone who makes the decisions that truly matter—not just someone who processes paperwork.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg text-lg"
              >
                <Phone className="w-5 h-5" />
                Let's Talk About Your Goals
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
