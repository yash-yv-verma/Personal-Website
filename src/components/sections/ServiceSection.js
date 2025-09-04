import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';
import Link from 'next/link';

export default function ServiceSection({ backgroundColor = '#fff' }) {
  const { fadeInUp } = useAnimations();

  return (
    <Parallax y={[-3, 3]} tagouter="section" id="service" className="parallax-section">
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
              <p>I&apos;m Yash Verma, a senior at UTSA double majoring in Computer Science and Mathematics of Data &amp; Computing in the Honors College. I&apos;m currently doing research with Dr. Palden Lama on KubeLLM and agentic AI, exploring how these technologies can drive the future of large-scale intelligent systems. I have also worked on quantum cryptography, studying how quantum principles can be applied to secure communication. Earlier this year, I co-authored and published Word2Vec4Kids at EAAI 2025, an interactive application that helps middle school students learn about word embeddings and natural language processing.</p>
              <p>Outside of research, I run Beyond the Stack, a podcast where I sit down with industry leaders and professors to talk about technology, growth, and leadership. I also lead Rowdy Creators, a student community at UTSA where peers build projects together, strengthen their skills, and prepare for internships and research opportunities. Alongside these efforts, I continue building projects in cloud computing, AI, and web development that let me experiment, learn, and share with others.</p>
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