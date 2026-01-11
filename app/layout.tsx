import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
  description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community. Get your custom insider valuation today.',
  keywords: ['Green Valley Ranch', 'Henderson NV real estate', 'Mystic Bay', 'The Cottages', 'GVR Estates', 'home valuation', 'Henderson homes for sale', '89052', 'Dr. Jan Duffy'],
  authors: [{ name: 'Dr. Jan Duffy' }],
  creator: 'Dr. Jan Duffy',
  publisher: 'Green Valley Ranch Insider',
  contact: {
    email: 'DrDuffy@GreenValleyRanchInsider.com',
    telephone: ['+17025001955', '+17022221964'],
  },
  openGraph: {
    title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Green Valley Ranch Insider',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community.',
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
