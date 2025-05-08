
import { useEffect, FormEvent, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Here you would normally send the form data to your backend
    console.log('Form submitted with:', formData);
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form and show success state
    setFormSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setFormSubmitted(false);
    }, 5000);
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
              Contact Us
            </h1>
            <p className="text-white text-lg mb-8 opacity-90 max-w-2xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
              Get in touch with our team to discuss your project or inquire about our services.
              We're here to help you achieve your business goals.
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
      
      {/* Contact Form and Info Section */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-right">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Import & Export Services">Import & Export Services</option>
                      <option value="Construction Services">Construction Services</option>
                      <option value="IT Services">IT Services</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>
                
                <div className="mt-2">
                  <Button 
                    type="submit" 
                    className="btn btn-primary group w-full py-3"
                    disabled={formSubmitted}
                  >
                    {formSubmitted ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Message Sent Successfully
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div data-aos="fade-left">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="mb-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-100 rounded-full p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                    <address className="not-italic">
                      <p className="mb-1">123 Digital Way</p>
                      <p className="mb-1">New York, NY 10001</p>
                      <p>United States</p>
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                    <p>Main Office: <a href="tel:+11234567890" className="hover:text-primary transition-colors">(123) 456-7890</a></p>
                    <p>Support: <a href="tel:+11234567891" className="hover:text-primary transition-colors">(123) 456-7891</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email Address</h3>
                    <p>General Inquiries: <a href="mailto:hello@digitalsilk.com" className="hover:text-primary transition-colors">hello@digitalsilk.com</a></p>
                    <p>Support: <a href="mailto:support@digitalsilk.com" className="hover:text-primary transition-colors">support@digitalsilk.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 rounded-full p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Business Hours</h3>
                    <p className="mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map Embed */}
              <div className="rounded-lg overflow-hidden shadow-lg h-80" data-aos="fade-up">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <p className="text-gray-500">Google Map would be embedded here</p>
                  {/* In a real implementation, replace this with a proper Google Maps embed */}
                  {/* <iframe
                    src="https://www.google.com/maps/embed?..."
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations Section */}
      <section className="section-padding bg-primary-100">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <h2 className="heading-lg mb-4">Our Global Offices</h2>
            <p className="text-muted-foreground text-lg">
              With locations across the globe, we provide local expertise with global reach.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                city: 'New York',
                country: 'United States',
                address: '123 Digital Way, New York, NY 10001',
                phone: '(123) 456-7890',
                email: 'nyc@digitalsilk.com'
              },
              {
                city: 'London',
                country: 'United Kingdom',
                address: '45 Tech Avenue, London, EC1A 1BB',
                phone: '+44 20 1234 5678',
                email: 'london@digitalsilk.com'
              },
              {
                city: 'Singapore',
                country: 'Singapore',
                address: '789 Business Park, Singapore 123456',
                phone: '+65 6123 4567',
                email: 'singapore@digitalsilk.com'
              }
            ].map((office, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                <p className="text-primary-600 mb-4">{office.country}</p>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-primary transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
