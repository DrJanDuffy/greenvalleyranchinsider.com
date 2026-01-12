type StructuredDataProps = {
  type: 'RealEstateAgent' | 'LocalBusiness' | 'WebSite';
  data?: Record<string, any>;
};

export function StructuredData({ type, data }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  const realEstateAgentData = {
    ...baseData,
    '@type': 'RealEstateAgent',
    name: 'Dr. Jan Duffy',
    jobTitle: 'Real Estate Agent',
    email: 'DrDuffy@GreenValleyRanchInsider.com',
    telephone: ['+17025001955', '+17022221964'],
    url: 'https://greenvalleyranchinsider.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '360 Mike Koizumi Way',
      addressLocality: 'Henderson',
      addressRegion: 'NV',
      postalCode: '89011',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.0395',
      longitude: '-115.0442',
    },
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Berkshire Hathaway HomeServices Nevada Properties',
      '@id': 'https://www.berkshirehathawayhs.com/',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Henderson',
        addressRegion: 'NV',
      },
      {
        '@type': 'City',
        name: 'Las Vegas',
        addressRegion: 'NV',
      },
    ],
    knowsAbout: [
      'Green Valley Ranch',
      'Mystic Bay',
      'The Cottages',
      'GVR Estates',
      'Henderson Real Estate',
      'Home Valuation',
      'Property Sales',
    ],
  };

  const localBusinessData = {
    ...baseData,
    '@type': 'LocalBusiness',
    name: 'Green Valley Ranch Insider',
    image: 'https://greenvalleyranchinsider.com/og-image.jpg',
    '@id': 'https://greenvalleyranchinsider.com/#organization',
    url: 'https://greenvalleyranchinsider.com',
    telephone: '+17025001955',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '360 Mike Koizumi Way',
      addressLocality: 'Henderson',
      addressRegion: 'NV',
      postalCode: '89011',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.0395',
      longitude: '-115.0442',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '16:00',
      },
    ],
  };

  const webSiteData = {
    ...baseData,
    '@type': 'WebSite',
    name: 'Green Valley Ranch Insider',
    url: 'https://greenvalleyranchinsider.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://greenvalleyranchinsider.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  let schemaData;
  switch (type) {
    case 'RealEstateAgent':
      schemaData = { ...realEstateAgentData, ...data };
      break;
    case 'LocalBusiness':
      schemaData = { ...localBusinessData, ...data };
      break;
    case 'WebSite':
      schemaData = { ...webSiteData, ...data };
      break;
    default:
      schemaData = { ...baseData, ...data };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
}
