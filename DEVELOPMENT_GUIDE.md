# Development Guide - Green Valley Ranch Insider

## Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DrJanDuffy/greenvalleyranchinsider.com.git
cd greenvalleyranchinsider.com

# Install dependencies
pnpm install

# Copy environment variables template
cp .env.example .env.local

# Start development server
pnpm dev
```

Visit `http://localhost:3000` to see the site.

## Development Workflow

### Running the Development Server

```bash
pnpm dev
```

The site will be available at `http://localhost:3000` with hot-reload enabled.

### Building for Production

```bash
pnpm build
```

This creates an optimized production build in the `.next` directory.

### Running Production Build Locally

```bash
pnpm build
pnpm start
```

### Type Checking

```bash
pnpm type-check
# Or use your IDE's TypeScript integration
```

### Linting

```bash
pnpm lint
# Or use your IDE's ESLint integration
```

## Project Structure

```
greenvalleyranchinsider.com/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── [route]/          # Page routes
│   └── api/              # API routes
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── [components]/     # Feature components
├── lib/                  # Utilities
│   ├── constants.ts      # Site constants
│   ├── logger.ts         # Logging utility
│   ├── analytics.ts      # Analytics functions
│   ├── performance.ts    # Performance utilities
│   ├── schema.ts         # Schema markup
│   ├── seo.ts            # SEO utilities
│   ├── services.ts       # AI services
│   └── types.ts          # TypeScript types
├── workflows/            # Workflow definitions
└── public/              # Static assets
```

## Code Style

### TypeScript
- Use strict mode
- Prefer explicit types over `any`
- Use interfaces for object shapes
- Use types for unions and intersections

### React Components
- Use functional components with hooks
- Prefer named exports
- Keep components focused and small (< 200 lines)
- Use TypeScript for props

### File Naming
- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Pages: `page.tsx` (Next.js convention)
- Types: `types.ts` or inline

### Styling
- Use Tailwind CSS utility classes
- Use CSS variables for colors (defined in `globals.css`)
- Mobile-first responsive design
- Use semantic HTML

## Adding New Pages

1. Create a new file in `app/[route]/page.tsx`
2. Export metadata:
```typescript
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};
```
3. Add breadcrumbs if needed
4. Add to sitemap (automatic with Next.js)
5. Add navigation link if needed

## Adding New Components

1. Create component in `components/` directory
2. Use TypeScript for props
3. Add proper accessibility attributes
4. Use Tailwind for styling
5. Export as named export

## Environment Variables

### Development
Create `.env.local` file:

```env
# AI Gateway
AI_GATEWAY_API_KEY=your_key_here

# Exa AI
EXA_API_KEY=your_key_here

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Google Verification (optional)
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_code_here

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production
Set in Vercel dashboard under Settings → Environment Variables.

## Common Tasks

### Adding a New Real Estate Widget

1. Create component in `components/`
2. Import RealScout script (already in layout)
3. Use web component: `<realscout-widget-name />`
4. Add to page where needed

### Updating Contact Information

1. Update `lib/constants.ts` (single source of truth)
2. Components will automatically use updated values
3. Update schema markup in `lib/schema.ts` if needed

### Adding Analytics Events

Use the analytics utility:

```typescript
import { trackEvent } from '@/lib/analytics';

trackEvent('button_click', {
  button_name: 'Get Valuation',
  location: 'homepage',
});
```

### Logging

Use the logger utility:

```typescript
import { logError, logInfo } from '@/lib/logger';

logError('Failed to fetch data', error, 'API');
logInfo('User action', { action: 'click' }, 'Component');
```

## Testing

### Manual Testing Checklist
- [ ] All pages load correctly
- [ ] Forms submit successfully
- [ ] RealScout widgets render
- [ ] Mobile navigation works
- [ ] All links work
- [ ] Error pages display correctly
- [ ] Loading states show properly

### Browser Testing
Test in:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Performance Testing
- Run Lighthouse audit
- Check Core Web Vitals
- Test on slow 3G connection
- Test on various devices

## Debugging

### Common Issues

**Build Errors**
- Check TypeScript errors: `pnpm type-check`
- Check for missing imports
- Verify all environment variables are set

**Widgets Not Loading**
- Check browser console for errors
- Verify RealScout script is loaded
- Check network tab for failed requests

**Styling Issues**
- Check Tailwind classes are correct
- Verify CSS variables are defined
- Check for conflicting styles

### Debug Tools
- React DevTools
- Next.js DevTools
- Browser DevTools
- Network tab for API calls

## Git Workflow

### Branch Naming
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation
- `refactor/description` - Code refactoring

### Commit Messages
Use conventional commits:
- `feat: Add new component`
- `fix: Fix navigation bug`
- `docs: Update README`
- `refactor: Improve code organization`

## Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs)

### Tools
- [RealScout Widgets](https://docs.realscout.com)
- [Homebot Integration](https://homebotapp.com)
- [Vercel Deployment](https://vercel.com/docs)

## Getting Help

1. Check documentation files:
   - `README.md`
   - `GOOGLE_SEO_SETUP.md`
   - `DEPLOYMENT_CHECKLIST.md`
   - `PROJECT_SUMMARY.md`

2. Check code comments
3. Review similar components
4. Check GitHub issues

## Best Practices

1. **Always use TypeScript** - No `any` types
2. **Keep components small** - Extract logic to hooks/utilities
3. **Use constants** - Don't hardcode values
4. **Add accessibility** - ARIA labels, semantic HTML
5. **Test before committing** - Run build and type-check
6. **Write clear commits** - Descriptive commit messages
7. **Update documentation** - Keep docs in sync with code

---

Happy coding! 🚀
