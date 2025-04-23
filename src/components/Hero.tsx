import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="início" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#003366]">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url(/imgs/hero-bg.jpg)',
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundSize: 'cover'
        }}
      />
      
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#003366]/70 z-10"></div>
      
      {/* Gradient overlay for better text readability on the left side */}
      <div className="absolute inset-0 z-[15] bg-gradient-to-r from-[#001a33]/95 via-[#002b4d]/80 to-transparent"></div>

      {/* Shield Icon in top right corner */}
      <div className="absolute top-10 right-10 z-20">
        <Shield size={80} className="text-white/20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-left relative z-20"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6 drop-shadow-sm">
              Capacite sua equipe nas NRs de forma simples e eficaz
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-10 drop-shadow-sm">
              Transforme a capacitação em segurança do trabalho da sua empresa com uma plataforma interativa, intuitiva e 100% conforme as normas.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                onClick={onDemoClick}
                className="px-8 py-3 text-lg font-medium rounded-lg bg-accent-500 text-white shadow-lg hover:bg-accent-600 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar demonstração
              </motion.button>
              
              <motion.button
                className="px-8 py-3 text-lg font-medium rounded-lg bg-transparent border border-white text-white hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Conhecer planos
              </motion.button>
            </div>
          </motion.div>

          {/* Right column - Image of people */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative mx-auto">
              {/* Image of people in professional setting */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/imgs/hero-people.jpg" 
                  alt="Equipe de profissionais" 
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent-500 rounded-full opacity-20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -left-4 -top-4 w-32 h-32 bg-primary-500 rounded-full opacity-10"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;