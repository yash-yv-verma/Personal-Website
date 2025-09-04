import Head from 'next/head';

export default function SEOHead({ 
  title = "Yash Verma | Computer Science & Mathematics | KubeLLM & Agentic AI Researcher | Beyond the Stack Podcast Host | Rowdy Creators Leader | EAAI 2025 Author",
  description = "Yash Verma is a UTSA Honors College senior double majoring in Computer Science & Mathematics of Data & Computing. Currently researching KubeLLM and agentic AI with Dr. Palden Lama, exploring large-scale intelligent systems. Co-authored Word2Vec4Kids published at EAAI 2025. Host of Beyond the Stack podcast featuring industry leaders, and founder of Rowdy Creators student community at UTSA.",
  canonical = "https://yash-verma.com/",
  ogImage = "https://yash-verma.com/images/homebg.jpeg",
  keywords = "Yash Verma, UTSA, University of Texas San Antonio, Computer Science, Mathematics of Data Computing, Honors College, KubeLLM, Agentic AI, Large Language Models, Machine Learning, AI Research, Dr. Palden Lama, Word2Vec4Kids, EAAI 2025, Educational Technology, Natural Language Processing, Quantum Cryptography, Beyond the Stack Podcast, Tech Podcast, Industry Leaders, Software Engineering Leadership, Career Development, Technology Podcast, YouTube Channel, Spotify Podcast, Apple Podcasts, Rowdy Creators, Student Community, Software Engineering, Cloud Computing, Web Development, Research Publications, Academic Portfolio, Student Researcher, Undergraduate Research, CS-CURE, Independent Study, Tech Leadership, Student Entrepreneurship",
  twitterSite = "@yashyvverma"
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="google-site-verification" content="fWH8xmeEzrfW56pmObDDENPOhvNHzvVaJUzJxGHtKW8" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="author" content="Yash Verma" />
      <meta name="copyright" content="2025, Yash Verma" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="shortcut icon" href="/favicon.svg" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Yash Verma" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterSite} />
      
      {/* JSON-LD Person Schema for Google Knowledge Panel */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Yash Verma",
          "url": "https://yash-verma.com/",
          "image": "https://yash-verma.com/images/homebg.jpeg",
          "jobTitle": "Computer Science & Mathematics Student, AI Researcher, Podcast Host, Community Leader",
          "worksFor": {
            "@type": "Organization",
            "name": "The University of Texas at San Antonio"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "The University of Texas at San Antonio"
          },
          "sameAs": [
            "https://github.com/yash-yv-verma",
            "https://www.linkedin.com/in/-yv/",
            "https://www.youtube.com/@beyond-the-stack",
            "https://open.spotify.com/show/770A9NCMDj1cSXpMfsv5o2",
            "https://podcasts.apple.com/us/podcast/beyond-the-stack/id1836825875"
          ],
          "knowsAbout": [
            "Computer Science",
            "Mathematics of Data Computing",
            "KubeLLM",
            "Agentic AI",
            "Large Language Models",
            "Machine Learning",
            "Quantum Cryptography",
            "Educational Technology",
            "Natural Language Processing",
            "Software Engineering",
            "Cloud Computing",
            "Web Development"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "AI Researcher",
            "occupationLocation": {
              "@type": "Place",
              "name": "The University of Texas at San Antonio"
            }
          }
        })}
      </script>
    </Head>
  );
} 