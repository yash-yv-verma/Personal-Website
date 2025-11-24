import { motion } from 'framer-motion';
import SEOHead from '../components/shared/SEOHead';
import Navigation from '../components/layout/Navigation';
import { useAnimations } from '../hooks/useAnimations';
import { useState, useEffect } from 'react';

const openlabsStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "OpenLabs | Yash Verma",
  "description": "OpenLabs - Student community and technical projects at UTSA led by Yash Verma",
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
        title="OpenLabs | Yash Verma"
        description="OpenLabs - Student community and technical projects at UTSA led by Yash Verma"
        canonical="https://yash-verma.com/openlabs"
        keywords="Yash Verma, OpenLabs, Rowdy Creators, UTSA, Student Community, Technical Projects, Software Engineering"
        structuredData={openlabsStructuredData}
      />
      <Navigation />
      
      <div id="openlabs-page" style={{ minHeight: '100vh', background: '#0a0a0a', paddingBottom: isMobile ? '120px' : '150px' }}>
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
            }}>OpenLabs</h1>
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
          {/* About Open Labs */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '10px'
            }}>
              About OpenLabs
            </h2>
            <p style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.7',
              margin: 0,
              color: '#ffffff',
              fontWeight: 400
            }}>
              Founded a departmental short-form video and tutorial program delivering quick, accessible Linux and programming lessons to UTSA CS students. Creating an open, student-led learning lab making computing concepts approachable and enduring, with plans to expand beyond Linux to broader programming and systems topics.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx global>{`
        #openlabs-page ul li::marker {
          color: #ffffff !important;
        }
        #openlabs-page ul li {
          color: #ffffff !important;
        }
        #openlabs-page ul {
          list-style-color: #ffffff !important;
        }
      `}</style>
    </>
  );
}
