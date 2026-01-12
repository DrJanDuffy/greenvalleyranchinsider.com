import Link from 'next/link';
import { Home, MapPin, Phone } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#C5A059] mb-4">404</h1>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-lg mb-8">
          <h3 className="text-2xl font-bold text-[#0F172A] mb-6">
            Let's Get You Back on Track
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Link
              href="/"
              className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-[#C5A059]/10 transition-colors"
              aria-label="Return to homepage"
            >
              <Home className="w-6 h-6 text-[#C5A059]" aria-hidden="true" />
              <span className="font-semibold text-[#0F172A]">Home</span>
            </Link>
            <Link
              href="/green-valley-ranch"
              className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-[#C5A059]/10 transition-colors"
              aria-label="Explore Green Valley Ranch communities"
            >
              <MapPin className="w-6 h-6 text-[#C5A059]" aria-hidden="true" />
              <span className="font-semibold text-[#0F172A]">Communities</span>
            </Link>
            <a
              href="tel:+17025001955"
              className="flex flex-col items-center gap-2 p-4 bg-slate-50 rounded-lg hover:bg-[#C5A059]/10 transition-colors"
              aria-label="Call Dr. Jan Duffy at (702) 500-1955"
            >
              <Phone className="w-6 h-6 text-[#C5A059]" aria-hidden="true" />
              <span className="font-semibold text-[#0F172A]">Call Us</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-[#C5A059] text-[#0F172A] rounded-lg hover:bg-[#B8914F] transition-colors shadow-lg"
          >
            Return to Homepage
          </Link>
          <div className="text-sm text-slate-500">
            <p>Or explore our communities:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/green-valley-ranch" className="text-[#C5A059] hover:underline">
                Green Valley Ranch
              </Link>
              <Link href="/mystic-bay" className="text-[#C5A059] hover:underline">
                Mystic Bay
              </Link>
              <Link href="/the-cottages" className="text-[#C5A059] hover:underline">
                The Cottages
              </Link>
              <Link href="/location" className="text-[#C5A059] hover:underline">
                Office Location
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
