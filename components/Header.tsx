'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, X, Phone, MapPin } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Green Valley Ranch', href: '/green-valley-ranch' },
    { name: 'Services', href: '/services' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about#why-choose' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-700 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="Green Valley Ranch Insider - Home">
            <Home className="w-6 h-6 text-[#C5A059] group-hover:text-[#B8914F] transition-colors" aria-hidden="true" />
            <span className="text-xl font-bold text-white group-hover:text-[#C5A059] transition-colors">
              Green Valley Ranch Insider
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6" role="list">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#C5A059] border-b-2 border-[#C5A059]'
                    : 'text-slate-300 hover:text-[#C5A059]'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
                role="listitem"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+17025001955"
              className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors text-sm"
              aria-label="Call Dr. Jan Duffy at (702) 500-1955"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>(702) 500-1955</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-[#C5A059] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden pb-4 border-t border-slate-700"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                      ? 'bg-[#C5A059]/20 text-[#C5A059]'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-[#C5A059]'
                  }`}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+17025001955"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#C5A059] text-[#0F172A] rounded-lg font-semibold hover:bg-[#B8914F] transition-colors"
                role="menuitem"
                aria-label="Call Dr. Jan Duffy at (702) 500-1955"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call (702) 500-1955</span>
              </a>
              <a
                href="/location"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
                role="menuitem"
                aria-label="Visit office location"
              >
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>Visit Office</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
