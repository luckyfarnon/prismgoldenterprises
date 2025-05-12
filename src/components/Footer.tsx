import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [workOpen, setWorkOpen] = useState(false);

  return (
    <footer className="bg-secondary text-white">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              Prism<span className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Gold</span>Enterprises
            </h3>
            <p className="mb-6 opacity-80">
              We're a full-service digital marketing agency focused on helping businesses grow through creative and data-driven strategies.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a 
                  href="#" 
                  key={index}
                  className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#ae8625] text-white hover:bg-primary-100 group p-2 rounded-full transition-colors duration-200"
                  aria-label={`Social media link ${index + 1}`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="group">
                <Link
                  to="/services/import-export"
                  className="flex items-center transition-all duration-200 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ae8625] group-hover:via-[#ae8625] group-hover:to-[#edc967] group-hover:bg-clip-text"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-5 mr-1 transition-all duration-200" />
                  Import & Export
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/services/construction"
                  className="flex items-center transition-all duration-200 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ae8625] group-hover:via-[#ae8625] group-hover:to-[#edc967] group-hover:bg-clip-text"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-5 mr-1 transition-all duration-200" />
                  Construction
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/services/information-technology"
                  className="flex items-center transition-all duration-200 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ae8625] group-hover:via-[#ae8625] group-hover:to-[#edc967] group-hover:bg-clip-text"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-5 mr-1 transition-all duration-200" />
                  Information Technology
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li className="group">
                <Link
                  to="/about"
                  className="flex items-center transition-all duration-200 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ae8625] group-hover:via-[#ae8625] group-hover:to-[#edc967] group-hover:bg-clip-text"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-5 mr-1 transition-all duration-200" />
                  About Us
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/contact"
                  className="flex items-center transition-all duration-200 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#ae8625] group-hover:via-[#ae8625] group-hover:to-[#edc967] group-hover:bg-clip-text"
                >
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -ml-5 mr-1 transition-all duration-200" />
                  Contact Us
                </Link>
              </li>
              <li>
                <div className="flex items-center w-full text-left text-white font-medium">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  Our Work
                </div>
                <ul
                  id="footer-work-submenu"
                  className="pl-6"
                >
                  <li>
                    <a
                      href="/work/import-export"
                      className="block py-1 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text transition-colors duration-200"
                    >
                      Import & Export
                    </a>
                  </li>
                  <li>
                    <a
                      href="/work/construction"
                      className="block py-1 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text transition-colors duration-200"
                    >
                      Construction
                    </a>
                  </li>
                  <li>
                    <a
                      href="/work/information-technology"
                      className="block py-1 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text transition-colors duration-200"
                    >
                      Information Technology
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact</h4>
            <address className="not-italic">
              <p className="mb-3 opacity-80">123 Digital Way</p>
              <p className="mb-3 opacity-80">New York, NY 10001</p>
              <p className="mb-3 opacity-80">United States</p>
              <p className="mb-3">
                <a href="tel:+11234567890" className="text-white transition-all duration-200 group hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text">(123) 456-7890</a>
              </p>
              <p>
                <a href="mailto:abc@gmail.com" className="text-white transition-all duration-200 group hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text">abc@gmail.com</a>
              </p>
            </address>
            
            <div className="mt-8">
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-white text-black rounded-l-md px-4 py-2 w-full focus:outline-none"
                />
                <button className="bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] text-black hover:bg-primary-100 group px-3 rounded-r-md transition-colors duration-200">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </form>
              <p className="text-xs mt-2 opacity-60">Subscribe to our newsletter</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-70 text-md mb-4 md:mb-0">
            © {new Date().getFullYear()} Prism<span className="bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text text-transparent">Gold</span>Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-70">
            <a href="#" className="text-white transition-all duration-200 group hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text">Privacy Policy</a>
            <a href="#" className="text-white transition-all duration-200 group hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text">Terms of Service</a>
            <a href="#" className="text-white transition-all duration-200 group hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
