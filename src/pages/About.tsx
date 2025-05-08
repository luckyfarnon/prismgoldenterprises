
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary min-h-[50vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white mb-4" data-aos="fade-up">
              About Our Company
            </h1>
            <p className="text-white text-lg mb-8 opacity-90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Learn about our journey, vision, and the team that makes it all possible.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,48C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Company Vision Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img 
                src="https://placehold.co/600x400/1A1F2C/ffffff?text=Our+Vision" 
                alt="Company Vision" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="heading-md mb-6 text-primary-800">Our Vision & Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                Founded in 2010, our company has been at the forefront of delivering exceptional solutions across multiple industries. We believe in innovation, quality, and building lasting relationships with our clients.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Our mission is to provide best-in-class services that help our clients achieve their business objectives efficiently and effectively. We strive to be a trusted partner that delivers value through innovative solutions.
              </p>
              <Button className="btn btn-primary group">
                Learn More About Our Mission
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="heading-lg mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              A timeline of key milestones that define our growth and evolution over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24 relative z-10">
              {/* 2010 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:text-right pr-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">2010</h3>
                  <h4 className="text-xl font-semibold mb-3">Company Founded</h4>
                  <p className="text-gray-700">
                    Our company was established with a vision to provide exceptional services across multiple industries.
                  </p>
                </div>
                <div className="pl-8">
                  <img 
                    src="https://placehold.co/400x300/1A1F2C/ffffff?text=2010+Founding" 
                    alt="Company Founding" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
              
              {/* 2015 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:order-2 md:text-left pl-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">2015</h3>
                  <h4 className="text-xl font-semibold mb-3">International Expansion</h4>
                  <p className="text-gray-700">
                    We expanded our operations globally, opening offices in Europe and Asia to serve our growing international client base.
                  </p>
                </div>
                <div className="md:order-1 pr-8">
                  <img 
                    src="https://placehold.co/400x300/1A1F2C/ffffff?text=2015+Expansion" 
                    alt="International Expansion" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
              
              {/* 2020 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:text-right pr-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">2020</h3>
                  <h4 className="text-xl font-semibold mb-3">Digital Transformation</h4>
                  <p className="text-gray-700">
                    We embraced the digital era by investing heavily in technology and innovation to provide cutting-edge solutions to our clients.
                  </p>
                </div>
                <div className="pl-8">
                  <img 
                    src="https://placehold.co/400x300/1A1F2C/ffffff?text=2020+Digital+Era" 
                    alt="Digital Transformation" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
              
              {/* 2025 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:order-2 md:text-left pl-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">2025</h3>
                  <h4 className="text-xl font-semibold mb-3">Future Vision</h4>
                  <p className="text-gray-700">
                    Looking ahead, we aim to continue our growth trajectory and remain at the forefront of innovation in our industries.
                  </p>
                </div>
                <div className="md:order-1 pr-8">
                  <img 
                    src="https://placehold.co/400x300/1A1F2C/ffffff?text=2025+Future+Vision" 
                    alt="Future Vision" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
