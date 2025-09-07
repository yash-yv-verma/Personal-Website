import SEOHead from '../components/shared/SEOHead';
import HeroSection from '../components/sections/HeroSection';
import ServiceSection from '../components/sections/ServiceSection';
import AboutSection from '../components/sections/AboutSection';
import WorkSection from '../components/sections/WorkSection';
import ResearchSection from '../components/sections/ResearchSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ExtracurricularSection from '../components/sections/ExtracurricularSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/layout/Footer';

export default function Home() {
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yash Verma - AI Researcher & Podcast Host",
    "url": "https://yash-verma.com/",
    "description": "Portfolio of Yash Verma, UTSA Honors College student researching KubeLLM and agentic AI. Host of Beyond the Stack podcast and founder of Rowdy Creators.",
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
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yash-verma.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <SEOHead 
        structuredData={homepageStructuredData}
      />
      <HeroSection />
      <ServiceSection backgroundColor="#fff" />
      <AboutSection backgroundColor="#f0f6ff" />
      <WorkSection backgroundColor="#fff" />
      <ResearchSection backgroundColor="#f0f6ff" />
      <ProjectsSection backgroundColor="#fff" />
      <ExtracurricularSection backgroundColor="#f0f6ff" />
      <ContactSection backgroundColor="#fff" />
      <Footer />
    </>
  );
} 