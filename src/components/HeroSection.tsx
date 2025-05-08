
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-primary min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="heading-xl text-white mb-6">
              Digital Marketing Services <br />
              <span className="text-primary-300">That Drive Business Growth</span>
            </h1>
            <p className="text-white text-lg mb-8 opacity-90 max-w-xl">
              Our data-driven digital marketing strategies deliver measurable results. 
              We combine creativity with performance to help your business thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn btn-primary bg-white text-primary hover:bg-primary-100">
                Get Started
              </Button>
              <Button variant="outline" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                View Our Work
              </Button>
            </div>
            <div className="mt-12">
              <p className="text-primary-200 font-medium mb-3">Trusted by leading brands:</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <img src="https://placehold.co/120x40/ffffff/1A1F2C?text=BRAND" alt="Client" className="h-8 opacity-80" />
                <img src="https://placehold.co/120x40/ffffff/1A1F2C?text=BRAND" alt="Client" className="h-8 opacity-80" />
                <img src="https://placehold.co/120x40/ffffff/1A1F2C?text=BRAND" alt="Client" className="h-8 opacity-80" />
                <img src="https://placehold.co/120x40/ffffff/1A1F2C?text=BRAND" alt="Client" className="h-8 opacity-80" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in delay-300">
            <img 
              src="https://placehold.co/600x500/1A1F2C/ffffff?text=Marketing+Dashboard" 
              alt="Digital Marketing Dashboard" 
              className="rounded-lg shadow-2xl"
            />
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
