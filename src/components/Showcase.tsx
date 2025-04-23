import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, LayoutDashboard, BookOpen, FileCheck } from 'lucide-react';

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
    <section className="py-24 bg-primary-900 relative overflow-hidden" id="benefícios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Features Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Uma plataforma que facilita a gestão de treinamentos
              </h2>
              <p className="text-xl text-primary-100 mb-12">
                Nossa plataforma foi desenvolvida para tornar a gestão de treinamentos em NRs mais 
                simples, eficiente e completa para sua empresa.
              </p>

              <ul className="space-y-4 text-primary-100">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <LayoutDashboard className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Dashboard Interativo</h3>
                    <p className="text-primary-100">Acompanhe o progresso de todos os colaboradores em tempo real.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Biblioteca de Cursos</h3>
                    <p className="text-primary-100">Acesso a todos os treinamentos exigidos pelas NRs, organizados de forma modular.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Gestão de Certificados</h3>
                    <p className="text-primary-100">Emissão e controle automático de certificados com validade legal.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/7947782/pexels-photo-7947782.jpeg?auto=compress&cs=tinysrgb&h=750" 
                  alt="Dashboard da plataforma" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Cursos Completos Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Cursos completos</h3>
              <p className="text-xl text-primary-100 mb-12">
                Conteúdo de alta qualidade desenvolvido por especialistas para garantir 
                o melhor aprendizado da sua equipe.
              </p>

              <ul className="space-y-4 text-primary-100">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Conteúdo Especializado</h3>
                    <p className="text-primary-100">Desenvolvido por especialistas em SST com vasta experiência no mercado.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Material Interativo</h3>
                    <p className="text-primary-100">Vídeos, animações e exercícios práticos para melhor absorção do conteúdo.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Avaliação Contínua</h3>
                    <p className="text-primary-100">Feedback imediato e acompanhamento do progresso em tempo real.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-success-500 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Certificação Legal</h3>
                    <p className="text-primary-100">Certificados digitais com validade legal e conformidade garantida.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div variants={itemVariants} className="relative">
              <div className="rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/8867428/pexels-photo-8867428.jpeg?auto=compress&cs=tinysrgb&h=750" 
                  alt="Biblioteca de cursos" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;