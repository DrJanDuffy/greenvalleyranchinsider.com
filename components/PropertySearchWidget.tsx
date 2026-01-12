'use client';

import { useState } from 'react';
import { Search, MapPin, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export function PropertySearchWidget() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would search properties
    // For now, redirect to contact page
    window.location.href = '/contact';
  };

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Search className="w-6 h-6 text-[#C5A059]" />
        <h2 className="text-2xl font-bold">Find Your Dream Home</h2>
      </div>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="neighborhood" className="block text-sm font-medium mb-2 text-slate-300">
              Neighborhood
            </label>
            <select
              id="neighborhood"
              className="w-full px-4 py-2 rounded-lg bg-white text-[#0F172A] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <option value="">All Neighborhoods</option>
              <option value="mystic-bay">Mystic Bay</option>
              <option value="the-cottages">The Cottages</option>
              <option value="gvr-estates">GVR Estates</option>
              <option value="green-valley-estates">Green Valley Estates</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="price-range" className="block text-sm font-medium mb-2 text-slate-300">
              Price Range
            </label>
            <select
              id="price-range"
              className="w-full px-4 py-2 rounded-lg bg-white text-[#0F172A] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <option value="">Any Price</option>
              <option value="0-500k">$0 - $500,000</option>
              <option value="500k-750k">$500,000 - $750,000</option>
              <option value="750k-1m">$750,000 - $1,000,000</option>
              <option value="1m+">$1,000,000+</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="bedrooms" className="block text-sm font-medium mb-2 text-slate-300">
              Bedrooms
            </label>
            <select
              id="bedrooms"
              className="w-full px-4 py-2 rounded-lg bg-white text-[#0F172A] border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
            >
              <option value="">Any</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            type="submit"
            className="flex-1 bg-[#C5A059] text-[#0F172A] hover:bg-[#B8914F] font-semibold"
          >
            <Search className="w-4 h-4 mr-2" />
            Search Properties
          </Button>
          <Link
            href="/contact"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#C5A059] text-[#C5A059] rounded-lg font-semibold hover:bg-[#C5A059]/10 transition-colors"
          >
            <Home className="w-4 h-4" />
            Get Custom Search
          </Link>
        </div>
      </form>
      
      <div className="mt-6 pt-6 border-t border-slate-700">
        <p className="text-sm text-slate-400 text-center">
          Looking to sell?{' '}
          <Link href="/#valuation-form" className="text-[#C5A059] hover:underline font-semibold">
            Get your home valuation →
          </Link>
        </p>
      </div>
    </div>
  );
}
