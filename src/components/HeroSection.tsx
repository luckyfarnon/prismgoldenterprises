import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeBtn, setActiveBtn] = useState<'get-started' | 'view-work'>('get-started');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
    // Check if we need to scroll to a section after navigation
    const scrollTarget = sessionStorage.getItem('scrollTarget');
    if (scrollTarget && location.pathname === '/') {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        sessionStorage.removeItem('scrollTarget');
      }
    }
  }, [location]);

  const handleScrollOrNavigate = (targetId: string, route: string) => {
    if (location.pathname === route) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      sessionStorage.setItem('scrollTarget', targetId);
      navigate(route);
    }
  };

  return (
    <section className="relative bg-gradient-primary min-h-[115vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-32 h-32 bg-primary-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[30%] right-[15%] w-40 h-40 bg-primary-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
            <p className="text-white text-md mb-2" style={{ letterSpacing: '0.1em' }}>Call it what you want</p>
            <h1 className="heading-xl text-white mb-6 bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent">We call it</span> <br/>
              <span style={{ letterSpacing: '0.10em' }} className="bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent">Prism Gold Enterprises</span>
            </h1>
            <p className="text-white text-lg mb-6 opacity-90 max-w-xl leading-relaxed">
              Our data-driven digital marketing strategies deliver measurable results. 
              We combine creativity with performance to help your business thrive in the competitive digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                variant="outline"
                className={`btn-outline text-black border-none bg-white group relative overflow-hidden ${activeBtn === 'get-started' ? 'bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] text-black' : ''}`}
                onClick={() => {
                  setActiveBtn('get-started');
                  handleScrollOrNavigate('contact-form-section', '/contact');
                }}
                onMouseEnter={() => setActiveBtn('get-started')}
              >
                <span className="relative z-10 transition-colors duration-300">
                  Get Started
                </span>
                {activeBtn === 'get-started' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] opacity-100 transition-opacity duration-300 z-0 rounded-md"></span>
                )}
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 relative z-10" />
              </Button>
              <Button
                variant="outline"
                className={`btn-outline text-black border-none bg-white group relative overflow-hidden ${activeBtn === 'view-work' ? 'bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] text-black' : ''}`}
                onClick={() => {
                  setActiveBtn('view-work');
                  handleScrollOrNavigate('custom-services-section', '/');
                }}
                onMouseEnter={() => setActiveBtn('view-work')}
              >
                <span className="relative z-10 transition-colors duration-300">
                  View Our Work
                </span>
                {activeBtn === 'view-work' && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] opacity-100 transition-opacity duration-300 z-0 rounded-md"></span>
                )}
                <ChevronRight className="ml-1 h-4 w-4 relative z-10 transition-transform duration-300" />
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-white font-medium mb-3">Trusted by leading brands:</p>
              <div className="flex justify-start items-center">
                <img src="/partner.png" alt="Partner Brand" className="h-15 w-full max-w-3xl sm:max-w-4xl md:max-w-4xl lg:max-w-4xl" />
              </div>
            </div>
          </div>

          <div className={`hidden lg:block ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full rounded-lg p-1" style={{ background: 'linear-gradient(90deg, #ae8625 0%, #f7ef8a 50%, #edc967 100%)' }}>
                <div className="w-full h-full bg-black rounded-lg"></div>
              </div>
              <video 
                src="/prism-vid.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="rounded-lg shadow-2xl relative z-10"
                width={600}
                height={500}
                style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: 500 }}
              >
              </video>
              <div className="absolute -bottom-4 -right-4 p-4 bg-white rounded-lg shadow-lg z-20 w-48 animate-pulse">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-xs font-semibold text-secondary">Live Performance</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-secondary">+247%</span>
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default HeroSection;
