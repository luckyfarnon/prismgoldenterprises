
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { 
      name: 'Services', 
      href: '#services',
      hasDropdown: true,
      dropdown: [
        { name: 'Import & Export', href: '/services/import-export' },
        { name: 'Construction', href: '/services/construction' },
        { name: 'Information Technology', href: '/services/information-technology' }
      ]
    },
    { 
      name: 'Work', 
      href: '#work',
      hasDropdown: true,
      dropdown: [
        { name: 'Import & Export Work', href: '/work/import-export' },
        { name: 'Construction Work', href: '/work/construction' },
        { name: 'IT Work', href: '/work/information-technology' }
      ]
    },
    { name: 'About', href: '/about', hasDropdown: false },
    { name: 'Contact', href: '/contact', hasDropdown: false },
  ];

  const handleDropdownToggle = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container-wide flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <span className="text-primary font-playfair">Digital</span>
            <span className="font-playfair ml-1 text-white transition-colors duration-300" 
              style={{ color: isScrolled ? '#1A1F2C' : 'white' }}>Silk</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.hasDropdown ? (
                <button 
                  onClick={() => handleDropdownToggle(link.name)}
                  className={`font-medium flex items-center gap-1 hover:text-primary transition-colors duration-200 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {link.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link 
                  to={link.href}
                  className={`font-medium hover:text-primary transition-colors duration-200 ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )}
              
              {link.hasDropdown && (
                <div className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top ${
                  activeDropdown === link.name ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
                }`}>
                  <div className="py-2">
                    {link.dropdown?.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        className="block px-4 py-2 text-gray-800 hover:bg-primary-100 hover:text-primary transition-colors duration-200"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="hidden xl:flex items-center gap-4">
            <a href="tel:+11234567890" className={`flex items-center gap-2 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            } hover:text-primary transition-colors duration-200`}>
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </a>
            <Button className="btn btn-primary">Get a Quote</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-secondary' : 'text-white'}`} />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}>
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-3">
                <div className="flex justify-between items-center">
                  {link.hasDropdown ? (
                    <button 
                      className="font-medium text-gray-800"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link 
                      to={link.href}
                      className="font-medium text-gray-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  {link.hasDropdown && (
                    <button 
                      onClick={() => handleDropdownToggle(link.name)}
                      className="p-2"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {link.hasDropdown && (
                  <div className={`mt-2 pl-4 space-y-2 transition-all duration-300 ${
                    activeDropdown === link.name ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    {link.dropdown?.map((item) => (
                      <Link 
                        key={item.name} 
                        to={item.href} 
                        className="block py-1 text-gray-600 hover:text-primary text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <a href="tel:+11234567890" className="flex items-center gap-2 text-gray-800 hover:text-primary mb-4">
                <Phone className="h-4 w-4" />
                <span>(123) 456-7890</span>
              </a>
              <Button className="btn btn-primary w-full">Get a Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
