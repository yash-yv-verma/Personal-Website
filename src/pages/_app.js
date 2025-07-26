import Layout from '../components/layout/Layout';
import MobileTouchArea from '../components/shared/MobileTouchArea';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <MobileTouchArea />
    </Layout>
  );
} 