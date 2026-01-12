# Green Valley Ranch Insider

A high-conversion real estate authority site for Henderson, NV, specializing in Green Valley Ranch, Mystic Bay, and The Cottages communities.

## Features

- **Real Estate Authority Site**: Comprehensive neighborhood guides and market insights
- **RealScout Integration**: Home value widget, property search, and office listings
- **AI-Powered Lead Qualification**: Automated lead research and qualification workflow
- **Slack Integration**: Human-in-the-loop approval for lead responses
- **SEO Optimized**: Structured data, sitemap, robots.txt, and Open Graph metadata
- **Performance Optimized**: Next.js 16 with Turbopack, image optimization, and compression
- **Analytics Ready**: Google Analytics integration support

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui, Radix UI
- **AI/ML**: AI SDK, Workflow DevKit, Exa.ai
- **Real Estate Widgets**: RealScout web components
- **Analytics**: Google Analytics 4 (optional)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Environment variables (see `.env.example`)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## Environment Variables

Required environment variables:

```env
# AI Gateway
AI_GATEWAY_API_KEY=your_key_here

# Slack Integration
SLACK_BOT_TOKEN=your_token_here
SLACK_SIGNING_SECRET=your_secret_here
SLACK_CHANNEL_ID=your_channel_id_here

# Exa AI (for web research)
EXA_API_KEY=your_key_here

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Verification (optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code

# Site URL (for API routes)
NEXT_PUBLIC_SITE_URL=https://greenvalleyranchinsider.com
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout with metadata
│   ├── green-valley-ranch/ # GVR guide page
│   ├── mystic-bay/        # Mystic Bay neighborhood page
│   ├── the-cottages/      # The Cottages neighborhood page
│   ├── contact/           # Contact page
│   ├── location/          # Office location page
│   ├── faq/               # FAQ page
│   └── api/               # API routes
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── RealScoutWidget.tsx # Home value widget
│   └── ...
├── lib/                   # Utilities and services
│   ├── services.ts        # AI agents and tools
│   ├── types.ts          # TypeScript types
│   └── analytics.ts      # Analytics utilities
└── workflows/            # Workflow definitions
    └── inbound/         # Lead qualification workflow
```

## Key Features

### Lead Qualification Workflow

1. User submits valuation form
2. Workflow triggers research agent
3. AI researches property and market data
4. Lead is qualified (HIGH_PRIORITY_SELLER for Mystic Bay/89052)
5. Personalized email is generated
6. Human approval via Slack
7. Email sent to lead

### RealScout Widgets

- **Home Value Widget**: Instant property valuations
- **Simple Search**: Property search by neighborhood/city/school
- **Office Listings**: Featured listings with filters

### SEO & Performance

- Structured data (JSON-LD) for LocalBusiness and RealEstateAgent
- Dynamic sitemap generation
- Optimized images (AVIF, WebP)
- Security headers
- Compression enabled

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

Private - All rights reserved.

## Contact

**Dr. Jan Duffy**  
License #S.0197614.LLC  
Berkshire Hathaway HomeServices Nevada Properties

- Phone: (702) 500-1955
- Email: DrDuffy@GreenValleyRanchInsider.com
- Office: 360 Mike Koizumi Way, Henderson, NV 89011
