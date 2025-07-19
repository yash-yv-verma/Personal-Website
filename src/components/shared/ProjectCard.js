import React from 'react';

const ProjectCard = ({ icon, title, description, skills, href }) => {
  return (
    <>
      <a target="_blank" href={href} rel="noopener noreferrer">
        <div className="service-thumb">
          <i className={`fa ${icon}`}></i>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="skill-container">
            {skills && skills.map((skill, index) => (
              <button key={index} className="skill">
                <h6>{skill}</h6>
              </button>
            ))}
          </div>
        </div>
      </a>

      <style jsx global>{`
        /* Import Google Fonts exactly as original */
        @import url('https://fonts.googleapis.com/css?family=Poppins:300,400');
        @import url(https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700,300,100|Lora:400,400italic,700,700italic);

        /* Typography - EXACT from original */
        h1, h2, h3, h4, h5, h6{
          font-family: 'Roboto Mono', sans-serif;
        }
        
        h3 {
          color: #282828;
          font-size: 16px;
          line-height: 32px;
          letter-spacing: 6px;
          text-transform: uppercase;
        }

        h4 {
          color: #353535;
          font-size: 20px;
        }

        h6 {
          margin: 2px 2px;
        }

        p {
          color: #696969;
          font-size: 16px;
          font-weight: normal;
          line-height: 25px;
          letter-spacing: 0.2px;
        }

        .white-color {
          color: #f0f0f0;
        }

        /* Service Thumb - EXACT from original CSS */
        .service-thumb {
          background: #2b2b2b;
          border-radius: 5px;
          padding: 42px 22px;
          cursor: crosshair;
          position: relative;
          top: 0;
          -webkit-transition: all ease-in-out 0.4s;
          transition: all ease-in-out 0.4s;
        }

        .service-thumb:hover {
          background: #ffffff;
          top: -5px;
          border: 2px solid #303F9F;
        }

        .service-thumb:hover .fa,
        .service-thumb:hover h3 {
          color: #2b2b2b;
        }

        .service-thumb h3 {
          padding-bottom: 5px;
          color: #ffffff;
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
        }

        .skill:hover {
          border-color: #2b2b2b;
          background: #d9d9d9;
          color: #2b2b2b;
          cursor: crosshair;
        }

        .service-thumb:hover .skill {
          border-color: #2b2b2b;
          background: #d9d9d9;
          color: #2b2b2b;
        }

        .service-thumb:hover .skill:hover {
          border-color: #d9d9d9;
          background: #2b2b2b;
          color: #d9d9d9;
        }

        .service-thumb .fa {
          color: #ffffff;
          font-size: 62px;
          text-align: center;
          margin-top: 32px;
          margin-bottom: 22px;
        }
      `}</style>
    </>
  );
};

export default ProjectCard; 