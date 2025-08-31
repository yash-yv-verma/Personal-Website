import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function ScrollToTopWrapper({ children }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      // Simple scroll to top on route changes
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return children;
}
