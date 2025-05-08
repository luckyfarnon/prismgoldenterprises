
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, Users, Award, Building, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
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
  
  const milestones = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'Digital Silk was established with a vision to provide innovative digital solutions.'
    },
    {
      year: '2012',
      title: 'Expansion of Services',
      description: 'Added specialized services in import/export, construction, and IT sectors.'
    },
    {
      year: '2015',
      title: 'National Recognition',
      description: 'Received Industry Excellence Award for outstanding client results.'
    },
    {
      year: '2018',
      title: 'International Expansion',
      description: 'Opened offices in Europe and Asia to serve global clients.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched advanced digital platforms for enhanced client experience.'
    },
    {
      year: '2023',
      title: 'Industry Leadership',
      description: 'Recognized as a leader in multiple industries we serve.'
    }
  ];
  
  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-primary min-h-[50vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white mb-4" data-aos="fade-up">
              About Digital Silk
            </h1>
            <p className="text-white text-lg mb-8 opacity-90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              We are a team of dedicated professionals committed to delivering exceptional solutions
              across multiple industries. Our expertise, innovation, and client-first approach set us apart.
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
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary-300 rounded-lg"></div>
                <img 
                  src="https://placehold.co/600x400/1A1F2C/ffffff?text=Our+Vision" 
                  alt="Company Vision" 
                  className="rounded-lg shadow-2xl relative z-10"
                />
              </div>
            </div>
            
            <div data-aos="fade-left">
              <h2 className="heading-md mb-6 text-primary-800">Our Vision & Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                At Digital Silk, we believe in transforming businesses through innovative solutions that drive growth and excellence. 
                Our mission is to deliver exceptional value across the industries we serve, combining expertise and creativity to solve complex challenges.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Innovation at the core of everything we do",
                  "Client success as our primary measure of achievement",
                  "Excellence in delivery with attention to detail",
                  "Integrity and transparency in all relationships"
                ].map((value, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="text-primary h-6 w-6 shrink-0 mt-0.5" />
                    <p className="text-gray-700">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section-padding bg-primary-100 overflow-hidden">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="heading-lg mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              Explore the key milestones that have shaped our company since its inception.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary opacity-30 hidden md:block"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center mb-16 last:mb-0`}
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-delay={index * 50}
              >
                <div className="md:w-1/2 relative p-6">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-white rounded-lg shadow-lg -z-10 transform -rotate-2"></div>
                  <div className="bg-white rounded-lg shadow-lg p-6 relative z-10">
                    <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-3">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="md:w-1/2 flex justify-center my-6 md:my-0">
                  <div className="bg-primary rounded-full w-12 h-12 flex items-center justify-center text-white font-bold z-10">
                    <Calendar className="h-6 w-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="heading-lg mb-4">Digital Silk by the Numbers</h2>
            <p className="text-muted-foreground text-lg">
              Our achievements and growth over the years.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Users, number: '250+', label: 'Team Members' },
              { icon: Building, number: '5', label: 'Global Offices' },
              { icon: Award, number: '15+', label: 'Industry Awards' },
              { icon: Check, number: '500+', label: 'Projects Completed' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-primary-100 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="mx-auto bg-primary-800 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-primary-700 mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Our Expertise',
                description: 'We combine industry knowledge with technical expertise to deliver solutions that exceed expectations.',
                items: [
                  'Industry specialized teams',
                  'Continuous learning and development',
                  'Best practice implementation',
                  'Technology partnerships'
                ]
              },
              {
                title: 'Our Approach',
                description: 'We follow a structured yet flexible approach to ensure successful outcomes for our clients.',
                items: [
                  'Detailed discovery and planning',
                  'Transparent communication',
                  'Agile implementation methods',
                  'Continuous improvement cycles'
                ]
              },
              {
                title: 'Our Commitments',
                description: 'We are committed to excellence, sustainability, and making a positive impact.',
                items: [
                  'Environmental responsibility',
                  'Community engagement',
                  'Diverse and inclusive workplace',
                  'Ethical business practices'
                ]
              }
            ].map((column, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-4 text-primary-800">{column.title}</h3>
                <p className="mb-6 text-gray-700">{column.description}</p>
                <ul className="space-y-3">
                  {column.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-primary h-5 w-5 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-wide">
          <div className="bg-gradient-primary rounded-lg p-8 md:p-12 text-center text-white max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="heading-md mb-6">Ready to Work With Us?</h2>
            <p className="text-lg mb-8 opacity-90">
              Start a conversation with our team to discuss how we can help your business succeed.
            </p>
            <Button className="btn btn-primary bg-white text-primary hover:bg-primary-100 group">
              Contact Our Team
              <Calendar className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
