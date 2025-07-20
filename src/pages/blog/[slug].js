import { motion } from 'framer-motion';
import Link from 'next/link';
import SEOHead from '../../components/shared/SEOHead';
import { getBlogPostById, getAllBlogPosts } from '../../data/blogData';
import { useAnimations } from '../../hooks/useAnimations';

export default function BlogPost({ post }) {
  const { fadeInUp } = useAnimations();

  if (!post) {
    return (
      <div className="error-page">
        <h1>Blog Post Not Found</h1>
        <Link href="/blog">Back to Blog</Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Convert markdown-style content to JSX
  const renderContent = (content) => {
    const lines = content.split('\n');
    let skipFirstH1 = false;
    
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        // Skip the first h1 as it's redundant with the page title
        if (!skipFirstH1) {
          skipFirstH1 = true;
          return null;
        }
        return <h1 key={index} className="content-h1">{line.slice(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="content-h2">{line.slice(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="content-h3">{line.slice(4)}</h3>;
      } else if (line.startsWith('```')) {
        return null; // Handle code blocks separately if needed
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="content-li">{line.slice(2)}</li>;
      } else if (/^\d+\./.test(line)) {
        return <li key={index} className="content-li">{line.replace(/^\d+\.\s/, '')}</li>;
      } else {
        return <p key={index} className="content-p">{line}</p>;
      }
    });
  };

  return (
    <>
      <SEOHead 
        title={`${post.title} | Blog`}
        description={post.excerpt}
        canonical={`https://yash-verma.com/blog/${post.id}/`}
        keywords={`Yash Verma, Blog, ${post.title}, ${post.tags.join(', ')}, Technical Article`}
        ogImage="https://yash-verma.com/images/homebg.jpeg"
      />

      <div className="blog-page" style={{ position: 'relative' }}>
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
            href="/blog" 
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
            <i className="fa fa-arrow-left" style={{ pointerEvents: 'none' }}></i>
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
              }}>Blog</h1>
            </motion.div>
          </div>
        </div>

        <div className="post-section">
          <div className="container">
            <motion.div 
              className="post-header"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <h1 className="post-title">{post.title}</h1>
              <div className="post-tags">
                {post.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="article-info-inline">
                <span className="info-inline-item">
                  <strong>Published:</strong> {formatDate(post.publishDate)}
                </span>
                <span className="info-inline-item">
                  <strong>Read Time:</strong> {post.readTime}
                </span>
              </div>
            </motion.div>

            <div className="post-content-wrapper">
              <motion.div 
                className="main-content"
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
              >
                <div className="post-content">
                  {renderContent(post.content)}
                </div>
                
                <div className="share-section-bottom">
                  <h4>Share This Article</h4>
                  <div className="share-buttons-bottom">
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=https://yash-verma.com/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn linkedin"
                    >
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?text=Check out this article: ${post.title}&url=https://yash-verma.com/blog/${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="share-btn twitter"
                    >
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
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

        .post-section {
          padding: 30px 0 120px 0;
          background: #0a0a0a;
        }

        .post-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }



        .post-title {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          font-size: 3rem;
          font-weight: 700;
          margin: 20px 0;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-align: center;
        }



        .post-tags {
          margin: 30px 0;
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .tag {
          background: linear-gradient(135deg, #4c1d95, #312e81);
          color: #e2e8f0;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.01em;
        }

        .post-content-wrapper {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .article-info-inline {
          display: flex;
          justify-content: center;
          gap: 30px;
          margin: 30px 0;
          flex-wrap: wrap;
          font-size: 1rem;
          color: #9ca3af;
        }

        .info-inline-item strong {
          color: #ffffff;
          font-weight: 600;
        }

        .post-content {
          background: #111111;
          padding: 40px;
          border-radius: 12px;
          border: 1px solid #2a2a2a;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .content-h1 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin: 40px 0 20px 0;
          line-height: 1.2;
        }

        .content-h2 {
          font-size: 2rem;
          font-weight: 600;
          color: #ffffff;
          margin: 35px 0 15px 0;
          line-height: 1.3;
        }

        .content-h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin: 30px 0 12px 0;
          line-height: 1.4;
        }

        .content-p {
          font-size: 1.1rem;
          color: #d1d5db;
          line-height: 1.7;
          margin: 16px 0;
        }

        .content-li {
          font-size: 1.1rem;
          color: #d1d5db;
          line-height: 1.7;
          margin: 8px 0;
          margin-left: 20px;
        }

        .share-section-bottom {
          margin-top: 60px;
          padding-top: 40px;
          border-top: 1px solid #2a2a2a;
          text-align: center;
        }

        .share-section-bottom h4 {
          color: #ffffff;
          margin: 0 0 20px 0;
          font-size: 1.5rem;
          font-weight: 600;
        }

        .share-buttons-bottom {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
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
          color: white;
        }

        @media (max-width: 768px) {
          .post-title {
            font-size: 2.2rem;
          }

          .post-content {
            padding: 25px;
          }

          .content-h1 {
            font-size: 2rem;
          }

          .content-h2 {
            font-size: 1.6rem;
          }

          .content-h3 {
            font-size: 1.3rem;
          }

          .article-info-inline {
            flex-direction: column;
            gap: 15px;
            text-align: center;
          }

          .share-buttons-bottom {
            flex-direction: column;
            align-items: center;
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .post-title {
            font-size: 1.8rem;
          }

          .post-content {
            padding: 20px;
          }

          .post-section {
            padding: 20px 0 80px 0;
          }
        }
      `}</style>
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const posts = getAllBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.id },
  }));

  return {
    paths,
    fallback: false // Show 404 for unknown posts
  };
}

// This function gets called at build time for each post
export async function getStaticProps({ params }) {
  const post = getBlogPostById(params.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
} 