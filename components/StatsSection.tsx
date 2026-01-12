'use client';

import { TrendingUp, Home, Users, Award } from 'lucide-react';

const stats = [
  {
    icon: Home,
    value: '30+',
    label: 'Years Experience',
    description: 'Las Vegas real estate expertise',
  },
  {
    icon: TrendingUp,
    value: '135+',
    label: 'Domains Managed',
    description: 'Neighborhood-focused websites',
  },
  {
    icon: Users,
    value: 'Top',
    label: 'Agent Performance',
    description: 'Berkshire Hathaway HomeServices',
  },
  {
    icon: Award,
    value: 'Expert',
    label: 'Green Valley Ranch',
    description: 'Insider knowledge & insights',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0F172A] to-slate-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why Choose Dr. Jan Duffy?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Decades of experience and deep local knowledge of Green Valley Ranch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#C5A059] rounded-lg mb-4 mx-auto">
                  <Icon className="w-6 h-6 text-[#0F172A]" />
                </div>
                <div className="text-3xl font-bold text-[#C5A059] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-slate-300">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
