// Google Analytics 4 Configuration
export const GA4_MEASUREMENT_ID = "G-XXXXXXXXXX"; // Replace with your GA4 Measurement ID

// Initialize GA4
export const initGA4 = () => {
  if (typeof window === 'undefined') return;

  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;
  
  gtag('js', new Date());
  gtag('config', GA4_MEASUREMENT_ID);
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA4_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, params);
  }
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string) => {
  trackEvent('cta_click', {
    cta_name: ctaName,
    location: location,
  });
};

// Track scroll depth
export const setupScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const scrollDepths = [25, 50, 75, 90];
  const tracked: number[] = [];

  const handleScroll = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    scrollDepths.forEach(depth => {
      if (scrollPercentage >= depth && !tracked.includes(depth)) {
        tracked.push(depth);
        trackEvent('scroll_depth', {
          scroll_depth: depth,
        });
      }
    });
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
};