'use client';

import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Globe, LineChart, Leaf, Cpu, HardHat, Building, ShieldCheck, Server, Code } from 'lucide-react'; // Added relevant icons
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParallax } from "@/hooks/useParallax";
// import { HardHatIcon, LeafIcon, BuildingIcon } from 'lucide-react'; // Already imported above
import CustomCursor from '../../components/CustomCursor'

// Renamed icons for clarity
const HardHatIcon = HardHat;
const LeafIcon = Leaf;
const BuildingIcon = Building;

interface ModernSection {
  title: string;
  description: string;
  icon: string;
  stats: {
    value: string;
    label: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
}

interface ServiceData {
  title: string;
  heroSubtitle: string;
  heroDescription: string;
  sections: {
    title: string;
    description: string;
    image: string; // Can be image URL or video URL
    features: string[];
  }[];
  modernSections?: ModernSection[];
  projects: {
    title: string;
    description: string;
    image: string;
  }[];
}

// Service data (Keeping construction and import/export as is)
const serviceData: Record<string, ServiceData> = {
  'import-export': {
    title: 'ImportExport Services',
    heroSubtitle: 'Take a look at what prism created <br/> and get inspired',
    heroDescription: 'We help businesses navigate the complexities of international trade with comprehensive import and export solutions.',
    sections: [
      {
        title: 'End-to-End Import & Export Management',
        description: 'Our expert team handles all aspects of your international trade operations, from documentation and compliance to logistics and supply chain optimization.',
        image: '/public/images/importexport.mp4',
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
        image: '/public/images/trade.mp4',
        features: [
          'Market entry strategy development',
          'Tariff classification and valuation',
          'Free trade agreement utilization',
          'Supply chain risk assessment'
        ]
      },
      {
        title: 'Digital Trade Solutions',
        description: 'Embrace the future of international trade with our cutting-edge digital solutions that streamline operations and enhance visibility across your supply chain.',
        image: '/public/images/DigitalTrade.mp4',
        features: [
          'Real-time shipment tracking',
          'Automated documentation processing',
          'Blockchain-based trade finance',
          'AI-powered market analysis'
        ]
      },
      {
        title: 'Sustainable Trade Practices',
        description: 'Partner with us to implement environmentally conscious trade practices that align with global sustainability goals while maintaining operational efficiency.',
        image: '/public/images/sustainable.mp4',
        features: [
          'Carbon footprint reduction',
          'Green logistics optimization',
          'Sustainable packaging solutions',
          'Eco-friendly supply chain design'
        ]
      }
    ],
    modernSections: [
      {
        title: 'Global Trade Innovation Hub',
        description: 'Experience the future of international trade with our state-of-the-art digital solutions and innovative approaches.',
        icon: 'globe',
        stats: [
          { value: '150+', label: 'Countries Served' },
          { value: '98%', label: 'Client Satisfaction' },
          { value: '24/7', label: 'Support Available' }
        ],
        features: [
          {
            title: 'Smart Trade Analytics',
            description: 'Leverage AI-powered insights to optimize your trade operations and make data-driven decisions.',
            icon: 'chart'
          },
          {
            title: 'Blockchain Integration',
            description: 'Secure and transparent trade documentation with our blockchain-based solutions.',
            icon: 'shield'
          },
          {
            title: 'Real-time Tracking',
            description: 'Monitor your shipments in real-time with our advanced tracking system.',
            icon: 'map'
          }
        ]
      },
      {
        title: 'Sustainable Trade Solutions',
        description: 'Join us in building a greener future for international trade with eco-friendly practices and sustainable solutions.',
        icon: 'leaf',
        stats: [
          { value: '45%', label: 'Carbon Reduction' },
          { value: '100%', label: 'Green Certified' },
          { value: '500+', label: 'Eco Projects' }
        ],
        features: [
          {
            title: 'Green Logistics',
            description: 'Optimize your supply chain with environmentally conscious transportation and warehousing.',
            icon: 'truck'
          },
          {
            title: 'Sustainable Packaging',
            description: 'Reduce environmental impact with our eco-friendly packaging solutions.',
            icon: 'package'
          },
          {
            title: 'Carbon Credits',
            description: 'Offset your carbon footprint with our verified carbon credit program.',
            icon: 'tree'
          }
        ]
      }
    ],
    projects: [
      {
        title: 'Global Expansion for Tech Manufacturer',
        description: 'Helped a technology manufacturer expand into 12 new international markets with compliant import/export operations.',
        image: '/public/images/tech.jpg'
      },
      {
        title: 'Supply Chain Optimization',
        description: 'Restructured international supply chain for a consumer goods company, reducing costs by 23% and delivery times by 40%.',
        image: '/public/images/supply.jpg'
      },
      {
        title: 'Customs Compliance Overhaul',
        description: 'Implemented comprehensive customs compliance program for a manufacturing firm, eliminating penalties and reducing clearance delays.',
        image: '/public/images/custom.jpg'
      },
      {
        title: 'Digital Transformation Success',
        description: 'Successfully digitized trade operations for a multinational corporation, reducing processing time by 60% and improving accuracy by 95%.',
        image: '/public/images/digital-tranformation.jpg'
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
        image: '/public/images/Commercialcon.mp4',
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
        image: '/public/images/SustainCon.mp4',
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
        image: '/public/images/modern.jpg'
      },
      {
        title: 'Residential Community Development',
        description: 'Completed a 120-unit residential community with sustainable features and community spaces on time and under budget.',
        image: '/public/images/resident.jpg'
      }
    ]
  },
  'information-technology': {
    title: 'Information Technology Services',
    heroSubtitle: 'Digital Solutions for the Modern Enterprise', // Updated subtitle
    heroDescription: 'Unlock the power of technology with Prism\'s IT solutions: cloud migration, cybersecurity, custom software, and seamless digital experiences for the future.', // Updated description
    sections: [
      {
        title: 'Web Development',
        description: 'We create modern, responsive, and user-friendly websites that help your business stand out online and connect with your audience effectively. Our web development services are tailored to your unique needs, ensuring a strong digital presence and measurable results.',
        image: '/public/images/softwareDevelopment.jpg',
        features: [
          'Custom website design and development',
          'Responsive & mobile-friendly websites',
          'E-commerce solutions',
          'Content Management Systems (CMS) integration',
          'Website speed optimization and SEO',
          'Website maintenance and support'
        ]
      },
      {
        title: 'Graphic Designing',
        description: 'Our creative team delivers eye-catching and impactful graphic design solutions that elevate your brand identity. From logos to marketing materials, we ensure your visuals leave a lasting impression and communicate your message effectively.',
        image: '/public/images/graphic.jpg', // You can update this to a graphic design image if available
        features: [
          'Logo & brand identity design',
          'Business cards & stationery',
          'Brochures & flyers',
          'Social media graphics',
          'Banner & poster design',
          'Infographics & presentations'
        ]
      },
      {
        title: 'E-Commerce Development',
        description: 'Grow your business with a powerful online store. We build secure, scalable, and user-friendly e-commerce solutions with seamless payment integration, order management, and built-in marketing & SEO tools to help you succeed online.',
        image: '/public/images/ecommerce.jpg', // Update this path if you have a specific e-commerce image
        features: [
          'Custom online store development',
          'Payment gateway integration',
          'Order & inventory management',
          'Product catalog & categories',
          'Promotions & discount management',
          'Marketing & SEO optimization',
          'Customer account & review system'
        ]
      },
      {
        title: 'Digital Marketing',
        description: 'Boost your online presence and reach your target audience with our comprehensive digital marketing services. We offer expert solutions in SEM, paid advertising, social media marketing, and SEO to help your business grow and succeed in the digital world.',
        image: '/public/images/digital-tranformation.jpg', // Update this path if you have a specific digital marketing image
        features: [
          'Search Engine Marketing (SEM)',
          'Paid advertising (Google Ads, Facebook Ads, etc.)',
          'Social Media Marketing (SMM)',
          'Search Engine Optimization (SEO)',
          'Content creation & strategy',
          'Analytics & performance tracking'
        ]
      },
    ],
    projects: [
      {
        title: 'Banking Platform Modernization',
        description: 'Transformed a legacy banking system into a modern, cloud-native platform, improving performance by 300% and enhancing security posture.',
        image: '/public/images/bank.jpg'
      },
      {
        title: 'Healthcare Data Analytics Solution', // Renamed
        description: 'Developed an integrated data analytics solution improving patient outcome predictions and streamlining operations across 15 facilities.', // Updated description
        image: '/public/images/health.jpg'
      },
      {
        title: 'Scalable E-Commerce Platform', // Renamed
        description: 'Engineered a high-performance, scalable e-commerce platform supporting 5M+ users, increasing sales by 150% and reducing operational costs.', // Updated description
        image: '/public/images/ecommerce.jpg'
      }
    ]
  }
};

interface ServicePageProps {
  serviceType: 'import-export' | 'construction' | 'information-technology';
}

// AnimatedCounter component (remains the same)
function AnimatedCounter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          let start = 0;
          const end = value;
          if (isNaN(end)) return; // Prevent animation if value is not a number
          const increment = end / (duration / 16);
          let current = start;
          setHasAnimated(true);
          const step = () => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
              setCount(end);
            } else {
              setCount(Math.floor(current));
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step); // Start animation
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  // Format the number with commas if it's large enough
  const formatNumber = (num: number) => {
      if (isNaN(num)) return '';
      return num.toLocaleString();
  };

  // Extract suffix if present (like '%', '+')
  const strValue = typeof value === 'string' ? value : '';
  const suffix = strValue.replace(/[\d.,]/g, '');
  const numericValue = parseFloat(strValue.replace(/,/g, ''));

  // Use the formatted count value
  return <span ref={ref}>{formatNumber(count)}{suffix}</span>;
}


