import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Green Valley Ranch Insider | Henderson NV Real Estate',
    short_name: 'GVR Insider',
    description: 'Expert real estate services for Green Valley Ranch, Mystic Bay, and The Cottages in Henderson, Nevada',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#C5A059',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
