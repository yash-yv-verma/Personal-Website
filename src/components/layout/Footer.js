import { motion } from 'framer-motion';
import { useAnimations } from '../../hooks/useAnimations';

export default function Footer() {
  const { fadeInUp } = useAnimations();

  return (
    <footer>
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        custom={0.4}
      >
        <p>Copyright &copy; 2025 Yash Verma</p>
        <ul className="social-icon">
          <li>
            <a target="_blank" href="https://github.com/yash-yv-verma" className="fa fa-github"></a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/-yv/" className="fa fa-linkedin"></a>
          </li>
        </ul>
      </motion.div>
      
      <style jsx>{`
        footer {
          background: #222;
          color: #fff;
          padding: 160px 0 120px 0 !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          width: 100%;
        }
        .social-icon {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          text-align: center;
          width: 100%;
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .social-icon li {
          display: inline-block;
          margin: 0 8px;
          float: none;
        }
        p {
          margin-bottom: 20px;
          color: #fff;
        }
      `}</style>
    </footer>
  );
} 