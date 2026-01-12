/**
 * Site-wide constants
 * Centralized location for all hardcoded values
 */

export const SITE_CONFIG = {
  name: 'Green Valley Ranch Insider',
  url: 'https://greenvalleyranchinsider.com',
  description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community.',
} as const;

export const CONTACT_INFO = {
  name: 'Dr. Jan Duffy',
  primaryPhone: '(702) 500-1955',
  primaryPhoneLink: 'tel:+17025001955',
  marketingPhone: '(702) 222-1964',
  marketingPhoneLink: 'tel:+17022221964',
  email: 'DrDuffy@GreenValleyRanchInsider.com',
  emailLink: 'mailto:DrDuffy@GreenValleyRanchInsider.com',
  address: {
    street: '360 Mike Koizumi Way',
    city: 'Henderson',
    state: 'NV',
    zip: '89011',
    full: '360 Mike Koizumi Way, Henderson, NV 89011',
  },
  license: 'S.0197614.LLC',
  brokerage: 'Berkshire Hathaway HomeServices Nevada Properties',
} as const;

export const NEIGHBORHOODS = {
  greenValleyRanch: {
    name: 'Green Valley Ranch',
    slug: 'green-valley-ranch',
    zipCode: '89052',
  },
  mysticBay: {
    name: 'Mystic Bay',
    slug: 'mystic-bay',
    zipCode: '89052',
  },
  theCottages: {
    name: 'The Cottages',
    slug: 'the-cottages',
    zipCode: '89052',
  },
} as const;

export const PRIORITY_ZIP_CODES = ['89052'] as const;
export const PRIORITY_NEIGHBORHOODS = ['Mystic Bay', 'The Cottages', 'GVR Estates'] as const;

export const SOCIAL_LINKS = {
  googleBusiness: 'https://www.google.com/search?q=Dr.+Jan+Duffy+Berkshire+Hathaway+Henderson+NV+reviews',
  berkshireHathaway: 'https://www.berkshirehathawayhs.com/',
} as const;

export const GOOGLE_MAPS = {
  officeLocation: '360+Mike+Koizumi+Way,+Henderson,+NV+89011',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=360+Mike+Koizumi+Way,+Henderson,+NV+89011',
  searchUrl: 'https://www.google.com/maps/search/?api=1&query=360+Mike+Koizumi+Way,+Henderson,+NV+89011',
  embedUrl: 'https://www.google.com/maps?q=360+Mike+Koizumi+Way,+Henderson,+NV+89011&output=embed',
} as const;

export const COLORS = {
  primary: '#0F172A', // Deep Navy
  accent: '#C5A059', // Brushed Gold
  accentHover: '#B8914F',
  white: '#FFFFFF',
  slate: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const SCHOOLS = {
  vanderburg: 'Vanderburg Elementary',
  glenTaylor: 'Glen Taylor Elementary',
} as const;

export const LANDMARKS = {
  theDistrict: 'The District at Green Valley Ranch',
} as const;
