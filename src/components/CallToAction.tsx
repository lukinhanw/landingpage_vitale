import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Check } from 'lucide-react';

interface CallToActionProps {
  onDemoClick: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onDemoClick }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-primary-700 to-primary-900" id="contato">
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 opacity-20 text-white"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Shield size={80} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-primary-500 opacity-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-display font-bold text-secondary-900 mb-6">
                  Potencialize a capacitação em SST da sua empresa
                </h2>
                
                <p className="text-lg text-secondary-600 mb-8">
                  Agende uma demonstração gratuita e descubra como nossa plataforma pode transformar 
                  o processo de capacitação em NRs na sua empresa.
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Implementação rápida e sem complicações',
                    'Suporte especializado durante todo o processo',
                    'Customização de acordo com suas necessidades',
                    'Garantia de satisfação ou seu dinheiro de volta'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <Check className="h-5 w-5 text-success-600" />
                      </div>
                      <span className="ml-3 text-secondary-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  onClick={onDemoClick}
                  className="w-full py-4 bg-accent-500 text-white rounded-lg font-bold text-lg shadow-lg hover:bg-accent-600 transition-colors duration-300"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Solicitar demonstração
                </motion.button>
                
                <p className="text-sm text-secondary-500 mt-4 text-center">
                  Sem compromisso. Cancelamento a qualquer momento.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative overflow-hidden hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&h=750" 
                alt="Equipe utilizando a plataforma" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-900 opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Empresas que confiam em nós</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="bg-white bg-opacity-20 p-4 rounded-lg flex items-center justify-center">
                        <div className="text-white font-bold">Cliente {i}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;