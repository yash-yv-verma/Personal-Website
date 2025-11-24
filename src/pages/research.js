import { motion } from 'framer-motion';
import SEOHead from '../components/shared/SEOHead';
import Navigation from '../components/layout/Navigation';
import { useAnimations } from '../hooks/useAnimations';
import { useState, useEffect } from 'react';

const researchStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Research | Yash Verma",
  "description": "Research projects and publications by Yash Verma - KubeLLM, Agentic AI, Word2Vec4Kids, and more",
  "url": "https://yash-verma.com/research",
  "author": {
    "@type": "Person",
    "name": "Yash Verma",
    "email": "yash.verma@my.utsa.edu",
    "affiliation": {
      "@type": "CollegeOrUniversity",
      "name": "The University of Texas at San Antonio"
    },
    "sameAs": [
      "https://scholar.google.com/citations?user=sOcV2JEAAAAJ",
      "https://orcid.org/0009-0009-8210-464X"
    ]
  },
  "about": [
    {
      "@type": "ResearchProject",
      "name": "LLM-Based Multi-Agent Framework For Troubleshooting Distributed Systems",
      "description": "Advancing KubeLLM framework by integrating agentic reasoning for autonomous diagnosis and recovery in Kubernetes clusters",
      "funder": {
        "@type": "Organization",
        "name": "The University of Texas at San Antonio"
      },
      "memberOf": {
        "@type": "Organization",
        "name": "The University of Texas at San Antonio"
      }
    },
    {
      "@type": "ScholarlyArticle",
      "name": "Word2Vec4Kids: Interactive Challenges to Introduce Middle School Students to Word Embeddings",
      "datePublished": "2025-04-11",
      "publisher": {
        "@type": "Organization",
        "name": "AAAI/EAAI"
      }
    }
  ]
};

