import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';

export default function ExtracurricularSection({ backgroundColor = '#f0f6ff' }) {
  const { fadeInUp } = useAnimations();

  return (
    <Parallax y={[-10, 10]} tagouter="section" id="extracurricular" className="parallax-section">
      <div className="fullwidth-section">
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
            <h2>My Extracurriculars</h2>
          </div>
          <div className="row content-row">
            <div className="col-md-4 col-sm-8">
              <div className="about-image-thumb">
                <img src="/images/acm.jpg" className="img-responsive" alt="about image" />
              </div>
            </div>
            <div className="col-md-8 col-sm-12">
              <div className="about-thumb">
                <div className="section-title">
                  <a target="_blank" href="https://rowdycreators.org/">
                    <h2>Rowdy Creators</h2>
                  </a>
                  <br />
                  <p>Leading a full rebrand and organizational revamp to boost engagement and visibility; introduced weekly sessions with industry professionals, increasing member participation by 40% and project activity across 7 active teams.</p>
                  <p>Previously served as CTO, providing technical mentorship across cloud, AI/ML, and full-stack development; maintained a Next.js website with 99.9% uptime, supporting 400+ users and reducing load time by 25%.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      <style jsx>{`
        .content-row {
          margin-top: 40px;
        }
        .about-image-thumb {
          text-align: center;
          margin-bottom: 30px;
        }
        .about-image-thumb img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .about-thumb h2 {
          color: #333;
          margin-bottom: 20px;
        }
        .about-thumb h2 a {
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .about-thumb h2 a:hover {
          color: #555;
        }
        .about-thumb p {
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 20px;
          color: #666;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }
        .col-md-4 {
          flex: 0 0 33.333%;
          max-width: 33.333%;
          padding: 0 15px;
        }
        .col-md-8 {
          flex: 0 0 66.667%;
          max-width: 66.667%;
          padding: 0 15px;
        }
        @media (max-width: 768px) {
          .col-md-4, .col-md-8 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
      </div>
    </Parallax>
  );
} 