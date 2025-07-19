import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import { useAnimations } from '../../hooks/useAnimations';

export default function ContactSection({ backgroundColor = '#fff' }) {
  const { fadeInUp } = useAnimations();

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

  return (
    <Parallax y={[-10, 10]} tagouter="section" id="contact" className="parallax-section">
      <motion.div 
        className="container" 
        variants={fadeInUp} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        custom={0.2}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>Get in touch</h2>
              <p>If you want to contact me, fill out the following form and your email client will open to send me an email directly!</p>
            </div>
          </div>
          <div className="col-md-7 col-sm-10">
            <motion.div 
              variants={fadeInUp} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true }} 
              custom={0.3}
            >
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
      
      <style jsx>{`
        .form-group {
          margin-bottom: 20px;
        }
        .text-center {
          text-align: center;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -15px;
        }
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
          padding: 0 15px;
        }
        .col-md-7 {
          flex: 0 0 58.333%;
          max-width: 58.333%;
        }
        .col-md-12 {
          flex: 0 0 100%;
          max-width: 100%;
        }
        @media (max-width: 768px) {
          .col-md-6, .col-md-7, .col-md-12 {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0;
          }
        }
      `}</style>
    </Parallax>
  );
} 