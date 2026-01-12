/**
 * Analytics utility functions
 * Add your analytics tracking code here (Google Analytics, etc.)
 */

export function trackEvent(eventName: string, eventData?: Record<string, any>) {
  // Google Analytics 4 example:
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventData);
  }

  // Add other analytics providers here
  console.log('Event tracked:', eventName, eventData);
}

export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}

export function trackFormSubmission(formName: string, formData?: Record<string, any>) {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
}

export function trackPhoneClick(phoneNumber: string) {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
  });
}

export function trackCTAClick(ctaText: string, location: string) {
  trackEvent('cta_click', {
    cta_text: ctaText,
    location: location,
  });
}
