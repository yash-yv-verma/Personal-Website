import Layout from '../components/layout/Layout';
import MobileTouchArea from '../components/shared/MobileTouchArea';
import ScrollToTopWrapper from '../components/shared/ScrollToTopWrapper';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ScrollToTopWrapper>
      <Layout>
        <Component {...pageProps} />
        <MobileTouchArea />
      </Layout>
    </ScrollToTopWrapper>
  );
} 