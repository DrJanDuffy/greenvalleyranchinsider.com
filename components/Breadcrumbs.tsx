'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/seo';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Navigation Component with Schema Markup
 * Improves SEO and user navigation
 */
export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Generate breadcrumb schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://greenvalleyranchinsider.com' },
    ...items.map(item => ({
      name: item.name,
      url: `https://greenvalleyranchinsider.com${item.href}`,
    })),
  ]);

  return (
    <>
      {/* Breadcrumb Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Visual Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center space-x-2 text-sm ${className}`}
      >
        <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link
              href="/"
              className="flex items-center text-slate-500 hover:text-[#C5A059] transition-colors"
              itemProp="item"
            >
              <Home className="w-4 h-4 mr-1" />
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          
          {items.map((item, index) => (
            <li
              key={item.href}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              <ChevronRight className="w-4 h-4 text-slate-400 mx-2" />
              {index === items.length - 1 ? (
                <span
                  className="text-[#C5A059] font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-500 hover:text-[#C5A059] transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
