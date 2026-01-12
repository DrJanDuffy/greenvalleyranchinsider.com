'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbStructuredData } from './BreadcrumbStructuredData';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <>
      <BreadcrumbStructuredData items={items} />
      <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center hover:text-[#C5A059] transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        
        return (
          <div key={index} className="flex items-center space-x-2">
            <ChevronRight className="w-4 h-4 text-slate-400" />
            {isLast || !item.href ? (
              <span className={isLast ? 'text-[#C5A059] font-semibold' : 'text-slate-600'}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-[#C5A059] transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        );
      })}
      </nav>
    </>
  );
}
