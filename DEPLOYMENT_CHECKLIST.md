# Deployment Checklist - Green Valley Ranch Insider

## Pre-Deployment Checklist

### ✅ Code Quality
- [x] All TypeScript errors resolved
- [x] All linting errors resolved
- [x] Build completes successfully
- [x] No console errors in development
- [x] All components properly typed

### ✅ SEO & Metadata
- [x] All pages have unique titles and descriptions
- [x] Canonical URLs set on all pages
- [x] Open Graph tags configured
- [x] Twitter Card tags configured
- [x] Structured data (JSON-LD) implemented
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Breadcrumb navigation on all pages

### ✅ Performance
- [x] Core Web Vitals tracking implemented
- [x] Image optimization enabled (AVIF, WebP)
- [x] Lazy loading for images
- [x] Code splitting configured
- [x] Font optimization (display: swap)
- [x] Resource hints (preconnect, dns-prefetch)
- [x] Compression enabled

### ✅ Accessibility
- [x] ARIA labels on interactive elements
- [x] Semantic HTML5 structure
- [x] Skip to content link
- [x] Keyboard navigation support
- [x] Screen reader friendly
- [x] Color contrast meets WCAG AA
- [x] Alt text for images (when added)

### ✅ Error Handling
- [x] Global error boundary (error.tsx)
- [x] 404 page (not-found.tsx)
- [x] Loading states (loading.tsx)
- [x] API error handling
- [x] Form validation errors

### ✅ Security
- [x] Bot protection (botid)
- [x] Security headers configured
- [x] External links use rel="noopener noreferrer"
- [x] Input validation on forms
- [x] XSS protection

### ✅ Mobile Optimization
- [x] Responsive design
- [x] Mobile navigation menu
- [x] Mobile sticky CTA
- [x] Touch-friendly buttons
- [x] Mobile viewport meta tag

## Environment Variables

Ensure these are set in Vercel:

### Required
- `AI_GATEWAY_API_KEY` - AI Gateway API key
- `EXA_API_KEY` - Exa AI API key for research

### Optional (but recommended)
- `NEXT_PUBLIC_GA_ID` - Google Analytics 4 Measurement ID
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` - Google Search Console verification code
- `NEXT_PUBLIC_SITE_URL` - Site URL (defaults to production URL)

### Slack Integration (Optional)
- `SLACK_BOT_TOKEN` - Slack bot token
- `SLACK_SIGNING_SECRET` - Slack signing secret
- `SLACK_CHANNEL_ID` - Slack channel ID for notifications

## Post-Deployment Tasks

### 1. Google Search Console
- [ ] Verify site ownership
- [ ] Submit sitemap: `https://greenvalleyranchinsider.com/sitemap.xml`
- [ ] Request indexing for key pages
- [ ] Monitor Core Web Vitals

### 2. Google Analytics
- [ ] Verify tracking is working
- [ ] Set up conversion goals
- [ ] Configure custom events
- [ ] Set up audience segments

### 3. Google Business Profile
- [ ] Claim/verify business profile
- [ ] Ensure NAP matches website exactly:
  - Name: Dr. Jan Duffy
  - Address: 360 Mike Koizumi Way, Henderson, NV 89011
  - Phone: (702) 500-1955
  - License: S.0197614.LLC
- [ ] Add website URL
- [ ] Upload photos
- [ ] Request reviews

### 4. Image Assets
- [ ] Create and upload `/og-image.jpg` (1200x630px)
- [ ] Create and upload `/logo.png`
- [ ] Create and upload `/dr-jan-duffy.jpg`
- [ ] Create and upload favicon files:
  - `/favicon.ico`
  - `/apple-touch-icon.png` (180x180px)
  - `/favicon-32x32.png`
  - `/favicon-16x16.png`

### 5. Testing
- [ ] Test all forms (lead form, valuation form)
- [ ] Test all navigation links
- [ ] Test mobile responsiveness
- [ ] Test RealScout widgets
- [ ] Test Homebot widget
- [ ] Test contact forms
- [ ] Test phone links (tel:)
- [ ] Test email links (mailto:)
- [ ] Test external links
- [ ] Test error pages (404, error boundary)
- [ ] Test loading states

### 6. Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals in Search Console
- [ ] Test page load speeds
- [ ] Test on slow 3G connection
- [ ] Test on various devices

### 7. SEO Verification
- [ ] Check structured data with Google Rich Results Test
- [ ] Verify sitemap is accessible
- [ ] Verify robots.txt is accessible
- [ ] Check canonical URLs
- [ ] Verify meta tags in page source
- [ ] Test breadcrumb schema

### 8. Content Review
- [ ] Review all page content for accuracy
- [ ] Check all contact information
- [ ] Verify all phone numbers
- [ ] Verify all email addresses
- [ ] Check all addresses
- [ ] Review testimonials
- [ ] Update market data if needed

## Monitoring

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Review Google Analytics traffic
- [ ] Check Core Web Vitals
- [ ] Review form submissions
- [ ] Check for broken links

### Monthly
- [ ] Update market insights
- [ ] Add new testimonials
- [ ] Update neighborhood data
- [ ] Review and update content
- [ ] Check backlinks
- [ ] Review SEO performance

## Support Contacts

- **Primary Phone**: (702) 500-1955
- **Marketing Phone**: (702) 222-1964
- **Email**: DrDuffy@GreenValleyRanchInsider.com
- **Office**: 360 Mike Koizumi Way, Henderson, NV 89011
- **License**: S.0197614.LLC

## Quick Links

- **Sitemap**: https://greenvalleyranchinsider.com/sitemap.xml
- **Robots.txt**: https://greenvalleyranchinsider.com/robots.txt
- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **Rich Results Test**: https://search.google.com/test/rich-results

## Notes

- Site is built with Next.js 16.0.10
- Deployed on Vercel
- Uses RealScout widgets for property search and valuations
- Uses Homebot for home valuations
- AI-powered lead qualification workflow
- Slack integration for human-in-the-loop approval
