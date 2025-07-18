import '../styles/globals.css';
import Layout from '../components/layout/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
} 