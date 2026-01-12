import type { NextConfig } from 'next';
import { withBotId } from 'botid/next/config';
import { withWorkflow } from 'workflow/next';

const nextConfig: NextConfig = {
  serverExternalPackages: ['@slack/bolt'],
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // SEO: Generate static pages for better indexing
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'greenvalleyranchinsider.com',
      },
      {
        protocol: 'https',
        hostname: 'em.realscout.com',
      },
      {
        protocol: 'https',
        hostname: 'embed.homebotapp.com',
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Headers for SEO and Security
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          },
          // SEO Headers
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
        ],
      },
      // Allow Googlebot to crawl
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
  // Redirects for SEO (if needed)
  async redirects() {
    return [
      // Add any redirects here if needed
    ];
  },
};

export default withWorkflow(withBotId(nextConfig));
