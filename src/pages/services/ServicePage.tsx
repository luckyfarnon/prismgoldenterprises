
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Service data
const serviceData = {
  'import-export': {
    title: 'Import & Export Services',
    heroSubtitle: 'Global Trade Solutions for Growing Businesses',
    heroDescription: 'We help businesses navigate the complexities of international trade with comprehensive import and export solutions.',
    sections: [
      {
        title: 'End-to-End Import & Export Management',
        description: 'Our expert team handles all aspects of your international trade operations, from documentation and compliance to logistics and supply chain optimization.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Import+Export+Services',
        features: [
          'Customs documentation and compliance',
          'International logistics coordination',
          'Trade finance solutions',
          'Regulatory compliance management'
        ]
      },
      {
        title: 'Strategic Trade Consulting',
        description: 'Leverage our global trade expertise to develop effective import and export strategies that maximize profits while minimizing risks and costs.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Trade+Consulting',
        features: [
          'Market entry strategy development',
          'Tariff classification and valuation',
          'Free trade agreement utilization',
          'Supply chain risk assessment'
        ]
      }
    ],
    projects: [
      {
        title: 'Global Expansion for Tech Manufacturer',
        description: 'Helped a technology manufacturer expand into 12 new international markets with compliant import/export operations.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Tech+Expansion+Project'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Restructured international supply chain for a consumer goods company, reducing costs by 23% and delivery times by 40%.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Supply+Chain+Project'
      },
      {
        title: 'Customs Compliance Overhaul',
        description: 'Implemented comprehensive customs compliance program for a manufacturing firm, eliminating penalties and reducing clearance delays.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Customs+Compliance+Project'
      }
    ]
  },
  'construction': {
    title: 'Construction Services',
    heroSubtitle: 'Building Excellence from Foundation to Finish',
    heroDescription: 'Our construction services combine innovative design, quality materials, and expert craftsmanship to deliver exceptional building projects.',
    sections: [
      {
        title: 'Commercial Construction Management',
        description: 'From office buildings to retail spaces, we manage commercial construction projects with precision, ensuring on-time and on-budget delivery.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Commercial+Construction',
        features: [
          'Project planning and scheduling',
          'Budget development and management',
          'Quality control and assurance',
          'Regulatory compliance and permitting'
        ]
      },
      {
        title: 'Sustainable Building Solutions',
        description: 'We incorporate environmentally responsible practices and materials in our construction projects to create sustainable, energy-efficient buildings.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Sustainable+Building',
        features: [
          'Green building certification support',
          'Energy-efficient design implementation',
          'Sustainable material sourcing',
          'Waste reduction strategies'
        ]
      }
    ],
    projects: [
      {
        title: 'Modern Office Complex',
        description: 'Designed and constructed a 50,000 sq ft office complex with state-of-the-art amenities and LEED Gold certification.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Office+Complex+Project'
      },
      {
        title: 'Residential Community Development',
        description: 'Completed a 120-unit residential community with sustainable features and community spaces on time and under budget.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Residential+Development+Project'
      },
      {
        title: 'Hospital Renovation',
        description: 'Executed complex renovation of an operational hospital, updating infrastructure while maintaining uninterrupted medical services.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Hospital+Renovation+Project'
      }
    ]
  },
  'information-technology': {
    title: 'Information Technology Services',
    heroSubtitle: 'Digital Solutions for the Modern Enterprise',
    heroDescription: 'Our IT services empower businesses with cutting-edge technology solutions designed to enhance efficiency, security, and innovation.',
    sections: [
      {
        title: 'Custom Software Development',
        description: 'We design and develop tailored software solutions that address your unique business challenges and help you gain a competitive edge.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Software+Development',
        features: [
          'Web and mobile application development',
          'Enterprise software solutions',
          'Legacy system modernization',
          'API development and integration'
        ]
      },
      {
        title: 'IT Infrastructure & Cloud Services',
        description: 'Transform your IT infrastructure with our cloud-first approach to deliver scalable, secure, and reliable technology environments.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=IT+Infrastructure',
        features: [
          'Cloud migration and management',
          'Network design and implementation',
          'IT security infrastructure',
          '24/7 monitoring and support'
        ]
      }
    ],
    projects: [
      {
        title: 'Banking Platform Modernization',
        description: 'Transformed a legacy banking system into a modern, cloud-based platform, improving performance by 300% and enhancing security.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Banking+Platform+Project'
      },
      {
        title: 'Healthcare Management System',
        description: 'Developed an integrated healthcare management solution that streamlined operations across 12 facilities and improved patient care.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=Healthcare+System+Project'
      },
      {
        title: 'E-Commerce Platform Implementation',
        description: 'Built a scalable e-commerce platform that increased online sales by 150% and reduced operational costs by 35%.',
        image: 'https://placehold.co/600x400/1A1F2C/ffffff?text=E-Commerce+Project'
      }
    ]
  }
};

interface ServicePageProps {
  serviceType: 'import-export' | 'construction' | 'information-technology';
}

const ServicePage = ({ serviceType }: ServicePageProps) => {
  const service = serviceData[serviceType];

  useEffect(() => {
    // Initialize AOS animation library
    if (typeof window !== 'undefined') {
      const AOS = require('aos');
      AOS.init({
        duration: 800,
        once: false,
        mirror: true,
        offset: 100,
      });
      
      // Scroll to top on page load
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary min-h-[70vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[20%] left-[5%] w-32 h-32 bg-primary-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[30%] right-[15%] w-40 h-40 bg-primary-400 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white mb-4" data-aos="fade-up">
              {service.title}
            </h1>
            <h2 className="text-2xl text-primary-300 font-medium mb-6" data-aos="fade-up" data-aos-delay="100">
              {service.heroSubtitle}
            </h2>
            <p className="text-white text-lg mb-8 opacity-90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="200">
              {service.heroDescription}
            </p>
            <div data-aos="fade-up" data-aos-delay="300">
              <Button className="btn btn-primary bg-white text-primary hover:bg-primary-100 group">
                Get Started
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
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
      
      {/* Service Description Sections */}
      {service.sections.map((section, index) => (
        <section key={index} className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-primary-100'}`}>
          <div className="container-wide">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              <div data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}>
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="rounded-lg shadow-lg w-full object-cover"
                />
              </div>
              
              <div data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}>
                <h2 className="heading-md mb-6 text-primary-800">{section.title}</h2>
                <p className="text-lg mb-8 text-gray-700">{section.description}</p>
                
                <div className="space-y-4 mb-8">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-primary h-6 w-6 shrink-0 mt-0.5" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="btn btn-primary group">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}
      
      {/* Project Highlights Section */}
      <section className="section-padding bg-secondary text-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="heading-lg mb-4">Our {service.title} Projects</h2>
            <p className="text-lg opacity-90">
              Explore our successful projects that showcase our expertise and commitment to delivering exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-primary-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="mb-4 opacity-90">{project.description}</p>
                  <Link to={`/work/${serviceType}`}>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-800">
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to={`/work/${serviceType}`}>
              <Button className="btn btn-primary group">
                View All Projects
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-wide">
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-center text-white max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="heading-md mb-6">Ready to Start Your Next Project?</h2>
            <p className="text-lg mb-8 opacity-90">
              Contact us today to discuss how our {service.title} can help your business achieve its goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="btn btn-primary bg-white text-primary hover:bg-primary-100 group">
                  Contact Us
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
