import type { Metadata } from 'next';
import { DollarSign, CreditCard, FileText, TrendingUp, Calculator, Shield, Phone, Mail } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';
import { RealScoutOfficeListings } from '@/components/RealScoutOfficeListings';

export const metadata: Metadata = {
  title: 'Financing Guide | Green Valley Ranch Insider | Henderson NV Home Financing',
  description: 'Complete guide to home financing in Henderson, NV. Mortgage options, loan types, pre-approval process, and financing tips for Green Valley Ranch homebuyers.',
  keywords: ['home financing Henderson', 'mortgage guide', 'home loan Henderson', 'pre-approval process', 'mortgage options', 'Henderson home financing', 'first-time buyer financing'],
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/financing-guide',
  },
  openGraph: {
    title: 'Financing Guide | Green Valley Ranch Insider',
    description: 'Complete guide to home financing in Henderson, NV for Green Valley Ranch homebuyers.',
    type: 'website',
    url: 'https://greenvalleyranchinsider.com/financing-guide',
  },
};

export default function FinancingGuidePage() {
  const loanTypes = [
    {
      name: 'Conventional Loans',
      description: 'Traditional mortgages not insured by the government. Typically require 20% down payment, but options available with as little as 3% down.',
      downPayment: '3-20%',
      pros: ['Lower PMI costs', 'Flexible terms', 'No government restrictions'],
      cons: ['Higher credit requirements', 'Larger down payment typically needed'],
    },
    {
      name: 'FHA Loans',
      description: 'Government-insured loans ideal for first-time buyers. Lower credit score requirements and down payment options.',
      downPayment: '3.5% minimum',
      pros: ['Lower down payment', 'Lower credit score requirements', 'Gift funds allowed'],
      cons: ['Mortgage insurance required', 'Loan limits apply', 'Property restrictions'],
    },
    {
      name: 'VA Loans',
      description: 'Exclusive to veterans, active-duty military, and eligible spouses. No down payment required and no PMI.',
      downPayment: '0%',
      pros: ['No down payment', 'No PMI', 'Lower interest rates', 'Easier qualification'],
      cons: ['VA funding fee', 'Property restrictions', 'Eligibility requirements'],
    },
    {
      name: 'USDA Loans',
      description: 'Rural development loans with no down payment requirement. Available in certain areas outside major cities.',
      downPayment: '0%',
      pros: ['No down payment', 'Lower interest rates', 'Flexible credit requirements'],
      cons: ['Income limits', 'Property location restrictions', 'USDA approval required'],
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Check Your Credit',
      description: 'Review your credit report and score. Most lenders require a minimum credit score of 620, though higher scores get better rates.',
    },
    {
      number: '2',
      title: 'Calculate Your Budget',
      description: 'Determine how much you can afford. Consider your income, debts, and monthly expenses. Aim for housing costs not exceeding 28-30% of gross income.',
    },
    {
      number: '3',
      title: 'Gather Documentation',
      description: 'Prepare financial documents including pay stubs, tax returns, bank statements, and employment verification.',
    },
    {
      number: '4',
      title: 'Get Pre-Approved',
      description: 'Work with a lender to get pre-approved. This shows sellers you\'re serious and helps you know your price range.',
    },
    {
      number: '5',
      title: 'Shop for Lenders',
      description: 'Compare rates and terms from multiple lenders. Consider local banks, credit unions, and mortgage brokers.',
    },
    {
      number: '6',
      title: 'Lock Your Rate',
      description: 'Once you find a property, lock in your interest rate to protect against market fluctuations.',
    },
  ];

  const tips = [
    {
      icon: DollarSign,
      title: 'Save for Down Payment',
      description: 'While some loans require minimal down payments, a larger down payment reduces monthly payments and eliminates PMI.',
    },
    {
      icon: CreditCard,
      title: 'Improve Your Credit',
      description: 'Pay down debts, make payments on time, and avoid opening new credit accounts before applying for a mortgage.',
    },
    {
      icon: Calculator,
      title: 'Calculate Total Costs',
      description: 'Remember to factor in closing costs (typically 2-5% of home price), moving expenses, and immediate home improvements.',
    },
    {
      icon: Shield,
      title: 'Get Pre-Approved Early',
      description: 'Pre-approval strengthens your offers and helps you move quickly in competitive markets like Green Valley Ranch.',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Financing Guide' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-[#C5A059]" />
              <CreditCard className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Financing Guide
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Complete guide to home financing for Green Valley Ranch homebuyers
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-6">Understanding Home Financing</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              Securing the right financing is a crucial step in buying your Green Valley Ranch home. With various loan options available, understanding your choices helps you make informed decisions and find the best mortgage for your situation.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you're a first-time buyer or looking to upgrade, this guide covers the essentials of home financing, from loan types to the pre-approval process.
            </p>
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Types of Home Loans
          </h2>
          <div className="space-y-6">
            {loanTypes.map((loan, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-[#0F172A]">{loan.name}</h3>
                      <span className="px-3 py-1 bg-[#C5A059]/10 text-[#C5A059] rounded-full text-sm font-semibold">
                        {loan.downPayment} down
                      </span>
                    </div>
                    <p className="text-slate-600 mb-4">{loan.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Pros:</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                          {loan.pros.map((pro, proIndex) => (
                            <li key={proIndex}>{pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Cons:</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
                          {loan.cons.map((con, conIndex) => (
                            <li key={conIndex}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            The Financing Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[#0F172A]">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-12 text-center">
            Financing Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#0F172A]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">{tip.title}</h3>
                      <p className="text-slate-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
            Ready to Get Pre-Approved?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            I can connect you with trusted lenders who understand the Green Valley Ranch market
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Get Lender Referrals
            </Link>
            <Link
              href="/buyers-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
            >
              <FileText className="w-5 h-5" />
              View Buyer&apos;s Guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
