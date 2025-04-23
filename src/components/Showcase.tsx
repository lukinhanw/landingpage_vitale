import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Showcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-primary-800 to-primary-900 relative overflow-hidden" id="benefícios">
      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-40 w-20 h-20 rounded-full bg-primary-500 opacity-20"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute bottom-40 left-20 w-32 h-32 rounded-full bg-accent-500 opacity-10"
        animate={{ 
          y: [0, -40, 0],
          x: [0, -20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Uma plataforma completa e intuitiva
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Conheça as principais funcionalidades que tornam nossa solução a escolha ideal para 
              capacitação em Normas Regulamentadoras.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-white mb-6">Dashboard interativo</h3>
              <ul className="space-y-4 text-primary-100">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Visão clara e objetiva do status de conformidade da empresa</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Acompanhamento em tempo real do progresso dos treinamentos</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Alertas automáticos para vencimentos e pendências</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Relatórios personalizados exportáveis em diversos formatos</span>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="rounded-lg shadow-2xl overflow-hidden border-8 border-white border-opacity-10">
                <img 
                  src="https://images.pexels.com/photos/7947782/pexels-photo-7947782.jpeg?auto=compress&cs=tinysrgb&h=750" 
                  alt="Dashboard da plataforma" 
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-accent-500 text-white font-bold py-2 px-4 rounded-full shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Intuitivo!
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="relative order-4 md:order-3">
              <div className="rounded-lg shadow-2xl overflow-hidden border-8 border-white border-opacity-10">
                <img 
                  src="https://images.pexels.com/photos/8867428/pexels-photo-8867428.jpeg?auto=compress&cs=tinysrgb&h=750" 
                  alt="Biblioteca de cursos" 
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-success-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                Atualizado!
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="order-3 md:order-4">
              <h3 className="text-2xl font-bold text-white mb-6">Cursos completos</h3>
              <ul className="space-y-4 text-primary-100">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Conteúdo desenvolvido por especialistas em SST</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Material didático interativo com vídeos e animações</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Avaliações online com feedback imediato</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-success-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="ml-3">Certificados digitais validados conforme legislação</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;