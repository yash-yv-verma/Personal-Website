import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Link as ScrollLink } from 'react-scroll';
import { useAnimations } from '../../hooks/useAnimations';
import { useState, useEffect } from 'react';

export default function HeroSection() {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const sectionContent = (
    <>
      {/* Touch-friendly top area for mobile */}
      <div className="mobile-top-touch-area" onClick={scrollToTop}></div>
      
      <div className="container">
        <div className="row">
          <div className="col-md-offset-5 col-md-7 col-sm-12 col-xs-12">
            <div className="home-thumb">
              <motion.h1
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
              >
                Hello, I am Yash!
              </motion.h1>
              <motion.p
                className="white-color"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.3}
              >
                Student and Developer
              </motion.p>

            </div>
          </div>
        </div>
      </div>
    </>
  );

  // Disable parallax on mobile to prevent scrollable sections
  if (isMobile) {
    return (
      <section id="home" className="parallax-section">
        {sectionContent}
        
        <style jsx>{`
          .container {
            padding: 80px 0;
            min-height: 100vh;
            display: flex;
            align-items: center;
          }
          .row {
            display: flex;
            align-items: center;
          }
          .home-thumb { 
            margin-top: 0; 
            position: relative;
            left: 100px;
          }

          /* Mobile touch area for scrolling to top */
          .mobile-top-touch-area {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            height: 60px;
            z-index: 999;
            cursor: pointer;
            background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
            display: block;
            transition: background 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
          
          .mobile-top-touch-area:active {
            background: linear-gradient(180deg, rgba(30,58,138,0.2) 0%, transparent 100%);
          }
          
          /* Mobile responsive styles */
          @media (max-width: 768px) {
            .home-thumb {
              left: 0;
              text-align: center;
              padding: 0 20px;
            }
            
            .container {
              padding: 40px 0;
            }
            
            .col-md-offset-5 {
              margin-left: 0;
            }
          }
          
          @media (max-width: 480px) {
            .home-thumb {
              left: 0;
              text-align: center;
              padding: 0 10px;
            }
            
            .home-thumb h1 {
              font-size: 32px;
              line-height: 1.2;
              word-wrap: break-word;
            }
            
            .home-thumb p {
              font-size: 16px;
              margin-top: 10px;
            }
          }
        `}</style>
      </section>
    );
  }

  return (
    <Parallax y={[-5, 5]} tagouter="section" id="home" className="parallax-section">
      {sectionContent}
      
      <style jsx>{`
        .container {
          padding: 80px 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        .row {
          display: flex;
          align-items: center;
        }
        .home-thumb { 
          margin-top: 0; 
          position: relative;
          left: 100px;
        }

        /* Mobile touch area for scrolling to top */
        .mobile-top-touch-area {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          z-index: 999;
          cursor: pointer;
          background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, transparent 100%);
          display: none;
          transition: background 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }
        
        .mobile-top-touch-area:active {
          background: linear-gradient(180deg, rgba(30,58,138,0.2) 0%, transparent 100%);
        }
        
        /* Mobile responsive styles */
        @media (max-width: 768px) {
          .mobile-top-touch-area {
            display: block;
          }
          
          .home-thumb {
            left: 0;
            text-align: center;
            padding: 0 20px;
          }
          
          .container {
            padding: 40px 0;
          }
          
          .col-md-offset-5 {
            margin-left: 0;
          }
        }
        
        @media (max-width: 480px) {
          .home-thumb {
            left: 0;
            text-align: center;
            padding: 0 10px;
          }
          
          .home-thumb h1 {
            font-size: 32px;
            line-height: 1.2;
            word-wrap: break-word;
          }
          
          .home-thumb p {
            font-size: 16px;
            margin-top: 10px;
          }
        }
      `}</style>
    </Parallax>
  );
} 