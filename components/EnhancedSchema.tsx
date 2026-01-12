import { localBusinessSchema, personSchema, websiteSchema } from '@/lib/schema';

/**
 * Enhanced Schema Markup Component
 * Adds comprehensive E-E-A-T signals including Person, LocalBusiness, and WebSite schemas
 */
export function EnhancedSchema() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}
