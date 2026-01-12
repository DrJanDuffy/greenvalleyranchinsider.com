import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Green Valley Ranch Insider | Henderson NV Real Estate Authority',
    short_name: 'GVR Insider',
    description: 'Expert insights and premium listing services for Mystic Bay, The Cottages, and the Green Valley Ranch community. Get your custom insider valuation today.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0F172A',
    theme_color: '#C5A059',
    orientation: 'portrait-primary',
    categories: ['real estate', 'business', 'lifestyle'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
    screenshots: [
      {
        src: '/screenshot-wide.jpg',
        sizes: '1280x720',
        type: 'image/jpeg',
        form_factor: 'wide',
      },
      {
        src: '/screenshot-narrow.jpg',
        sizes: '750x1334',
        type: 'image/jpeg',
        form_factor: 'narrow',
      },
    ],
  };
}
