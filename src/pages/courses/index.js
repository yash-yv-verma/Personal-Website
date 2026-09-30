import { motion } from 'framer-motion';
import SEOHead from '../../components/shared/SEOHead';
import CourseTile, { CourseTileGrid } from '../../components/courses/CourseTile';
import Navigation from '../../components/layout/Navigation';
import { useAnimations } from '../../hooks/useAnimations';
import { useState, useEffect } from 'react';
import { semesters } from '../../data/courses';

const coursesStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Courses | Yash Verma",
  "description": "Course dashboard by semester at the University of Michigan",
  "url": "https://yash-verma.com/courses",
  "author": {
    "@type": "Person",
    "name": "Yash Verma"
  }
};

const titleStyle = (isMobile) => ({
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
});

const sectionTitleStyle = (isMobile) => ({
  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: isMobile ? '1.4rem' : '1.8rem',
  fontWeight: 600,
  color: '#ffffff',
  marginBottom: '20px',
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
  paddingBottom: '10px'
});

export default function CoursesDashboard() {
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
        title="Courses | Yash Verma"
        description="Course dashboard by semester at the University of Michigan"
        canonical="https://yash-verma.com/courses"
        keywords="Yash Verma, University of Michigan, Courses, Fall 2026"
        structuredData={coursesStructuredData}
      />
      <Navigation />

      <div id="courses-page" style={{ minHeight: '100vh', background: '#0a0a0a', paddingBottom: isMobile ? '120px' : '150px' }}>
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
            <h1 style={titleStyle(isMobile)}>Courses</h1>
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
          <CourseTileGrid>
            {semesters.map((semester, index) => (
              <motion.div
                key={semester.slug}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.3 + index * 0.1}
                style={{ height: '100%' }}
              >
                <CourseTile href={`/courses/${semester.slug}`}>
                  <h2 style={sectionTitleStyle(isMobile)}>{semester.label}</h2>
                  <p style={{
                    fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: isMobile ? '1rem' : '1.1rem',
                    lineHeight: '1.7',
                    margin: '0 0 16px 0',
                    color: '#ffffff',
                    fontWeight: 400
                  }}>
                    {semester.name}
                  </p>
                  <p style={{
                    fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: '0.95rem',
                    margin: 0,
                    color: '#cbd5e1'
                  }}>
                    {semester.school} · {semester.courses.length} {semester.courses.length === 1 ? 'course' : 'courses'}
                  </p>
                </CourseTile>
              </motion.div>
            ))}
          </CourseTileGrid>
        </motion.div>
      </div>
    </>
  );
}
