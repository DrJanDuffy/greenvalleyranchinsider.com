# Quick Reference Guide - Green Valley Ranch Insider

## 🚀 Quick Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm type-check       # Check TypeScript types
pnpm lint             # Run linter
```

## 📁 File Locations

### Pages
- Homepage: `app/page.tsx`
- About: `app/about/page.tsx`
- Contact: `app/contact/page.tsx`
- Services: `app/services/page.tsx`
- Location: `app/location/page.tsx`

### Components
- Header: `components/Header.tsx`
- Footer: `components/Footer.tsx`
- Breadcrumbs: `components/Breadcrumbs.tsx`
- Mobile CTA: `components/MobileStickyCTA.tsx`

### Utilities
- Constants: `lib/constants.ts`
- Logger: `lib/logger.ts`
- Analytics: `lib/analytics.ts`
- SEO: `lib/seo.ts`
- Schema: `lib/schema.ts`

### Configuration
- Next.js: `next.config.ts`
- TypeScript: `tsconfig.json`
- Tailwind: `tailwind.config.ts`

## 📞 Contact Information

```typescript
import { CONTACT_INFO } from '@/lib/constants';

// Access contact info
CONTACT_INFO.primaryPhone        // "(702) 500-1955"
CONTACT_INFO.primaryPhoneLink    // "tel:+17025001955"
CONTACT_INFO.email               // "DrDuffy@GreenValleyRanchInsider.com"
CONTACT_INFO.address.full        // "360 Mike Koizumi Way, Henderson, NV 89011"
```

## 🎨 Colors

```typescript
import { COLORS } from '@/lib/constants';

// Use in components
COLORS.primary        // "#0F172A" (Deep Navy)
COLORS.accent         // "#C5A059" (Brushed Gold)
COLORS.accentHover    // "#B8914F"
```

## 📝 Common Patterns

### Adding a New Page

```typescript
// app/new-page/page.tsx
import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

export default function NewPage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: 'New Page', href: '/new-page' }]} />
      {/* Page content */}
    </main>
  );
}
```

### Using Analytics

```typescript
import { trackEvent, trackCTAClick } from '@/lib/analytics';

// Track button click
trackCTAClick('Get Valuation', 'homepage');

// Track custom event
trackEvent('custom_event', { key: 'value' });
```

### Using Logger

```typescript
import { logError, logInfo } from '@/lib/logger';

// Log error
logError('Failed to fetch data', error, 'API');

// Log info
logInfo('User action', { action: 'click' }, 'Component');
```

### Adding RealScout Widget

```typescript
// Component already loaded in layout.tsx
// Just use the web component:

<realscout-home-value 
  agent-id="your-agent-id"
  office-id="your-office-id"
/>
```

### Adding Schema Markup

```typescript
// Add to page or component
import Script from 'next/script';

<Script
  id="schema-markup"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "YourType",
      // ... schema data
    })
  }}
/>
```

## 🔧 Environment Variables

```env
# Required
AI_GATEWAY_API_KEY=your_key
EXA_API_KEY=your_key

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_VERIFICATION=code
NEXT_PUBLIC_SITE_URL=https://greenvalleyranchinsider.com
```

## 📊 SEO Checklist

- [ ] Unique title and description
- [ ] Canonical URL set
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Breadcrumbs added
- [ ] Schema markup (if needed)
- [ ] Alt text on images
- [ ] Proper heading hierarchy

## 🎯 Component Patterns

### Button with Phone Link

```typescript
<a
  href="tel:+17025001955"
  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
  aria-label="Call Dr. Jan Duffy at (702) 500-1955"
>
  <Phone className="w-5 h-5" aria-hidden="true" />
  Call (702) 500-1955
</a>
```

### Section with Background

```typescript
<section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
  <div className="max-w-6xl mx-auto">
    {/* Content */}
  </div>
</section>
```

### Card Component

```typescript
<div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
  <h3 className="text-2xl font-bold text-[#0F172A] mb-4">Title</h3>
  <p className="text-slate-600">Content</p>
</div>
```

## 🔗 Important URLs

- **Site**: https://greenvalleyranchinsider.com
- **Sitemap**: https://greenvalleyranchinsider.com/sitemap.xml
- **Robots**: https://greenvalleyranchinsider.com/robots.txt
- **Search Console**: https://search.google.com/search-console
- **Analytics**: https://analytics.google.com

## 📱 Breakpoints

```typescript
// Tailwind breakpoints
sm: 640px   // @media (min-width: 640px)
md: 768px   // @media (min-width: 768px)
lg: 1024px  // @media (min-width: 1024px)
xl: 1280px  // @media (min-width: 1280px)
2xl: 1536px // @media (min-width: 1536px)
```

## 🛠️ Common Utilities

### Format Phone Number

```typescript
// Use constants for phone numbers
import { CONTACT_INFO } from '@/lib/constants';
CONTACT_INFO.primaryPhone // Already formatted
```

### Generate Page Metadata

```typescript
import { generatePageMetadata } from '@/lib/seo';

export const metadata = generatePageMetadata({
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  canonical: 'https://greenvalleyranchinsider.com/page',
});
```

### Track Form Submission

```typescript
import { trackFormSubmission } from '@/lib/analytics';

trackFormSubmission('valuation_form', {
  source: 'homepage',
});
```

## 🐛 Debugging Tips

1. **Check browser console** for errors
2. **Check Network tab** for failed requests
3. **Use React DevTools** for component inspection
4. **Check Next.js terminal** for build errors
5. **Verify environment variables** are set
6. **Check TypeScript errors** with `pnpm type-check`

## 📚 Documentation Files

- `README.md` - Project overview
- `DEVELOPMENT_GUIDE.md` - Development workflow
- `GOOGLE_SEO_SETUP.md` - SEO setup
- `DEPLOYMENT_CHECKLIST.md` - Deployment steps
- `PROJECT_SUMMARY.md` - Project overview
- `QUICK_REFERENCE.md` - This file

## ⚡ Performance Tips

1. Use `next/image` for images
2. Lazy load below-fold content
3. Use `loading="lazy"` for images
4. Optimize fonts with `display: swap`
5. Use resource hints (preconnect, dns-prefetch)
6. Code split large components

## 🔒 Security Best Practices

1. Never commit `.env.local`
2. Use environment variables for secrets
3. Validate all user input
4. Use `rel="noopener noreferrer"` for external links
5. Sanitize user-generated content
6. Use HTTPS in production

## 🎨 Styling Guidelines

1. Use Tailwind utility classes
2. Mobile-first responsive design
3. Use semantic HTML
4. Maintain color consistency
5. Use spacing scale (p-4, p-6, p-8, etc.)
6. Follow BEM-like naming for custom classes

---

**Need more help?** Check the full documentation files or review similar components in the codebase.
