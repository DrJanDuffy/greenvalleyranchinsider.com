/**
 * Enhanced Schema Markup for SEO and E-E-A-T
 */

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["RealEstateAgent", "LocalBusiness"],
  "@id": "https://www.greenvalleyranchinsider.com/#organization",
  "name": "Dr. Jan Duffy - Green Valley Ranch Real Estate Expert",
  "alternateName": "Green Valley Ranch Insider",
  "description": "Henderson NV real estate expert specializing in Green Valley Ranch, Mystic Bay, and The Cottages. 30+ years experience, $127M+ in sales.",
  "url": "https://www.greenvalleyranchinsider.com",
  "logo": "https://www.greenvalleyranchinsider.com/logo.png",
  "image": "https://www.greenvalleyranchinsider.com/dr-jan-duffy.jpg",
  "telephone": ["+1-702-500-1955", "+1-702-222-1964"],
  "email": "DrDuffy@GreenValleyRanchInsider.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "360 Mike Koizumi Way",
    "addressLocality": "Henderson",
    "addressRegion": "NV",
    "postalCode": "89011",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.0397,
    "longitude": -115.0632
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Henderson",
      "sameAs": "https://en.wikipedia.org/wiki/Henderson,_Nevada"
    },
    {
      "@type": "Neighborhood",
      "name": "Green Valley Ranch",
      "containedInPlace": {
        "@type": "City",
        "name": "Henderson"
      }
    },
    {
      "@type": "Neighborhood",
      "name": "Mystic Bay"
    },
    {
      "@type": "Neighborhood",
      "name": "The Cottages"
    }
  ],
  "priceRange": "$300,000 - $2,000,000",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.facebook.com/drjanduffy",
    "https://www.instagram.com/drjanduffy"
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "Real Estate License",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Nevada Real Estate Division"
    },
    "name": "Nevada Real Estate License #S.0197614.LLC"
  },
  "memberOf": {
    "@type": "Organization",
    "name": "Berkshire Hathaway HomeServices Nevada Properties",
    "url": "https://www.berkshirehathawayhs.com/"
  },
  "knowsAbout": [
    "Green Valley Ranch Real Estate",
    "Henderson NV Homes",
    "Mystic Bay Henderson",
    "The Cottages Henderson",
    "Las Vegas Luxury Real Estate",
    "55+ Communities Las Vegas"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dr. Jan Duffy",
  "honorificPrefix": "Dr.",
  "jobTitle": "Real Estate Agent",
  "description": "Las Vegas real estate expert with 30+ years experience and Ph.D. in Market Research & Consumer Behavior",
  "image": "https://www.greenvalleyranchinsider.com/dr-jan-duffy.jpg",
  "url": "https://www.greenvalleyranchinsider.com/about",
  "telephone": "+1-702-500-1955",
  "email": "DrDuffy@GreenValleyRanchInsider.com",
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "University"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Ph.D. in Market Research & Consumer Behavior"
    },
    {
      "@type": "EducationalOccupationalCredential", 
      "credentialCategory": "license",
      "name": "Nevada Real Estate License #S.0197614.LLC",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Nevada Real Estate Division"
      }
    }
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Berkshire Hathaway HomeServices Nevada Properties",
    "url": "https://www.berkshirehathawayhs.com/"
  },
  "sameAs": [
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.facebook.com/drjanduffy"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Green Valley Ranch Insider",
  "url": "https://www.greenvalleyranchinsider.com",
  "description": "Your insider guide to Green Valley Ranch real estate in Henderson, NV",
  "publisher": {
    "@id": "https://www.greenvalleyranchinsider.com/#organization"
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.greenvalleyranchinsider.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};
