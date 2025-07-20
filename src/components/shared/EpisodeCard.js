import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAnimations } from '../../hooks/useAnimations';

export default function EpisodeCard({ episode, index = 0 }) {
  const { fadeInUp } = useAnimations();

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <motion.div
      className="episode-card"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={0.2 + index * 0.1}
    >
      <Link href={`/bts/${episode.id}`}>
        <div className="episode-card-content">
          <div className="episode-thumbnail">
            <img 
              src={episode.thumbnail} 
              alt={`Beyond the Stack EP. ${episode.episodeNumber} - ${episode.title}`}
              onError={(e) => {
                // Fallback to a placeholder if image doesn't exist
                e.target.src = '/images/homebg.jpeg';
              }}
            />
            <div className="play-overlay">
              <div className="play-button">
                <i className="fa fa-play"></i>
              </div>
            </div>
          </div>
          
          <div className="episode-info">
            <h3 className="episode-title">
              EP. {episode.episodeNumber} - {episode.title}
            </h3>
            
            <p className="episode-description">
              {episode.description}
            </p>
            
            <div className="episode-meta">
              <span className="episode-date">{formatDate(episode.publishDate)}</span>
              <span className="episode-duration">{episode.duration}</span>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .episode-card {
          margin-bottom: 30px;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .episode-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .episode-card-content {
          background: #1a1a1a;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1px solid #2a2a2a;
        }

        .episode-card:hover .episode-card-content {
          border-color: #4c1d95;
          box-shadow: 0 16px 64px rgba(76, 29, 149, 0.25);
        }

        .episode-thumbnail {
          position: relative;
          width: 100%;
          height: 160px; /* Reduced height for wider aspect ratio */
          overflow: hidden;
        }

        .episode-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .episode-card:hover .episode-thumbnail img {
          transform: scale(1.08);
        }

        .play-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(76, 29, 149, 0.85), rgba(49, 46, 129, 0.85));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .episode-card:hover .play-overlay {
          opacity: 1;
        }

        .play-button {
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .play-button:hover {
          transform: scale(1.1);
          background: #ffffff;
        }

        .play-button i {
          font-size: 24px;
          color: #1a1a1a;
          margin-left: 4px; /* Adjust play icon position */
        }

        .episode-info {
          padding: 24px;
        }

        .episode-title {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 12px 0;
          line-height: 1.4;
          letter-spacing: -0.02em;
        }

        .episode-description {
          color: #b0b0b0;
          font-size: 14px;
          line-height: 1.6;
          margin: 0 0 20px 0;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .episode-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #808080;
        }

        .episode-date {
          font-weight: 500;
          color: #a0a0a0;
        }

        .episode-duration {
          background: linear-gradient(135deg, #4c1d95, #312e81);
          padding: 6px 12px;
          border-radius: 4px;
          color: #ffffff;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .episode-thumbnail {
            height: 140px;
          }
          
          .episode-title {
            font-size: 16px;
          }
          
          .episode-description {
            font-size: 13px;
          }

          .episode-info {
            padding: 20px;
          }
        }
      `}</style>
    </motion.div>
  );
} 