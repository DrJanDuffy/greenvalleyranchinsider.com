import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from 'sonner';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { StructuredData } from '@/components/StructuredData';
import { ScrollToTop } from '@/components/ScrollToTop';
import { SkipToContent } from '@/components/SkipToContent';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://greenvalleyranchinsider.com'),
  title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
  description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community. Get your custom insider valuation today.',
  keywords: ['Green Valley Ranch', 'Henderson NV real estate', 'Mystic Bay', 'The Cottages', 'GVR Estates', 'home valuation', 'Henderson homes for sale', '89052', 'Dr. Jan Duffy'],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Green Valley Ranch Insider',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
  openGraph: {
    title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community.',
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
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community.',
    images: ['https://greenvalleyranchinsider.com/og-image.jpg'],
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
            realscout-simple-search {
              --rs-ss-font-primary-color: #000000;
              --rs-ss-searchbar-border-color: #8b572a;
              --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
              --rs-ss-widget-width: 500px !important;
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
