
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
      <section className="relative bg-gradient-primary min-h-[40vh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl text-white mb-4" data-aos="fade-up">
              Get in Touch
            </h1>
            <p className="text-white text-lg mb-8 opacity-90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Have questions or ready to start your next project? Reach out to our team.
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
      
      {/* Contact Form Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <h2 className="heading-md mb-6 text-primary-800">Send Us a Message</h2>
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
                  className="btn btn-primary w-full group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                </Button>
              </form>
            </div>
            
            {/* Contact Info and Map */}
            <div data-aos="fade-left">
              <h2 className="heading-md mb-6 text-primary-800">Contact Information</h2>
              <p className="text-gray-700 mb-8">
                Have questions or need assistance? Contact our friendly team using the information below.
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-primary-800 hover:text-primary transition-colors">
                      <a href="mailto:info@example.com">info@example.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-primary-800 hover:text-primary transition-colors">
                      <a href="tel:+11234567890">+1 (123) 456-7890</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary rounded-full p-3 text-white">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-700">
                      123 Business Avenue, Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden shadow-lg h-[300px] bg-gray-200" data-aos="fade-up">
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <p className="text-gray-500">Google Map would be embedded here</p>
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
