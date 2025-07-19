import { motion } from 'framer-motion';
import { useAnimations } from '../../hooks/useAnimations';

export default function Timeline({ 
  items = [], 
  renderItem = null,
  className = "timeline" 
}) {
  const { fadeInUp } = useAnimations();

  const defaultRenderItem = (item, index) => (
    <motion.div 
      className="timeline-content" 
      variants={fadeInUp} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true }} 
      custom={0.3 + index * 0.1}
      key={index}
    >
      <h4>{item.title || item.company || item.institution}</h4>
      <em>
        {item.position && <span>{item.position}</span>}
        {item.degree && <span>{item.degree}</span>}
        {(item.position || item.degree) && item.location && <span> | </span>}
        {item.location && <span>{item.location}</span>}
        {(item.position || item.degree || item.location) && item.period && <span> | </span>}
        {item.period && <span>{item.period}</span>}
      </em>
      
      {item.major && (
        <p className="timeline-desc">
          <b>Major:</b> {item.major}
        </p>
      )}
      
      {item.coursework && (
        <p className="timeline-desc">
          <b>Relevant coursework:</b> {item.coursework}
        </p>
      )}
      
      {item.extracurricular && (
        <p className="timeline-desc">
          <b>Extra Curricular:</b> {item.extracurricular}
        </p>
      )}
      
      {item.awards && (
        <p className="timeline-desc">
          <b>Awards:</b> {item.awards}
        </p>
      )}
      
      {item.responsibilities && (
        <ul className="responsibilities">
          {item.responsibilities.map((responsibility, respIndex) => (
            <li key={respIndex} dangerouslySetInnerHTML={{ __html: responsibility }} />
          ))}
        </ul>
      )}
      
      {item.description && (
        <p className="timeline-desc">{item.description}</p>
      )}
    </motion.div>
  );

  return (
    <>
      <ul className={className}>
        {items.map((item, index) => (
          <li key={index}>
            {renderItem ? renderItem(item, index) : defaultRenderItem(item, index)}
          </li>
        ))}
      </ul>
      
      <style jsx>{`
        .timeline {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .timeline li {
          margin-bottom: 40px;
          padding: 30px;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .timeline-content h4 {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #333;
        }
        .timeline-content em {
          color: #666;
          font-style: italic;
          margin-bottom: 15px;
          display: block;
        }
        .timeline-desc {
          font-size: 14px;
          color: rgba(0,0,0,.6);
          line-height: 1.6em;
          font-family: inherit;
          margin-bottom: 10px;
        }
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
          background: none;
          padding: 0;
          box-shadow: none;
          border-radius: 0;
        }
      `}</style>
    </>
  );
} 