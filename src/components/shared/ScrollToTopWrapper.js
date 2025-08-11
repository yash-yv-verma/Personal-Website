import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTopWrapper({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isMobile = () => typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const scrollAllTheWayUp = () => {
      // Multiple strategies to ensure absolute top
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      const root = document.getElementById('__next');
      if (root && root.scrollIntoView) {
        root.scrollIntoView({ block: 'start' });
      }
      // Final direct call without smooth
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    const handleScrollToTop = () => {
      if (typeof window === 'undefined') return;

      // Override smooth temporarily to avoid interference
      document.documentElement.classList.add('scroll-to-top');

      // Immediate attempts
      scrollAllTheWayUp();
      requestAnimationFrame(scrollAllTheWayUp);
      setTimeout(scrollAllTheWayUp, 100);
      setTimeout(scrollAllTheWayUp, 300);

      // Extra attempts for mobile to cope with address bar/viewport changes
      if (isMobile()) {
        setTimeout(scrollAllTheWayUp, 600);
        setTimeout(scrollAllTheWayUp, 1000);

        // One-off resize and visualViewport listeners right after navigation
        let didAdjust = false;
        const onResize = () => {
          if (didAdjust) return;
          didAdjust = true;
          scrollAllTheWayUp();
        };
        window.addEventListener('resize', onResize, { passive: true });

        const vv = window.visualViewport;
        let vvHandler;
        if (vv) {
          vvHandler = () => {
            if (didAdjust) return;
            didAdjust = true;
            scrollAllTheWayUp();
          };
          vv.addEventListener('resize', vvHandler, { passive: true });
        }

        // Cleanup listeners after a short window
        setTimeout(() => {
          window.removeEventListener('resize', onResize);
          if (vv && vvHandler) vv.removeEventListener('resize', vvHandler);
        }, 1500);
      }

      // Remove class after done
      setTimeout(() => {
        document.documentElement.classList.remove('scroll-to-top');
      }, 1600);
    };

    const handleRouteChangeComplete = () => {
      // Small delay to ensure new content is in DOM
      setTimeout(handleScrollToTop, 50);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Initial load
    handleScrollToTop();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return children;
}
