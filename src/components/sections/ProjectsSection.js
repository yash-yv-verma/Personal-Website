import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  // Animation variants for smoother, optimized animations
  const fadeInUp = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <>
      {/* PROJECTS SECTION */}
      <section id="projects" className="parallax-section">
        <motion.div 
          className="container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <h2>Projects</h2>
            <p>Click on any project to learn more</p>
          </motion.div>
          <div className="projects-grid">
            
            <motion.a 
              target="_blank" 
              href="https://github.com/yash-yv-verma/Math.AI/"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={1}
            >
              <div className="service-thumb">
                <i className="fa fa-superscript"></i>
                <h3>Math.AI</h3>
                <p>Orchestrated the system design of a seamless and scalable AI chatbot web app exploiting AWS EC2 Auto Scaling, API Gateway, and DynamoDB, ensuring uptime and responsiveness by 100%.</p>
                <div className="skill-container">
                  <button className="skill"><h6>NextJS</h6></button>
                  <button className="skill"><h6>AWS</h6></button>
                </div>
              </div>
            </motion.a>

            <motion.a 
              target="_blank" 
              href="https://github.com/yash-yv-verma/W2V4K"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={2}
            >
              <div className="service-thumb">
                <i className="fa fa-cogs"></i>
                <h3>Word2Vec4Kids</h3>
                <p>Created the &ldquo;Word2Vec4Kids&rdquo; macOS application to demystify Artificial Intelligence and Machine Learning concepts to students at Basis School-San Antonio (Local Middle School).</p>
                <div className="skill-container">
                  <button className="skill"><h6>Swift</h6></button>
                  <button className="skill"><h6>Python</h6></button>
                  <button className="skill"><h6>SQLite</h6></button>
                </div>
              </div>
            </motion.a>

            <motion.a 
              target="_blank" 
              href="https://github.com/markusm02/SWE.github.io"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={3}
            >
              <div className="service-thumb">
                <i className="fa fa-shopping-cart"></i>
                <h3>Clothing E-commerce</h3>
                <p>Managed a scalable React front-end hosted on an AWS EC2 instance, providing a dynamic user experience for a clothing e-commerce platform, utilizing strong problem-solving and adaptability to ensure scalability.</p>
                <div className="skill-container">
                  <button className="skill"><h6>React</h6></button>
                  <button className="skill"><h6>AWS</h6></button>
                </div>
              </div>
            </motion.a>

            <motion.a 
              target="_blank" 
              href="https://github.com/anjusoman/utsaairlines.git"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={4}
            >
              <div className="service-thumb">
                <i className="fa fa-database"></i>
                <h3>Southwest Airlines Database Replica</h3>
                <p>Developed Python scripts for automated data insertion from CSV files, designed a stored procedure for dynamic ticket pricing adjustments, and implemented a trigger for automatic pilot assignments, significantly improving operational efficiency and reducing manual errors in the Airlines database system.</p>
                <div className="skill-container">
                  <button className="skill"><h6>MySQL</h6></button>
                  <button className="skill"><h6>Python</h6></button>
                </div>
              </div>
            </motion.a>

            <motion.a 
              target="_blank" 
              href="https://github.com/UTSA-CS-3443/RowdyGuide.git"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={5}
            >
              <div className="service-thumb">
                <i className="fa fa-university"></i>
                <h3>Rowdy Guide</h3>
                <p>Demonstrated advanced Java and Android Studio skills to create a comprehensive tool for UTSA students, incorporating features such as interactive campus maps, interactive RecyclerView scrolling, application navigation menu, and a user-friendly GUI to enhance campus navigation and event awareness.</p>
                <div className="skill-container">
                  <button className="skill"><h6>Java</h6></button>
                  <button className="skill"><h6>XML</h6></button>
                  <button className="skill"><h6>Gradle</h6></button>
                </div>
              </div>
            </motion.a>

            <motion.a 
              target="_blank" 
              href="https://github.com/yash-yv-verma/Personal-Website"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={6}
            >
              <div className="service-thumb">
                <i className="fa fa-user"></i>
                <h3>Personal Website</h3>
                <p>I built this website by combining two existing HTML, CSS & Javascript templates and modifying the result to fit my needs.</p>
                <div className="skill-container">
                  <button className="skill"><h6>JavaScript</h6></button>
                  <button className="skill"><h6>CSS</h6></button>
                  <button className="skill"><h6>HTML</h6></button>
                </div>
              </div>
            </motion.a>

          </div>
        </motion.div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500;700&family=Lora:wght@400;500;600;700&display=swap');
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 18px 14px;
          margin-top: 32px;
          margin-bottom: 32px;
        }
        
        .service-thumb {
          background: #23272f;
          border-radius: 4px;
          padding: 48px 32px;
          min-height: 470px;
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.08), 0 1.5px 6px 0 rgba(0,0,0,0.04);
          border: 1.5px solid #23272f;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          height: 100%;
          position: relative;
          top: 0;
          transition: all 0.4s ease-in-out, background-color 0.4s ease-in-out, transform 0.3s ease;
        }

        .service-thumb:hover {
          background: #ffffff !important;
          transform: translateY(-5px);
          border: 2px solid #303F9F !important;
          box-shadow: 0 8px 32px 0 rgba(48, 63, 159, 0.15), 0 3px 12px 0 rgba(0,0,0,0.1);
        }

        .service-thumb:hover .fa {
          color: #303F9F !important;
        }

        .service-thumb:hover h3 {
          color: #2b2b2b !important;
        }

        .service-thumb:hover p {
          color: #696969 !important;
        }

        .service-thumb .fa {
          color: #fff !important;
          font-size: 84px !important;
          margin-top: 8px !important;
          margin-bottom: 22px !important;
          transition: color 0.2s, font-size 0.2s, margin 0.2s;
          text-align: center;
          display: block;
        }

        .service-thumb h3 {
          color: #fff !important;
          margin-top: 18px;
          margin-bottom: 16px;
          font-size: 2rem;
          font-weight: 700;
          font-family: 'Poppins', 'Roboto Mono', sans-serif !important;
          letter-spacing: 0.5px;
          text-transform: none;
          transition: color 0.2s, font-size 0.2s;
        }

        .service-thumb p {
          color: #8e99a7 !important;
          font-size: 1.32rem;
          font-weight: 500;
          margin-bottom: 0.9rem;
        }

        .skill-container {
          margin-top: 20px;
        }

        .skill {
          margin-right: 10px;
          padding: 2px 7px;
          border-style: solid;
          border-radius: 2em;
          border-color: #d9d9d9;
          background: #2b2b2b;
          color: #d9d9d9;
          border-width: 1px;
        }

        .skill h6 {
          margin: 2px 2px;
          font-family: 'Poppins', sans-serif;
        }

        .skill:hover {
          border-color: #2b2b2b;
          background: #d9d9d9;
          color: #2b2b2b;
          cursor: crosshair;
        }

        .service-thumb:hover .skill {
          border-color: #fff;
          background: #000;
          color: #fff;
        }

        .service-thumb:hover .skill:hover {
          border-color: #d9d9d9;
          background: #2b2b2b;
          color: #d9d9d9;
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 10px 0;
          }
          .service-thumb {
            min-height: 300px;
            padding: 28px 10px;
          }
          .service-thumb i {
            font-size: 56px !important;
          }
          .service-thumb h3 {
            font-size: 1.25rem;
          }
          .service-thumb p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ProjectsSection; 