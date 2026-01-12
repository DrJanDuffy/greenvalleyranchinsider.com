import type { Metadata } from 'next';
import { Shield, Lock, Eye, FileText } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Green Valley Ranch Insider | Henderson NV Real Estate',
  description: 'Privacy policy for Green Valley Ranch Insider. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-[#0F172A] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={[{ name: 'Privacy Policy', href: '/privacy' }]} />
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-[#C5A059]" />
              <Lock className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your privacy is important to us
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
          <p className="text-slate-600 mb-8">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Information We Collect</h2>
          <p className="text-slate-700 mb-6">
            When you use our website or services, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and mailing address when you submit forms or contact us</li>
            <li><strong>Property Information:</strong> Property address, details about your home, and information about your real estate needs</li>
            <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent on pages</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and other technical data collected automatically</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">How We Use Your Information</h2>
          <p className="text-slate-700 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li>Provide real estate services, including home valuations and property information</li>
            <li>Respond to your inquiries and communicate with you about our services</li>
            <li>Send you relevant information about Green Valley Ranch real estate market</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations and protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Information Sharing</h2>
          <p className="text-slate-700 mb-6">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li><strong>Service Providers:</strong> Third-party services that help us operate our website and provide services (e.g., hosting, analytics)</li>
            <li><strong>Business Partners:</strong> Real estate professionals and partners who assist in providing services to you</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Data Security</h2>
          <p className="text-slate-700 mb-6">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Your Rights</h2>
          <p className="text-slate-700 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-slate-700 mb-8 space-y-2">
            <li>Access and receive a copy of your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of marketing communications</li>
            <li>Object to processing of your personal information</li>
          </ul>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Cookies and Tracking</h2>
          <p className="text-slate-700 mb-6">
            We use cookies and similar tracking technologies to improve your experience on our website. You can control cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Third-Party Links</h2>
          <p className="text-slate-700 mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Children&apos;s Privacy</h2>
          <p className="text-slate-700 mb-6">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Changes to This Policy</h2>
          <p className="text-slate-700 mb-6">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last Updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Contact Us</h2>
          <p className="text-slate-700 mb-4">
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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
            Questions About Your Privacy?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We&apos;re here to help. Contact us with any privacy-related questions or concerns.
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
