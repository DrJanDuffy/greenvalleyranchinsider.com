import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from 'sonner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StructuredData } from '@/components/StructuredData';
import { EnhancedSchema } from '@/components/EnhancedSchema';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SkipToContent } from '@/components/SkipToContent';
import { ClientPerformance } from '@/components/ClientPerformance';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://greenvalleyranchinsider.com'),
  title: {
    default: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    template: '%s | Green Valley Ranch Insider',
  },
  description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community. Get your custom insider valuation today. 30+ years experience, $127M+ in sales.',
  keywords: [
    'Green Valley Ranch',
    'Henderson NV real estate',
    'Mystic Bay',
    'The Cottages',
    'GVR Estates',
    'home valuation',
    'Henderson homes for sale',
    '89052',
    'Dr. Jan Duffy',
    'Berkshire Hathaway HomeServices',
    'Las Vegas real estate',
    'Henderson real estate agent',
    'Green Valley Ranch homes',
    'Mystic Bay Henderson',
    'The Cottages Henderson',
    'real estate agent Henderson NV',
    'home valuation Henderson',
    'property search Henderson',
  ],
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://greenvalleyranchinsider.com/about' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Green Valley Ranch Insider',
  applicationName: 'Green Valley Ranch Insider',
  category: 'Real Estate',
  classification: 'Business',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'noimageindex': false,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
  },
  alternates: {
    canonical: 'https://greenvalleyranchinsider.com',
  },
  openGraph: {
    title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community. 30+ years experience, $127M+ in sales.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Green Valley Ranch Insider',
    url: 'https://greenvalleyranchinsider.com',
    images: [
      {
        url: 'https://greenvalleyranchinsider.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Green Valley Ranch Insider - Henderson NV Real Estate Authority',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community.',
    images: ['https://greenvalleyranchinsider.com/og-image.jpg'],
    creator: '@drjanduffy',
    site: '@greenvalleyranchinsider',
  },
  other: {
    'geo.region': 'US-NV',
    'geo.placename': 'Henderson',
    'geo.position': '36.0397;-115.0632',
    'ICBM': '36.0397, -115.0632',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Resource Hints for Performance */}
        <link rel="preconnect" href="https://em.realscout.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          </>
        )}
        {/* Canonical URL */}
        <link rel="canonical" href="https://greenvalleyranchinsider.com" />
        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#C5A059" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Mobile Optimization */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="HandheldFriendly" content="true" />
        {/* Geographic Meta Tags */}
        <meta name="geo.region" content="US-NV" />
        <meta name="geo.placename" content="Henderson" />
        <meta name="geo.position" content="36.0397;-115.0632" />
        <meta name="ICBM" content="36.0397, -115.0632" />
        {/* Business Information */}
        <meta name="contact" content="DrDuffy@GreenValleyRanchInsider.com" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="copyright" content="Green Valley Ranch Insider" />
        {/* RealScout Widget Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
            realscout-home-value {
              --rs-hvw-background-color: #ffffff;
              --rs-hvw-title-color: #0F172A;
              --rs-hvw-subtitle-color: rgba(15, 23, 42, 0.6);
              --rs-hvw-primary-button-text-color: #0F172A;
              --rs-hvw-primary-button-color: #C5A059;
              --rs-hvw-secondary-button-text-color: #C5A059;
              --rs-hvw-secondary-button-color: #ffffff;
              --rs-hvw-widget-width: auto;
            }
            realscout-advanced-search {
              --rs-as-button-text-color: #ffffff;
              --rs-as-background-color: #ffffff;
              --rs-as-button-color: #4a90e2;
              --rs-as-widget-width: 500px !important;
            }
            realscout-office-listings {
              --rs-listing-divider-color: #0e64c8;
              width: 100%;
            }
          `
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* RealScout Widget Script */}
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
        <StructuredData type="WebSite" />
        <StructuredData type="RealEstateAgent" />
        <StructuredData type="LocalBusiness" />
        <EnhancedSchema />
        <ClientPerformance />
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <Toaster />
      </body>
    </html>
  );
}
