'use client';

import { useEffect, useState } from 'react';
import { TrendingUp, Home } from 'lucide-react';

interface MarketStatProps {
  stat?: string;
  description?: string;
  lastUpdated?: string;
  address?: string;
  salePrice?: string;
  neighborhood?: string;
}

export function MarketStat({ 
  stat, 
  description, 
  lastUpdated,
  address,
  salePrice,
  neighborhood 
}: MarketStatProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // If specific sale data provided, show that instead
  if (address && salePrice) {
    return (
      <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-6`}>
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg px-4 py-3 inline-block backdrop-blur-sm">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Home className="w-5 h-5 text-amber-400" />
            <span className="text-amber-400 font-bold text-lg">{address}</span>
            <span className="text-slate-200 ml-2">just sold for</span>
            <span className="text-amber-400 font-bold text-lg">{salePrice}</span>
            {neighborhood && (
              <span className="text-slate-400 text-sm ml-2">• {neighborhood}</span>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Default stat display
  return (
    <div className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} mb-6`}>
      <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 rounded-lg px-4 py-3 inline-block backdrop-blur-sm">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <TrendingUp className="w-5 h-5 text-amber-400" />
          {stat && <span className="text-amber-400 font-bold text-lg">{stat}</span>}
          {description && <span className="text-slate-200 ml-2">{description}</span>}
          {lastUpdated && <span className="text-slate-400 text-sm ml-2">• Updated {lastUpdated}</span>}
        </div>
      </div>
    </div>
  );
}
