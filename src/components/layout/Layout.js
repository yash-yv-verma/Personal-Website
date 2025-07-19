import { ParallaxProvider } from 'react-scroll-parallax';
import GlobalStyles from './GlobalStyles';

export default function Layout({ children }) {
  return (
    <ParallaxProvider>
      <GlobalStyles />
      {children}
    </ParallaxProvider>
  );
} 