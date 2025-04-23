import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-primary-600" />
            <span className={`ml-2 font-display font-bold text-xl ${isScrolled ? 'text-primary-800' : 'text-white'}`}>
              SafeTreinamentos
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Recursos', 'Benefícios', 'Depoimentos', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-secondary-700 hover:text-primary-600' : 'text-white hover:text-accent-300'
                }`}
              >
                {item}
              </a>
            ))}
            <button className="px-5 py-2 rounded-full bg-accent-500 hover:bg-accent-600 text-white font-medium transition-colors duration-200">
              Demonstração
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-secondary-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-secondary-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {['Início', 'Recursos', 'Benefícios', 'Depoimentos', 'Contato'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button 
              className="w-full mt-2 px-3 py-2 rounded-md text-base font-medium text-white bg-accent-500 hover:bg-accent-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              Demonstração
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;