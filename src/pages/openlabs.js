import { motion } from 'framer-motion';
import SEOHead from '../components/shared/SEOHead';
import Navigation from '../components/layout/Navigation';
import { useAnimations } from '../hooks/useAnimations';
import { useState, useEffect } from 'react';

const openlabsStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Open Labs | Yash Verma",
  "description": "Open Labs - Research and development projects by Yash Verma",
  "url": "https://yash-verma.com/openlabs",
  "author": {
    "@type": "Person",
    "name": "Yash Verma"
  }
};

export default function OpenLabs() {
  const { fadeInUp } = useAnimations();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <SEOHead 
        title="Open Labs | Yash Verma"
        description="Open Labs - Research and development projects by Yash Verma"
        canonical="https://yash-verma.com/openlabs"
        keywords="Yash Verma, Open Labs, Research, Development, Projects, UTSA"
        structuredData={openlabsStructuredData}
      />
      <Navigation />
      
      <div style={{ minHeight: '100vh', background: '#0a0a0a', paddingBottom: isMobile ? '120px' : '150px' }}>
        <div style={{ 
          background: 'linear-gradient(180deg, #312e81 0%, #1e1b4b 0%, #0a0a0a 100%)',
          padding: '40px 0 35px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <motion.div 
            style={{ textAlign: 'center' }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <h1 style={{
              fontFamily: "'Orbitron', 'Space Grotesk', monospace",
              fontWeight: 700,
              fontSize: isMobile ? "2rem" : "2.5rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
              margin: 0,
              textAlign: "center"
            }}>Open Labs</h1>
          </motion.div>
        </div>
        
        <motion.div 
          style={{ 
            padding: isMobile ? '20px 15px' : '40px 20px', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <div style={{
            background: '#1a1a1a',
            borderRadius: '8px',
            padding: isMobile ? '30px 20px' : '50px 40px',
            border: '1px solid #2a2a2a',
            color: '#e5e5e5'
          }}>
            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.8',
              margin: 0,
              textAlign: 'center'
            }}>
              Content coming soon...
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

