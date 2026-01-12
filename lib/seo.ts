/**
 * SEO Utilities for Google Search Optimization
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Generate page-specific metadata
 */
export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = 'https://greenvalleyranchinsider.com/og-image.jpg',
  noindex = false,
  nofollow = false,
}: PageSEO) {
  const baseUrl = 'https://greenvalleyranchinsider.com';
  const fullTitle = title.includes('Green Valley Ranch Insider')
    ? title
    : `${title} | Green Valley Ranch Insider`;

  return {
    title: fullTitle,
    description,
    keywords: [
      ...keywords,
      'Green Valley Ranch',
      'Henderson NV real estate',
      'Dr. Jan Duffy',
      'Berkshire Hathaway HomeServices',
    ],
    alternates: {
      canonical: canonical || `${baseUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical || `${baseUrl}${typeof window !== 'undefined' ? window.location.pathname : ''}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

/**
 * Generate breadcrumb schema for a page
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQ schema
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema({
  headline,
  description,
  author = 'Dr. Jan Duffy',
  datePublished,
  dateModified,
  image,
  url,
}: {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Green Valley Ranch Insider',
      logo: {
        '@type': 'ImageObject',
        url: 'https://greenvalleyranchinsider.com/logo.png',
      },
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image: image || 'https://greenvalleyranchinsider.com/og-image.jpg',
    url,
  };
}
