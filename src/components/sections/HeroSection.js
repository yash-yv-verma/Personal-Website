import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { Link as ScrollLink } from 'react-scroll';
import { useAnimations } from '../../hooks/useAnimations';

export default function HeroSection() {
  const { fadeInUp } = useAnimations();

  return (
    <Parallax y={[-20, 20]} tagouter="section" id="home" className="parallax-section">
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
      `}</style>
    </Parallax>
  );
} 