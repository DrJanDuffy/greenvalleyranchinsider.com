import type { Metadata } from 'next';
import { FileText, Scale, Shield } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Green Valley Ranch Insider | Henderson NV Real Estate',
  description: 'Terms of service for Green Valley Ranch Insider. Please read our terms and conditions for using our website and services.',
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-[#C5A059]" />
              <Scale className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Terms and conditions for using Green Valley Ranch Insider
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <p className="text-slate-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Agreement to Terms</h2>
          <p className="text-slate-700 mb-6">
            By accessing and using Green Valley Ranch Insider website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Use License</h2>
          <p className="text-slate-700 mb-4">
            Permission is granted to temporarily access the materials on Green Valley Ranch Insider&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Real Estate Services</h2>
          <p className="text-slate-700 mb-6">
            Green Valley Ranch Insider provides real estate information and services. All real estate services are provided by Dr. Jan Duffy, a licensed real estate agent (Nevada License #S.0197614.LLC) with Berkshire Hathaway HomeServices Nevada Properties. All real estate transactions are subject to applicable state and federal laws and regulations.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Property Information</h2>
          <p className="text-slate-700 mb-6">
            Property information, valuations, and market data provided on this website are estimates and should not be considered as professional appraisals or guarantees. All property information is subject to verification and may change without notice. We make every effort to ensure accuracy but cannot guarantee the completeness or accuracy of all information.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Third-Party Services</h2>
          <p className="text-slate-700 mb-6">
            Our website may include third-party services, widgets, and links. We are not responsible for the content, privacy policies, or practices of third-party websites or services. Your use of third-party services is at your own risk.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Limitation of Liability</h2>
          <p className="text-slate-700 mb-6">
            In no event shall Green Valley Ranch Insider or its service providers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website, even if we have been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Revisions and Errata</h2>
          <p className="text-slate-700 mb-6">
            The materials appearing on Green Valley Ranch Insider website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete, or current. We may make changes to the materials contained on its website at any time without notice.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Governing Law</h2>
          <p className="text-slate-700 mb-6">
            These terms and conditions are governed by and construed in accordance with the laws of the State of Nevada and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Contact Information</h2>
          <p className="text-slate-700 mb-4">
            If you have questions about these Terms of Service, please contact us:
          </p>
          <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 mb-8">
            <p className="text-slate-700 mb-2"><strong>Dr. Jan Duffy</strong></p>
            <p className="text-slate-700 mb-2">Green Valley Ranch Insider</p>
            <p className="text-slate-700 mb-2">360 Mike Koizumi Way, Henderson, NV 89011</p>
            <p className="text-slate-700 mb-2">
              <a href="tel:+17025001955" className="text-[#C5A059] hover:underline">(702) 500-1955</a>
            </p>
            <p className="text-slate-700">
              <a href="mailto:DrDuffy@GreenValleyRanchInsider.com" className="text-[#C5A059] hover:underline">
                DrDuffy@GreenValleyRanchInsider.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0F172A] mb-6">
            Questions About Our Terms?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us if you have any questions about these terms of service.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
