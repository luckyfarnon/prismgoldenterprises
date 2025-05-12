import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CtaSection from '@/components/CtaSection';

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      offset: 100,
    });
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="relative min-h-[115vh] flex items-center overflow-hidden pt-24"
        style={{
          backgroundImage: "linear-gradient(rgba(20,20,20,0.7),rgba(20,20,20,0.7)), url('/about-3.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        <div className="container-wide relative z-10 flex flex-col-reverse md:flex-row items-start justify-between gap-10 pt-10 pb-8">
          {/* Left: Empty (background now covers whole hero) */}
          <div className="flex-1 flex justify-center items-center min-h-[320px] md:min-h-[420px] w-full md:w-auto"></div>
          {/* Right: Heading and Subheading */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
              About Our Company
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
              A Cloud for the <span className="relative inline-block">New <span className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] text-black px-2 rounded rotate-2 inline-block">Decade</span></span>
            </h2>
            <p className="text-lg md:text-xl text-white opacity-80 mb-6 max-w-lg" style={{ fontWeight: 400 }}>
              A weekend project or the next big thing. Build it all on Render. From idea to deployment, we handle the infrastructure so you can focus on code.
              Scale effortlessly, pay only for what you use, and launch faster than ever.
              Whether you're hacking on a side project or building the next unicorn — Render has your back.
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
              <img 
                src="vision.jpeg" 
                alt="Company Vision" 
                className="rounded-lg shadow-lg w-full object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="heading-xl mb-6 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Our Vision & Mission</h2>
              <p className="text-lg mb-6 text-gray-700">
                Founded in 2010, our company has been at the forefront of delivering exceptional solutions across multiple industries. We believe in innovation, quality, and building lasting relationships with our clients.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                Our mission is to provide best-in-class services that help our clients achieve their business objectives efficiently and effectively. We strive to be a trusted partner that delivers value through innovative solutions.
              </p>
              <Button className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] text-black group" onClick={() => {
                if (window.location.pathname === '/') {
                  const el = document.getElementById('custom-services-section');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                } else {
                  sessionStorage.setItem('scrollTarget', 'custom-services-section');
                  navigate('/');
                }
              }}>
                Learn More About Our Mission
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Timeline Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="heading-xl mb-4 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Our Journey</h2>
            <p className="text-muted-foreground text-lg">
              A timeline of key milestones that define our growth and evolution over the years.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>
            
            {/* Timeline Items */}
            <div className="space-y-24 relative z-10">
              {/* 2010 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:text-right pr-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#ae8625] bg-clip-text text-transparent mb-4">2010</h3>
                  <h4 className="text-xl font-semibold mb-3 text-white">Company Founded</h4>
                  <p className="text-muted-foreground">
                    Our company was established with a vision to provide exceptional services across multiple industries. What began as a small venture quickly evolved into a dynamic organization driven by innovation, integrity, and a passion for excellence. From day one, our goal has been to deliver reliable solutions tailored to the unique needs of our clients. <br/><br/> Over the years, we have expanded our capabilities and built a strong reputation in sectors such as import/export, construction, and strategic trading. Our commitment to quality, client satisfaction, and continuous improvement has positioned us as a trusted partner for businesses seeking growth and efficiency. Today, we continue to build on that foundation — stronger, smarter, and more focused than ever.
                  </p>
                </div>
                <div className="pl-8">
                  <img 
                    src="2010.jpeg" 
                    alt="Company Founding" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
              
              {/* 2015 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:order-2 md:text-left pl-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#ae8625] bg-clip-text text-transparent mb-4">2015</h3>
                  <h4 className="text-xl font-semibold mb-3 text-white">International Expansion</h4>
                  <p className="text-muted-foreground">
                    We expanded our operations globally, opening offices in Europe and Asia to serve our growing international client base. This strategic move allowed us to bring our services closer to key markets and respond more effectively to global demands. It marked a significant turning point in our journey toward becoming a truly global enterprise. <br/><br/> By establishing a presence in major economic hubs, we forged new partnerships, gained valuable market insights, and enhanced our ability to deliver culturally and regionally relevant solutions. Our international expansion not only broadened our footprint but also strengthened our commitment to delivering world-class service across borders.
                  </p>
                </div>
                <div className="md:order-1 pr-8">
                  <img 
                    src="2015.jpeg" 
                    alt="International Expansion" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
              
              {/* 2020 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:text-right pr-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#ae8625] bg-clip-text text-transparent mb-4">2020</h3>
                  <h4 className="text-xl font-semibold mb-3 text-white">Digital Transformation</h4>
                  <p className="text-muted-foreground">
                    We embraced the digital era by investing heavily in technology and innovation to provide cutting-edge solutions to our clients. Recognizing the shift in global business dynamics, we modernized our infrastructure, streamlined internal processes, and adopted advanced digital tools to stay ahead in a rapidly evolving market. <br/><br/> This transformation empowered us to enhance efficiency, improve client experiences, and offer more agile, data-driven services. From automation to cloud integration, our commitment to digital excellence has not only future-proofed our operations but also reinforced our position as a forward-thinking industry leader.
                  </p>
                </div>
                <div className="pl-8">
                  <img 
                    src="2020.jpeg" 
                    alt="Digital Transformation" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
              
              {/* 2025 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                <div className="md:order-2 md:text-left pl-8">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#ae8625] bg-clip-text text-transparent mb-4">2025</h3>
                  <h4 className="text-xl font-semibold mb-3 text-white">Future Vision</h4>
                  <p className="text-muted-foreground">
                    Looking ahead, we aim to continue our growth trajectory and remain at the forefront of innovation in our industries. With a solid foundation built over the past decade, we are focused on leveraging emerging technologies, sustainable practices, and global insights to shape a smarter, more connected future. <br/><br/> Our vision includes expanding into new markets, fostering strategic partnerships, and continuously evolving to meet the ever-changing needs of our clients. As we move forward, our commitment to excellence, adaptability, and long-term value creation will drive us toward new milestones and greater impact.
                  </p>
                </div>
                <div className="md:order-1 pr-8">
                  <img 
                    src="2025.jpeg" 
                    alt="Future Vision" 
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="heading-xl mb-4">Meet <span className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Our Team</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-8">
            {[
              { name: 'Fran Wilson', img: '/pic-1.jpeg', designation: 'Director Operation' },
              { name: 'Adam Smith', img: '/pic-2.jpeg', designation: 'CEO' },
              { name: 'Sarah Glenn', img: '/pic-3.jpeg', designation: 'Director business development' },
              { name: 'Chris Woakes', img: '/pic-4.jpeg', designation: 'Designation' },
            ].map((member, idx) => (
              <div key={idx} className="bg-[#f7f8fa] rounded-xl shadow-md flex flex-col items-center p-6 animate-fadeInUp max-w-sm w-full mx-auto" data-aos="fade-up" data-aos-delay={idx * 80}>
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                <div className="font-semibold text-lg mb-2">{member.name}</div>
                <p className="text-gray-500 text-sm mb-2">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
            <h2 className="heading-xl mb-4 text-white">Frequently Asked <span className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Questions</span></h2>
          </div>
          <FAQ />
        </div>
      </section>

      <CtaSection />

      <Footer />
    </div>
  );
};

// FAQ Accordion Component
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: 'How does the pricing work?',
      a: 'You will be charged a monthly or yearly subscription fee based on the plan you have chosen and optional Test Packs. All plans and packs are billed in USD.'
    },
    {
      q: 'How many tests do I need?',
      a: 'The number of tests you need depends on your project requirements and goals. We recommend starting with a basic plan and scaling up as your needs grow. Our team can help you determine the best plan for your use case.'
    },
    {
      q: "What happens after we've used all of our test allocation?",
      a: 'Once you have used all of your allocated tests, you can purchase additional test packs or upgrade your subscription plan. You will be notified when you are close to reaching your limit.'
    },
    {
      q: 'Can I be invoiced?',
      a: 'Yes, we offer invoicing for enterprise and annual plans. Please contact our support team to set up invoicing for your account.'
    },
    {
      q: 'Are you GDPR compliant?',
      a: 'Yes, we are fully GDPR compliant. We take data privacy and security seriously and ensure that all user data is handled in accordance with GDPR regulations.'
    },
    {
      q: 'How long do you keep my metrics for?',
      a: 'We retain your metrics and test data for as long as your subscription is active. If you cancel your subscription, your data will be available for 30 days before it is permanently deleted.'
    },
  ];
  return (
    <div className="max-w-2xl mx-auto">
      {faqs.map((faq, idx) => (
        <div key={idx} className="border-b border-gray-200">
          <button
            className={`w-full text-left py-5 font-semibold text-lg flex items-center justify-between transition-colors duration-200 ${open === idx ? 'bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent' : 'text-white'}`}
            onClick={() => setOpen(open === idx ? null : idx)}
            aria-expanded={open === idx}
          >
            <span>{faq.q}</span>
            <span className={`ml-2 transition-transform duration-300 text-gray-500`}>
              {open === idx ? '▼' : '▶'}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${open === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            {faq.a && <div className="pb-5 text-gray-600 text-base pl-2 pr-4">{faq.a}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
