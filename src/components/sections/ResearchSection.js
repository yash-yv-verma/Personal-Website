import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';

const researchExperience = [
  {
    title: "Word2Vec4Kids – EAAI 2025 Publication",
    position: "Undergraduate Researcher, UTSA Department of Computer Science",
    location: "San Antonio, TX",
    period: "January 2024 - February 2025",
    responsibilities: [
      "Engaging in an Independent Study supervised by Prof. Martin, developing AI tools for children, and co-authoring a collaborative paper summarizing project objectives and outcomes.",
      "Teamed up to create the \"Word2Vec4Kids\" macOS app using Xcode, Swift, and SwiftUI, integrating interactive elements to illustrate Word2Vec's role in computer comprehension of English.",
      "Aiming to demystify AI concepts in an engaging manner for the targeted study audience: students at Basis School-San Antonio."
    ]
  },
  {
    title: "A Step Towards Quantum-safe Encryption",
    position: "CURE Researcher, UTSA Department of Computer Science",
    location: "San Antonio, TX",
    period: "January 2024 - May 2024",
    responsibilities: [
      "Independently conducting research within the Course-based Undergraduate Research Experience (CS-CURE) course under the leadership of Prof. Fernandez at UTSA.",
      "Exploring alternative methods for distributing Bell pairs beyond satellite-based systems, developing innovative protocols for secure data transmission in Quantum Computing and Communication research.",
      "Collaborating with Prof. Gibson-Lopez (Quantum Algorithms) and Prof. Fernandez through real-time discussions and experiments to advance research objectives."
    ]
  }
];

export default function ResearchSection({ backgroundColor = '#f0f6ff' }) {
  const { fadeInUp } = useAnimations();

  return (
    <Parallax y={[-3, 3]} tagouter="section" id="research" className="parallax-section">
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
            <h2>Research Experience</h2>
          </div>
          <ul className="timeline">
            {researchExperience.map((research, index) => (
              <li key={index}>
                <motion.div 
                  className="timeline-content" 
                  variants={fadeInUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  custom={0.3 + index * 0.1}
                >
                  <h4>{research.title}</h4>
                  <em>
                    <span>{research.position}</span>
                    <span> | </span>
                    <span>{research.location}</span>
                    <span> | </span>
                    <span>{research.period}</span>
                  </em>
                  <ul className="responsibilities">
                    {research.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
      
      <style jsx>{`
        .responsibilities {
          list-style-type: disc;
          margin-left: 20px;
          margin-top: 15px;
        }
        .responsibilities li {
          margin-bottom: 10px;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(0,0,0,.7);
          font-family: Lora, serif;
        }
      `}</style>
      </div>
    </Parallax>
  );
} 