import type { Metadata } from 'next';
import { BookOpen, FileText, Calculator, MapPin, Home, TrendingUp, Phone, Mail, Link as LinkIcon } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';
import { WhyChooseReasons } from '@/components/WhyChooseReasons';

export const metadata: Metadata = {
  title: 'Resources | Green Valley Ranch Insider | Henderson NV Real Estate Resources',
  description: 'Helpful resources for buyers and sellers in Green Valley Ranch. Guides, calculators, market information, and tools to help with your real estate journey.',
  keywords: ['real estate resources', 'home buying resources', 'home selling resources', 'real estate calculators', 'Henderson real estate tools', 'Green Valley Ranch resources'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/resources',
  },
  openGraph: {
    title: 'Resources | Green Valley Ranch Insider',
    description: 'Helpful resources for buyers and sellers in Green Valley Ranch, Mystic Bay, and The Cottages.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/resources',
  },
};

export default function ResourcesPage() {
  const guides = [
    {
      icon: Home,
      title: 'Buyer\'s Guide',
      description: 'Complete step-by-step guide to buying a home in Green Valley Ranch',
      href: '/buyers-guide',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Seller\'s Guide',
      description: 'Everything you need to know about selling your home for top dollar',
      href: '/sellers-guide',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: MapPin,
      title: 'Neighborhood Guides',
      description: 'Detailed information about Mystic Bay, The Cottages, and Green Valley Ranch',
      href: '/green-valley-ranch',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: BookOpen,
      title: 'Market Insights',
      description: 'Current market trends, statistics, and analysis for Henderson real estate',
      href: '/market-insights',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const tools = [
    {
      icon: Calculator,
      title: 'Home Value Calculator',
      description: 'Get an instant estimate of your home\'s value',
      href: '/#valuation-form',
      external: false,
    },
    {
      icon: Home,
      title: 'Property Search',
      description: 'Search available properties in Henderson and Las Vegas',
      href: '/',
      external: false,
    },
    {
      icon: FileText,
      title: 'Mortgage Calculator',
      description: 'Calculate your monthly mortgage payment',
      href: 'https://www.bankrate.com/mortgages/mortgage-calculator/',
      external: true,
    },
    {
      icon: TrendingUp,
      title: 'Market Reports',
      description: 'View current market statistics and trends',
      href: '/market-insights',
      external: false,
    },
  ];

  const helpfulLinks = [
    {
      category: 'Government & Legal',
      links: [
        { name: 'Clark County Assessor', url: 'https://www.clarkcountynv.gov/assessor' },
        { name: 'Nevada Real Estate Division', url: 'https://red.nv.gov' },
        { name: 'Henderson City Government', url: 'https://www.cityofhenderson.com' },
      ],
    },
    {
      category: 'Utilities & Services',
      links: [
        { name: 'NV Energy', url: 'https://www.nvenergy.com' },
        { name: 'Las Vegas Valley Water District', url: 'https://www.lvvwd.com' },
        { name: 'Republic Services (Trash)', url: 'https://www.republicservices.com' },
      ],
    },
    {
      category: 'Community',
      links: [
        { name: 'The District at Green Valley Ranch', url: 'https://www.thedistrictatgvr.com' },
        { name: 'Green Valley Ranch Resort', url: 'https://www.greenvalleyranchresort.com' },
        { name: 'Clark County School District', url: 'https://www.ccsd.net' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Resources', href: '/resources' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-[#C5A059]" />
              <FileText className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Resources
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Helpful guides, tools, and information for your real estate journey in Green Valley Ranch
            </p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Comprehensive Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={index}
                  href={guide.href}
                  className="group bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-[#C5A059]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${guide.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#C5A059] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-600 mb-3">{guide.description}</p>
                      <span className="text-[#C5A059] font-semibold text-sm group-hover:underline">
                        Read Guide →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Helpful Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              const Component = tool.external ? 'a' : Link;
              const props = tool.external
                ? { href: tool.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: tool.href };
              
              return (
                <Component
                  key={index}
                  {...props}
                  className="group bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all hover:border-[#C5A059]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#0F172A]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#C5A059] transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-slate-600">{tool.description}</p>
                      {tool.external && (
                        <span className="inline-flex items-center gap-1 text-[#C5A059] font-semibold text-sm mt-2">
                          <LinkIcon className="w-4 h-4" />
                          External Link
                        </span>
                      )}
                    </div>
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* Helpful Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Helpful Links
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {helpfulLinks.map((category, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">{category.category}</h3>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-slate-700 hover:text-[#C5A059] transition-colors group"
                      >
                        <LinkIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
            Need More Help?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Have questions or need personalized assistance? I\'m here to help
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+17025001955"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call (702) 500-1955
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
