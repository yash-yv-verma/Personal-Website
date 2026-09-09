import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '../../../components/shared/SEOHead';
import CourseTile, { CourseTileGrid } from '../../../components/courses/CourseTile';
import Navigation from '../../../components/layout/Navigation';
import { useAnimations } from '../../../hooks/useAnimations';
import { useState, useEffect } from 'react';
import { semesters, getSemester, getCourse } from '../../../data/courses';

const titleStyle = (isMobile) => ({
  fontFamily: "'Orbitron', 'Space Grotesk', monospace",
  fontWeight: 700,
  fontSize: isMobile ? "1.6rem" : "2.5rem",
  letterSpacing: "0.12em",
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

const cardStyle = (isMobile) => ({
  background: 'rgba(17, 17, 17, 0.6)',
  backdropFilter: 'blur(10px)',
  borderRadius: '12px',
  padding: isMobile ? '30px 20px' : '50px 40px',
  marginBottom: '30px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  textDecoration: 'none',
  color: '#ffffff',
  display: 'block'
});

export default function CoursePage({ semester, course }) {
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

  if (!semester || !course) return null;

  return (
    <>
      <SEOHead
        title={`${course.code} | ${semester.label} | Yash Verma`}
        description={`${course.code}: ${course.title}`}
        canonical={`https://yash-verma.com/courses/${semester.slug}/${course.slug}`}
        keywords={`Yash Verma, ${semester.school}, ${course.code}, ${course.title}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": `${course.code} | Yash Verma`,
          "description": `${course.code}: ${course.title}`,
          "url": `https://yash-verma.com/courses/${semester.slug}/${course.slug}`,
          "author": { "@type": "Person", "name": "Yash Verma" }
        }}
      />
      <Navigation />

      <div id="course-page" style={{ minHeight: '100vh', background: '#0a0a0a', paddingBottom: isMobile ? '120px' : '150px' }}>
        <div style={{
          background: 'linear-gradient(180deg, #312e81 0%, #1e1b4b 0%, #0a0a0a 100%)',
          padding: '40px 0 35px 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          <motion.div
            style={{ textAlign: 'center', padding: '0 16px' }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            <h1 style={titleStyle(isMobile)}>{course.code}</h1>
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
          <motion.div
            style={cardStyle(isMobile)}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <h2 style={sectionTitleStyle(isMobile)}>{course.title}</h2>
            <p style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.7',
              margin: '0 0 16px 0',
              color: '#ffffff',
              fontWeight: 400
            }}>
              {semester.name} · {semester.school}
            </p>
            <Link href={`/courses/${semester.slug}`} style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: '1rem',
              color: '#ffffff',
              textDecoration: 'underline'
            }}>
              {semester.label} courses
            </Link>
          </motion.div>

          <CourseTileGrid>
            {course.links.map((link, index) => (
              <motion.div
                key={link.href}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.4 + index * 0.08}
                style={{ height: '100%' }}
              >
                <CourseTile href={link.href} external>
                  <h2 style={{
                    ...sectionTitleStyle(isMobile),
                    fontSize: isMobile ? '1.2rem' : '1.4rem'
                  }}>
                    {link.label}
                  </h2>
                  <p style={{
                    fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: isMobile ? '1rem' : '1.05rem',
                    lineHeight: '1.7',
                    margin: 0,
                    color: '#cbd5e1',
                    wordBreak: 'break-word'
                  }}>
                    {link.hint}
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

export async function getStaticPaths() {
  const paths = semesters.flatMap((semester) =>
    semester.courses.map((course) => ({
      params: { term: semester.slug, slug: course.slug },
    }))
  );

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const semester = getSemester(params.term);
  const course = getCourse(params.term, params.slug);
  if (!semester || !course) return { notFound: true };
  return { props: { semester, course } };
}
