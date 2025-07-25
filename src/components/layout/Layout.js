import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import GlobalStyles from './GlobalStyles';

export default function Layout({ children }) {
  return (
    <ParallaxProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <GlobalStyles />
      {children}
    </ParallaxProvider>
  );
} 