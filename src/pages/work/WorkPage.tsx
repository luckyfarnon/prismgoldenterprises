
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Work data
const workData = {
  'import-export': {
    title: 'Import & Export Portfolio',
    description: 'Explore our successful import and export projects that have helped businesses expand globally.',
    projects: [
      {
        title: 'Global Expansion for Tech Manufacturer',
        description: 'Helped a technology manufacturer expand into 12 new international markets with compliant import/export operations.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Tech+Expansion+Project',
        year: '2023',
        client: 'TechInnovate Inc.',
        results: 'Achieved 45% revenue growth in the first year of international operations'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Restructured international supply chain for a consumer goods company, reducing costs by 23% and delivery times by 40%.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Supply+Chain+Project',
        year: '2022',
        client: 'ConsumerGoods Co.',
        results: '23% cost reduction and 40% shorter delivery times'
      },
      {
        title: 'Customs Compliance Overhaul',
        description: 'Implemented comprehensive customs compliance program for a manufacturing firm, eliminating penalties and reducing clearance delays.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Customs+Compliance+Project',
        year: '2022',
        client: 'Manufacturing Plus',
        results: 'Zero compliance penalties and 65% faster customs clearance'
      },
      {
        title: 'International Market Entry Strategy',
        description: 'Developed and executed market entry strategy for a food products company entering Asian markets.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Market+Entry+Project',
        year: '2021',
        client: 'Global Foods Ltd.',
        results: 'Successfully established presence in 5 Asian markets within 8 months'
      },
      {
        title: 'Export Documentation Optimization',
        description: 'Streamlined export documentation processes for a textile exporter, reducing administrative time and errors.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Export+Documentation+Project',
        year: '2021',
        client: 'FashionTextiles Corp.',
        results: '80% reduction in documentation errors and 50% faster processing'
      },
      {
        title: 'Import Tariff Strategy',
        description: 'Developed strategic approaches to minimize tariff impacts for an electronics importer during trade disputes.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Tariff+Strategy+Project',
        year: '2020',
        client: 'ElectroTech Imports',
        results: 'Saved $3.2M in potential tariffs through strategic sourcing changes'
      }
    ]
  },
  'construction': {
    title: 'Construction Portfolio',
    description: 'Browse our diverse portfolio of construction projects showcasing our expertise across commercial and residential sectors.',
    projects: [
      {
        title: 'Modern Office Complex',
        description: 'Designed and constructed a 50,000 sq ft office complex with state-of-the-art amenities and LEED Gold certification.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Office+Complex+Project',
        year: '2023',
        client: 'TechCorp Enterprises',
        results: 'LEED Gold certification and 30% energy efficiency improvement'
      },
      {
        title: 'Residential Community Development',
        description: 'Completed a 120-unit residential community with sustainable features and community spaces on time and under budget.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Residential+Development+Project',
        year: '2022',
        client: 'Urban Housing Developers',
        results: 'Completed 2 months ahead of schedule and 5% under budget'
      },
      {
        title: 'Hospital Renovation',
        description: 'Executed complex renovation of an operational hospital, updating infrastructure while maintaining uninterrupted medical services.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Hospital+Renovation+Project',
        year: '2022',
        client: 'Metropolitan Healthcare System',
        results: 'Zero disruption to patient care during 18-month renovation'
      },
      {
        title: 'Retail Mall Expansion',
        description: 'Expanded an existing shopping mall by 75,000 sq ft, adding new stores, dining options, and entertainment spaces.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Mall+Expansion+Project',
        year: '2021',
        client: 'Retail Properties Group',
        results: '35% increase in visitor traffic after completion'
      },
      {
        title: 'Industrial Manufacturing Facility',
        description: 'Built a state-of-the-art manufacturing facility with advanced automation systems and sustainable design features.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Manufacturing+Facility+Project',
        year: '2021',
        client: 'Advanced Manufacturing Inc.',
        results: '40% increase in production capacity with 25% less energy usage'
      },
      {
        title: 'Luxury Hotel Construction',
        description: 'Constructed a 200-room luxury hotel featuring high-end finishes, multiple restaurants, and conference facilities.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Luxury+Hotel+Project',
        year: '2020',
        client: 'Premier Hospitality Group',
        results: 'Awarded "Best New Hotel Design" by Hospitality Excellence'
      }
    ]
  },
  'information-technology': {
    title: 'Information Technology Portfolio',
    description: 'Discover our innovative IT projects that have transformed businesses through custom development and digital solutions.',
    projects: [
      {
        title: 'Banking Platform Modernization',
        description: 'Transformed a legacy banking system into a modern, cloud-based platform, improving performance by 300% and enhancing security.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Banking+Platform+Project',
        year: '2023',
        client: 'Global Financial Services',
        results: '300% performance improvement and 99.99% uptime'
      },
      {
        title: 'Healthcare Management System',
        description: 'Developed an integrated healthcare management solution that streamlined operations across 12 facilities and improved patient care.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Healthcare+System+Project',
        year: '2022',
        client: 'Regional Health Network',
        results: '40% reduction in administrative workload and improved patient satisfaction'
      },
      {
        title: 'E-Commerce Platform Implementation',
        description: 'Built a scalable e-commerce platform that increased online sales by 150% and reduced operational costs by 35%.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=E-Commerce+Project',
        year: '2022',
        client: 'Retail Innovations Ltd.',
        results: '150% increase in online sales and 35% operational cost reduction'
      },
      {
        title: 'Supply Chain Management Solution',
        description: 'Created a real-time supply chain management system with IoT integration for a global manufacturing company.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Supply+Chain+Solution+Project',
        year: '2021',
        client: 'Industrial Manufacturing Group',
        results: 'Reduced inventory costs by 28% and improved delivery accuracy to 99.5%'
      },
      {
        title: 'Cybersecurity Infrastructure Overhaul',
        description: 'Redesigned and implemented a comprehensive cybersecurity infrastructure for a financial services firm.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=Cybersecurity+Project',
        year: '2021',
        client: 'Secure Financial Corp.',
        results: 'Zero security breaches since implementation and 90% reduction in vulnerabilities'
      },
      {
        title: 'Custom CRM Development',
        description: 'Developed a tailored customer relationship management system for a multinational service provider.',
        image: 'https://placehold.co/800x600/1A1F2C/ffffff?text=CRM+Development+Project',
        year: '2020',
        client: 'Global Services Inc.',
        results: '45% improvement in customer retention and 60% faster response times'
      }
    ]
  }
};

interface WorkPageProps {
  workType: 'import-export' | 'construction' | 'information-technology';
}

const WorkPage = ({ workType }: WorkPageProps) => {
  const work = workData[workType];

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
      <section className="relative bg-gradient-primary min-h-[50vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white mb-4" data-aos="fade-up">
              {work.title}
            </h1>
            <p className="text-white text-lg mb-8 opacity-90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              {work.description}
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
      
      {/* Projects Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {work.projects.map((project, index) => (
              <div 
                key={index} 
                className="card group overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-primary font-medium">{project.year}</span>
                    <span className="text-gray-500">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="bg-primary-100 p-4 rounded-md mb-4">
                    <p className="font-medium text-primary-800">Results: {project.results}</p>
                  </div>
                  <Button className="w-full btn-outline group">
                    View Project Details
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-wide">
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-center text-white max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="heading-md mb-6">Ready to Start Your Next Project?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact">
                <Button className="btn btn-primary bg-white text-primary hover:bg-primary-100 group">
                  Contact Us
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to={`/services/${workType}`}>
                <Button variant="outline" className="btn-outline border-white text-white hover:bg-white hover:text-primary-800">
                  Explore Services
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

export default WorkPage;
