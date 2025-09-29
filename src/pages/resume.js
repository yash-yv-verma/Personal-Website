import { motion } from 'framer-motion';
import Head from 'next/head';
import { useAnimations } from '../hooks/useAnimations';
import { useState, useEffect } from 'react';

const resumeStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yash Verma",
  "jobTitle": "Computer Science & Mathematics Student, AI Researcher",
  "description": "UTSA Honors College senior researching KubeLLM and agentic AI. Co-author of Word2Vec4Kids published at EAAI 2025.",
  "url": "https://yash-verma.com/resume",
  "image": "https://yash-verma.com/images/homebg.jpeg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Antonio",
    "addressRegion": "TX",
    "addressCountry": "US"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "The University of Texas at San Antonio"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "The University of Texas at San Antonio"
  },
  "sameAs": [
    "https://github.com/yash-yv-verma",
    "https://www.linkedin.com/in/-yv/",
    "https://www.youtube.com/@beyond-the-stack",
    "https://orcid.org/0009-0009-8210-464X",
    "https://scholar.google.com/citations?user=sOcV2JEAAAAJ"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "AI Researcher",
    "occupationLocation": {
      "@type": "Place",
      "name": "The University of Texas at San Antonio"
    }
  }
};

export default function Resume() {
  const { fadeInUp, slideInLeft, fadeIn } = useAnimations();
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
      <Head>
        <title>Resume | Yash Verma</title>
        <link rel="icon" href="/favicon.svg" />
        <script type="application/ld+json">
          {JSON.stringify(resumeStructuredData)}
        </script>
      </Head>
      
      <div style={{ minHeight: '100vh', background: '#0a0a0a' }}>
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
            }}>Resume</h1>
          </motion.div>
        </div>
        
        <motion.div 
          style={{ 
            padding: isMobile ? '20px 15px 80px 15px' : '40px 20px 120px 20px', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}
          variants={slideInLeft}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0.4}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ 
              scale: isMobile ? 1 : 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{
              borderRadius: '8px',
              overflow: 'hidden'
            }}
          >
            <iframe
              src="/images/Resume.pdf"
              style={{
                width: '100%',
                height: isMobile ? '600px' : '1200px',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                border: '1px solid #2a2a2a',
                backgroundColor: '#000000',
                transition: 'all 0.3s ease'
              }}
              title="Resume PDF"
            />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
} 