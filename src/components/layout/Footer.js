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
            <a target="_blank" href="https://github.com/yash-yv-verma">
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/-yv/">
              <i className="fab fa-linkedin"></i>
            </a>
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
        .social-icon a {
          color: #222 !important;
          font-size: 24px;
          width: 50px;
          height: 50px;
          border: 2px solid #fff;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          transform: translateY(-3px);
        }
        .social-icon .fab {
          color: #222 !important;
          font-size: 24px !important;
          display: inline-block !important;
        }
        p {
          margin-bottom: 20px;
          color: #fff;
        }
      `}</style>
    </footer>
  );
} 