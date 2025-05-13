import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from '@/components/ui/use-toast';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  
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
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="overflow-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section
        className="relative min-h-[115vh] flex items-center overflow-hidden pt-16"
        style={{
          backgroundImage: "linear-gradient(rgba(20,20,20,0.7),rgba(20,20,20,0.7)), url('/contact-us-2.JPG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#181818',
        }}
      >
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        <div className="container-wide relative z-10 flex flex-col-reverse md:flex-row items-start justify-between gap-10 pt-2 pb-8">
          {/* Right: Heading and Subheading */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-2xl w-full" data-aos="fade-left">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] bg-clip-text text-transparent" style={{ letterSpacing: '-0.02em' }}>
              Contact Us
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight" style={{ letterSpacing: '-0.02em' }}>
              We're Here to <span className="relative inline-block">Help <span className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] text-black px-2 rounded rotate-2 inline-block">You</span></span>
            </h2>
            <p className="text-lg md:text-xl text-white opacity-80 mb-6 max-w-xl" style={{ fontWeight: 400 }}>
            Have a question, need support, or want to discuss your next project? Our team is ready to assist you with prompt, professional service. Reach out and let's make something great together. Whether you're starting something new or improving something existing, we're here to guide you every step of the way — with clarity, expertise, and a personal touch.
            </p>
            <Button
              className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] text-black group text-lg px-8 py-4 font-bold shadow-lg"
              onClick={() => {
                const formSection = document.getElementById('contact-form-section');
                if (formSection) {
                  formSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Start Your Conversation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
          {/* Left: Image or illustration (optional, can be empty for now) */}
          <div className="flex-1 flex justify-center items-center min-h-[320px] md:min-h-[420px] w-full md:w-auto" data-aos="fade-right"></div>
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
      
      {/* Contact Form Section */}
      <section className="section-padding bg-white" id="contact-form-section">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="heading-xl mb-6 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Send Us a Message</h2>
              <p className="text-gray-700 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Input
                      {...register("name", { required: "Name is required" })}
                      className={`w-full ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Full Name *"
                      disabled={isSubmitting}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <Input
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className={`w-full ${errors.email ? 'border-red-500' : ''}`}
                      type="email"
                      placeholder="Email Address *"
                      disabled={isSubmitting}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div>
                    <Input
                      {...register("phone", { required: "Phone number is required" })}
                      className={`w-full ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Phone Number *"
                      disabled={isSubmitting}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                  
                  <div>
                    <Input
                      {...register("company")}
                      className="w-full"
                      placeholder="Company (Optional)"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      {...register("message", { required: "Message is required" })}
                      className={`w-full min-h-[150px] ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Your Message *"
                      disabled={isSubmitting}
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] text-black w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                </Button>
              </form>
            </div>
            
            {/* Contact Info and Map */}
            <div data-aos="fade-left">
              <h2 className="heading-xl mb-6 bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                Have questions or need assistance? Contact our friendly team using the information below.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-black group rounded-full p-3 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-700 duration-200 group hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text transition-colors">
                      <a href="mailto:info@example.com">info@prismgoldenterprises.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-black group rounded-full p-3 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-700 duration-200 group hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text transition-colors">
                      <a href="tel:+11234567890">021-36930725</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-black group rounded-full p-3 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-700">
                      R-18 sector 10 <br />
                      North karachi pakistan
                      
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden shadow-lg h-[300px] bg-gray-200" data-aos="fade-up">
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8584341229243!2d-74.00594168459337!3d40.71277597933183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7c0abbbbbaa0f6b5!2s123%20Business%20Avenue%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
