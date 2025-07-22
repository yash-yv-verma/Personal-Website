import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '../../components/shared/SEOHead';
import { getAllBlogPosts } from '../../data/blogData';
import { useAnimations } from '../../hooks/useAnimations';

export default function Blog() {
  const blogPosts = getAllBlogPosts();
  const { fadeInUp } = useAnimations();

  // Custom slide animations for blog post cards
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
        title="Blog | Yash Verma"
        description="Technical articles, insights, and tutorials on software development, web technologies, and engineering best practices."
        canonical="https://yash-verma.com/blog/"
        keywords="Yash Verma, Blog, Technology, Programming, Tutorials, Articles, Web Development, Software Engineering"
        ogImage="https://yash-verma.com/images/homebg.jpeg"
      />

      <div className="blog-page">
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
              }}>Blog</h1>
            </motion.div>
          </div>
        </div>

        <div className="posts-section">
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
              }}>Latest Articles</h2>
              <p style={{
                fontSize: "1.2rem",
                color: "#a1a1aa",
                maxWidth: "600px",
                margin: "0",
                lineHeight: "1.5",
                fontWeight: 400,
                textAlign: "left"
              }}>Technical insights, tutorials, and thoughts on software development and engineering best practices.</p>
            </motion.div>

            <div className="posts-grid">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="post-card"
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
                  <Link href={`/blog/${post.id}`} className="post-link">
                    <div className="post-thumbnail">
                      <img src={post.thumbnail} alt={post.title} />
                      {post.featured && (
                        <div className="featured-badge">Featured</div>
                      )}
                      <div className="read-time">{post.readTime}</div>
                    </div>
                    <div className="post-content">
                      <div className="post-meta">
                        <span className="post-date">{formatDate(post.publishDate)}</span>
                      </div>
                      <h3 style={{
                        fontFamily: "'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                        fontSize: "1.7rem",
                        fontWeight: 700,
                        margin: "12px 0 16px 0",
                        color: "#ffffff",
                        lineHeight: "1.3",
                        letterSpacing: "-0.02em"
                      }}>{post.title}</h3>
                      <p style={{
                        fontSize: "1.15rem",
                        color: "#9ca3af",
                        margin: "0 0 20px 0",
                        lineHeight: "1.6",
                        fontWeight: 400
                      }}>{post.excerpt}</p>
                      <div className="post-tags">
                        {post.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag" style={{
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#cbd5e1",
                            background: "linear-gradient(135deg, #4c1d95, #312e81)",
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
          </div>
        </div>
      </div>

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          background: #0a0a0a;
        }

        .hero-section {
          background: linear-gradient(180deg, #2d1b4e 0%, #1a1625 50%, #0a0a0a 100%);
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

        .posts-section {
          padding: 30px 0 120px 0;
          background: #0a0a0a;
        }

        .section-header {
          margin-bottom: 60px;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 40px;
          margin-top: 40px;
        }

        .post-card {
          background: #1a1a1a;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #2a2a2a;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .post-card:hover {
          border-color: #4c1d95;
          box-shadow: 0 20px 60px rgba(76, 29, 149, 0.2);
        }

        .post-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .post-thumbnail {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
          background: #2a2a2a;
        }

        .post-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .post-card:hover .post-thumbnail img {
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .read-time {
          position: absolute;
          bottom: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }

        .post-content {
          padding: 24px;
        }

        .post-meta {
          margin-bottom: 8px;
        }

        .post-date {
          font-size: 1.05rem;
          color: #ffffff;
          font-weight: 500;
        }

        .post-tags {
          margin-top: 16px;
        }

        @media (max-width: 768px) {
          .posts-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .post-card {
            margin: 0 10px;
          }

          .hero-section {
            padding: 30px 0 25px 0;
          }

          .posts-section {
            padding: 25px 0 80px 0;
          }

          .section-header {
            margin-bottom: 40px;
          }
        }

        @media (max-width: 480px) {
          .posts-grid {
            gap: 20px;
          }

          .post-content {
            padding: 20px;
          }

          .hero-section {
            padding: 25px 0 20px 0;
          }

          .posts-section {
            padding: 25px 0 60px 0;
          }
        }
      `}</style>
    </>
  );
} 