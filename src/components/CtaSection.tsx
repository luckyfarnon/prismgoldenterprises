
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, ArrowRight, CheckCircle } from "lucide-react";

const CtaSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Form submitted",
        description: "Thank you! We'll be in touch shortly.",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", company: "", message: "" });
      }, 2000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-gradient-primary text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-white opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="heading-lg mb-4">Ready to Grow Your Business?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-xl">
              Let's discuss how our digital marketing services can help you achieve your business goals. 
              Fill out the form and we'll be in touch shortly.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="opacity-90">hello@digitalsilk.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="opacity-90">(123) 456-7890</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-bold mb-4">Digital Marketing Benefits:</h4>
              <ul className="space-y-3">
                {[
                  "Increased brand visibility and awareness",
                  "Higher quality leads and conversions",
                  "Improved ROI on marketing spend",
                  "Data-driven strategy and optimization"
                ].map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary-300 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold text-secondary mb-6">Get a Free Consultation</h3>
              
              <form onSubmit={handleSubmit} className="relative">
                {isSubmitted ? (
                  <div className="py-8 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-secondary mb-2">Thank You!</h4>
                    <p className="text-muted-foreground">We've received your request and will be in touch shortly.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your name"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                        placeholder="Your email"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        How can we help?
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full"
                        placeholder="Tell us about your project"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full btn btn-primary group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
