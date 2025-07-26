import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';

const workExperience = [
  {
    company: "Udemy Inc.",
    position: "Software Engineering Intern — Design Systems Engineering Team",
    location: "Austin, TX (Hybrid)",
    period: "June 2025 - Present",
    responsibilities: [
      "Developed and migrated scalable <b>React</b> components for Udemy's design system, enhancing i18n, RTL, and a11y support for <b>50M+ learners</b>; integrated Markdown, LaTeX, and KaTeX rendering across <b>250,000+ courses</b>.",
      "Supported full-stack integration with Django services, contributing to backend pipelines and deployment workflows using Kubernetes and Docker on <b>AWS EKS</b>.",
      "Exercised leadership and collaboration, contributing in <b>Agile</b> sprints via Jira, documenting in Storybook/MDX, and coordinating across teams via Confluence and <b>GitHub</b> workflows."
    ]
  },
  {
    company: "AT&T Inc.",
    position: "Software Engineering Extern - Technology Academy",
    location: "Remote",
    period: "June 2024 - July 2024",
    responsibilities: [
      "Gained experience with Agile frameworks (Scrum, Kanban, Scrumban, and XP), leveraging adaptability to drive efficient and collaborative project management and software development.",
      "Acquired and applied various modern technologies including RESTful APIs, Web Services, Cloud Computing, Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), understanding their implementation and practical usage within AT&T's ecosystem.",
      "Gained a deep understanding of <b>Machine Learning and AI</b>, including the use of machine learning algorithms and the implications of 5G Networks."
    ]
  },
  {
    company: "The University of Texas at San Antonio",
    position: "Computer Science Tutor",
    location: "San Antonio, TX",
    period: "January 2024 - Present",
    responsibilities: [
      "Mentored 300+ students in Software Engineering, Applications Programming, Systems Programming, Object-Oriented Programming, Programming 2, and Programming 1, demonstrating strong communication skills.",
      "Developed personalized strategies, helping 90% of students successfully debug and complete projects while deepening their understanding of data structures, algorithms, and system-level programming.",
      "Enhanced students' proficiency in Java, Python, and C, contributing to a 25% improvement in assignment completion rates and promoting best practices in software development, version control, and testing."
    ]
  }
];

export default function WorkSection({ backgroundColor = '#fff' }) {
  const { fadeInUp } = useAnimations();

  return (
    <Parallax y={[-3, 3]} tagouter="section" id="work" className="parallax-section">
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
            <h2>My Experience</h2>
          </div>
          <ul className="timeline">
            {workExperience.map((job, index) => (
              <li key={index}>
                <motion.div 
                  className="timeline-content" 
                  variants={fadeInUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  custom={0.3 + index * 0.1}
                >
                  <h4>{job.company}</h4>
                  <em>
                    <span>{job.position}</span>
                    <span> | </span>
                    <span>{job.location}</span>
                    <span> | </span>
                    <span>{job.period}</span>
                  </em>
                  <ul className="responsibilities">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} dangerouslySetInnerHTML={{ __html: responsibility }} />
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
    </Parallax>
  );
} 