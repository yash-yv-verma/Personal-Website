import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';

export default function Section({
  children,
  id,
  title,
  subtitle,
  backgroundColor = '#fff',
  fullWidth = false,
  parallaxY = [-10, 10],
  showSectionTitle = true,
  className = '',
  containerPadding = '80px 0'
}) {
  const { fadeInUp } = useAnimations();

  const sectionContent = (
    <motion.div 
      className={`container ${className}`}
      variants={fadeInUp} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      custom={0.2}
    >
      <div className="row">
        {showSectionTitle && (title || subtitle) && (
          <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </motion.div>
  );

  return (
    <Parallax y={parallaxY} tagouter="section" id={id} className="parallax-section">
      {fullWidth ? (
        <div className="fullwidth-section">
          {sectionContent}
        </div>
      ) : (
        sectionContent
      )}
      
      <style jsx>{`
        section {
          position: relative;
          padding-top: 80px;
          padding-bottom: 80px;
          background: ${backgroundColor};
        }
        
        .container {
          padding: ${containerPadding};
        }
        
        .fullwidth-section {
          width: 100%;
          padding: ${containerPadding};
        }
        
        .section-title {
          margin: 0;
          padding-bottom: 32px;
        }
        
        .section-title h2 {
          color: #2b2b2b;
          font-size: 35px;
          line-height: 52px;
          margin-top: 0px;
        }
        
        .section-title p {
          color: #696969;
          font-size: 16px;
          font-weight: normal;
          line-height: 25px;
          letter-spacing: 0.2px;
        }
      `}</style>
    </Parallax>
  );
} 