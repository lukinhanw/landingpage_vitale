import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, BookOpen } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="início" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background with modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800/90 to-primary-700/50 backdrop-blur-sm z-0"></div>

      {/* Floating objects */}
      <motion.div 
        className="absolute top-32 right-10 z-10 text-white opacity-70"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-20 z-10 text-accent-400 opacity-60"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Award size={50} />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 right-1/4 z-10 text-primary-300 opacity-50"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <BookOpen size={40} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Capacite sua equipe nas NRs de forma simples e eficaz
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-100 mb-8">
              Transforme a capacitação em segurança do trabalho da sua empresa com uma plataforma interativa, intuitiva e 100% conforme as normas.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                className="px-8 py-3 text-lg font-medium rounded-full bg-accent-500 text-white shadow-lg hover:bg-accent-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar demonstração
              </motion.button>
              
              <motion.button
                className="px-8 py-3 text-lg font-medium rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-800 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conhecer planos
              </motion.button>
            </div>
          </motion.div>

          {/* Right column - System mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-2xl">
              {/* Laptop frame */}
              <div className="relative w-full pt-[60%] rounded-t-xl bg-secondary-800">
                {/* Screen content */}
                <div className="absolute inset-2 top-[5%] rounded-md overflow-hidden bg-white">
                  <img 
                    src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                    alt="Dashboard do sistema" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Laptop bottom */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[102%] h-[3%] bg-secondary-700 rounded-b-xl"></div>
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