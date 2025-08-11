import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function useScrollToTop() {
  const router = useRouter();

  // Function to scroll to top with CSS override
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      console.log('Attempting to scroll to top...');
      
      // Temporarily override CSS scroll behavior
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Force scroll to top
      window.scrollTo(0, 0);
      
      // Also try scrolling the document element directly
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      
      // Also try scrolling the body
      if (document.body) {
        document.body.scrollTop = 0;
      }
      
      // Restore original scroll behavior after a short delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }, 100);
      
      console.log('Scroll to top completed');
    }
  };

  useEffect(() => {
    // Handle route changes
    const handleRouteChangeStart = () => {
      console.log('Route change starting - scrolling to top');
      scrollToTop();
    };

    const handleRouteChangeComplete = () => {
      console.log('Route change complete - ensuring scroll to top');
      // Add a small delay to ensure the page has rendered
      setTimeout(scrollToTop, 50);
    };

    // Listen for route changes
    if (router.events) {
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
    }

    // Backup: Listen for window focus events (when user returns to tab)
    const handleWindowFocus = () => {
      console.log('Window focused - checking scroll position');
      if (window.pageYOffset > 0) {
        scrollToTop();
      }
    };

    // Backup: Listen for visibility change events
    const handleVisibilityChange = () => {
      if (!document.hidden && window.pageYOffset > 0) {
        console.log('Page became visible - scrolling to top');
        scrollToTop();
      }
    };

    window.addEventListener('focus', handleWindowFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      if (router.events) {
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      }
      window.removeEventListener('focus', handleWindowFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [router.events]);

  // Handle initial page load
  useEffect(() => {
    console.log('Component mounted - scrolling to top');
    scrollToTop();
  }, []);

  // Also handle when the component unmounts/remounts
  useEffect(() => {
    return () => {
      // Cleanup function - scroll to top when component unmounts
      scrollToTop();
    };
  }, []);
}
