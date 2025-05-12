import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CustomServicesSection from '../components/CustomServicesSection';
import ResultsSection from '../components/ResultsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import ImportAndExportSection from '../components/ImportAndExportSection';
import ConstructionSection from '../components/ConstructionSection';

// AOS animation library
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ImportAndExportSection/>
      <ConstructionSection />
      <CustomServicesSection />
      <TestimonialsSection />
      <ResultsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