const ServicePage = ({ serviceType }: ServicePageProps) => {
  const service = serviceData[serviceType];
  const IT_COLOR = '#03508B'; // Define IT color constant

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);
    // Keep parallax effect if desired, otherwise remove
    // gsap.to(".parallax-img", {
    //   y: -100,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".image-wrapper",
    //     scrub: true,
    //   },
    // });

     // Cleanup AOS on component unmount
     return () => {
        AOS.refresh(); // Recommended by AOS docs
    };
  }, [serviceType]); // Add serviceType dependency to re-init on change if needed

  const renderServiceSection = (section: any, index: number) => {
     // Determine background color based on index and service type
     let bgColorClass = '';
     if (serviceType === 'information-technology') {
       if (index === 0 || index === 2) {
         bgColorClass = 'bg-black'; // Force black background for Web Development and E-Commerce sections
       } else if (index === 1 || index === 3) {
         bgColorClass = 'bg-white'; // Force white background for Graphic Designing and Digital Marketing sections
       } else {
         bgColorClass = index % 2 === 0 ? 'bg-gray-900' : 'bg-[#023a63]'; // Dark blue shade
       }
     } else {
       // Original logic for other services
       bgColorClass = section.image === '/public/images/DigitalTrade.mp4' ? 'bg-black' : (index === 0 ? 'bg-black' : (index % 2 === 0 ? 'bg-white' : 'bg-gray-50'));
     }

    // Determine text colors based on background and service type
    const isDarkBg = bgColorClass.includes('black') || bgColorClass.includes('gray-900') || bgColorClass.includes('#023a63');
    const primaryTextColor = isDarkBg ? 'text-white' : 'text-gray-900';
    const secondaryTextColor = isDarkBg ? 'text-gray-300' : 'text-gray-600';
    const featureTextColor = isDarkBg ? 'text-gray-200' : 'text-gray-700';
    const accentColorClass = serviceType === 'information-technology'
        ? `text-[${IT_COLOR}]`
        : serviceType === 'construction'
        ? 'text-primary-bd8a2a'
        : 'text-primary-618d3c'; // Default green for import/export


    // Choose icon based on section title or index for IT
    let IconComponent;
    if (serviceType === 'information-technology') {
        if (section.title.includes('Software Development')) IconComponent = Code;
        else if (section.title.includes('Cloud') || section.title.includes('Infrastructure')) IconComponent = Server;
        else if (section.title.includes('Data') || section.title.includes('AI')) IconComponent = Cpu;
        else if (section.title.includes('Managed IT')) IconComponent = ShieldCheck;
        else IconComponent = Cpu; // Default IT icon
    } else {
        // Original Icon logic for other services
        if (index === 0) IconComponent = Globe;
        else if (index === 1) IconComponent = LineChart;
        else if (index === 2) IconComponent = Cpu; // Example, adjust as needed
        else if (index === 3) IconComponent = Leaf;
        else IconComponent = Globe; // Default fallback
    }


    return (
    <div
      key={index}
      className={`py-20 ${bgColorClass}`} // Use dynamic background
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="mb-6">
               {IconComponent && <IconComponent className={`w-12 h-12 mb-4 ${(serviceType === 'construction') ? 'text-[#bd8a2a]' : (serviceType === 'import-export') ? 'text-[#618d3c]' : (index === 0 || index === 1 || index === 2 || index === 3) ? 'text-[#2A78AE]' : accentColorClass}`} />}
            </div>
            {index === 1 ? (
              <h1 className={`text-3xl font-bold mb-6 ${(serviceType === 'construction') ? 'text-[#bd8a2a]' : (serviceType === 'import-export') ? 'text-[#618d3c]' : 'text-[#2A78AE]'}`}>{section.title}</h1>
            ) : index === 2 ? (
              <h1 className={`text-3xl font-bold mb-6 ${(serviceType === 'construction') ? 'text-[#bd8a2a]' : (serviceType === 'import-export') ? 'text-[#618d3c]' : 'text-[#2A78AE]'}`}>{section.title}</h1>
            ) : index === 3 ? (
              <h1 className={`text-3xl font-bold mb-6 ${(serviceType === 'construction') ? 'text-[#bd8a2a]' : (serviceType === 'import-export') ? 'text-[#618d3c]' : 'text-[#2A78AE]'}`}>{section.title}</h1>
            ) : (
              <h3 className={`text-3xl font-bold mb-6 ${(serviceType === 'construction') ? 'text-[#bd8a2a]' : (serviceType === 'import-export') ? 'text-[#618d3c]' : (index === 0 ? 'text-[#2A78AE]' : accentColorClass)}`}>{section.title}</h3>
            )}
            <p className={`text-lg mb-8 ${secondaryTextColor}`}>{section.description}</p>
            <ul className="space-y-4">
              {section.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle className={`w-6 h-6 mr-3 flex-shrink-0 ${(serviceType === 'import-export') ? 'text-[#618d3c]' : (serviceType === 'construction') ? 'text-[#bd8a2a]' : (index === 0 || index === 1 || index === 2 || index === 3) ? 'text-[#2A78AE]' : accentColorClass}`} />
                  <span className={featureTextColor}>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="relative rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              {section.image.endsWith('.mp4') ? (
                <video
                  src={section.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[400px] object-cover"
                  // Add poster attribute for videos if available
                  // poster="/path/to/video-poster.jpg"
                />
              ) : (
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-[400px] object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div> {/* Slightly darker overlay */}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  };


  // renderModernSection is specific to import-export data, so no IT color changes needed here
  // unless the data structure changes to include modernSections for IT.
  const renderModernSection = (section: any, index: number) => (
    <div
      key={index}
      className={`py-24 ${section.title === 'Sustainable Trade Solutions' ? 'bg-white' : 'bg-black'}`}
      data-aos="fade-up"
    >
      <div className="container-wide">
        <div className="text-center mb-16">
          <div className={`inline-block p-4 rounded-full ${section.title === 'Sustainable Trade Solutions' ? 'bg-primary-618d3c' : 'bg-white'} shadow-lg mb-6`}>
            {section.icon === 'globe' && <Globe className="w-12 h-12 text-primary-618d3c" />}
            {section.icon === 'leaf' && <Leaf className="w-12 h-12 text-white" />}
            {/* Add other icon checks if needed */}
          </div>
          <h2 className={`text-4xl font-bold mb-6 ${section.title === 'Sustainable Trade Solutions' ? 'text-gray-900' : 'text-white'}`}>{section.title}</h2>
          <p className={`text-xl max-w-3xl mx-auto ${section.title === 'Sustainable Trade Solutions' ? 'text-gray-600' : 'text-gray-200'}`}>{section.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {section.stats.map((stat: any, idx: number) => {
            const match = String(stat.value).match(/([\d,]+)/); // Include comma in regex
            const numValue = match ? parseFloat(match[1].replace(/,/g, '')) : 0; // Parse float after removing commas
            const suffix = String(stat.value).replace(/[\d,.]/g, ''); // Remove digits, comma, and period for suffix
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="text-4xl font-bold text-primary-618d3c mb-2"> {/* Keep green for import/export */}
                   <AnimatedCounter value={numValue} />{suffix}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {section.features.map((feature: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4">
                 {/* Keep green icons for import/export */}
                {feature.icon === 'chart' && <LineChart className="w-8 h-8 text-primary-618d3c" />}
                {feature.icon === 'shield' && <ShieldCheck className="w-8 h-8 text-primary-618d3c" />}
                {feature.icon === 'map' && <Globe className="w-8 h-8 text-primary-618d3c" />}
                {feature.icon === 'truck' && <Cpu className="w-8 h-8 text-primary-618d3c" />} {/* Placeholder */}
                {feature.icon === 'package' && <Leaf className="w-8 h-8 text-primary-618d3c" />} {/* Placeholder */}
                {feature.icon === 'tree' && <Leaf className="w-8 h-8 text-primary-618d3c" />} {/* Placeholder */}
                {/* Add other icons as needed */}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


  // Define colors based on service type
  const primaryColor = serviceType === 'information-technology' ? IT_COLOR : serviceType === 'construction' ? '#ae8625' : '#618d3c';
  const secondaryColor = serviceType === 'information-technology' ? '#3b82f6' : serviceType === 'construction' ? '#f0d865' : '#bd8a2a'; // Example secondary colors
  const hoverColor = serviceType === 'information-technology' ? '#023a63' : serviceType === 'construction' ? '#ca9b2b' : '#73a302';

  return (
    <>
       {/* CustomCursor color can be adapted too if desired */}
      <CustomCursor color={serviceType === 'construction' ? secondaryColor : undefined} />
      <AnimatePresence mode="wait">
        <motion.div
          key={serviceType}
          className="overflow-x-hidden" // Prevent horizontal overflow
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.5 } }}
        >
          <Navbar />

          {/* Hero Section */}
          <section className={`relative h-[100vh] md:h-[115vh] flex flex-col justify-center overflow-hidden`}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ pointerEvents: 'none' }}
                // Use different videos per service type
                src={
                    serviceType === 'information-technology' ? "/public/images/it-vid.mp4" :
                    serviceType === 'construction' ? "/public/images/con2.mp4" :
                    "/public/images/imp.mp4" // Default import/export
                }
                 key={serviceType} // Force re-render on service type change
            >
                 {/* Provide multiple sources for compatibility if needed */}
                 {/* <source src="..." type="video/webm" /> */}
            </video>

             {/* Overlay */}
            <div className={`absolute inset-0 z-10 pointer-events-none ${
                serviceType === 'information-technology' ? 'bg-black/60' : // Darker overlay for IT readability
                serviceType === 'construction' ? 'bg-black/50' :
                'bg-black/50' // Default overlay
            }`} />

             {/* Decorative Elements (Optional) */}
            <div className="absolute inset-0 overflow-hidden z-0">
              <div className={`absolute top-[20%] left-[5%] w-32 h-32 rounded-full opacity-20 blur-3xl animate-pulse`} style={{ backgroundColor: secondaryColor }}></div>
              <div className={`absolute bottom-[30%] right-[15%] w-40 h-40 rounded-full opacity-20 blur-3xl animate-pulse`} style={{ backgroundColor: primaryColor, animationDelay: '1s' }}></div>
            </div>

             {/* Hero Content */}
            <div className={`container-wide mx-w-5xl relative z-20 ${serviceType === 'information-technology' ? 'text-white' : 'text-white'}`}> {/* Ensure text is white for all */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={serviceType === 'information-technology' ? 'max-w-[1200px]' : 'max-w-[700px]'}>
                  {/* Service Title */}
                  <h1
                    className="font-extrabold text-white text-5xl md:text-6xl lg:text-7xl leading-tight drop-shadow-2xl mb-4"
                    style={{letterSpacing: '-2px'}}
                    data-aos="fade-up"
                  >
                     {/* Dynamic Title Parts */}
                     {serviceType === 'information-technology' && <><span className="whitespace-nowrap text-6xl">Markov International</span> <br/>A Prism <span className='bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent text-6xl'>Gold</span> Subsidiary</>}
                     {serviceType === 'construction' && <>Construction<br />Services</>}
                     {serviceType === 'import-export' && <>Import <span style={{color: primaryColor}}>&</span> Export<br />Services</>}
                  </h1>

                  {/* Accent Bar */}
                   <div
                    className="w-32 h-2 rounded-full mb-6 animate-pulse"
                    style={{ background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})` }}
                    data-aos="fade-up" data-aos-delay="100"
                  ></div>

                  {/* Subtitle */}
                   <h2
                    className="font-semibold text-2xl md:text-3xl mb-6"
                    style={{ color: secondaryColor }} // Use secondary color for subtitle
                    data-aos="fade-up" data-aos-delay="200"
                  >
                    {/* Using span for potential gradient/effect later if needed */}
                    <span>{serviceType === 'information-technology'
                      ? ''
                      : (service.heroSubtitle || '').replace(/<br\/>/g, '')}</span>
                  </h2>

                   {/* Description */}
                   <p className="text-white text-lg mb-8 opacity-90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                    {serviceType === 'information-technology'
                      ? `Markov International is a dedicated IT solutions company operating under the umbrella of Prism Gold Enterprises. Established to cater to the rapidly evolving technology landscape, Morkov provides cutting-edge software, digital transformation, and IT consulting services. It complements Prism Gold's broader portfolio by offering specialized digital solutions tailored for modern business needs.`
                      : String(service.heroDescription)}
                  </p>

                  {/* CTA Button */}
                  <div data-aos="fade-up" data-aos-delay="400">
                    <Button
                      className={`btn btn-primary text-white hover:text-white shadow-xl px-6 py-3 text-base font-semibold group`}
                      style={{ backgroundColor: primaryColor }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = hoverColor}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = primaryColor}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Curved Bottom Shape */}
            <div className="absolute bottom-0 left-0 w-full z-10">
                {/* Use white fill for standard transition, adjust if needed */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full block">
                <path
                  fill={ serviceType === 'information-technology' ? '#f9fafb' : '#ffffff'} // Light gray for IT transition, white otherwise
                  fillOpacity="1"
                  d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,48C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
                ></path>
              </svg>
            </div>
          </section>

          {/* --- Content Sections Start --- */}

           {/* Information Technology - Specific "Why Choose Us" / Stats Section */}
           {serviceType === 'information-technology' && (
             <section className="w-full py-14 bg-gray-50 flex flex-col items-center justify-center"> {/* Light gray background */}
               <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center" style={{ color: primaryColor }}>
                 Why Partner with Prism IT?
               </h2>
               <div className="container-wide grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                 {[
                   { icon: <Code className="w-10 h-10 mb-3 text-[]" style={{ color: primaryColor }} />, title: 'Web Development', desc: 'Modern, responsive websites for your business.' },
                   { icon: <Cpu className="w-10 h-10 mb-3" style={{ color: primaryColor }} />, title: 'Graphic Designing', desc: 'Creative branding, logos, and visuals.' },
                   { icon: <Server className="w-10 h-10 mb-3" style={{ color: primaryColor }} />, title: 'E-Commerce Solutions', desc: 'Online stores, payment & order management.' },
                   { icon: <Globe className="w-10 h-10 mb-3" style={{ color: primaryColor }} />, title: 'Digital Marketing', desc: 'SEM, SMM, SEO, and paid advertising for growth.' }
                 ].map((item, idx) => (
                   <div
                     key={idx}
                     data-aos="fade-up" data-aos-delay={idx * 100}
                     className="flex flex-col items-center text-center bg-white rounded-xl shadow-lg p-8 border-t-4"
                     style={{ borderColor: primaryColor }} // Use dynamic border color
                   >
                     {item.icon}
                     <h4 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h4>
                     <p className="text-gray-600">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </section>
           )}


          {/* Custom Modern Content/Vision Video (Import/Export) */}
          {serviceType === 'import-export' && (
            <>
               {/* Existing Import/Export specific sections remain unchanged */}
              <div className="relative z-20 bg-white pt-10"> {/* Added background and padding */}
                 {/* 2025 Ready Announcement Bar */}
                <div className="w-full flex justify-center mt-8 mb-8">
                  <div className="px-8 py-3 rounded-full bg-primary-bd8a2a text-white text-lg font-bold shadow-xl tracking-widest uppercase">
                    2025 Ready: Next-Gen Trade Solutions
                  </div>
                </div>
                 {/* Glassmorphism Info Card */}
                <div className="max-w-3xl mx-auto mb-10 rounded-3xl p-8 bg-white/80 backdrop-blur-lg shadow-2xl flex flex-col items-center border-2 border-primary-618d3c">
                  <Globe className="w-14 h-14 text-primary-618d3c mb-4" /> {/* Kept green */}
                  <h3 className="text-2xl md:text-4xl font-extrabold text-primary-618d3c mb-2 text-center">Welcome to the Future of Global Trade</h3> {/* Kept green */}
                  <p className="text-lg text-center max-w-xl text-black">Experience seamless, AI-powered, and sustainable import/export solutions designed for a smarter, greener, and more connected world in 2025 and beyond.</p> {/* Golden for construction, black for others */}
                </div>
                 {/* Feature Bar */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  {[
                    { icon: <Cpu className="w-6 h-6" />, label: 'AI Powered' },
                    { icon: <Globe className="w-6 h-6" />, label: 'Global Reach' },
                    { icon: <Leaf className="w-6 h-6" />, label: 'Eco Smart' },
                    { icon: <LineChart className="w-6 h-6" />, label: 'Real-Time Insights' }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg bg-primary-bd8a2a text-white" /* Kept yellow */
                    >
                      {item.icon}
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </div>
               {/* Our Vision in Motion Video Section */}
              <section
                className="py-16 bg-black flex flex-col items-center justify-center"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-618d3c mb-4 text-center">Our Vision in Motion</h2> {/* Kept green */}
                <p className="text-lg text-white mb-8 text-center max-w-2xl">See how Prism is transforming global trade with innovation, technology, and a commitment to a sustainable future. Watch our story in action!</p>
                <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border-2 border-primary-618d3c bg-black"> {/* Kept green */}
                  <video
                    src="/public/images/MissionVideo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[400px] object-cover"
                    poster="/public/images/vision-poster.jpg"
                  />
                </div>
              </section>
            </>
          )}


          {/* Custom Modern Content/Vision Video (Construction) */}
          {serviceType === 'construction' && (
            <>
             {/* Existing Construction specific sections remain unchanged */}
              <div className="relative z-20 bg-white pt-10"> {/* Added background */}
                 {/* 2025 Ready Announcement Bar */}
                <div className="w-full flex justify-center mb-8">
                  <div className="px-8 py-3 rounded-full bg-yellow-600 text-white text-lg font-bold shadow-xl tracking-widest uppercase">
                    2025 Ready: Next-Gen Construction
                  </div>
                </div>
                 {/* Glassmorphism Info Card */}
                <div className="max-w-3xl mx-auto mb-10 rounded-3xl p-8 bg-white/90 backdrop-blur-lg shadow-2xl flex flex-col items-center border-2 border-yellow-600">
                  <BuildingIcon className="w-14 h-14 text-yellow-600 mb-4" /> {/* Use BuildingIcon */}
                  <h3 className="text-2xl md:text-4xl font-extrabold text-yellow-700 mb-2 text-center">Welcome to the Future of Construction</h3>
                  <p className="text-lg text-center max-w-xl text-black">Discover smart, sustainable, and innovative construction solutions designed for a safer, greener, and more efficient tomorrow.</p> {/* Golden for construction, black for others */}
                </div>
                 {/* Feature Bar */}
                <div className="flex flex-wrap justify-center gap-6 mb-12">
                  {[
                    { icon: <Cpu className="w-6 h-6" />, label: 'Smart Buildings' }, // Use CPU for smart
                    { icon: <LeafIcon className="w-6 h-6" />, label: 'Sustainable Materials' }, // Use LeafIcon
                    { icon: <CheckCircle className="w-6 h-6" />, label: 'Green Certifications' }, // Use CheckCircle
                    { icon: <HardHatIcon className="w-6 h-6" />, label: 'On-Time Delivery' } // Use HardHatIcon
                  ].map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.4, 0, 0.2, 1] }}
                      className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold shadow-lg bg-yellow-600 text-white"
                    >
                      {item.icon}
                      {item.label}
                    </motion.div>
                  ))}
                </div>
              </div>
               {/* Construction Vision in Motion Video Section */}
              <section
                className="py-16 bg-black flex flex-col items-center justify-center"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-bd8a2a mb-4 text-center">Our Vision in Motion</h2> {/* Keep yellow */}
                <p className="text-lg text-white mb-8 text-center max-w-2xl">See how Prism is transforming construction with innovation, technology, and a commitment to a sustainable future. Watch our story in action!</p>
                <div className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border-2 border-primary-bd8a2a bg-black"> {/* Keep yellow border */}
                  <video
                    src="/public/images/conVission.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[400px] object-cover"
                    poster="/public/images/construction-vision-poster.jpg"
                  />
                </div>
              </section>
            </>
          )}

           {/* --- Generic Sections (Apply conditional styling) --- */}

          {/* Service Sections */}
           {/* The mapping and rendering logic is now handled within renderServiceSection */}
           <div>
              {service.sections.map((section, index) => renderServiceSection(section, index))}
           </div>


          {/* Modern Sections (Only for Import/Export based on current data) */}
          {service.modernSections && serviceType === 'import-export' && (
             <div>
               {service.modernSections.map((section, index) => renderModernSection(section, index))}
             </div>
           )}


          {/* Why Choose Us Section (Generic Structure, Themed by Service Type) */}
          <section className={`w-full pt-16 pb-20 ${serviceType === 'information-technology' ? 'bg-black' : 'bg-white'}`}>
            <div className="container-wide">
              <div className="text-center mb-12">
                 <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${serviceType === 'information-technology' ? 'text-white' : ''}`} style={{ color: serviceType === 'information-technology' ? 'white' : primaryColor }}> {/* IT: White on dark, Others: Primary Color */}
                   Why Choose Prism {serviceType === 'information-technology' ? 'IT' : serviceType === 'construction' ? 'Construction' : 'Trade'} Services?
                 </h2>
                 <p className={`text-lg max-w-2xl mx-auto ${serviceType === 'information-technology' ? 'text-gray-300' : 'text-gray-600'}`}>
                   {/* Tailor description slightly */}
                   {serviceType === 'information-technology' && 'Delivering reliable, secure, and innovative IT solutions tailored to your business needs.'}
                   {serviceType === 'construction' && 'Building excellence with quality, safety, and sustainability at the core of every project.'}
                   {serviceType === 'import-export' && 'Expertise in global trade logistics, compliance, and strategy for seamless international business.'}
                 </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   // Define 3 core benefits per service type
                   ...(serviceType === 'information-technology' ? [
                     { icon: <ShieldCheck className="w-12 h-12 mb-4" style={{ color: primaryColor }} />, title: 'Robust Security', desc: 'Comprehensive cybersecurity measures to protect your data.' },
                     { icon: <Server className="w-12 h-12 mb-4" style={{ color: primaryColor }} />, title: 'Scalable Infrastructure', desc: 'Cloud solutions designed for growth and flexibility.' },
                     { icon: <Code className="w-12 h-12 mb-4" style={{ color: primaryColor }} />, title: 'Expert Development', desc: 'Custom software built to meet your unique requirements.' }
                   ] : serviceType === 'construction' ? [
                     { icon: <HardHatIcon className="w-12 h-12 mb-4" style={{ color: primaryColor }} />, title: 'Expert Project Management', desc: 'Ensuring projects are on time, on budget, and meet quality standards.' },
                     { icon: <LeafIcon className="w-12 h-12 mb-4" style={{ color: primaryColor }} />, title: 'Sustainable Practices', desc: 'Utilizing eco-friendly materials and methods for a greener future.' },
                     { icon: <BuildingIcon className="w-12 h-12 mb-4" style={{ color: primaryColor }} />, title: 'Quality Craftsmanship', desc: 'Attention to detail and high standards in every build phase.' }
                   ] : [ // Default to import-export
                     { icon: <Globe className={`w-12 h-12 mb-4${serviceType === 'import-export' ? ' text-[#618d3c]' : ''}`} style={{ color: primaryColor }} />, title: 'Global Expertise', desc: 'Deep understanding of international trade regulations and logistics.' },
                     { icon: <LineChart className={`w-12 h-12 mb-4${serviceType === 'import-export' ? ' text-[#618d3c]' : ''}`} style={{ color: primaryColor }} />, title: 'Strategic Solutions', desc: 'Optimizing your supply chain and market entry strategies.' },
                     { icon: <CheckCircle className={`w-12 h-12 mb-4${serviceType === 'import-export' ? ' text-[#618d3c]' : ''}`} style={{ color: primaryColor }} />, title: 'Compliance Assurance', desc: 'Navigating complex customs and trade compliance seamlessly.' }
                   ])
                 ].map((item, idx) => (
                   <motion.div
                     key={item.title}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.4, 0, 0.2, 1] }}
                     className={`rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 ${
                        serviceType === 'information-technology' ? 'bg-gray-800 border border-gray-700' : 'bg-white' // Darker card for IT on dark bg
                     }`}
                   >
                     {item.icon}
                     <h3 className={`text-xl font-semibold mb-2 ${serviceType === 'information-technology' ? 'text-white' : 'text-gray-900'}`} >{item.title}</h3>
                     <p className={`${serviceType === 'information-technology' ? 'text-gray-300' : 'text-gray-600'}`}>{item.desc}</p>
                   </motion.div>
                 ))}
               </div>
             </div>
           </section>

           {/* Individual Project Sections - Themed */}
           {service.projects.map((project, index) => {
               const isDarkSection = serviceType === 'information-technology' || // IT sections are dark
                                   (serviceType === 'import-export' && (project.title.includes('Global Expansion') || project.title.includes('Customs Compliance'))) || // Specific dark IE projects
                                   (serviceType === 'construction' && project.title.includes('Modern Office')); // Specific dark Constr project
               const sectionBg = isDarkSection ? 'bg-black' : 'bg-white';
               const textColor = isDarkSection ? 'text-white' : 'text-gray-900';
               const secondaryTextColor = isDarkSection ? 'text-gray-300' : 'text-gray-600';
               const accentBorderColor = primaryColor; // Use the main primary color for borders/accents
               const tagBgColor = serviceType === 'information-technology' ? 'bg-[#03508B]/10' : serviceType === 'construction' ? 'bg-yellow-600/10' : 'bg-green-600/10';
               const tagTextColor = serviceType === 'information-technology' ? `text-[${primaryColor}]` : serviceType === 'construction' ? 'text-yellow-600' : 'text-green-600';
               const cardBgColor = primaryColor; // Card background matches primary color theme
               const impactBoxBg = isDarkSection ? `${primaryColor}/10` : `${primaryColor}/5`; // Lighter background for impact box
               const impactBoxBorder = accentBorderColor;
               const impactTextColor = isDarkSection ? 'text-gray-200' : 'text-gray-800';
               const buttonBgColor = primaryColor;
               const buttonHoverBgColor = hoverColor;

               return (
                   <section
                       key={index}
                       className={`section-padding relative overflow-hidden ${sectionBg} ${textColor}`}
                       // Removed redundant background checks based on title
                   >
                       {/* Subtle background pattern/gradient only for light sections */}
                       {!isDarkSection && (
                           <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f0f9ff 100%)', opacity: 0.3 }}></div> // Example light gradient
                       )}
                       <div className={`container-wide relative z-10`}>
                            {/* Accent bar and tag */}
                           <div className="flex items-center mb-4">
                               <div className={`w-2 h-10 rounded mr-4`} style={{ backgroundColor: accentBorderColor }}></div>
                               <span className={`uppercase tracking-widest text-xs font-semibold px-3 py-1 rounded ${tagBgColor} ${tagTextColor}`}>Case Study</span>
                           </div>
                           <div className="text-center max-w-5xl mx-auto mb-12" data-aos="fade-up">
                                <h2 className={`heading-lg mb-4`} style={{ color: accentBorderColor }}>{project.title}</h2>
                           </div>
                           <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch`}> {/* Use items-stretch */}
                               <div
                                   data-aos={`fade-${index % 2 === 0 ? 'right' : 'left'}`}
                                   data-aos-delay="200"
                                   data-aos-duration="900"
                                   className="h-full" // Ensure div takes full height
                               >
                                    {/* Image Card */}
                                   <Card className={`h-full overflow-hidden border-none hover:shadow-xl transition-all duration-300 group`} style={{ backgroundColor: cardBgColor }}>
                                       <div className="relative h-[300px] md:h-[350px] overflow-hidden"> {/* Fixed height */}
                                           <img
                                               src={project.image}
                                               alt={project.title}
                                               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                           />
                                           <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                                       </div>
                                        {/* Optional: Add short title/tag inside card */}
                                        {/* <CardContent className="p-4">
                                            <p className="text-white/80 text-sm">{project.title}</p>
                                        </CardContent> */}
                                   </Card>
                               </div>
                               <div
                                    data-aos={`fade-${index % 2 === 0 ? 'left' : 'right'}`}
                                    className="flex flex-col h-full" // Ensure column takes full height
                                >
                                   <div className="flex-grow"> {/* Content takes available space */}
                                       <p className={`mb-6 text-lg leading-relaxed ${secondaryTextColor}`}>
                                           {project.description}
                                       </p>
                                       <ul className="space-y-4 mb-8">
                                            {/* Example Key Achievements - Replace with actual data if available */}
                                           {[
                                               `Achieved significant result X for ${project.title.toLowerCase()}`,
                                               `Implemented key feature Y successfully`,
                                               `Overcame challenge Z related to the project`
                                           ].map((item, itemIdx) => (
                                               <li key={itemIdx} className="flex items-start gap-3">
                                                   <CheckCircle className={`h-5 w-5 shrink-0 mt-0.5`} style={{ color: accentBorderColor }} />
                                                   <p className={secondaryTextColor}>{item}</p>
                                               </li>
                                           ))}
                                       </ul>
                                        {/* Impact/Result box */}
                                       <div className={`rounded p-4 mt-auto mb-2 border-l-4`} style={{ backgroundColor: impactBoxBg, borderColor: impactBoxBorder }}> {/* Use mt-auto */}
                                            <div className={`font-bold mb-1`} style={{ color: accentBorderColor }}>Impact</div>
                                            <div className={impactTextColor}>
                                                {/* Example Impact Statement */}
                                               This project resulted in measurable improvements, driving business growth and efficiency for our client.
                                           </div>
                                       </div>
                                   </div>
                                   <div className="mt-6">
                                       <Link to={`/work/${serviceType}`}> {/* Update Link destination if needed */}
                                           <Button
                                                className={`w-full text-white transition-colors duration-300 group`}
                                                style={{ backgroundColor: buttonBgColor }}
                                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverBgColor}
                                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonBgColor}
                                           >
                                               View Project Details
                                               <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                           </Button>
                                       </Link>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>
               );
           })}


          {/* Our Construction Promise Section (Only for Construction) */}
          {serviceType === 'construction' && (
            <section className="py-20 bg-black text-white relative overflow-hidden">
              <div className="container-wide relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                  className="flex flex-col items-center text-center mb-16"
                >
                   {/* Promise Icon */}
                  <HardHatIcon className="w-16 h-16 mb-6" style={{ color: secondaryColor }} /> {/* Yellow */}
                  <h2 className="text-4xl font-extrabold mb-4 drop-shadow" style={{ color: secondaryColor }}>Our Construction Promise</h2> {/* Yellow */}
                  <p className="text-lg max-w-2xl text-white/80 mb-4">At Prism, we are committed to safety, innovation, and sustainability in every project. Our promise is to deliver excellence, every time.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { icon: <ShieldCheck className="w-12 h-12 mb-4 mx-auto" style={{ color: secondaryColor }} />, title: 'Safety First', desc: 'Strict protocols and training for a safe work environment.' },
                    { icon: <Cpu className="w-12 h-12 mb-4 mx-auto" style={{ color: secondaryColor }} />, title: 'Cutting-Edge Technology', desc: 'We use the latest tech for efficiency and quality.' }, // CPU for tech
                    { icon: <LeafIcon className="w-12 h-12 mb-4 mx-auto" style={{ color: secondaryColor }} />, title: 'Sustainability', desc: 'Eco-friendly materials and green building practices.' }
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.4, 0, 0.2, 1] }}
                      className="bg-neutral-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 border border-yellow-600/30" // Yellow border hint
                    >
                      {item.icon}
                      <h3 className="text-xl font-bold mb-2" style={{ color: secondaryColor }}>{item.title}</h3> {/* Yellow title */}
                      <p className="text-white/90">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
               {/* Decorative SVG background */}
              <svg className="absolute -bottom-10 -left-10 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="none"><circle cx="100" cy="100" r="100" fill={secondaryColor} /></svg> {/* Yellow circle */}
            </section>
          )}

          {/* Smart Building Tech Section (Only for Construction) */}
          {serviceType === 'construction' && (
            <section className="py-16 bg-yellow-50 flex justify-center"> {/* Light yellow bg */}
              <div className="max-w-3xl w-full flex flex-col items-center text-center px-4">
                <BuildingIcon className="w-14 h-14 text-yellow-600 mb-4" />
                <h2 className="text-3xl font-extrabold mb-3 text-yellow-800">Smart Building Technology</h2>
                <p className="text-lg text-yellow-900 mb-6">Experience the future of construction with IoT-enabled, energy-efficient, and automated building solutions that maximize comfort, safety, and sustainability.</p>
                <Link to="/contact">
                  <button className="px-8 py-3 rounded-full bg-yellow-600 text-white font-bold shadow hover:bg-yellow-700 transition">Learn More</button>
                </Link>
              </div>
            </section>
          )}

          {/* Testimonials Section (New) */}
          <section className="py-16 flex justify-center" style={{ backgroundColor: '#f9fafb' }}>
            <div className="max-w-5xl w-full flex flex-col items-center text-center px-4">
              <h3 className="text-3xl font-bold mb-8" style={{ color: primaryColor }}>What Our Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {[
                  {
                    name: 'Ayesha Khan',
                    company: 'Global Traders Ltd.',
                    text: 'Prism made our import/export process seamless and stress-free. Their expertise and support are unmatched!'
                  },
                  {
                    name: 'Omar Siddiqui',
                    company: 'BuildRight Constructions',
                    text: 'The construction team delivered our project on time with top-notch quality. Highly recommended!'
                  },
                  {
                    name: 'Sara Malik',
                    company: 'Tech Innovators',
                    text: 'Their IT solutions transformed our business. Professional, reliable, and innovative.'
                  }
                ].map((testimonial, idx) => (
                  <div key={idx} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border-t-4" style={{ borderColor: primaryColor }}>
                    <svg className="w-10 h-10 mb-4 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4H7zm10 0a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4h-2z" /></svg>
                    <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                    <div className="font-bold text-lg" style={{ color: primaryColor }}>{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Subscribe Section (Themed) */}
          <section className="py-10 flex justify-center max-w-6xl mx-auto rounded mb-6" style={{ backgroundColor: '#f5d76e' }}>
            <div className="max-w-4xl w-full flex flex-col items-center text-center px-4">
              <h3 className="text-2xl font-bold mb-2 text-white">Stay Updated!</h3>
              <p className="text-white/90 mb-4">Subscribe to our newsletter for the latest insights and updates.</p>
              <form className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
                <input type="email" placeholder="Your email" required className="flex-1 px-4 py-2 rounded-full border-none outline-none text-gray-800" />
                 <button
                    type="submit"
                    className={`px-6 py-2 rounded-full bg-white font-semibold transition hover:text-white`}
                    style={{ color: primaryColor }} // Text color matches primary theme
                    onMouseOver={(e) => { e.currentTarget.style.backgroundColor = primaryColor; e.currentTarget.style.color = 'white'; }}
                    onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'white'; e.currentTarget.style.color = primaryColor; }}
                 >
                    Subscribe
                 </button>
              </form>
            </div>
          </section>

          {/* Visionary Construction Section (Only for Construction) */}
          {serviceType === 'construction' && (
            <section className="py-24 bg-white flex flex-col items-center justify-center border-t border-gray-100 overflow-hidden">
              <motion.div
                 // Animation settings remain the same
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.3 }}
                 variants={{
                    hidden: { opacity: 0, y: 60 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.18, delayChildren: 0.2 } }
                }}
                 className="w-full max-w-5xl mx-auto flex flex-col items-center"
              >
                <motion.svg
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                  className="w-24 h-24 mb-8"
                  fill="none" stroke={secondaryColor} strokeWidth="1.5" viewBox="0 0 64 64" // Thinner stroke
                >
                  {/* Simplified Vision Icon */}
                   <path d="M32 12 C 18 12, 8 22, 8 32 S 18 52, 32 52 S 56 42, 56 32 S 46 12, 32 12 Z M 32 42 A 10 10 0 1 1 32 22 A 10 10 0 0 1 32 42 Z" />
                   <path d="M32 4 V 12 M 32 52 V 60 M 60 32 H 52 M 12 32 H 4" />
                </motion.svg>
                <motion.h2
                   initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
                   className="text-4xl md:text-5xl font-extrabold mb-4 text-center drop-shadow" style={{ color: primaryColor }} // Use primary construction color
                >
                  Visionary Construction for Tomorrow
                </motion.h2>
                <motion.p
                   initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
                   className="text-lg text-gray-700 mb-12 max-w-2xl text-center"
                >
                  Prism is redefining the future of construction with innovative design, collaborative partnerships, and a commitment to lasting value. Discover what sets us apart.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {[
                     // Updated icons and descriptions
                    { icon: <BuildingIcon className="w-14 h-14 mb-4 mx-auto" style={{ color: secondaryColor }} />, title: 'Future-Ready Designs', desc: 'Smart, sustainable spaces built for the next generation.' },
                    { icon: <Users className="w-14 h-14 mb-4 mx-auto" style={{ color: secondaryColor }} />, title: 'Collaborative Approach', desc: 'We partner with you at every step for seamless delivery.' }, // Users icon for collaboration
                    { icon: <Award className="w-14 h-14 mb-4 mx-auto" style={{ color: secondaryColor }} />, title: 'Enduring Value', desc: 'Quality and durability that stand the test of time.' } // Award icon for value/quality
                  ].map((item, idx) => (
                    <motion.div
                      key={item.title}
                       initial={{ opacity: 0, scale: 0.85, y: 40 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.4 + idx * 0.18, ease: [0.4, 0, 0.2, 1] }}
                      className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center border border-yellow-600/20 hover:scale-105 hover:shadow-2xl transition-transform duration-300" // Lighter border
                    >
                      {item.icon}
                      <h3 className="text-xl font-bold mb-2" style={{ color: primaryColor }}>{item.title}</h3> {/* Primary color title */}
                      <p className="text-gray-700">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          )}


          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

// ParallaxCard component (remains the same, optional to use)
const ParallaxCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, 40);
  return (
    <div
      ref={ref}
      className="transition-transform duration-200 will-change-transform rounded-xl shadow-lg bg-white p-8"
    >
      {children}
    </div>
  );
};


// Helper function to dynamically import icons if needed (example)
// async function getIconComponent(iconName: string) {
//   switch (iconName) {
//     case 'globe': return (await import('lucide-react')).Globe;
//     // ... other cases
//     default: return (await import('lucide-react')).HelpCircle;
//   }
// }

// Ensure necessary Lucide icons are imported
import { Users, Award } from 'lucide-react';


export default ServicePage;