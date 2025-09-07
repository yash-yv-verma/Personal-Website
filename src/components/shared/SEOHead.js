import Head from 'next/head';

export default function SEOHead({ 
  title = "Yash Verma | Computer Science & Mathematics | KubeLLM & Agentic AI Researcher | Beyond the Stack Podcast Host | Rowdy Creators Leader | EAAI 2025 Author",
  description = "Yash Verma is a UTSA Honors College senior double majoring in Computer Science & Mathematics of Data & Computing. Currently researching KubeLLM and agentic AI with Dr. Palden Lama, exploring large-scale intelligent systems. Co-authored Word2Vec4Kids published at EAAI 2025. Host of Beyond the Stack podcast featuring industry leaders, and founder of Rowdy Creators student community at UTSA.",
  canonical = "https://yash-verma.com/",
  ogImage = "https://yash-verma.com/images/homebg.jpeg",
  keywords = "Yash Verma, UTSA, University of Texas San Antonio, Computer Science, Mathematics of Data Computing, Honors College, KubeLLM, Agentic AI, Large Language Models, Machine Learning, AI Research, Dr. Palden Lama, Word2Vec4Kids, EAAI 2025, Educational Technology, Natural Language Processing, Quantum Cryptography, Beyond the Stack Podcast, Tech Podcast, Industry Leaders, Software Engineering Leadership, Career Development, Technology Podcast, YouTube Channel, Spotify Podcast, Apple Podcasts, Rowdy Creators, Student Community, Software Engineering, Cloud Computing, Web Development, Research Publications, Academic Portfolio, Student Researcher, Undergraduate Research, CS-CURE, Independent Study, Tech Leadership, Student Entrepreneurship",
  twitterSite = "@yashyvverma",
  structuredData = null
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      <meta name="google-site-verification" content="fWH8xmeEzrfW56pmObDDENPOhvNHzvVaJUzJxGHtKW8" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="en" />
      <meta name="author" content="Yash Verma" />
      <meta name="copyright" content="2025, Yash Verma" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content="#312e81" />
      <meta name="msapplication-TileColor" content="#312e81" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Yash Verma" />
      <meta name="application-name" content="Yash Verma Portfolio" />
      <meta name="msapplication-tooltip" content="Yash Verma - AI Researcher & Podcast Host" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="San Antonio" />
      <meta name="geo.position" content="29.4241;-98.4936" />
      <meta name="ICBM" content="29.4241, -98.4936" />
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
          "alternateName": "Yash YV Verma",
          "url": "https://yash-verma.com/",
          "image": "https://yash-verma.com/images/homebg.jpeg",
          "jobTitle": "Computer Science & Mathematics Student, AI Researcher, Podcast Host, Community Leader",
          "description": "UTSA Honors College senior researching KubeLLM and agentic AI. Co-author of Word2Vec4Kids published at EAAI 2025. Host of Beyond the Stack podcast and founder of Rowdy Creators.",
          "birthDate": "2004-02-15",
          "nationality": "American",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Antonio",
            "addressRegion": "TX",
            "addressCountry": "US"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "The University of Texas at San Antonio",
            "url": "https://www.utsa.edu/"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "name": "The University of Texas at San Antonio",
            "url": "https://www.utsa.edu/"
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
            "Web Development",
            "Podcast Hosting",
            "Student Leadership",
            "Research Publications"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "AI Researcher",
            "occupationLocation": {
              "@type": "Place",
              "name": "The University of Texas at San Antonio"
            }
          },
          "award": [
            "EAAI 2025 Author - Word2Vec4Kids Publication",
            "UTSA Honors College Student",
            "CS-CURE Research Participant"
          ],
          "memberOf": [
            {
              "@type": "Organization",
              "name": "Rowdy Creators",
              "description": "Student community at UTSA"
            }
          ]
        })}
      </script>
      
      {/* Additional Structured Data for Podcast */}
      <script type="application/ld+json">
        {JSON.stringify({
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
          "keywords": "technology, software engineering, programming, AI, machine learning, career development"
        })}
      </script>
      
      {/* Custom Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Head>
  );
} 