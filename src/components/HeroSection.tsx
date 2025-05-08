
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-primary min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-32 h-32 bg-primary-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[30%] right-[15%] w-40 h-40 bg-primary-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <h1 className="heading-xl text-white mb-8">
              Digital Marketing <br />
              <span className="text-primary-300 font-bold">That Drives Growth</span>
            </h1>
            <p className="text-white text-lg mb-8 opacity-90 max-w-xl leading-relaxed">
              Our data-driven digital marketing strategies deliver measurable results. 
              We combine creativity with performance to help your business thrive in the competitive digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="btn btn-primary bg-white text-primary hover:bg-primary-100 group">
                Get Started
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="btn-outline border-white text-white hover:bg-white hover:text-primary group">
                View Our Work
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-primary-200 font-medium mb-3">Trusted by leading brands:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-80' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: `${i * 200 + 500}ms` }}>
                  <img src="https://placehold.co/120x40/ffffff/1A1F2C?text=BRAND" alt="Client" className="h-8" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`hidden lg:block transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-300 rounded-lg"></div>
              <img 
                src="https://placehold.co/600x500/1A1F2C/ffffff?text=Marketing+Dashboard" 
                alt="Digital Marketing Dashboard" 
                className="rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 p-4 bg-white rounded-lg shadow-lg z-20 w-48 animate-pulse">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-xs font-semibold text-secondary">Live Performance</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-secondary">+247%</span>
                  <span className="text-xs text-primary">ROI</span>
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
