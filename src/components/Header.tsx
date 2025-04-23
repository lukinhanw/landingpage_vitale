import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onDemoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDemoClick }) => {
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
        isScrolled ? 'bg-primary-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img 
              src="/imgs/logo-white.png"
              alt="PlataformaNR Logo"
              className="h-20 w-auto"
            />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: 'Home', href: '#' },
              { name: 'Sobre', href: '#sobre' },
              { name: 'Recursos', href: '#recursos' },
              { name: 'Produtos', href: '#produtos' },
              { name: 'Depoimentos', href: '#depoimentos' },
              { name: 'FAQ', href: '#faq' },
              { name: 'Contato', href: '#contato' },
            ].map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={onDemoClick}
              className="px-6 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium transition-colors duration-200"
            >
              Demonstração
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-200 hover:text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary-900/95 backdrop-blur-sm">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {[
              { name: 'Home', href: '#' },
              { name: 'Sobre', href: '#sobre' },
              { name: 'Recursos', href: '#recursos' },
              { name: 'Produtos', href: '#produtos' },
              { name: 'Depoimentos', href: '#depoimentos' },
              { name: 'FAQ', href: '#faq' },
              { name: 'Contato', href: '#contato' },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-gray-200 hover:text-white hover:bg-primary-800/50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onDemoClick();
                }}
                className="w-full px-6 py-2.5 rounded-lg bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium transition-colors duration-200"
              >
                Demonstração
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;