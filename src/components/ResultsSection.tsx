
import { useState } from 'react';

const stats = [
  {
    value: '200%',
    label: 'Average Increase in Organic Traffic',
  },
  {
    value: '4.5x',
    label: 'Return on Ad Spend (ROAS)',
  },
  {
    value: '85%',
    label: 'Client Retention Rate',
  },
  {
    value: '15+',
    label: 'Years of Industry Experience',
  },
];

const ResultsSection = () => {
  return (
    <section className="section-padding bg-secondary text-white">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4">Driving Real Results</h2>
          <p className="text-lg opacity-90">
            Our data-driven approach delivers measurable outcomes for businesses of all sizes.
            Here's what we've achieved for our clients:
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-300 mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-800 rounded-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-md mb-6">Our Proven Process</h3>
              <p className="mb-8 text-primary-100">
                We follow a methodical approach to ensure your digital marketing efforts align with your business goals and deliver measurable results.
              </p>
              
              <div className="space-y-6">
                {['Research & Discovery', 'Strategy Development', 'Implementation', 'Analytics & Optimization'].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="rounded-full bg-primary-500 text-white w-8 h-8 flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step}</h4>
                      <p className="text-primary-200">
                        {i === 0 && "Understand your business, audience, and competition to identify opportunities."}
                        {i === 1 && "Develop a tailored marketing strategy based on data and insights."}
                        {i === 2 && "Execute the strategy with precision and creativity."}
                        {i === 3 && "Continuously monitor, analyze, and optimize for maximum performance."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://placehold.co/500x400/8B5CF6/ffffff?text=Results+Chart" 
                alt="Results Chart" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
