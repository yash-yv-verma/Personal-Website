import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '../../components/shared/SEOHead';
import Navigation from '../../components/layout/Navigation';
import { getAllEpisodes } from '../../data/episodesData';
import { useAnimations } from '../../hooks/useAnimations';

const btsStructuredData = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "name": "Beyond the Stack",
  "description": "Deep conversations about technology, development, and the future of software engineering with industry leaders.",
  "url": "https://yash-verma.com/bts/",
  "author": {
    "@type": "Person",
    "name": "Yash Verma"
  },
  "publisher": {
    "@type": "Person",
    "name": "Yash Verma"
  },
  "inLanguage": "en",
  "copyrightYear": 2025,
  "genre": "Technology",
  "keywords": "technology, software engineering, programming, AI, machine learning, career development",
  "sameAs": [
    "https://www.youtube.com/@beyond-the-stack",
    "https://open.spotify.com/show/770A9NCMDj1cSXpMfsv5o2",
    "https://podcasts.apple.com/us/podcast/beyond-the-stack/id1836825875"
  ]
};

export default function BeyondTheStack() {
  const episodes = getAllEpisodes();
  const { fadeInUp } = useAnimations();

  // Custom slide animations for episode cards
  const slideInFromLeft = {
    hidden: { 
      opacity: 0, 
      x: -100,
      y: 20
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const slideInFromRight = {
    hidden: { 
      opacity: 0, 
      x: 100,
      y: 20
    },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: custom,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  const slideInHeaderFromLeft = {
    hidden: { 
      opacity: 0, 
      x: -80
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <SEOHead 
        title="Beyond the Stack Podcast | Yash Verma | Technology & Software Engineering Conversations"
        description="Beyond the Stack is a technology podcast hosted by Yash Verma featuring deep conversations with industry leaders about software development, AI, machine learning, and career growth. Subscribe on YouTube, Spotify, and Apple Podcasts."
        canonical="https://yash-verma.com/bts/"
        keywords="Beyond the Stack, Yash Verma, Technology Podcast, Software Engineering, AI Podcast, Machine Learning, Programming, Career Development, Industry Leaders, Tech Interviews, YouTube Podcast, Spotify Podcast, Apple Podcasts, UTSA, Computer Science, Mathematics, KubeLLM, Agentic AI, Research, Student Podcast, Tech Community"
        ogImage="https://yash-verma.com/images/homebg.jpeg"
        structuredData={btsStructuredData}
      />

      <div className="podcast-page">
        <div className="hero-section">
          <div className="container">
            <motion.div 
              className="hero-content"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.1}
            >
              <h1 style={{
                fontFamily: "'Orbitron', 'Space Grotesk', monospace",
                fontWeight: 700,
                fontSize: "2.5rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(255, 255, 255, 0.3)",
                margin: 0,
                textAlign: "center"
              }}>Beyond the Stack</h1>
            </motion.div>
          </div>
        </div>

        <div className="episodes-section">
          <div className="container">
            <motion.div 
              className="section-header"
              variants={slideInHeaderFromLeft}
              initial="hidden"
              animate="visible"
            >
              <h2 style={{
                fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "1.6rem",
                fontWeight: 600,
                margin: "0 0 12px 0",
                color: "#9ca3af",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                opacity: 0.9,
                textAlign: "left"
              }}>Latest Episodes</h2>
              <p style={{
                fontSize: "1.2rem",
                color: "#a1a1aa",
                maxWidth: "600px",
                margin: "0",
                lineHeight: "1.5",
                fontWeight: 400,
                textAlign: "left"
              }}>Deep conversations about technology, development, and the future of software engineering.</p>
            </motion.div>

            <div className="episodes-grid">
              {episodes.map((episode, index) => (
                <motion.div
                  key={episode.id}
                  className="episode-card"
                  variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={index * 0.1 + 0.15}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <Link href={`/bts/${episode.id}`} className="episode-link">
                    <div className="episode-thumbnail">
                      <img src={episode.thumbnail} alt={episode.title} />
                                              <div className="play-overlay">
                          <div className="play-button">
                            ▶
                          </div>
                        </div>
                      <div className="episode-duration">{episode.duration}</div>
                    </div>
                    <div className="episode-content">
                      <div className="episode-meta">
                        <span className="episode-date">{formatDate(episode.publishDate)}</span>
                      </div>
                      <h3 className="episode-title">EP. {episode.episodeNumber} - {episode.title}</h3>
                      <p className="episode-description">{episode.description}</p>
                      <div className="episode-tags">
                        {episode.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag" style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#cbd5e1",
                            background: "linear-gradient(135deg, #312e81, #1e1b4b)",
                            padding: "6px 12px",
                            borderRadius: "4px",
                            marginRight: "8px",
                            display: "inline-block",
                            marginBottom: "4px"
                          }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* YouTube Subscribe Button - Aligned to episodes grid */}
            <motion.div 
              className="youtube-subscribe-aligned"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.5}
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '40px',
                paddingRight: '0'
              }}
            >
              <a 
                href="https://www.youtube.com/@beyond-the-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube-btn-aligned"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 20px',
                  backgroundColor: '#FF0000',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '30px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 6px 20px rgba(255, 0, 0, 0.4)',
                  border: 'none',
                  cursor: 'pointer',
                  minWidth: '180px',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 0, 0, 0.4)';
                }}
              >
                <i className="fab fa-youtube" style={{ fontSize: '1.3rem' }}></i>
                Subscribe on YouTube
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .podcast-page {
          min-height: 100vh;
          background: #0a0a0a;
        }

        .hero-section {
          background: linear-gradient(180deg, #312e81 0%, #1e1b4b 0%, #0a0a0a 100%);
          padding: 40px 0 35px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          text-align: center;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }



        .episodes-section {
          padding: 30px 0 100px 0;
          background: #0a0a0a;
        }

        .section-header {
          text-align: left;
          margin-bottom: 35px;
        }

        .section-header p {
          font-size: 0.9rem;
          color: #a1a1aa;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
        }

        .episodes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          gap: 32px;
          margin-top: 30px;
        }

        .episode-card {
          background: linear-gradient(145deg, #1a1a1a 0%, #0f0f0f 100%);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
          border: 1px solid #2a2a2a;
          transition: all 0.3s ease;
        }

        .episode-link {
          display: block;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }

        .episode-thumbnail {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .episode-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .episode-card:hover .episode-thumbnail img {
          transform: scale(1.05);
        }

        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, rgba(59, 130, 246, 0.8), rgba(30, 64, 175, 0.8));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .episode-card:hover .play-overlay {
          opacity: 1;
        }

        .play-button {
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          font-size: 1.8rem;
          margin-left: 4px;
        }

        .episode-duration {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.8);
          color: #ffffff;
          padding: 6px 10px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .episode-content {
          padding: 20px;
        }

        .episode-meta {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-bottom: 10px;
        }

        .episode-date {
          color: #ffffff;
          font-weight: 500;
          font-size: 1.05rem;
          letter-spacing: 0.01em;
        }

        .episode-title {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 1.7rem;
          font-weight: 600;
          margin: 0 0 14px 0;
          color: #ffffff;
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        .episode-description {
          color: #d1d5db;
          font-size: 1.15rem;
          line-height: 1.6;
          margin: 0 0 20px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 400;
        }

        .episode-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }



        /* YouTube Button Aligned to Episodes Grid */
        .youtube-subscribe-aligned {
          display: flex;
          justify-content: flex-end;
          margin-top: 40px;
          padding-right: 0;
        }

        .youtube-btn-aligned {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 20px;
          background-color: #FF0000;
          color: #ffffff;
          text-decoration: none;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4);
          border: none;
          cursor: pointer;
          min-width: 180px;
          justify-content: center;
        }

        .youtube-btn-aligned:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 25px rgba(255, 0, 0, 0.5);
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .hero-section {
            padding: 35px 0 30px 0;
          }

          .episodes-section {
            padding: 25px 0 80px 0;
          }

          .section-header h2 {
            font-size: 1.1rem;
            font-weight: 600;
            opacity: 0.9;
          }

          .section-header p {
            font-size: 0.9rem;
          }

          .episodes-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .episode-thumbnail {
            height: 200px;
          }

          .episode-content {
            padding: 18px;
          }

          .episode-title {
            font-size: 1.4rem;
          }

          .episode-description {
            font-size: 1.05rem;
          }

          .episode-date {
            font-size: 0.95rem;
          }

          .youtube-subscribe-aligned {
            margin-top: 30px;
            justify-content: center;
          }

          .youtube-btn-aligned {
            padding: 12px 16px;
            font-size: 0.9rem;
            min-width: 160px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 30px 0 25px 0;
          }

          .section-header h2 {
            font-size: 1rem;
            font-weight: 600;
            opacity: 0.9;
          }

          .section-header p {
            font-size: 0.85rem;
          }

          .episode-content {
            padding: 16px;
          }

          .episode-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .episode-title {
            font-size: 1.2rem;
          }

          .episode-description {
            font-size: 1rem;
          }

          .episode-date {
            font-size: 0.9rem;
          }

          .youtube-subscribe-aligned {
            margin-top: 25px;
            justify-content: center;
          }

          .youtube-btn-aligned {
            padding: 10px 14px;
            font-size: 0.85rem;
            min-width: 140px;
            border-radius: 25px;
          }
        }
      `}</style>
    </>
  );
}

 