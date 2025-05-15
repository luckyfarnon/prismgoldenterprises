import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { 
    ArrowRight, Brain, TrendingUp, Globe, Settings, Palette, ShoppingCart, Search, 
    Building, ShieldCheck, Lightbulb, Zap, Users, Target, Star, MessageSquare, 
    CheckCircle, ExternalLink, ClipboardList, DraftingCompass, Truck, Flag, CheckSquare,
    Newspaper, BookOpen, FileText, HeartHandshake, Award, UsersRound, Goal
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Updated Work data with more new sections
const workData = {
  'import-export': {
    title: 'Import & Export Portfolio',
    description: 'Explore our successful import and export projects that have helped businesses expand globally. From market entry strategies to supply chain optimization and compliance, we deliver results.',
    heroButtonText: 'Start Your Trade Project',
    themeColor: '#618D3C', // Green
    themeHoverColor: '#517700', // Darker Green
    themeLightBg: '#E6F7E6', // Very Light Green
    themeDarkText: '#355E1A', // Very Dark Green
    projects: [ /* ... (project data as before) ... */ 
        { id: 'ie-proj1', title: 'Global Expansion for Tech Manufacturer', description: 'Helped a technology manufacturer expand into 12 new international markets with compliant import/export operations.', image: '/images/global expansion-proj.jpeg', year: '2023', client: 'TechInnovate Inc.', results: 'Achieved 45% revenue growth in the first year of international operations', detailedDescription: 'We conducted thorough market research, identified key target regions, and developed a phased rollout plan. Our team handled all aspects of regulatory compliance, logistics setup, and local partner identification, ensuring a smooth market entry and rapid operational scaling for TechInnovate Inc.' },
        { id: 'ie-proj2', title: 'Supply Chain Optimization', description: 'Restructured international supply chain for a consumer goods company, reducing costs by 23% and delivery times by 40%.', image: '/public/images/supply.jpg', year: '2022', client: 'ConsumerGoods Co.', results: '23% cost reduction and 40% shorter delivery times' },
        { id: 'ie-proj3', title: 'Customs Compliance Overhaul', description: 'Implemented comprehensive customs compliance program for a manufacturing firm, eliminating penalties and reducing clearance delays.', image: '/images/customs-compliance-proj.jpeg', year: '2022', client: 'Manufacturing Plus', results: 'Zero compliance penalties and 65% faster customs clearance' },
        { id: 'ie-proj4', title: 'International Market Entry Strategy', description: 'Developed and executed market entry strategy for a food products company entering Asian markets.', image: '/images/international-market-proj.jpeg', year: '2021', client: 'Global Foods Ltd.', results: 'Successfully established presence in 5 Asian markets within 8 months' },
        { id: 'ie-proj5', title: 'Export Documentation Optimization', description: 'Streamlined export documentation processes for a textile exporter, reducing administrative time and errors.', image: '/images/export-documentation-proj.jpeg', year: '2021', client: 'FashionTextiles Corp.', results: '80% reduction in documentation errors and 50% faster processing' },
        { id: 'ie-proj6', title: 'Import Tariff Strategy', description: 'Developed strategic approaches to minimize tariff impacts for an electronics importer during trade disputes.', image: '/images/tariif-strategy-proj.jpeg', year: '2020', client: 'ElectroTech Imports', results: 'Saved $3.2M in potential tariffs through strategic sourcing changes' }
    ],
    ourProcess: {
        title: "Our Seamless Global Trade Process",
        subtitle: "A systematic approach ensuring efficiency and compliance from start to finish.",
        steps: [
            { icon: ClipboardList, title: "Initial Consultation & Needs Analysis", description: "Understanding your specific import/export requirements, target markets, and business objectives." },
            { icon: Search, title: "Market Research & Feasibility", description: "Conducting in-depth analysis of target markets, regulations, and potential challenges." },
            { icon: DraftingCompass, title: "Strategy & Planning", description: "Developing a tailored import/export strategy, including logistics, compliance, and risk management." },
            { icon: Truck, title: "Execution & Logistics Management", description: "Handling all documentation, customs clearance, shipping, and freight forwarding with precision." },
            { icon: Flag, title: "Monitoring & Optimization", description: "Continuously tracking shipments and processes, providing updates, and identifying areas for improvement." }
        ]
    },
    whyChooseUs: { /* ... (as before) ... */ 
        title: "Why Choose Us for Your Global Trade?",
        subtitle: "We offer unmatched expertise in international logistics, compliance, and market entry strategies. Our team ensures your business navigates global trade with confidence and success.",
        points: [
            { icon: Brain, title: "Expert Guidance", description: "Decades of experience in import/export regulations and logistics." },
            { icon: Globe, title: "Global Network", description: "Strong partnerships with agents and suppliers worldwide." },
            { icon: TrendingUp, title: "Proven Results", description: "Track record of helping clients achieve international growth and compliance." }
        ]
    },
    testimonials: [ /* ... (as before) ... */ 
        { quote: "Their strategic approach to international markets was a game-changer for our expansion. Highly recommend!", author: "Sarah Chen", company: "CEO, TechInnovate Inc.", image: "/testi.jpg" },
        { quote: "Navigating customs can be a nightmare, but they made it seamless and efficient for us.", author: "John B. Goode", company: "Operations Director, Manufacturing Plus", image: "/testi2.jpg" }
    ],
    
    uniqueApproach: { /* ... (as before) ... */ 
        title: "Our Strategic Edge in Global Trade",
        subtitle: "We go beyond standard services to provide holistic solutions that truly empower your international business.",
        points: [
            { icon: Target, title: "Tailored Market Strategies", description: "Customized plans based on deep market analysis and your specific business goals." },
            { icon: CheckCircle, title: "End-to-End Compliance", description: "Proactive management of all regulatory hurdles for smooth, uninterrupted trade." },
            { icon: Zap, title: "Agile Logistics Solutions", description: "Flexible and responsive supply chain management to adapt to changing global dynamics." }
        ]
    },
    ourCommitment: {
        title: "Our Commitment to Your Success",
        subtitle: "Driven by integrity and a passion for facilitating global growth.",
        points: [
            { icon: HeartHandshake, title: "Partnership Approach", description: "We work as an extension of your team, dedicated to your long-term success." },
            { icon: ShieldCheck, title: "Unwavering Integrity", description: "Transparent and ethical practices in all our dealings and operations." },
            { icon: Lightbulb, title: "Continuous Improvement", description: "Constantly seeking innovative solutions to optimize your trade activities." }
        ]
    }
  },
  'construction': {
    title: 'Construction Portfolio',
    description: 'Browse our diverse portfolio of construction projects showcasing our expertise across commercial, residential, and industrial sectors.',
    heroButtonText: 'Discuss Your Build',
    themeColor: '#ae8625', // Gold/Brown
    themeHoverColor: '#946f1e',
    themeLightBg: '#faf6e9',
    themeDarkText: '#785a1c',
    projects: [
      { id: 'con-proj1', title: 'Modern Office Complex', description: 'Designed and constructed a 50,000 sq ft office complex with state-of-the-art amenities and LEED Gold certification.', image: '/images/modern-office-proj.jpeg', year: '2023', client: 'TechCorp Enterprises', results: 'LEED Gold certification and 30% energy efficiency improvement', detailedDescription: 'This project involved intricate design planning to maximize natural light and energy efficiency. We utilized sustainable building materials and smart technologies, delivering a future-proof workspace that exceeded client expectations and achieved prestigious LEED Gold status.' },
      { id: 'con-proj2', title: 'Residential Community Development', description: 'Completed a 120-unit residential community with sustainable features and community spaces on time and under budget.', image: '/images/residential-community-proj.jpeg', year: '2022', client: 'Urban Housing Developers', results: 'Completed 2 months ahead of schedule and 5% under budget' },
      { id: 'con-proj3', title: 'Hospital Renovation', description: 'Executed complex renovation of an operational hospital, updating infrastructure while maintaining uninterrupted medical services.', image: '/images/hospital-renivation-proj.jpeg', year: '2022', client: 'Metropolitan Healthcare System', results: 'Zero disruption to patient care during 18-month renovation' },
      { id: 'con-proj4', title: 'Retail Mall Expansion', description: 'Expanded an existing shopping mall by 75,000 sq ft, adding new stores, dining options, and entertainment spaces.', image: '/images/retail-mall-proj.jpeg', year: '2021', client: 'Retail Properties Group', results: '35% increase in visitor traffic after completion' },
      { id: 'con-proj5', title: 'Industrial Manufacturing Facility', description: 'Built a state-of-the-art manufacturing facility with advanced automation systems and sustainable design features.', image: '/images/industrial-manufacturing-proj.jpeg', year: '2021', client: 'Advanced Manufacturing Inc.', results: '40% increase in production capacity with 25% less energy usage' },
      { id: 'con-proj6', title: 'Luxury Hotel Construction', description: 'Constructed a 200-room luxury hotel featuring high-end finishes, multiple restaurants, and conference facilities.', image: '/images/luxury-hotel-proj.jpeg', year: '2020', client: 'Premier Hospitality Group', results: 'Awarded "Best New Hotel Design" by Hospitality Excellence' }
    ],
    ourProcess: {
        title: "Our Construction Lifecycle",
        subtitle: "From concept to completion, a meticulous process ensuring quality and precision.",
        steps: [
            { icon: ClipboardList, title: "Initial Brief & Site Assessment", description: "Understanding your vision, requirements, and evaluating site conditions." },
            { icon: DraftingCompass, title: "Design & Engineering", description: "Developing detailed architectural and structural plans with innovation and practicality." },
            { icon: Settings, title: "Pre-construction & Permitting", description: "Managing all approvals, material sourcing, and logistical planning." },
            { icon: Building, title: "Construction & Project Management", description: "Executing the build with skilled craftsmanship and rigorous oversight." },
            { icon: CheckSquare, title: "Quality Assurance & Handover", description: "Ensuring every detail meets our high standards before final delivery." }
        ]
    },
    whyChooseUs: { /* ... (as before) ... */ 
        title: "Building Visions, Creating Reality",
        subtitle: "With a legacy of excellence, we deliver construction projects that stand the test of time, focusing on quality, safety, and innovation.",
        points: [
            { icon: Building, title: "Quality Craftsmanship", description: "Meticulous attention to detail and high-quality materials in every build." },
            { icon: ShieldCheck, title: "Safety First", description: "Uncompromising commitment to safety standards on all project sites." },
            { icon: Lightbulb, title: "Innovative Solutions", description: "Leveraging modern techniques and sustainable practices for optimal results." }
        ]
    },
    testimonials: [ /* ... (as before) ... */ 
        { quote: "The quality of their construction work is outstanding. They delivered our office complex ahead of schedule!", author: "Michael T.", company: "CEO, TechCorp Enterprises", image: "/testi.jpg" },
        { quote: "Professional, reliable, and their attention to detail is second to none. Our new facility is perfect.", author: "Laura P.", company: "Director, Advanced Manufacturing Inc.", image: "/testi2.jpg" }
    ],
    
    uniqueApproach: { /* ... (as before) ... */ 
        title: "Our Foundation for Success",
        subtitle: "We build more than structures; we build lasting relationships through transparency, innovation, and unwavering quality.",
        points: [
          { icon: CheckCircle, title: "Precision Project Management", description: " meticulous planning and execution ensuring projects are on time and within budget." },
          { icon: Users, title: "Client-Centric Collaboration", description: "Working closely with clients at every stage to bring their vision to life accurately." },
          { icon: TrendingUp, title: "Sustainable Building Practices", description: "Incorporating eco-friendly materials and methods for a greener future." }
        ]
    },
    ourCommitment: {
        title: "Our Pledge to Excellence in Construction",
        subtitle: "Building with integrity, safety, and a commitment to lasting value.",
        points: [
            { icon: Award, title: "Uncompromising Quality", description: "Adhering to the highest standards of craftsmanship and materials in every project." },
            { icon: ShieldCheck, title: "Zero Harm Safety Culture", description: "Prioritizing the well-being of our team, clients, and the community." },
            { icon: UsersRound, title: "Lasting Client Relationships", description: "Building trust through transparent communication and delivering on promises." }
        ]
    }
  },
  'information-technology': {
    title: 'Information Technology Portfolio',
    description: 'Discover our innovative IT projects that have transformed businesses through custom software development, cloud solutions, and advanced digital strategies.',
    heroButtonText: 'Innovate With Us',
    themeColor: '#2563eb', // Original Blue for IT
    themeHoverColor: '#1d4ed8',
    themeLightBg: '#dbeafe',
    themeDarkText: '#1e3a8a',
    projects: [ /* ... (project data as before, duplicate removed) ... */ 
        { id: 'it-proj1', title: 'Banking Platform Modernization', description: 'Transformed a legacy banking system into a modern, cloud-based platform, improving performance by 300% and enhancing security.', image: '/images/1.jpeg', year: '2023', client: 'Global Financial Services', results: '300% performance improvement and 99.99% uptime', detailedDescription: 'Our team re-architected the entire banking core, migrating terabytes of data to a secure cloud infrastructure. We implemented microservices and API-driven design, resulting in enhanced scalability, faster transaction processing, and significantly improved user experience for millions of customers.' },
        { id: 'it-proj2', title: 'Healthcare Management System', description: 'Developed an integrated healthcare management solution that streamlined operations across 12 facilities and improved patient care.', image: '/images/2.jpeg', year: '2022', client: 'Regional Health Network', results: '40% reduction in administrative workload and improved patient satisfaction' },
        { id: 'it-proj3', title: 'E-Commerce Platform Implementation', description: 'Built a scalable e-commerce platform that increased online sales by 150% and reduced operational costs by 35%.', image: '/images/3.jpeg', year: '2022', client: 'Retail Innovations Ltd.', results: '150% increase in online sales and 35% operational cost reduction' },
        { id: 'it-proj4', title: 'Supply Chain Management Solution', description: 'Created a real-time supply chain management system with IoT integration for a global manufacturing company.', image: '/images/4.jpeg', year: '2021', client: 'Industrial Manufacturing Group', results: 'Reduced inventory costs by 28% and improved delivery accuracy to 99.5%' },
        { id: 'it-proj5', title: 'Cybersecurity Infrastructure Overhaul', description: 'Redesigned and implemented a comprehensive cybersecurity infrastructure for a financial services firm.', image: '/images/5.jpeg', year: '2021', client: 'Secure Financial Corp.', results: 'Zero security breaches since implementation and 90% reduction in vulnerabilities' },
        { id: 'it-proj6', title: 'Custom CRM Development', description: 'Developed a tailored customer relationship management system for a multinational service provider.', image: '/images/6.jpeg', year: '2020', client: 'Global Services Inc.', results: '45% improvement in customer retention and 60% faster response times' }
    ],
    ourProcess: {
        title: "Our Agile IT Solution Delivery",
        subtitle: "A collaborative and iterative process to build impactful digital products.",
        steps: [
            { icon: Lightbulb, title: "Discovery & Ideation", description: "Understanding your business challenges, user needs, and defining project scope." },
            { icon: Palette, title: "Design & Prototyping (UX/UI)", description: "Creating intuitive user interfaces and experiences, validated through prototypes." },
            { icon: Settings, title: "Development & Integration", description: "Building robust and scalable solutions using modern technologies and agile methodologies." },
            { icon: ShieldCheck, title: "Testing & Quality Assurance", description: "Rigorous testing to ensure reliability, performance, and security of the application." },
            { icon: Zap, title: "Deployment & Support", description: "Seamless deployment to your infrastructure and ongoing support for optimal performance." }
        ]
    },
    whyChooseUs: { /* ... (as before) ... */ 
        title: "Why Partner with Prism IT for Your Digital Transformation?",
        subtitle: "We combine cutting-edge technology with strategic insights to deliver solutions that drive growth, efficiency, and innovation.",
        points: [
            { icon: Settings, title: "Web Development", description: "Modern, responsive websites and complex web applications." },
            { icon: Palette, title: "Graphic Designing", description: "Creative branding, stunning visuals, and compelling user interfaces." },
            { icon: ShoppingCart, title: "E-Commerce Solutions", description: "Scalable online stores with seamless payment and order management." },
            { icon: Search, title: "Digital Marketing", description: "Data-driven SEO, SEM, SMM, and paid advertising for maximum reach." }
        ]
    },
    testimonials: [ /* ... (as before) ... */ 
        { quote: "Prism IT revolutionized our banking platform. The performance gains and new features are incredible.", author: "David Lee", company: "CTO, Global Financial Services", image: "/testi.jpg" },
        { quote: "The custom CRM they built for us has boosted our customer retention by over 40%. Exceptional team!", author: "Anita Singh", company: "VP Sales, Global Services Inc.", image: "/testi2.jpg" }
    ],
  
    uniqueApproach: { /* ... (as before) ... */ 
        title: "Innovating for Your Success",
        subtitle: "Our approach blends deep technical expertise with a keen understanding of your business to deliver impactful IT solutions.",
        points: [
          { icon: Lightbulb, title: "Agile Development", description: "Iterative and flexible development cycles ensuring rapid delivery and adaptability." },
          { icon: ShieldCheck, title: "Robust Security", description: "Prioritizing data protection and system integrity in all our solutions." },
          { icon: Brain, title: "Future-Proof Technology", description: "Building scalable and adaptable systems ready for tomorrow's challenges." }
        ]
    },
    ourCommitment: {
        title: "Our Dedication to Digital Excellence",
        subtitle: "Powering your transformation with innovation, reliability, and partnership.",
        points: [
            { icon: Goal, title: "Results-Driven Solutions", description: "Focusing on delivering IT solutions that provide measurable business value." },
            { icon: UsersRound, title: "Collaborative Partnership", description: "Working closely with you to understand and achieve your strategic objectives." },
            { icon: TrendingUp, title: "Continuous Innovation", description: "Staying at the forefront of technology to offer cutting-edge solutions." }
        ]
    }
  }
};

interface WorkPageProps {
  workType: 'import-export' | 'construction' | 'information-technology';
}

const WorkPage = ({ workType }: WorkPageProps) => {
  const work = workData[workType];
  const featuredProject = work.projects[0]; 

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
      offset: 120, 
    });
    window.scrollTo(0, 0);
  }, [workType]);


  const getVideoSrc = () => {
    if (workType === 'construction') return '/videos/ConImp.mp4';
    if (workType === 'information-technology') return '/videos/workIT.mp4';
    return '/videos/workImp.mp4'; 
  };

  return (
    <div className="overflow-x-hidden antialiased bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gray-900 min-h-screen flex items-center justify-center text-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
        {workType === 'information-technology' && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
            style={{ pointerEvents: 'none' }}
            src="/images/workIT.mp4"
          >
            Your browser does not support the video tag.
          </video>
        )}
        {/* Existing video logic for other types can remain below or be adjusted as needed */}
        {workType !== 'information-technology' && (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
            style={{ pointerEvents: 'none' }}
            src={workType === 'construction' ? '/images/ConImp.mp4' : '/images/workImp.mp4'}
          >
            Your browser does not support the video tag.
          </video>
        )}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container-wide relative z-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-white" data-aos="fade-up">
            <div 
              className="inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4"
              style={{ backgroundColor: work.themeColor, color: work.themeLightBg }}
            >
              Our Portfolio
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 drop-shadow-lg relative">
              <span className="relative z-10">{work.title}</span>
              <span 
                className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-2/3 md:w-1/2 h-1.5 rounded-full opacity-70 blur-[3px]"
                style={{ backgroundColor: work.themeColor, content: "''" }}
              ></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 mb-10 opacity-95 max-w-3xl mx-auto leading-relaxed">
              {work.description}
            </p>
            {work.heroButtonText && (
              <Link to="/contact" data-aos="fade-up" data-aos-delay="200">
                <Button 
                  size="lg"
                  className={`text-white shadow-xl px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group`}
                  style={{ backgroundColor: work.themeColor }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = work.themeHoverColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = work.themeColor}
                >
                  {work.heroButtonText}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Button>
              </Link>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24" style={{ zIndex: 25 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-full">
            <path 
              fill="#f9fafb" 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,53.3C672,53,768,75,864,85.3C960,96,1056,96,1152,85.3C1248,75,1344,53,1392,42.7L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Section 1: Featured Project (Existing) */}
      {featuredProject && (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="container-wide px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Featured Success Story
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        A closer look at one of our impactful projects in {workType.replace('-', ' ')}.
                    </p>
                     <div className="mt-4 w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: work.themeColor }}></div>
                </div>
                <div className="bg-white rounded-xl shadow-2xl overflow-hidden md:flex" data-aos="fade-up" data-aos-delay="200">
                    <div className="md:w-1/2">
                        <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-64 md:h-full object-cover"/>
                    </div>
                    <div className="md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                        <span className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: work.themeColor }}>
                            {featuredProject.client} - {featuredProject.year}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{featuredProject.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            {featuredProject.detailedDescription || featuredProject.description}
                        </p>
                        <div className="p-4 rounded-md mb-6" style={{ backgroundColor: work.themeLightBg }}>
                            <p className="font-semibold" style={{ color: work.themeDarkText || work.themeColor }}>
                                Key Result: <span className="font-normal">{featuredProject.results}</span>
                            </p>
                        </div>
                        <Button variant="outline" className="w-full sm:w-auto group" style={{ borderColor: work.themeColor, color: work.themeColor }}
                            onMouseOver={(e) => { e.currentTarget.style.backgroundColor = work.themeColor; e.currentTarget.style.color = 'white'; }}
                            onMouseOut={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = work.themeColor; }} >
                            Learn More <ExternalLink className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* Section 2: Our Process (NEW) */}
      {work.ourProcess && (
        <section className="py-16 lg:py-24 bg-white"> {/* Alternating background */}
            <div className="container-wide px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        {work.ourProcess.title}
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        {work.ourProcess.subtitle}
                    </p>
                    <div className="mt-4 w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: work.themeColor }}></div>
                </div>
                <div className="relative">
                    {/* Connecting line - pseudo element could be complex, simple approach for now */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-${work.ourProcess.steps.length > 3 ? 3 : work.ourProcess.steps.length} gap-x-8 gap-y-12"> {/* Adjust grid for more steps */}
                        {work.ourProcess.steps.map((step, index) => (
                            <div 
                                key={index} 
                                className="text-center p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
                                data-aos="fade-up" 
                                data-aos-delay={100 * index}
                            >
                                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md" style={{backgroundColor: work.themeColor}}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h4 className="text-xl font-semibold mt-8 mb-2 text-gray-700">{step.title}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
      )}
      
      {/* Projects Grid Section (Existing) */}
      <section className="py-16 lg:py-24 bg-gray-50"> {/* Alternating background */}
        <div className="container-wide px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                  Our Comprehensive Portfolio
              </h2>
              <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                  Explore a selection of our diverse and successful projects.
              </p>
              <div className="mt-4 w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: work.themeColor }}></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {work.projects.map((project, index) => (
              <div key={project.id || index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col border-t-4"
                style={{ borderTopColor: work.themeColor }} data-aos="fade-up" data-aos-delay={index * 100} >
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h4 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{project.title}</h4>
                   </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-3 text-sm">
                    <span className="font-semibold" style={{ color: work.themeColor }}>{project.year}</span>
                    <span className="text-gray-500">{project.client}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{project.description.substring(0,120)}{project.description.length > 120 ? '...' : ''}</p>
                  <div className="mt-auto">
                    <div className="p-3 rounded-md mb-4 text-xs" style={{ backgroundColor: work.themeLightBg }} >
                      <p className="font-semibold" style={{ color: work.themeDarkText || work.themeColor }}>Results: <span className="font-normal">{project.results}</span></p>
                    </div>
                    <Button className="w-full text-white font-medium group/button text-sm py-2" style={{ backgroundColor: work.themeColor }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = work.themeHoverColor}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = work.themeColor} >
                      View Project Details <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover/button:translate-x-0.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Client Testimonials (Existing) */}
      {work.testimonials && work.testimonials.length > 0 && (
        <section className="py-16 lg:py-24" style={{ backgroundColor: work.themeLightBg }}>
            <div className="container-wide px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold" style={{color: work.themeDarkText}}> What Our Clients Say </h2>
                    <p className="mt-3 text-lg max-w-2xl mx-auto" style={{color: work.themeColor}}> Real feedback from businesses we've helped succeed. </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {work.testimonials.slice(0, 2).map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300" data-aos="fade-up" data-aos-delay={index * 150}>
                            <div className="flex items-start">
                                {testimonial.image && ( <img src={testimonial.image} alt={testimonial.author} className="w-16 h-16 rounded-full mr-6 border-2" style={{borderColor: work.themeColor}}/> )}
                                {!testimonial.image && ( <div className="w-16 h-16 rounded-full mr-6 flex items-center justify-center text-white text-2xl font-bold" style={{backgroundColor: work.themeColor}}> {testimonial.author.charAt(0)} </div> )}
                                <div>
                                    <MessageSquare className="w-8 h-8 mb-4" style={{ color: work.themeColor }} />
                                    <p className="text-gray-700 italic text-lg leading-relaxed mb-6"> "{testimonial.quote}" </p>
                                    <p className="font-bold text-gray-800">{testimonial.author}</p>
                                    <p className="text-sm" style={{ color: work.themeDarkText }}>{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* CTA Section (Existing - slightly polished) */}
      <section className="py-20 lg:py-28 relative overflow-hidden" style={{ backgroundColor: work.themeColor }}>
        <div className="absolute top-0 left-0 w-32 h-32 opacity-20 transform -translate-x-1/2 -translate-y-1/2 rounded-full" style={{backgroundColor: work.themeLightBg}}></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 opacity-20 transform translate-x-1/3 translate-y-1/3 rounded-full" style={{backgroundColor: work.themeLightBg}}></div>
        <div className="container-wide px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-xl p-8 md:p-16 text-center text-white max-w-4xl mx-auto shadow-2xl relative" data-aos="zoom-in"
            style={{ background: `linear-gradient(145deg, ${work.themeHoverColor} 0%, ${work.themeColor} 100%)` }} >
            <Star className="w-12 h-12 text-yellow-300 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ready to Start Your Next Project?</h2>
            <p className="text-lg md:text-xl mb-10 opacity-90 leading-relaxed"> Let's collaborate to achieve outstanding results for your business. We're excited to hear about your vision. </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
              <Link to="/contact">
                <Button size="lg" className="bg-white hover:bg-gray-100 shadow-lg px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 group"
                  style={{ color: work.themeColor }} > Get in Touch <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to={`/services/${workType}`}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/90 rounded-lg px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 group"
                  style={{ '--hover-text-color': work.themeColor } as React.CSSProperties}
                  onMouseOver={(e) => { const target = e.currentTarget; target.style.color = target.style.getPropertyValue('--hover-text-color'); }}
                  onMouseOut={(e) => { const target = e.currentTarget; target.style.color = 'white'; }} > Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Why Choose Us (Existing) */}
      {work.whyChooseUs && (
        <section className="py-16 lg:py-24 bg-gray-50"> {/* Alternating background */}
          <div className="container-wide px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800" data-aos="fade-up"> {work.whyChooseUs.title} </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100"> {work.whyChooseUs.subtitle} </p>
             <div className="mt-4 mb-12 w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: work.themeColor }}></div>
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(work.whyChooseUs.points.length, 3)} gap-8`}>
              {work.whyChooseUs.points.map((point, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center border-b-4"
                  style={{ borderBottomColor: work.themeColor }} data-aos="fade-up" data-aos-delay={150 * (index + 1)} >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: work.themeColor }} >
                    <point.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{point.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 6: Unique Approach (Existing) */}
      {work.uniqueApproach && (
        <section className="py-16 lg:py-24 bg-white"> {/* Alternating background */}
            <div className="container-wide px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800"> {work.uniqueApproach.title} </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto"> {work.uniqueApproach.subtitle} </p>
                    <div className="mt-4 w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: work.themeColor }}></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {work.uniqueApproach.points.map((point, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg text-center transform hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay={index * 150} >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg" style={{backgroundColor: work.themeColor}}>
                                <point.icon className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-700">{point.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}

      {/* Section 7: Our Commitment (NEW) */}
      {work.ourCommitment && (
        <section className="py-16 lg:py-24" style={{ backgroundColor: work.themeLightBg }}>
            <div className="container-wide px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-16" data-aos="fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold" style={{color: work.themeDarkText}}>
                        {work.ourCommitment.title}
                    </h2>
                    <p className="mt-3 text-lg max-w-2xl mx-auto" style={{color: work.themeColor}}>
                        {work.ourCommitment.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {work.ourCommitment.points.map((point, index) => (
                        <div 
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300"
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                        >
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-4" style={{borderColor: work.themeColor, color: work.themeColor}}>
                                <point.icon className="w-10 h-10" />
                            </div>
                            <h4 className="text-xl font-semibold mb-2 text-gray-800">{point.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}
      
      {/* Impact and Newsletter Section (Existing - slightly polished) */}
      <section className="py-20 lg:py-28 text-white relative" style={{ backgroundColor: work.themeHoverColor }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}></div>
        <div className="container-wide px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">Our Measurable Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[ { value: "98%", label: "Client Satisfaction" }, { value: "500+", label: "Projects Delivered" }, { value: "10+", label: "Years of Expertise" }, { value: "30%", label: "Avg. Growth Boost" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/20 transition-colors duration-300 transform hover:scale-105" data-aos="zoom-in" data-aos-delay={index * 100}>
                  <p className="text-4xl lg:text-5xl font-bold mb-2" style={{ color: work.themeLightBg || '#ffffff' }}>{stat.value}</p>
                  <p className="text-gray-200 uppercase text-xs tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-2xl md:text-3xl font-bold mt-12 mb-4">Stay Connected & Informed</h3>
            <p className="mb-8 text-gray-300 leading-relaxed">Subscribe to our newsletter for the latest insights, project showcases, and industry updates directly from our expert team.</p>
            <form className="flex flex-col sm:flex-row gap-4 items-center max-w-md mx-auto">
              <input type="email" placeholder="Enter your email address" className="flex-grow p-4 rounded-md border-2 border-transparent focus:ring-2 text-gray-800 placeholder-gray-500 outline-none transition-all w-full"
                style={{'--focus-ring-color': work.themeLightBg || '#ffffff' } as React.CSSProperties}
                onFocus={(e) => e.currentTarget.style.borderColor = e.currentTarget.style.getPropertyValue('--focus-ring-color')}
                onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'} />
              <Button type="submit" className="text-white px-8 py-4 font-semibold rounded-md transition-all duration-300 w-full sm:w-auto transform hover:scale-105"
                style={{ backgroundColor: work.themeColor }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = work.themeColor === work.themeHoverColor ? work.themeLightBg : work.themeHoverColor }
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = work.themeColor} > Subscribe Now
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WorkPage;