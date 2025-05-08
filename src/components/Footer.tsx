
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              <span className="text-primary-300">Digital</span>Silk
            </h3>
            <p className="mb-6 opacity-80">
              We're a full-service digital marketing agency focused on helping businesses grow through creative and data-driven strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-primary-800 hover:bg-primary-700 p-2 rounded-full transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {["SEO", "Content Marketing", "Paid Media", "Social Media", "Email Marketing", "Analytics & Reporting"].map((item) => (
                <li key={item}>
                  <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Work", "Blog", "Case Studies", "Careers", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <address className="not-italic">
              <p className="mb-3 opacity-80">123 Digital Way</p>
              <p className="mb-3 opacity-80">New York, NY 10001</p>
              <p className="mb-3 opacity-80">United States</p>
              <p className="mb-3">
                <a href="tel:+11234567890" className="opacity-80 hover:opacity-100">(123) 456-7890</a>
              </p>
              <p>
                <a href="mailto:hello@digitalsilk.com" className="opacity-80 hover:opacity-100">hello@digitalsilk.com</a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DigitalSilk. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-70">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
