import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTopWrapper({ children }) {
  const router = useRouter();
  const guardUntilRef = useRef(0);

  useEffect(() => {
    const isMobile = () => typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const scrollAllTheWayUp = () => {
      window.scrollTo(0, 0);
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      const root = document.getElementById('__next');
      if (root && root.scrollIntoView) root.scrollIntoView({ block: 'start' });
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    const handleScrollToTop = () => {
      if (typeof window === 'undefined') return;

      // Only act within a short guard window to avoid fighting user scroll
      const now = Date.now();
      if (now > guardUntilRef.current) return;

      document.documentElement.classList.add('scroll-to-top');

      // Immediate attempts within short window
      scrollAllTheWayUp();
      requestAnimationFrame(scrollAllTheWayUp);
      setTimeout(scrollAllTheWayUp, 120);

      // Light extra attempt on mobile only
      if (isMobile()) {
        setTimeout(() => {
          if (Date.now() <= guardUntilRef.current) scrollAllTheWayUp();
        }, 260);
      }

      // Remove override after window ends
      setTimeout(() => {
        document.documentElement.classList.remove('scroll-to-top');
      }, Math.max(0, guardUntilRef.current - now));
    };

    const handleRouteChangeComplete = () => {
      // Open a short window where we try to reach absolute top, then stop
      guardUntilRef.current = Date.now() + (isMobile() ? 320 : 220);
      setTimeout(handleScrollToTop, 40);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Initial load
    guardUntilRef.current = Date.now() + (isMobile() ? 320 : 220);
    handleScrollToTop();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return children;
}
