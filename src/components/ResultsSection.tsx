import { useState, useRef, useEffect } from 'react';
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const chartData = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 30 },
  { month: 'Mar', value: 45 },
  { month: 'Apr', value: 50 },
  { month: 'May', value: 65 },
  { month: 'Jun', value: 75 },
  { month: 'Jul', value: 85 },
  { month: 'Aug', value: 100 },
];

const stats = [
  {
    value: '200%',
    label: 'Average Increase in Organic Traffic',
    description: 'Our SEO strategies drive sustainable growth'
  },
  {
    value: '4.5x',
    label: 'Return on Ad Spend (ROAS)',
    description: 'Maximize your marketing budget effectively'
  },
  {
    value: '85%',
    label: 'Client Retention Rate',
    description: 'We build lasting partnerships with clients'
  },
  {
    value: '15+',
    label: 'Years of Industry Experience',
    description: 'Proven expertise in digital marketing'
  },
];

// Custom hook for count up animation
function useCountUp(end: number, start: boolean, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startVal = 0;
    const increment = end / (duration / 16);
    let frame: number;
    function animate() {
      startVal += increment;
      if (startVal < end) {
        setCount(Number(startVal.toFixed(2)));
        frame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    }
    animate();
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start]);
  return count;
}

// Helper to extract number and suffix
function parseStatValue(value: string) {
  const match = value.match(/([\d.]+)([\w%+]*)/);
  if (!match) return { number: 0, suffix: '' };
  return { number: parseFloat(match[1]), suffix: match[2] };
}

const ResultsSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [startCount, setStartCount] = useState(false);
  
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-black text-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="heading-xl mb-4 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Driving Real Results</h2>
          <p className="text-lg opacity-90">
            Our data-driven approach delivers measurable outcomes for businesses of all sizes.
            Here's what we've achieved for our clients:
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const { number, suffix } = parseStatValue(stat.value);
            const animated = useCountUp(number, startCount);
            return (
              <div 
                key={index} 
                className="text-center" 
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent mb-2">
                  {suffix === 'x' ? `${animated.toFixed(1)}x` : `${Math.round(animated)}${suffix}`}
                </div>
                <p className="text-sm md:text-base mb-2">{stat.label}</p>
                <p className="text-xs md:text-sm opacity-60">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-secondary rounded-lg p-8 lg:p-12" data-aos="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-6">Our Proven Process</h3>
              <p className="mb-8 text-primary-100">
                We follow a methodical approach to ensure your digital marketing efforts align with your business goals and deliver measurable results.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Research & Discovery',
                    desc: "Understand your business, audience, and competition to identify opportunities."
                  },
                  {
                    title: 'Strategy Development',
                    desc: "Develop a tailored marketing strategy based on data and insights."
                  },
                  {
                    title: 'Implementation',
                    desc: "Execute the strategy with precision and creativity."
                  },
                  {
                    title: 'Analytics & Optimization',
                    desc: "Continuously monitor, analyze, and optimize for maximum performance."
                  }
                ].map((step, i) => (
                  <div 
                    key={i} 
                    className={`flex items-start gap-4 cursor-pointer transition-all duration-300 ${
                      activeStep === i + 1 ? 'scale-105' : 'opacity-70 hover:opacity-100'
                    }`}
                    onClick={() => handleStepChange(i + 1)}
                  >
                    <div className={`rounded-full ${
                      activeStep === i + 1 ? 'bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#ae8625] text-black group' : 'bg-white'
                    } text-white w-8 h-8 flex items-center justify-center shrink-0 transition-colors duration-300`}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-primary-200">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="bg-primary-900/50 rounded-lg p-6 shadow-lg">
                <h4 className="font-bold text-lg mb-4">Performance Metrics</h4>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    {activeStep === 1 ? (
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="month" stroke="#aaa" />
                        <YAxis stroke="#aaa" />
                        <Tooltip />
                        <Area type="monotone" dataKey="value" stroke="#8B5CF6" fillOpacity={1} fill="url(#colorValue)" />
                      </AreaChart>
                    ) : (
                      <LineChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="month" stroke="#aaa" />
                        <YAxis stroke="#aaa" />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8B5CF6" activeDot={{ r: 8 }} strokeWidth={2} />
                      </LineChart>
                    )}
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;