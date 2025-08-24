import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import MobileTouchArea from '../components/shared/MobileTouchArea';
import ScrollToTopWrapper from '../components/shared/ScrollToTopWrapper';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Disable scroll restoration
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top on every route change
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        // Aggressive scroll reset
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Force scroll after DOM updates
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        });
      }
    };

    // Listen to all route events
    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('beforeHistoryChange', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('beforeHistoryChange', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ScrollToTopWrapper>
      <Layout>
        <Component {...pageProps} />
        <MobileTouchArea />
      </Layout>
    </ScrollToTopWrapper>
  );
} 