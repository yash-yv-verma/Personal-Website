import Head from 'next/head';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const sectionStyles = [
  { background: '#fff' }, // Service
  { background: '#f0f6ff' }, // About
  { background: '#fff' }, // Work
  { background: '#fff' }, // Research - Fixed blue background
  { background: '#fff' }, // Projects
  { background: '#f0f6ff' }, // Extracurricular
  { background: '#fff' }, // Contact
];
const sectionPadding = { padding: '60px 0' };
const footerStyle = {
  background: '#222',
  color: '#fff',
  padding: '160px 0 120px 0 !important',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  width: '100%',
};

export default function Home() {
  // Inline sendEmail handler for the contact form
  function sendEmail(e) {
    e.preventDefault();
    const name = document.getElementById('name_field').value;
    const email = document.getElementById('email_field').value;
    const subject = document.getElementById('subject_field').value;
    const message = document.getElementById('message_area').value;
    const mailtoLink = `mailto:yashs.mbp@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  }

  // Animation variants for fade-in-up
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <ParallaxProvider>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="google-site-verification" content="fWH8xmeEzrfW56pmObDDENPOhvNHzvVaJUzJxGHtKW8" />
        <meta name="description" content="Yash Verma is a student in UTSA's class of 2026, pursuing double majors in Computer Science and Mathematics of Data & Computing. He has experience in AI software development and software engineering, and enjoys singing, painting, and exploring Boston in her free time. He is currently looking for summer internships and other part-time opportunities." />
        <meta name="keywords" content="Yash Verma, UTSA, University of Texas at San Antonio, MIT, Massachusetts Institute of Technology, student, computer science, math, mathematics, programming, software engineering" />
        <meta name="resource-type" content="document" />
        <meta name="revisit-after" content="5 days" />
        <meta name="classification" content="Personal" />
        <meta name="robots" content="ALL" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="Safe For Kids" />
        <meta name="copyright" content="2025, Yash Verma" />
        <meta name="author" content="Yash Verma" />
        <title>Yash Verma's Personal Website</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <style>{`
          @import url('https://fonts.googleapis.com/css?family=Poppins:600,700&display=swap');
          .home-thumb { margin-top: 60px; }
          #contact { background: #fff !important; }
          #contact .form-control {
            border: 1px solid #ccc !important;
            border-radius: 2px !important;
            box-shadow: none !important;
            background: #fff !important;
            height: 38px !important;
            font-size: 15px !important;
            padding: 6px 10px !important;
          }
          #contact textarea.form-control {
            min-height: 80px !important;
            height: auto !important;
            resize: vertical;
          }
          #contact .form-control:focus {
            border-color: #888 !important;
            outline: none !important;
          }
          footer {
            padding: 180px 0 60px 0 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            width: 100%;
          }
          footer .social-icon {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 100%;
            margin: 0;
            padding: 0;
          }
          footer .social-icon li {
            display: inline-block;
            margin: 0 8px;
            float: none;
          }
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
            transition: box-shadow 0.2s, border-radius 0.2s;
          }
          .service-thumb i {
            color: #fff !important;
            font-size: 84px !important;
            margin-top: 8px !important;
            margin-bottom: 22px !important;
            transition: color 0.2s, font-size 0.2s, margin 0.2s;
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
          .service-thumb:hover i,
          .service-thumb:hover h3 {
            color: #23272f !important;
          }
          .service-thumb:hover .btn-custom {
            background: #000 !important;
            color: #fff !important;
            border-color: #000 !important;
          }
          .skill-container {
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
          }
          .skill {
            background: #f0f6ff;
            color: #303F9F;
            border: 1px solid #dbeafe;
            border-radius: 2em;
            font-size: 0.95em;
            padding: 2px 12px;
            margin: 0;
            font-weight: 600;
            transition: background 0.2s, color 0.2s;
          }
          .skill:hover {
            background: #303F9F;
            color: #fff;
            border-color: #303F9F;
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
          .projects-grid .service-thumb:hover .btn-custom {
            background: #000 !important;
            color: #fff !important;
            border-color: #000 !important;
            transition: background 0.2s, color 0.2s, border-color 0.2s;
          }
          .projects-grid .service-thumb:hover .skill {
            background: #000 !important;
            color: #fff !important;
            border-color: #000 !important;
            transition: background 0.2s, color 0.2s, border-color 0.2s;
          }
        `}</style>
      </Head>
      {/* HOME SECTION */}
      <Parallax y={[-20, 20]} tagouter="section" id="home" className="parallax-section">
        <div className="container" style={{ ...sectionPadding }}>
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
                <motion.div variants={fadeInUp} initial="hidden" animate="visible" custom={1.0}>
                  <ScrollLink
                    to="service"
                    smooth={true}
                    duration={500}
                    offset={-49}
                    className="btn btn-default section-btn"
                    style={{ cursor: 'pointer', display: 'inline-block' }}
                  >
                    Discover more
                  </ScrollLink>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      {/* SERVICE SECTION */}
      <Parallax y={[-10, 10]} tagouter="section" id="service" className="parallax-section">
        <motion.div className="container" style={{ ...sectionStyles[0], ...sectionPadding }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
          <div className="row">
            <div className="col-md-4 col-sm-12 col-xs-12">
              <ul className="info-list">
                <li><strong>Name:</strong> <span>Yash Verma</span></li>
                <li><strong>School:</strong> <span>The University of Texas at San Antonio</span></li>
                <li><strong>Hometown:</strong> <span>Austin, TX</span></li>
                <li>
                  <ul className="social-icon">
                    <li><a target="_blank" href="https://github.com/yash-yv-verma" className="fa fa-github"></a></li>
                    <li><a target="_blank" href="https://www.linkedin.com/in/-yv/" className="fa fa-linkedin"></a></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-sm-12 col-xs-12">
              <div className="about-text">
                <p>I am a dedicated junior majoring in Computer Science and Mathematics of Data & Computing at The University of Texas at San Antonio, Honors College. My passion lies in exploring the realm of quantum computing, particularly in quantum software. Currently, I'm immersed in writing a research paper on quantum communication, aiming to advance innovative protocols for secure data transmission.</p>
                <p>As a UG Researcher in CS-CURE, I'm actively delving into the realm of two-factor encryption, aiming to bridge the gap between traditional RSA encryption and quantum key distribution. Recognizing the challenges of immediately transitioning away from RSA, my research focuses on leveraging QKD as a supplementary layer of security within our encryption systems. Additionally, my involvement in an Independent Study centers on the development of AI tools tailored for children, with the goal of demystifying complex concepts in an engaging and accessible manner.</p>
                <p>Outside academia, I serve as a Computer Science Tutor at the University of Texas, San Antonio, where I assist students in understanding programming concepts and overcoming challenges in various courses.</p>
              </div>
              <div className="about-btns">
                <a target="_blank" href="images/Resume.pdf" className="btn-custom btn-color" download="Yash Verma Resume">Download Resume</a>
              </div>
            </div>
          </div>
        </motion.div>
      </Parallax>
      {/* ABOUT SECTION */}
      <Parallax y={[-10, 10]} tagouter="section" id="about" className="parallax-section">
        <motion.div className="container" style={{ ...sectionStyles[1], ...sectionPadding }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
          <div className="row">
            <motion.div className="section-title" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <h2>My Education</h2>
            </motion.div>
            <ul className="timeline">
              <li>
                <motion.div className="timeline-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                  <h4>The University of Texas at San Antonio</h4>
                  <em>
                    <span>Bachelors of Science</span>
                    <span> | </span>
                    <span>2022-Present</span>
                  </em>
                  <p><b>Major:</b> Computer Science and Mathematics of Data & Computing</p>
                  <p><b>Relevant coursework:</b> Enterprise Software Engineering, Web Technologies Software Engineering, User Interface, Data Science, Algebra and Number Systems, Analysis of Algorithms, Application Programming, Systems Programming, Database Systems, Computer Organization, Web Technologies, Discrete Mathematical Structures, Data Structures, Mathematical Foundations of Computer Science, Linear Algebra</p>
                  <p><b>Awards:</b> Dean's List (Spring 2024); Honor Roll (Fall 2022, Spring 2023, Fall 2023)</p>
                </motion.div>
              </li>
              <li>
                <motion.div className="timeline-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
                  <h4>Hendrickson High School</h4>
                  <em>
                    <span>High School Degree</span>
                    <span> | </span>
                    <span>2018-2022</span>
                  </em>
                  <p><b>Extra Curricular:</b> Varsity Wrestling, Code2College, Science Olympiad, UIL Computer Science</p>
                  <p><b>Awards:</b> High Honors</p>
                </motion.div>
              </li>
            </ul>
          </div>
        </motion.div>
      </Parallax>
      {/* WORK SECTION */}
      <Parallax y={[-10, 10]} tagouter="section" id="work" className="parallax-section">
        <motion.div className="container" style={{ ...sectionStyles[2], ...sectionPadding }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
          <div className="row">
            <motion.div className="section-title" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <h2>My Experience</h2>
            </motion.div>
            <ul className="timeline">
              <li>
                <motion.div className="timeline-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                  <h4>Udemy Inc.</h4>
                  <em>
                    <span>Software Engineering Intern — Design Systems Engineering Team</span>
                    <span> | </span>
                    <span>Austin, TX (Hybrid)</span>
                    <span> | </span>
                    <span>June 2025 - Present</span>
                  </em>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>Developed and migrated scalable <b>React</b> components for Udemy's design system, enhancing i18n, RTL, and a11y support for <b>50M+ learners</b>; integrated Markdown, LaTeX, and KaTeX rendering across <b>250,000+ courses</b>.</li>
                    <li>Supported full-stack integration with Django services, contributing to backend pipelines and deployment workflows using Kubernetes and Docker on <b>AWS EKS</b>.</li>
                    <li>Exercised leadership and collaboration, contributing in <b>Agile</b> sprints via Jira, documenting in Storybook/MDX, and coordinating across teams via Confluence and <b>GitHub</b> workflows.</li>
                  </ul>
                </motion.div>
              </li>
              <li>
                <motion.div className="timeline-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
                  <h4>AT&T Inc.</h4>
                  <em>
                    <span>Software Engineering Extern - Technology Academy</span>
                    <span> | </span>
                    <span>Remote</span>
                    <span> | </span>
                    <span>June 2024 - July 2024</span>
                  </em>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>Gained experience with Agile frameworks (Scrum, Kanban, Scrumban, and XP), leveraging adaptability to drive efficient and collaborative project management and software development.</li>
                    <li>Acquired and applied various modern technologies including RESTful APIs, Web Services, Cloud Computing, Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), understanding their implementation and practical usage within AT&T's ecosystem.</li>
                    <li>Gained a deep understanding of <b>Machine Learning and AI</b>, including the use of machine learning algorithms and the implications of 5G Networks.</li>
                  </ul>
                </motion.div>
              </li>
              <li>
                <motion.div className="timeline-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.5}>
                  <h4>The University of Texas at San Antonio</h4>
                  <em>
                    <span>Computer Science Tutor</span>
                    <span> | </span>
                    <span>San Antonio, TX</span>
                    <span> | </span>
                    <span>January 2024 - Present</span>
                  </em>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>Mentored 300+ students in Software Engineering, Applications Programming, Systems Programming, Object-Oriented Programming, Programming 2, and Programming 1, demonstrating strong communication skills.</li>
                    <li>Developed personalized strategies, helping 90% of students successfully debug and complete projects while deepening their understanding of data structures, algorithms, and system-level programming.</li>
                    <li>Enhanced students' proficiency in Java, Python, and C, contributing to a 25% improvement in assignment completion rates and promoting best practices in software development, version control, and testing.</li>
                  </ul>
                </motion.div>
              </li>
            </ul>
          </div>
        </motion.div>
      </Parallax>
      {/* RESEARCH SECTION */}
      <Parallax y={[-10, 10]} tagouter="section" id="research" className="parallax-section">
        <motion.div className="container" style={{ ...sectionStyles[3], ...sectionPadding }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
          <div className="row">
            <motion.div className="section-title" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <h2>Research Experience</h2>
            </motion.div>
            <ul className="timeline">
              <li>
                <motion.div className="timeline-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                  <h4>Word2Vec4Kids – EAAI 2025 Publication</h4>
                  <em>
                    <span>Undergraduate Researcher, UTSA Department of Computer Science</span>
                    <span> | </span>
                    <span>San Antonio, TX</span>
                    <span> | </span>
                    <span>January 2024 - February 2025</span>
                  </em>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>Engaging in an Independent Study supervised by Prof. Martin, developing AI tools for children, and co-authoring a collaborative paper summarizing project objectives and outcomes.</li>
                    <li>Teamed up to create the "Word2Vec4Kids" macOS app using Xcode, Swift, and SwiftUI, integrating interactive elements to illustrate Word2Vec's role in computer comprehension of English.</li>
                    <li>Aiming to demystify AI concepts in an engaging manner for the targeted study audience: students at Basis School-San Antonio.</li>
                  </ul>
                </motion.div>
              </li>
              <li>
                <motion.div className="timeline-content" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
                  <h4>A Step Towards Quantum-safe Encryption</h4>
                  <em>
                    <span>CURE Researcher, UTSA Department of Computer Science</span>
                    <span> | </span>
                    <span>San Antonio, TX</span>
                    <span> | </span>
                    <span>January 2024 - May 2024</span>
                  </em>
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>Independently conducting research within the Course-based Undergraduate Research Experience (CS-CURE) course under the leadership of Prof. Fernandez at UTSA.</li>
                    <li>Exploring alternative methods for distributing Bell pairs beyond satellite-based systems, developing innovative protocols for secure data transmission in Quantum Computing and Communication research.</li>
                    <li>Collaborating with Prof. Gibson-Lopez (Quantum Algorithms) and Prof. Fernandez through real-time discussions and experiments to advance research objectives.</li>
                  </ul>
                </motion.div>
              </li>
            </ul>
          </div>
        </motion.div>
      </Parallax>
      {/* PROJECTS SECTION */}
      <Parallax y={[-10, 10]} tagouter="section" id="projects" className="parallax-section">
        <motion.div className="container" style={{ ...sectionStyles[4], ...sectionPadding }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
          <div className="section-title" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
            <h2>Projects</h2>
            <p>Click on any project to learn more</p>
          </div>
          <div className="projects-grid">
            <a target="_blank" href="https://github.com/yash-yv-verma/Math.AI/">
              <div className="service-thumb">
                <i className="fa fa-superscript"></i>
                <h3>Math.AI</h3>
                <p>Orchestrated the system design of a seamless and scalable AI chatbot web app exploiting AWS EC2 Auto Scaling, API Gateway, and DynamoDB, ensuring uptime and responsiveness by 100%.</p>
                <div className="skill-container">
                  <button className="skill"><h6>NextJS</h6></button>
                  <button className="skill"><h6>AWS</h6></button>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/yash-yv-verma/W2V4K">
              <div className="service-thumb">
                <i className="fa fa-cogs"></i>
                <h3>Word2Vec4Kids</h3>
                <p>Created the "Word2Vec4Kids" macOS application to demystify Artificial Intelligence and Machine Learning concepts to students at Basis School-San Antonio (Local Middle School).</p>
                <div className="skill-container">
                  <button className="skill"><h6>Swift</h6></button>
                  <button className="skill"><h6>Python</h6></button>
                  <button className="skill"><h6>SQLite</h6></button>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/markusm02/SWE.github.io">
              <div className="service-thumb">
                <i className="fa fa-shopping-cart"></i>
                <h3>Clothing E-commerce</h3>
                <p>Managed a scalable React front-end hosted on an AWS EC2 instance, providing a dynamic user experience for a clothing e-commerce platform, utilizing strong problem-solving and adaptability to ensure scalability.</p>
                <div className="skill-container">
                  <button className="skill"><h6>React</h6></button>
                  <button className="skill"><h6>AWS</h6></button>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/anjusoman/utsaairlines.git">
              <div className="service-thumb">
                <i className="fa fa-database"></i>
                <h3>Southwest Airlines Database Replica</h3>
                <p>Developed Python scripts for automated data insertion from CSV files, designed a stored procedure for dynamic ticket pricing adjustments, and implemented a trigger for automatic pilot assignments, significantly improving operational efficiency and reducing manual errors in the Airlines database system.</p>
                <div className="skill-container">
                  <button className="skill"><h6>MySQL</h6></button>
                  <button className="skill"><h6>Python</h6></button>
                </div>
              </div>
            </a>
            <a target="_blank" href="https://github.com/UTSA-CS-3443/RowdyGuide.git">
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
            </a>
            <a target="_blank" href="https://github.com/yash-yv-verma/Personal-Website">
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
            </a>
          </div>
        </motion.div>
      </Parallax>
      {/* EXTRACURRICULAR SECTION */}
      <Parallax y={[-10, 10]} tagouter="section" id="extracurricular" className="parallax-section">
        <motion.div className="container" style={{ ...sectionStyles[5], ...sectionPadding }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
          <div className="row">
            <motion.div className="section-title" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
              <h2>My Extracurriculars</h2>
            </motion.div>
            <div className="row">
              <div className="col-md-4 col-sm-8">
                <div className="about-image-thumb">
                  <img src="images/acm.jpg" className="img-responsive" alt="about image" />
                </div>
              </div>
              <div className="col-md-8 col-sm-12">
                <div className="about-thumb">
                  <motion.div className="section-title" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                    <a target="_blank" href="https://rowdycreators.org/"><h2>Rowdy Creators</h2></a>
                    <br />
                    <p>Leading a full rebrand and organizational revamp to boost engagement and visibility; introduced weekly sessions with industry professionals, increasing member participation by 40% and project activity across 7 active teams.</p>
                    <p>Previously served as CTO, providing technical mentorship across cloud, AI/ML, and full-stack development; maintained a Next.js website with 99.9% uptime, supporting 400+ users and reducing load time by 25%.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Parallax>
      {/* CONTACT SECTION */}
      <Parallax y={[-10, 10]} tagouter="section" id="contact" className="parallax-section">
        <motion.div className="container" style={{ ...sectionStyles[6], ...sectionPadding }} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <motion.div className="section-title" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}>
                <h2>Get in touch</h2>
                <p>If you want to contact me, fill out the following form and your email client will open to send me an email directly!</p>
              </motion.div>
            </div>
            <div className="col-md-7 col-sm-10">
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.3}>
                <form id="contact-form" onSubmit={sendEmail} action="javascript:void(0);">
                  <div id="contact-form-result"></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" id="name_field" required />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="email" className="form-control" placeholder="Email" id="email_field" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Subject" id="subject_field" required />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" placeholder="Message" id="message_area" rows={5} required></textarea>
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn-custom btn-color">
                      Send Message
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Parallax>
      {/* FOOTER SECTION */}
      <footer style={footerStyle}>
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.4}>
          <p>Copyright &copy; 2025 Yash Verma</p>
          <ul className="social-icon" style={{ textAlign: 'center', padding: 0, margin: 0 }}>
            <li><a target="_blank" href="https://github.com/yash-yv-verma" className="fa fa-github"></a></li>
            <li><a target="_blank" href="https://www.linkedin.com/in/-yv/" className="fa fa-linkedin"></a></li>
          </ul>
        </motion.div>
      </footer>
    </ParallaxProvider>
  );
} 