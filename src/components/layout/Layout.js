import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import GlobalStyles from './GlobalStyles';
import Navigation from './Navigation';

export default function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Force scroll to top on every route change
    const handleRouteChange = () => {
      if (typeof window !== 'undefined') {
        // Multiple scroll methods for maximum compatibility
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Force scroll after a brief delay to ensure DOM is ready
        setTimeout(() => {
          window.scrollTo(0, 0);
          document.documentElement.scrollTop = 0;
          document.body.scrollTop = 0;
        }, 50);
      }
    };

    // Listen to route changes
    router.events.on('routeChangeComplete', handleRouteChange);
    
    // Also scroll to top when component mounts
    handleRouteChange();

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ParallaxProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <GlobalStyles />
      <Navigation />
      <div key={router.asPath}>
        {children}
      </div>
    </ParallaxProvider>
  );
} 