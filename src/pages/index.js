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
  return (
    <>
      <SEOHead />
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