'use client';

import { useState } from 'react';
import { Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, this would send to your email service
      // For now, we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setIsSuccess(true);
      toast.success('Thank you for subscribing!');
      setEmail('');
      
      // Track newsletter signup
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'newsletter_signup', {
          event_category: 'engagement',
          event_label: 'newsletter',
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0F172A] to-slate-900 rounded-xl p-8 text-white border border-slate-700">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-[#C5A059] rounded-lg flex items-center justify-center">
          <Mail className="w-6 h-6 text-[#0F172A]" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Stay Updated</h3>
          <p className="text-slate-300 text-sm">Get Green Valley Ranch market insights</p>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 bg-white text-[#0F172A] border-0"
            disabled={isSubmitting || isSuccess}
          />
          <Button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className="bg-[#C5A059] text-[#0F172A] hover:bg-[#B8914F] font-semibold whitespace-nowrap"
          >
            {isSuccess ? (
              <>
                <Check className="w-4 h-4 mr-2" />
                Subscribed!
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </div>
        <p className="text-xs text-slate-400 mt-3">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  );
}
