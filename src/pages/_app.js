import Layout from '../components/layout/Layout';
import ScrollToTop from '../components/shared/ScrollToTop';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ScrollToTop />
    </Layout>
  );
} 