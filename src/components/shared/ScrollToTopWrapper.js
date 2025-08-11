import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTopWrapper({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleScrollToTop = () => {
      // Force scroll to top
      if (typeof window !== 'undefined') {
        const beforeScroll = window.pageYOffset;
        console.log('Scrolling to top... Current position:', beforeScroll);
        
        // Add CSS class to override smooth scrolling
        document.documentElement.classList.add('scroll-to-top');
        
        // Function to perform scroll
        const performScroll = () => {
          // Method 1: Direct scroll
          window.scrollTo(0, 0);
          
          // Method 2: Scroll document element
          if (document.documentElement) {
            document.documentElement.scrollTop = 0;
          }
          
          // Method 3: Scroll body
          if (document.body) {
            document.body.scrollTop = 0;
          }
          
          // Method 4: Use scrollIntoView on body
          if (document.body) {
            document.body.scrollIntoView({ top: 0, behavior: 'instant' });
          }
        };

        // First attempt - immediate
        performScroll();
        
        // Second attempt - after DOM is ready
        requestAnimationFrame(() => {
          performScroll();
        });
        
        // Third attempt - after a short delay
        setTimeout(() => {
          performScroll();
        }, 100);
        
        // Fourth attempt - after page is fully loaded
        setTimeout(() => {
          performScroll();
        }, 300);
        
        // Check if scroll worked and retry if needed
        setTimeout(() => {
          const afterScroll = window.pageYOffset;
          console.log('Scroll to top completed. New position:', afterScroll);
          if (afterScroll > 0) {
            console.warn('Scroll to top may not have worked completely. Trying again...');
            performScroll();
          }
        }, 50);
        
        // Remove the CSS class after scrolling
        setTimeout(() => {
          document.documentElement.classList.remove('scroll-to-top');
        }, 400);
      }
    };

    // Only handle route change complete (new page loaded)
    const handleRouteChangeComplete = () => {
      console.log('Route change complete - scrolling to top on new page');
      // Small delay to ensure the new page content is rendered
      setTimeout(handleScrollToTop, 50);
    };

    // Listen only for route change complete (not start)
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Also handle initial page load
    handleScrollToTop();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return children;
}
