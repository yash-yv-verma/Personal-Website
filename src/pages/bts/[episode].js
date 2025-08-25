import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import SEOHead from '../../components/shared/SEOHead';
import { getEpisodeById, getAllEpisodes } from '../../data/episodesData';
import { useAnimations } from '../../hooks/useAnimations';

export default function EpisodePage({ episode }) {
  const { fadeInUp } = useAnimations();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Delay video loading to let animations complete first
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 800); // Wait for main animations to mostly complete

    return () => clearTimeout(timer);
  }, []);

  if (!episode) {
    return (
      <div className="error-page">
        <h1>Episode Not Found</h1>
        <Link href="/bts">Back to Beyond the Stack</Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <SEOHead 
        title={`EP. ${episode.episodeNumber} - ${episode.title} | Beyond the Stack`}
        description={episode.description}
        canonical={`https://yash-verma.com/bts/${episode.id}/`}
        keywords={`Yash Verma, Beyond the Stack, ${episode.title}, ${episode.tags.join(', ')}, Podcast, Tech Interview`}
        ogImage="https://yash-verma.com/images/homebg.jpeg"
      />

      <div className="podcast-page" style={{ position: 'relative' }}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.05}
          style={{ 
            position: 'absolute', 
            left: 'calc((100vw - 1200px) / 2)',
            top: '25px',
            zIndex: 20,
            width: '60px',
            height: '60px'
          }}
        >
          <Link 
            href="/bts" 
            className="back-arrow-btn"
            style={{
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              cursor: 'pointer',
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
              position: 'relative'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#e2e8f0';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <i className="fa fa-arrow-left"></i>
          </Link>
        </motion.div>
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

        <div className="video-section">
          <div className="container">
            <motion.div 
              className="video-player"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <div className="video-wrapper">
                {shouldLoadVideo ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${episode.youtubeId}?rel=0&showinfo=0&modestbranding=1&autoplay=0&loading=lazy`}
                    title={`Beyond the Stack EP. ${episode.episodeNumber} - ${episode.title}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    style={{ opacity: 1, transition: 'opacity 0.3s ease' }}
                  ></iframe>
                ) : (
                  <div 
                    className="video-placeholder"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '1.2rem'
                    }}
                  >
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff0000' }}>▶</span>
                      <div>Loading video...</div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div 
              className="episode-info"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.3}
            >
              <h2 style={{
                color: '#ffffff'
              }}>EP. {episode.episodeNumber} - {episode.title}</h2>
            </motion.div>

            <motion.div 
              className="platform-buttons"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.35}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '30px',
                flexWrap: 'wrap'
              }}
            >
              <a 
                href={episode.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn spotify"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  backgroundColor: '#1DB954',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(29, 185, 84, 0.3)',
                  border: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(29, 185, 84, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(29, 185, 84, 0.3)';
                }}
              >
                <i className="fab fa-spotify" style={{ fontSize: '1.2rem' }}></i>
                Listen on Spotify
              </a>

              <a 
                href={episode.applePodcastsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-btn apple"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 24px',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                  border: '1px solid #333333',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.4)';
                  e.currentTarget.style.backgroundColor = '#1a1a1a';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.backgroundColor = '#000000';
                }}
              >
                <i className="fab fa-apple" style={{ fontSize: '1.2rem' }}></i>
                Listen on Apple Podcasts
              </a>
            </motion.div>
          </div>
        </div>

        <div className="episode-content">
          <div className="container">
            <div className="content-grid">
              <motion.div 
                className="main-content"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
              >
                <h3 style={{
                  color: '#ffffff'
                }}>About This Episode</h3>
                <p className="episode-description">{episode.description}</p>
                
                <div className="episode-tags">
                  <h4>Topics Discussed</h4>
                  <div className="tags-list">
                    {episode.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="sidebar"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
              >
                <div className="combined-info-card">
                  <h4>Episode Info</h4>
                  <div className="info-item">
                    <strong>Episode:</strong> {episode.episodeNumber}
                  </div>
                  <div className="info-item">
                    <strong>Duration:</strong> {episode.duration}
                  </div>
                  <div className="info-item">
                    <strong>Published:</strong> {formatDate(episode.publishDate)}
                  </div>
                  
                  <div className="share-section-inline">
                    <h4>Share This Episode</h4>
                    <div className="share-buttons">
                      <a 
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=https://yash-verma.com/bts/${episode.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn linkedin"
                      >
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </a>
                      <a 
                        href={`https://twitter.com/intent/tweet?text=Check out this episode of Beyond the Stack: EP. ${episode.episodeNumber} - ${episode.title}&url=https://yash-verma.com/bts/${episode.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="share-btn twitter"
                      >
                        <i className="fab fa-twitter"></i> Twitter
                    </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
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

        .video-section {
          padding: 30px 0 0 0;
          background: #0a0a0a;
          position: relative;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 56.25%; /* 16:9 aspect ratio */
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
          border: 1px solid #2a2a2a;
          margin-bottom: 25px;
        }

        .video-wrapper iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .episode-info {
          text-align: center;
          margin-bottom: 35px;
        }

        .episode-info h2 {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          margin: 0 0 20px 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #ffffff;
        }



        .episode-content {
          padding: 30px 0 140px 0;
          background: #0a0a0a;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 60px;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .main-content h3 {
          color: #ffffff;
          margin: 0 0 24px 0;
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .main-content {
          margin-bottom: 40px;
        }

        .episode-description {
          color: #cbd5e1;
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 50px;
          font-weight: 400;
        }

        .episode-tags h4 {
          color: #ffffff;
          margin: 0 0 20px 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .tag {
          background: linear-gradient(135deg, #4c1d95, #312e81);
          color: #e2e8f0;
          line-height: 1.5;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .combined-info-card {
          background: #1a1a1a;
          padding: 32px;
          border-radius: 8px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          border: 1px solid #2a2a2a;
        }

        .combined-info-card h4 {
          color: #ffffff;
          margin: 0 0 24px 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .info-item {
          margin-bottom: 20px;
          color: #cbd5e1;
          font-size: 1.1rem;
        }

        .info-item strong {
          color: #ffffff;
          font-weight: 600;
          font-size: 1.1rem;
        }

        .share-section-inline {
          margin-top: 30px;
          padding-top: 24px;
          border-top: 1px solid #2a2a2a;
        }

        .share-section-inline h4 {
          color: #ffffff;
          margin: 0 0 20px 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .share-buttons {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .share-btn {
          display: flex;
          align-items: center;
          padding: 16px 20px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: 1rem;
        }

        .share-btn i {
          margin-right: 12px;
          font-size: 1.2rem;
        }

        .share-btn.twitter {
          background: #1da1f2;
          color: white;
        }

        .share-btn.linkedin {
          background: #0077b5;
          color: white;
        }

        .share-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .error-page {
          text-align: center;
          padding: 120px 20px;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: #0a0a0a;
          color: #ffffff;
        }

        .error-page h1 {
          font-size: 2rem;
          margin-bottom: 20px;
        }

        .error-page a {
          color: #4c1d95;
          text-decoration: none;
          font-weight: 500;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .episode-header {
            padding: 40px 0 50px 0;
          }

          .logo {
            font-size: 2.2rem;
          }

          .episode-info h2 {
            font-size: 2.2rem;
          }



          .content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .video-section {
            padding: 25px 0 0 0;
          }

          .episode-content {
            padding: 15px 0 100px 0;
          }

          .main-content h3 {
            font-size: 1.8rem;
          }

          .episode-description {
            font-size: 1.1rem;
          }

          .platform-buttons {
            gap: 15px;
            margin-bottom: 25px;
          }
          
          .platform-btn {
            padding: 10px 20px !important;
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .episode-info h2 {
            font-size: 1.8rem;
          }

          .video-section {
            padding: 20px 0 0 0;
          }

          .episode-content {
            padding: 10px 0 120px 0;
          }
        }
      `}</style>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const episodes = getAllEpisodes();
  const paths = episodes.map((episode) => ({
    params: { episode: episode.id },
  }));

  return {
    paths,
    fallback: false // Show 404 for unknown episodes
  };
}

// This function gets called at build time for each episode
export async function getStaticProps({ params }) {
  const episode = getEpisodeById(params.episode);

  if (!episode) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      episode,
    },
  };
} 