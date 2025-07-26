import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';
import { useState, useEffect } from 'react';

const educationData = [
  {
    institution: "The University of Texas at San Antonio",
    degree: "Bachelors of Science",
    period: "2022-Present",
    major: "Computer Science and Mathematics of Data & Computing",
    coursework: "Enterprise Software Engineering, Web Technologies Software Engineering, User Interface, Data Science, Algebra and Number Systems, Analysis of Algorithms, Application Programming, Systems Programming, Database Systems, Computer Organization, Web Technologies, Discrete Mathematical Structures, Data Structures, Mathematical Foundations of Computer Science, Linear Algebra",
    awards: "Dean's List (Spring 2024); Honor Roll (Fall 2022, Spring 2023, Fall 2023)"
  },
  {
    institution: "Hendrickson High School",
    degree: "High School Degree",
    period: "2018-2022",
    extracurricular: "Varsity Wrestling, Code2College, Science Olympiad, UIL Computer Science",
    awards: "High Honors"
  }
];

export default function AboutSection({ backgroundColor = '#f0f6ff' }) {
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

  const sectionContent = (
    <motion.div 
      className="container" 
      variants={fadeInUp} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      custom={0.2}
    >
      <div className="row">
        <div className="section-title">
          <h2>My Education</h2>
        </div>
        <ul className="timeline">
          {educationData.map((item, index) => (
            <li key={index}>
              <motion.div 
                className="timeline-content" 
                variants={fadeInUp} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                custom={0.3 + index * 0.1}
              >
                <h4>{item.institution}</h4>
                <em>
                  <span>{item.degree}</span>
                  <span> | </span>
                  <span>{item.period}</span>
                </em>
                {item.major && (
                  <p className="timeline-edu-desc">
                    <b>Major:</b> {item.major}
                  </p>
                )}
                {item.coursework && (
                  <p className="timeline-edu-desc">
                    <b>Relevant coursework:</b> {item.coursework}
                  </p>
                )}
                {item.extracurricular && (
                  <p className="timeline-edu-desc">
                    <b>Extra Curricular:</b> {item.extracurricular}
                  </p>
                )}
                <p className="timeline-edu-desc">
                  <b>Awards:</b> {item.awards}
                </p>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );

  // Disable parallax on mobile to prevent scrollable sections
  if (isMobile) {
    return (
      <section id="about" className="parallax-section">
        {sectionContent}
      </section>
    );
  }

  return (
    <Parallax y={[-3, 3]} tagouter="section" id="about" className="parallax-section">
      {sectionContent}
    </Parallax>
  );
} 