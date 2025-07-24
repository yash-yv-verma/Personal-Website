import { ParallaxProvider } from 'react-scroll-parallax';
import Head from 'next/head';
import GlobalStyles from './GlobalStyles';

export default function Layout({ children }) {
  return (
    <ParallaxProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=no" />
      </Head>
      <GlobalStyles />
      {children}
    </ParallaxProvider>
  );
} 