import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';
import Link from 'next/link';

export default function ServiceSection({ backgroundColor = '#fff' }) {
  const { fadeInUp } = useAnimations();

  return (
    <Parallax y={[-10, 10]} tagouter="section" id="service" className="parallax-section">
      <motion.div 
        className="container" 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        custom={0.2}
      >
        <div className="row">
          <div className="col-md-4 col-sm-12 col-xs-12">
            <ul className="info-list">
              <li><strong>Name:</strong> <span>Yash Verma</span></li>
              <li><strong>School:</strong> <span>The University of Texas at San Antonio</span></li>
              <li><strong>Hometown:</strong> <span>Austin, TX</span></li>
              <li>
                <ul className="social-icon">
                  <li><a href="https://github.com/yash-yv-verma" target="_blank" rel="noopener noreferrer" className="fab fa-github"></a></li>
                  <li><a href="https://www.linkedin.com/in/-yv/" target="_blank" rel="noopener noreferrer" className="fab fa-linkedin"></a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="about-text">
              <p>I am a dedicated junior majoring in Computer Science and Mathematics of Data &amp; Computing at The University of Texas at San Antonio, Honors College. My passion lies in exploring the realm of quantum computing, particularly in quantum software. Currently, I&rsquo;m immersed in writing a research paper on quantum communication, aiming to advance innovative protocols for secure data transmission.</p>
              <p>As a UG Researcher in CS-CURE, I&rsquo;m actively delving into the realm of two-factor encryption, aiming to bridge the gap between traditional RSA encryption and quantum key distribution. Recognizing the challenges of immediately transitioning away from RSA, my research focuses on leveraging QKD as a supplementary layer of security within our encryption systems. Additionally, my involvement in an Independent Study centers on the development of AI tools tailored for children, with the goal of demystifying complex concepts in an engaging and accessible manner.</p>
              <p>Outside academia, I serve as a Computer Science Tutor at the University of Texas, San Antonio, where I assist students in understanding programming concepts and overcoming challenges in various courses.</p>
            </div>
            <div className="about-btns">
              <Link href="/resume" className="btn-custom btn-color">View Resume</Link>
            </div>
          </div>
        </div>
      </motion.div>
      
      <style jsx>{`
        .container {
          background: ${backgroundColor};
          width: 100%;
          max-width: none;
          padding-left: 20px;
          padding-right: 20px;
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
          padding-left: 0;
          margin-left: -10px;
        }
        
        .col-md-8 {
          flex: 0 0 66.667%;
          max-width: 66.667%;
          padding: 0 0 0 35px;
          margin-right: -150px;
        }
        
        @media (max-width: 768px) {
          .col-md-4, .col-md-8 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
        
        .info-list {
          padding: 0;
          margin: 0;
          list-style: none;
        }
        
        .info-list > li {
          padding: 14px 0;
          border-bottom: solid 1px rgba(0,0,0,.1);
        }
        
        .info-list > li:last-of-type {
          border: none;
        }
        
        .info-list > li > strong {
          letter-spacing: 4px;
          color: #202020;
          text-transform: uppercase;
          font-family: 'Roboto Mono', sans-serif;
        }
        
        .info-list > li > span {
          color: rgba(0,0,0,.6);
          font-family: Lora, serif;
        }
        
        .social-icon {
          position: relative;
          padding: 0;
          margin: 0;
          text-align: left;
          display: flex;
          list-style: none;
        }
        
        .social-icon li {
          display: inline-block;
          list-style: none;
        }
        
        .social-icon li a {
          background: #ffffff;
          border-radius: 100%;
          color: #454545;
          cursor: pointer;
          font-size: 20px;
          text-decoration: none;
          transition: all 0.4s ease-in-out;
          width: 45px;
          height: 45px;
          line-height: 45px;
          text-align: center;
          vertical-align: middle;
          position: relative;
          top: 0;
          margin: 0px 6px 10px 6px;
          display: inline-block;
        }
        .social-icon li a:hover {
          background: #000000;
          color: #ffffff;
          transform: scale(1.1);
          top: -5px;
        }
        
        .about-text {
          margin-bottom: 25px;
          line-height: 1.8em;
          margin-left: 0;
          padding-right: 20px;
        }
        
        .col-md-4 {
          padding-right: 30px;
        }
        
        .about-text > p {
          font-size: 14px;
          color: rgba(0,0,0,.6);
          line-height: 1.8em;
          font-family: Lora, serif;
        }
        
        .about-btns {
          margin-top: 30px;
          margin-left: 0;
          padding-left: 0;
        }
        
        .about-btns > .btn-custom {
          margin-right: 25px;
        }
      `}</style>
    </Parallax>
  );
} 