export default function Research() {
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
        title="Research | Yash Verma"
        description="Research projects and publications by Yash Verma - KubeLLM, Agentic AI, Word2Vec4Kids, and more"
        canonical="https://yash-verma.com/research"
        keywords="Yash Verma, Research, KubeLLM, Agentic AI, Word2Vec4Kids, EAAI 2025, UTSA, Dr. Palden Lama"
        structuredData={researchStructuredData}
      />
      <Navigation />
      
      <div id="research-page" style={{ minHeight: '100vh', background: '#0a0a0a', paddingBottom: isMobile ? '120px' : '150px' }}>
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
            <h1 style={{
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
            }}>Research</h1>
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
          {/* Research Interests Section */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '10px'
            }}>
              Research Interests
            </h2>
            <p style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.7',
              margin: 0,
              color: '#ffffff',
              fontWeight: 400
            }}>
              My research focuses on building multi-agent systems for distributed infrastructure, reasoning about stochastic system failures, orchestrating recovery, and designing scalable, interpretable AI infrastructure for large-language-model and reinforcement learning agents in real-world computing environments.
            </p>
          </motion.div>

          {/* Current Research Project */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '10px'
            }}>
              Current Research
            </h2>
            
            <h3 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginTop: '20px',
              marginBottom: '10px',
              lineHeight: '1.3',
              letterSpacing: '-0.02em'
            }}>
              LLM-Based Multi-Agent Framework For Troubleshooting Distributed Systems
            </h3>
            
            <div style={{
              marginBottom: '20px',
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#ffffff',
              fontWeight: 400
            }}>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Role:</strong> <span style={{ color: '#ffffff' }}>Undergraduate Research Assistant</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Advisor:</strong> <span style={{ color: '#ffffff' }}>Dr. Palden Lama</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Institution:</strong> <span style={{ color: '#ffffff' }}>The University of Texas at San Antonio</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Duration:</strong> <span style={{ color: '#ffffff' }}>June 2025 – Present</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Status:</strong> <span style={{ color: '#ffffff' }}>In preparation: publication expected Spring 2026</span></p>
            </div>

            <h4 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.15rem',
              fontWeight: 600,
              color: '#ffffff',
              marginTop: '20px',
              marginBottom: '10px'
            }}>
              Key Contributions:
            </h4>
            <ul style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              paddingLeft: '20px',
              margin: '10px 0',
              lineHeight: '1.7',
              color: '#ffffff',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: 400,
              listStyleType: 'disc',
              listStyleColor: '#ffffff'
            }}>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Advancing KubeLLM, an IEEE Cloud Summit 2025 Best Paper framework, by integrating agentic reasoning for autonomous diagnosis and recovery in Kubernetes clusters.
              </li>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Implementing an independent verification layer that cross-checks LLM actions against system logs, metrics, and retrieved documentation to prevent low-confidence executions.
              </li>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Optimizing retrieval-augmented generation (RAG) pipelines and distributed inference to improve accuracy-latency tradeoffs across multi-agent configurations.
              </li>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Conducting benchmarking using KubeLLMBench to evaluate Llama 3.3, GPT-4o, Gemini 1.5 Flash, and o3-mini, analyzing performance, cost, and reliability trade-offs for scalable AI-driven DevOps.
              </li>
            </ul>
          </motion.div>

          {/* Published Research */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '10px'
            }}>
              Publications
            </h2>
            
            <h3 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginTop: '20px',
              marginBottom: '10px',
              lineHeight: '1.3',
              letterSpacing: '-0.02em'
            }}>
              Word2Vec4Kids: Interactive Challenges to Introduce Middle School Students to Word Embeddings
            </h3>
            
            <div style={{
              marginBottom: '20px',
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#ffffff',
              fontWeight: 400
            }}>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Role:</strong> <span style={{ color: '#ffffff' }}>Undergraduate Researcher, UTSA Department of Computer Science</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Venue:</strong> <span style={{ color: '#ffffff' }}>AAAI/EAAI April 2025</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Location:</strong> <span style={{ color: '#ffffff' }}>San Antonio, TX</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Duration:</strong> <span style={{ color: '#ffffff' }}>January 2024 – February 2025</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Status:</strong> <span style={{ color: '#ffffff' }}>Published</span></p>
            </div>

            <h4 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.15rem',
              fontWeight: 600,
              color: '#ffffff',
              marginTop: '20px',
              marginBottom: '10px'
            }}>
              Key Contributions:
            </h4>
            <ul style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              paddingLeft: '20px',
              margin: '10px 0',
              lineHeight: '1.7',
              color: '#ffffff',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: 400,
              listStyleType: 'disc',
              listStyleColor: '#ffffff'
            }}>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Engaging in an Independent Study supervised by Prof. Martin, developing AI tools for children, and co-authoring a collaborative paper summarizing project objectives and outcomes.
              </li>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Teamed up to create the &quot;Word2Vec4Kids&quot; macOS app using Xcode, Swift, and SwiftUI, integrating interactive elements to illustrate Word2Vec&apos;s role in computer comprehension of English.
              </li>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Aiming to demystify AI concepts in an engaging manner for the targeted study audience: students at Basis School-San Antonio.
              </li>
            </ul>
          </motion.div>

          {/* Previous Research */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '10px'
            }}>
              Previous Research
            </h2>
            
            <h3 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              fontWeight: 700,
              color: '#ffffff',
              marginTop: '20px',
              marginBottom: '10px',
              lineHeight: '1.3',
              letterSpacing: '-0.02em'
            }}>
              A Step Towards Quantum-safe Encryption
            </h3>
            
            <div style={{
              marginBottom: '20px',
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.1rem',
              color: '#ffffff',
              fontWeight: 400
            }}>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Role:</strong> <span style={{ color: '#ffffff' }}>CURE Researcher, UTSA Department of Computer Science</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Location:</strong> <span style={{ color: '#ffffff' }}>San Antonio, TX</span></p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: '#ffffff', fontWeight: 600 }}>Duration:</strong> <span style={{ color: '#ffffff' }}>January 2024 – May 2024</span></p>
            </div>

            <h4 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.15rem',
              fontWeight: 600,
              color: '#ffffff',
              marginTop: '20px',
              marginBottom: '10px'
            }}>
              Key Contributions:
            </h4>
            <ul style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              paddingLeft: '20px',
              margin: '10px 0',
              lineHeight: '1.7',
              color: '#ffffff',
              fontSize: isMobile ? '1rem' : '1.1rem',
              fontWeight: 400,
              listStyleType: 'disc',
              listStyleColor: '#ffffff'
            }}>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Independently conducting research within the Course-based Undergraduate Research Experience (CS-CURE) course under the leadership of Prof. Fernandez at UTSA.
              </li>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Exploring alternative methods for distributing Bell pairs beyond satellite-based systems, developing innovative protocols for secure data transmission in Quantum Computing and Communication research.
              </li>
              <li style={{ marginBottom: '10px', color: '#ffffff' }}>
                Collaborating with Prof. Gibson-Lopez (Quantum Algorithms) and Prof. Fernandez through real-time discussions and experiments to advance research objectives.
              </li>
            </ul>
          </motion.div>

          {/* Education Background */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '10px'
            }}>
              Education
            </h2>
            
            <div style={{
              marginTop: '20px'
            }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '10px',
                lineHeight: '1.3',
                letterSpacing: '-0.02em'
              }}>
                The University of Texas at San Antonio
              </h3>
              <p style={{
                fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: '#ffffff',
                margin: '5px 0',
                lineHeight: '1.7',
                fontWeight: 400
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Degree:</strong> <span style={{ color: '#ffffff' }}>Bachelors of Science</span>
              </p>
              <p style={{
                fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: '#ffffff',
                margin: '5px 0',
                lineHeight: '1.7',
                fontWeight: 400
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Major:</strong> <span style={{ color: '#ffffff' }}>Computer Science and Mathematics of Data & Computing</span>
              </p>
              <p style={{
                fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: isMobile ? '1rem' : '1.1rem',
                color: '#ffffff',
                margin: '5px 0',
                lineHeight: '1.7',
                fontWeight: 400
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Period:</strong> <span style={{ color: '#ffffff' }}>2022-Present</span>
              </p>
              <p style={{
                fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: isMobile ? '0.95rem' : '1rem',
                color: '#ffffff',
                margin: '10px 0 0 0',
                lineHeight: '1.7'
              }}>
                <strong style={{ color: '#ffffff', fontWeight: 600 }}>Awards:</strong> <span style={{ color: '#ffffff' }}>Dean&apos;s List (Spring 2024); Honor Roll (Fall 2022, Spring 2023, Fall 2023)</span>
              </p>
            </div>
          </motion.div>

          {/* Research Tools & Technologies */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              marginBottom: '30px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
              paddingBottom: '10px'
            }}>
              Research Tools & Technologies
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '20px',
              marginTop: '20px'
            }}>
              <div>
                <h4 style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.15rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  Machine Learning & AI
                </h4>
                <p style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.7',
                  color: '#ffffff',
                  margin: 0,
                  fontWeight: 400
                }}>
                  PyTorch, TensorFlow, scikit-learn, RLlib, LangChain, AutoGen, Hugging Face, MLflow, Jupyter
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.15rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  Distributed Systems & Cloud
                </h4>
                <p style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.7',
                  color: '#ffffff',
                  margin: 0,
                  fontWeight: 400
                }}>
                  Kubernetes, Docker, AWS, GCP, Azure, Kafka, Linux
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.15rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  Programming Languages
                </h4>
                <p style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.7',
                  color: '#ffffff',
                  margin: 0,
                  fontWeight: 400
                }}>
                  Python, Java, C, TypeScript, JavaScript, Swift, SQL, LaTeX
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.15rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  marginBottom: '10px'
                }}>
                  Research Concepts
                </h4>
                <p style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  fontSize: isMobile ? '1rem' : '1.1rem',
                  lineHeight: '1.7',
                  color: '#ffffff',
                  margin: 0,
                  fontWeight: 400
                }}>
                  Multi-Agent Systems, Scalable AI Infrastructure, Distributed Systems, Reinforcement Learning, RAG Pipelines
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact for Collaboration */}
          <motion.div 
            style={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.9}
          >
            <h2 style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1.4rem' : '1.8rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '15px',
              letterSpacing: '-0.02em'
            }}>
              Interested in Collaboration?
            </h2>
            <p style={{
              fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: isMobile ? '1rem' : '1.1rem',
              lineHeight: '1.7',
              margin: '0 0 20px 0',
              color: '#ffffff'
            }}>
              I&apos;m always open to discussing research opportunities, collaborations, and graduate program applications.
            </p>
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '15px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="mailto:yash.verma@my.utsa.edu"
                style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #312e81, #1e1b4b)',
                  borderRadius: '6px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(49, 46, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Email: yash.verma@my.utsa.edu
              </a>
              <a 
                href="https://scholar.google.com/citations?user=sOcV2JEAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #312e81, #1e1b4b)',
                  borderRadius: '6px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(49, 46, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Google Scholar
              </a>
              <a 
                href="https://orcid.org/0009-0009-8210-464X"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                  color: '#ffffff',
                  textDecoration: 'none',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #312e81, #1e1b4b)',
                  borderRadius: '6px',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  fontWeight: 600
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 8px 20px rgba(49, 46, 129, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                ORCID Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx global>{`
        #research-page ul li::marker {
          color: #ffffff !important;
        }
        #research-page ul li {
          color: #ffffff !important;
        }
        #research-page ul {
          list-style-color: #ffffff !important;
        }
      `}</style>
    </>
  );
}
