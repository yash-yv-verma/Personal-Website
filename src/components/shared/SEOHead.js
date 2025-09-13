import Head from 'next/head';

export default function SEOHead({ 
  title = "Yash Verma | Computer Science & Mathematics | KubeLLM & Agentic AI Researcher | Beyond the Stack Podcast Host | Rowdy Creators Leader | EAAI 2025 Author",
  description = "Yash Verma is a UTSA Honors College senior double majoring in Computer Science & Mathematics of Data & Computing. Currently researching KubeLLM and agentic AI with Dr. Palden Lama, exploring large-scale intelligent systems. Co-authored Word2Vec4Kids published at EAAI 2025. Host of Beyond the Stack podcast featuring industry leaders, and founder of Rowdy Creators student community at UTSA.",
  canonical = "https://yash-verma.com/",
  ogImage = "https://yash-verma.com/images/homebg.jpeg",
  keywords = "Yash Verma, UTSA, University of Texas San Antonio, Computer Science, Mathematics of Data Computing, Honors College, KubeLLM, Agentic AI, Large Language Models, Machine Learning, AI Research, Dr. Palden Lama, Word2Vec4Kids, EAAI 2025, Educational Technology, Natural Language Processing, Quantum Cryptography, Beyond the Stack Podcast, Tech Podcast, Industry Leaders, Software Engineering Leadership, Career Development, Technology Podcast, YouTube Channel, Spotify Podcast, Apple Podcasts, Rowdy Creators, rowdycreators.org, Student Community, Software Engineering, Cloud Computing, Web Development, Research Publications, Academic Portfolio, Student Researcher, Undergraduate Research, CS-CURE, Independent Study, Tech Leadership, Student Entrepreneurship",
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
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="slurp" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="duckduckbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="baiduspider" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="yandexbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="facebookexternalhit" content="index, follow" />
      <meta name="twitterbot" content="index, follow" />
      <meta name="linkedinbot" content="index, follow" />
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
      <meta name="last-modified" content={new Date().toISOString()} />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="coverage" content="worldwide" />
      <meta name="target" content="all" />
      <meta name="audience" content="all" />
      <meta name="content-language" content="en-US" />
      <meta name="content-type" content="text/html; charset=UTF-8" />
      <meta name="content-script-type" content="text/javascript" />
      <meta name="content-style-type" content="text/css" />
      <meta name="expires" content="never" />
      <meta name="cache-control" content="public, max-age=31536000" />
      <meta name="pragma" content="no-cache" />
      <meta name="imagetoolbar" content="no" />
      <meta name="mssmarttagspreventparsing" content="true" />
      <meta name="cleartype" content="on" />
      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Yash Verma" />
      <meta name="application-name" content="Yash Verma Portfolio" />
      <meta name="msapplication-tooltip" content="Yash Verma - AI Researcher & Podcast Host" />
      <meta name="msapplication-starturl" content="/" />
      <meta name="format-detection" content="telephone=no" />
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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Yash Verma - AI Researcher & Podcast Host" />
      <meta property="og:site_name" content="Yash Verma" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:updated_time" content={new Date().toISOString()} />
      <meta property="og:see_also" content="https://yash-verma.com/blog/" />
      <meta property="og:see_also" content="https://yash-verma.com/bts/" />
      <meta property="og:see_also" content="https://yash-verma.com/resume" />
      <meta property="article:author" content="Yash Verma" />
      <meta property="article:publisher" content="Yash Verma" />
      <meta property="article:section" content="Technology" />
      <meta property="article:tag" content="AI Research" />
      <meta property="article:tag" content="Computer Science" />
      <meta property="article:tag" content="Podcast" />
      <meta property="article:tag" content="UTSA" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="Yash Verma - AI Researcher & Podcast Host" />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterSite} />
      <meta name="twitter:domain" content="yash-verma.com" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:label1" content="Research Focus" />
      <meta name="twitter:data1" content="KubeLLM & Agentic AI" />
      <meta name="twitter:label2" content="Institution" />
      <meta name="twitter:data2" content="UTSA Honors College" />
      
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
          "email": "yash.verma@my.utsa.edu",
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
            "https://podcasts.apple.com/us/podcast/beyond-the-stack/id1836825875",
            "https://orcid.org/0009-0009-8210-464X",
            "https://scholar.google.com/citations?user=sOcV2JEAAAAJ",
            "https://rowdycreators.org"
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
            "Research Publications",
            "Python",
            "Java",
            "React",
            "Next.js",
            "AWS",
            "Swift",
            "SwiftUI",
            "JavaScript",
            "TypeScript",
            "Node.js",
            "Docker",
            "Kubernetes",
            "MySQL",
            "SQLite",
            "Git",
            "Agile Development",
            "Full Stack Development",
            "Mobile Development",
            "Database Design",
            "API Development",
            "System Design",
            "DevOps"
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
            "CS-CURE Research Participant",
            "Dean's List (Spring 2025)",
            "Honor Roll (Fall 2022, Spring 2023, Fall 2023)",
            "High Honors - Hendrickson High School",
            "Varsity Wrestling Team Member",
            "Science Olympiad Participant",
            "UIL Computer Science Competitor"
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
      
      {/* Enhanced Research Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ResearchProject",
          "name": "KubeLLM Research",
          "description": "Research on KubeLLM and agentic AI systems for distributed computing environments",
          "url": "https://yash-verma.com/",
          "funder": {
            "@type": "Organization",
            "name": "The University of Texas at San Antonio"
          },
          "principalInvestigator": {
            "@type": "Person",
            "name": "Dr. Palden Lama"
          },
          "researchAssistant": {
            "@type": "Person",
            "name": "Yash Verma"
          },
          "keywords": "KubeLLM, Agentic AI, Large Language Models, Distributed Systems, Cloud Computing",
          "startDate": "2024-01-01",
          "endDate": "2025-12-31"
        })}
      </script>
      
      {/* Educational Credentials Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOccupationalCredential",
          "name": "Bachelor of Science in Computer Science",
          "description": "Double major in Computer Science and Mathematics of Data & Computing",
          "credentialCategory": "degree",
          "recognizedBy": {
            "@type": "Organization",
            "name": "The University of Texas at San Antonio"
          },
          "about": {
            "@type": "Person",
            "name": "Yash Verma"
          },
          "educationalLevel": "Bachelor's Degree",
          "dateCreated": "2021-08-01",
          "expires": "2025-05-15"
        })}
      </script>
      
      {/* Publication Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          "name": "Word2Vec4Kids",
          "headline": "Word2Vec4Kids: Educational Technology for Natural Language Processing",
          "description": "Educational technology research paper on natural language processing for children",
          "image": "https://yash-verma.com/images/homebg.jpeg",
          "url": "https://yash-verma.com/",
          "author": [
            {
              "@type": "Person",
              "name": "Yash Verma",
              "url": "https://yash-verma.com/"
            }
          ],
          "publisher": {
            "@type": "Organization",
            "name": "EAAI 2025"
          },
          "datePublished": "2025-04-11T00:00:00-06:00",
          "isPartOf": {
            "@type": "PublicationIssue",
            "issueNumber": "2025",
            "datePublished": "2025-04-11T00:00:00-06:00"
          },
          "about": [
            {
              "@type": "Thing",
              "name": "Educational Technology"
            },
            {
              "@type": "Thing",
              "name": "Natural Language Processing"
            }
          ],
          "keywords": "Word2Vec, Educational Technology, NLP, Machine Learning, Children's Education"
        })}
      </script>
      
      {/* Organization Schema for Rowdy Creators */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Rowdy Creators",
          "description": "Student community at UTSA focused on building real projects and preparing for internships",
          "url": "https://rowdycreators.org",
          "director": {
            "@type": "Person",
            "name": "Yash Verma",
            "url": "https://yash-verma.com/"
          },
          "foundingDate": "2024-01-01",
          "location": {
            "@type": "Place",
            "name": "The University of Texas at San Antonio"
          },
          "member": {
            "@type": "Person",
            "name": "Yash Verma",
            "url": "https://yash-verma.com/"
          },
          "sameAs": [
            "https://rowdycreators.org"
          ],
          "knowsAbout": [
            "Software Engineering",
            "Web Development",
            "Mobile Development",
            "Project Management",
            "Career Development"
          ]
        })}
      </script>
      
      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://yash-verma.com/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Blog",
              "item": "https://yash-verma.com/blog/"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Beyond the Stack Podcast",
              "item": "https://yash-verma.com/bts/"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "Resume",
              "item": "https://yash-verma.com/resume"
            }
          ]
        })}
      </script>
      
      {/* FAQ Schema for Common Questions */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What is Yash Verma researching?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yash is researching KubeLLM and agentic AI systems with Dr. Palden Lama at UTSA, focusing on how these tools can shape the future of distributed systems."
              }
            },
            {
              "@type": "Question",
              "name": "What is Beyond the Stack podcast about?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Beyond the Stack is a podcast where Yash sits down with industry leaders and professors to talk about tech, growth, and leadership in software engineering."
              }
            },
            {
              "@type": "Question",
              "name": "What is Rowdy Creators?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Rowdy Creators is a student community at UTSA led by Yash that helps students build real projects and get ready for internships in tech."
              }
            }
          ]
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