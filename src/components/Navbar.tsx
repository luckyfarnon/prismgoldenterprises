import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Briefcase, Building2, Monitor } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const location = useLocation();

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
    setActiveDropdown(prev => (prev === name ? null : name));
  };

  const serviceDropdownIcons: Record<string, JSX.Element> = {
    'Import & Export': <Briefcase className="h-5 w-5 text-green-500" />,
    'Construction': <Building2 className="h-5 w-5 text-orange-500" />,
    'Information Technology': <Monitor className="h-5 w-5 text-blue-500" />,
  };

  const workDropdownIcons: Record<string, JSX.Element> = {
    'Import & Export Work': <Briefcase className="h-5 w-5 text-green-500" />,
    'Construction Work': <Building2 className="h-5 w-5 text-orange-500" />,
    'IT Work': <Monitor className="h-5 w-5 text-blue-500" />,
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container-wide flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold flex items-center">
            <img src="/public/prismLogo.png" alt="Logo" height={350} width={350} />
          </Link>
        </div>

        {/* Desktop Menu */}
<div className="hidden lg:flex items-center gap-8">
  {navLinks.map((link) => {
    const isActive = link.href === location.pathname || (link.dropdown && link.dropdown.some(item => item.href === location.pathname));
    return (
      <div key={link.name} className="relative group">
        {link.dropdown ? (
          <>
            <button
              className={`font-medium flex items-center gap-1 transition-colors duration-200
                ${isActive ? 'text-transparent bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text' : 'text-white'}
                hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text
              `}
            >
              {link.name}
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-60 bg-black border border-gray-700 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 z-40 py-2 px-1 flex flex-col gap-1">
              {link.dropdown.map((item) => {
                const isDropdownActive = item.href === location.pathname;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-medium
                      ${isDropdownActive ? 'text-transparent bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text' : 'text-white'}
                      hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text
                    `}
                    style={{ minHeight: '44px' }}
                  >
                    <span className="flex items-center justify-center w-7 h-7 mr-2">
                      {link.name === 'Services' && serviceDropdownIcons[item.name]}
                      {link.name === 'Work' && workDropdownIcons[item.name]}
                    </span>
                    <span className="flex-1 text-left">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </>
        ) : (
          <Link
            to={link.href}
            className={`font-medium transition-colors duration-200
              ${isActive ? 'text-transparent bg-gradient-to-r from-[#ae8625] via-[#ae8625] to-[#edc967] bg-clip-text' : 'text-white'}
              hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text
            `}
          >
            {link.name}
          </Link>
        )}
      </div>
    );
  })}
  <div className="hidden xl:flex items-center gap-4">
    <a href="tel:+11234567890" className="flex items-center gap-2 text-white hover:text-transparent hover:bg-gradient-to-r hover:from-[#ae8625] hover:via-[#ae8625] hover:to-[#edc967] hover:bg-clip-text transition-colors duration-200">
      <Phone className="h-4 w-4" />
      <span>021-36930725</span>
    </a>
    <Button className="bg-gradient-to-r from-[#ae8625] via-[#f7ef8a] to-[#edc967] text-black">Get a Quote</Button>
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
        <div className={`lg:hidden fixed top-[72px] left-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
          <div className="px-4 py-5 space-y-4">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-3">
                <div className="flex justify-between items-center">
                  {link.hasDropdown ? (
                    <button className="font-medium text-gray-800">
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
                  <div className={`mt-2 pl-4 space-y-2 transition-all duration-300 ${activeDropdown === link.name ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
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
