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
      
      <div style={{ minHeight: '100vh', background: '#ffffff', paddingBottom: isMobile ? '120px' : '150px' }}>
        <div style={{ 
          background: '#f0f6ff',
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
              fontFamily: "'Roboto Mono', sans-serif",
              fontWeight: 700,
              fontSize: isMobile ? "2rem" : "2.5rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#2b2b2b",
              margin: 0,
              textAlign: "center"
            }}>Research</h1>
          </motion.div>
        </div>
        
        <motion.div 
          style={{ 
            padding: isMobile ? '20px 15px' : '40px 20px', 
            maxWidth: '1200px', 
            margin: '0 auto',
            background: '#ffffff'
          }}
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          {/* Research Interests Section */}
          <motion.div 
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              border: '1px solid #e5e5e5',
              marginBottom: '30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <h2 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '2px solid #e5e5e5',
              paddingBottom: '10px'
            }}>
              Research Interests
            </h2>
            <p style={{
              fontFamily: "'Lora', serif",
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.6',
              margin: 0,
              color: 'rgba(0,0,0,.7)'
            }}>
              My research focuses on building multi-agent systems for distributed infrastructure, reasoning about stochastic system failures, orchestrating recovery, and designing scalable, interpretable AI infrastructure for large-language-model and reinforcement learning agents in real-world computing environments.
            </p>
          </motion.div>

          {/* Current Research Project */}
          <motion.div 
            style={{
              background: '#f0f6ff',
              borderRadius: '8px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              border: '1px solid #e5e5e5',
              marginBottom: '30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <h2 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginBottom: '15px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '2px solid #e5e5e5',
              paddingBottom: '10px'
            }}>
              Current Research
            </h2>
            
            <h3 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.2rem' : '1.4rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginTop: '20px',
              marginBottom: '10px',
              lineHeight: '1.3'
            }}>
              LLM-Based Multi-Agent Framework For Troubleshooting Distributed Systems
            </h3>
            
            <div style={{
              marginBottom: '20px',
              fontFamily: "'Lora', serif",
              fontSize: isMobile ? '14px' : '16px',
              color: 'rgba(0,0,0,.7)'
            }}>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Role:</strong> Undergraduate Research Assistant</p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Advisor:</strong> Dr. Palden Lama</p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Institution:</strong> The University of Texas at San Antonio</p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Duration:</strong> June 2025 – Present</p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Status:</strong> In preparation: publication expected Spring 2026</p>
            </div>

            <h4 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 600,
              color: '#2b2b2b',
              marginTop: '20px',
              marginBottom: '10px',
              letterSpacing: '6px',
              textTransform: 'uppercase'
            }}>
              Key Contributions:
            </h4>
            <ul style={{
              fontFamily: "'Lora', serif",
              paddingLeft: '20px',
              margin: '10px 0',
              lineHeight: '1.6',
              color: 'rgba(0,0,0,.7)',
              fontSize: isMobile ? '14px' : '16px'
            }}>
              <li style={{ marginBottom: '10px', fontFamily: "'Lora', serif" }}>
                Advancing KubeLLM, an IEEE Cloud Summit 2025 Best Paper framework, by integrating agentic reasoning for autonomous diagnosis and recovery in Kubernetes clusters.
              </li>
              <li style={{ marginBottom: '10px', fontFamily: "'Lora', serif" }}>
                Implementing an independent verification layer that cross-checks LLM actions against system logs, metrics, and retrieved documentation to prevent low-confidence executions.
              </li>
              <li style={{ marginBottom: '10px', fontFamily: "'Lora', serif" }}>
                Optimizing retrieval-augmented generation (RAG) pipelines and distributed inference to improve accuracy-latency tradeoffs across multi-agent configurations.
              </li>
              <li style={{ marginBottom: '10px', fontFamily: "'Lora', serif" }}>
                Conducting benchmarking using KubeLLMBench to evaluate Llama 3.3, GPT-4o, Gemini 1.5 Flash, and o3-mini, analyzing performance, cost, and reliability trade-offs for scalable AI-driven DevOps.
              </li>
            </ul>
          </motion.div>

          {/* Published Research */}
          <motion.div 
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              border: '1px solid #e5e5e5',
              marginBottom: '30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
          >
            <h2 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginBottom: '15px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '2px solid #e5e5e5',
              paddingBottom: '10px'
            }}>
              Publications
            </h2>
            
            <h3 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.2rem' : '1.4rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginTop: '20px',
              marginBottom: '10px',
              lineHeight: '1.3'
            }}>
              Word2Vec4Kids: Interactive Challenges to Introduce Middle School Students to Word Embeddings
            </h3>
            
            <div style={{
              marginBottom: '20px',
              fontFamily: "'Lora', serif",
              fontSize: isMobile ? '14px' : '16px',
              color: 'rgba(0,0,0,.7)'
            }}>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Role:</strong> Undergraduate Research Assistant</p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Venue:</strong> AAAI/EAAI April 2025</p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Duration:</strong> January 2024 – February 2025</p>
              <p style={{ margin: '5px 0' }}><strong style={{ color: 'rgba(0,0,0,.9)' }}>Status:</strong> Published</p>
            </div>

            <h4 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '14px' : '16px',
              fontWeight: 600,
              color: '#2b2b2b',
              marginTop: '20px',
              marginBottom: '10px',
              letterSpacing: '6px',
              textTransform: 'uppercase'
            }}>
              Key Contributions:
            </h4>
            <ul style={{
              fontFamily: "'Lora', serif",
              paddingLeft: '20px',
              margin: '10px 0',
              lineHeight: '1.6',
              color: 'rgba(0,0,0,.7)',
              fontSize: isMobile ? '14px' : '16px'
            }}>
              <li style={{ marginBottom: '10px', fontFamily: "'Lora', serif" }}>
                Co-authored and published Word2Vec4Kids (W2V4K), an interactive macOS application that introduces middle school students to foundational concepts in natural language processing.
              </li>
              <li style={{ marginBottom: '10px', fontFamily: "'Lora', serif" }}>
                Designed game-based learning modules that employ the Word2Vec model to explore word associations, semantic similarity, and vector arithmetic through playful experimentation.
              </li>
              <li style={{ marginBottom: '10px', fontFamily: "'Lora', serif" }}>
                Implemented local data collection and per-student tracking with SQLite, then analyzed interaction logs, survey responses, and performance metrics in Python to evaluate learning outcomes.
              </li>
            </ul>
          </motion.div>

          {/* Technical Skills */}
          <motion.div 
            style={{
              background: '#f0f6ff',
              borderRadius: '8px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              border: '1px solid #e5e5e5',
              marginBottom: '30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
          >
            <h2 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '2px solid #e5e5e5',
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
                  fontFamily: "'Roboto Mono', sans-serif",
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 600,
                  color: '#2b2b2b',
                  marginBottom: '10px',
                  letterSpacing: '6px',
                  textTransform: 'uppercase'
                }}>
                  Machine Learning & AI
                </h4>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: isMobile ? '14px' : '16px',
                  lineHeight: '1.6',
                  color: 'rgba(0,0,0,.7)',
                  margin: 0
                }}>
                  PyTorch, TensorFlow, scikit-learn, RLlib, LangChain, AutoGen, Hugging Face, MLflow, Jupyter
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontFamily: "'Roboto Mono', sans-serif",
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 600,
                  color: '#2b2b2b',
                  marginBottom: '10px',
                  letterSpacing: '6px',
                  textTransform: 'uppercase'
                }}>
                  Distributed Systems & Cloud
                </h4>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: isMobile ? '14px' : '16px',
                  lineHeight: '1.6',
                  color: 'rgba(0,0,0,.7)',
                  margin: 0
                }}>
                  Kubernetes, Docker, AWS, GCP, Azure, Kafka, Linux
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontFamily: "'Roboto Mono', sans-serif",
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 600,
                  color: '#2b2b2b',
                  marginBottom: '10px',
                  letterSpacing: '6px',
                  textTransform: 'uppercase'
                }}>
                  Programming Languages
                </h4>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: isMobile ? '14px' : '16px',
                  lineHeight: '1.6',
                  color: 'rgba(0,0,0,.7)',
                  margin: 0
                }}>
                  Python, Java, C, TypeScript, JavaScript, Swift, SQL, LaTeX
                </p>
              </div>
              
              <div>
                <h4 style={{
                  fontFamily: "'Roboto Mono', sans-serif",
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: 600,
                  color: '#2b2b2b',
                  marginBottom: '10px',
                  letterSpacing: '6px',
                  textTransform: 'uppercase'
                }}>
                  Research Concepts
                </h4>
                <p style={{
                  fontFamily: "'Lora', serif",
                  fontSize: isMobile ? '14px' : '16px',
                  lineHeight: '1.6',
                  color: 'rgba(0,0,0,.7)',
                  margin: 0
                }}>
                  Multi-Agent Systems, Scalable AI Infrastructure, Distributed Systems, Reinforcement Learning, RAG Pipelines
                </p>
              </div>
            </div>
          </motion.div>

          {/* Education Background */}
          <motion.div 
            style={{
              background: '#ffffff',
              borderRadius: '8px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              border: '1px solid #e5e5e5',
              marginBottom: '30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.7}
          >
            <h2 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.6rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginBottom: '20px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              borderBottom: '2px solid #e5e5e5',
              paddingBottom: '10px'
            }}>
              Education
            </h2>
            
            <div style={{
              marginTop: '20px'
            }}>
              <h3 style={{
                fontFamily: "'Roboto Mono', sans-serif",
                fontSize: isMobile ? '1.2rem' : '1.4rem',
                fontWeight: 600,
                color: '#2b2b2b',
                marginBottom: '10px',
                lineHeight: '1.3'
              }}>
                The University of Texas at San Antonio
              </h3>
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: isMobile ? '14px' : '16px',
                color: 'rgba(0,0,0,.7)',
                margin: '5px 0',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'rgba(0,0,0,.9)' }}>Triple Major, Honors College Scholar</strong>
              </p>
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: isMobile ? '14px' : '16px',
                color: 'rgba(0,0,0,.7)',
                margin: '5px 0',
                lineHeight: '1.6'
              }}>
                August 2022 – May 2026
              </p>
              <ul style={{
                fontFamily: "'Lora', serif",
                paddingLeft: '20px',
                margin: '15px 0',
                lineHeight: '1.6',
                color: 'rgba(0,0,0,.7)',
                fontSize: isMobile ? '14px' : '16px'
              }}>
                <li style={{ fontFamily: "'Lora', serif" }}>Bachelor of Science in Computer Science</li>
                <li style={{ fontFamily: "'Lora', serif" }}>Bachelor of Science in Mathematics of Data & Computing</li>
                <li style={{ fontFamily: "'Lora', serif" }}>Bachelor of Science in Software Engineering</li>
              </ul>
              <p style={{
                fontFamily: "'Lora', serif",
                fontSize: isMobile ? '14px' : '16px',
                color: 'rgba(0,0,0,.7)',
                margin: '10px 0 0 0',
                lineHeight: '1.6'
              }}>
                <strong style={{ color: 'rgba(0,0,0,.9)' }}>Overall GPA:</strong> 3.70
              </p>
            </div>
          </motion.div>

          {/* Contact for Collaboration */}
          <motion.div 
            style={{
              background: '#f0f6ff',
              borderRadius: '8px',
              padding: isMobile ? '30px 20px' : '50px 40px',
              border: '1px solid #e5e5e5',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
          >
            <h2 style={{
              fontFamily: "'Roboto Mono', sans-serif",
              fontSize: isMobile ? '1.3rem' : '1.5rem',
              fontWeight: 600,
              color: '#2b2b2b',
              marginBottom: '15px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              Interested in Collaboration?
            </h2>
            <p style={{
              fontFamily: "'Lora', serif",
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.6',
              margin: '0 0 20px 0',
              color: 'rgba(0,0,0,.7)'
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
                  fontFamily: "'Lora', serif",
                  color: 'rgba(0,0,0,.9)',
                  textDecoration: 'none',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '12px 24px',
                  background: '#ffffff',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f6ff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Email: yash.verma@my.utsa.edu
              </a>
              <a 
                href="https://scholar.google.com/citations?user=sOcV2JEAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Lora', serif",
                  color: 'rgba(0,0,0,.9)',
                  textDecoration: 'none',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '12px 24px',
                  background: '#ffffff',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f6ff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                Google Scholar
              </a>
              <a 
                href="https://orcid.org/0009-0009-8210-464X"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Lora', serif",
                  color: 'rgba(0,0,0,.9)',
                  textDecoration: 'none',
                  fontSize: isMobile ? '14px' : '16px',
                  padding: '12px 24px',
                  background: '#ffffff',
                  borderRadius: '6px',
                  border: '1px solid #e5e5e5',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#f0f6ff';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#ffffff';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                ORCID Profile
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

