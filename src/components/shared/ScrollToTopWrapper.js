import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTopWrapper({ children }) {
  const router = useRouter();

  useEffect(() => {
    const scrollToTop = () => {
      if (typeof window !== 'undefined') {
        // Force scroll to top with multiple methods
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Also try to scroll the main element if it exists
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.scrollTop = 0;
        }
      }
    };

    const handleRouteChangeStart = () => {
      // Scroll immediately when navigation starts
      scrollToTop();
    };

    const handleRouteChangeComplete = () => {
      // Scroll again when route completes (with a small delay to ensure DOM is ready)
      setTimeout(scrollToTop, 0);
      setTimeout(scrollToTop, 100);
    };

    // Listen to all relevant route events
    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    router.events.on('beforeHistoryChange', scrollToTop);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
      router.events.off('beforeHistoryChange', scrollToTop);
    };
  }, [router.events]);

  return children;
}
