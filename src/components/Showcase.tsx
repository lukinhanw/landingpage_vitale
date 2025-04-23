import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, LayoutDashboard, BookOpen, FileCheck, Building, HelpCircle } from 'lucide-react';

const Showcase: React.FC = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [faqRef, faqInView] = useInView({
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

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const customizationVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featureItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const faqItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const faqs = [
    {
      question: "Como funciona o acesso à plataforma?",
      answer: "O acesso é feito através de login e senha individuais para cada colaborador. A empresa recebe um painel administrativo para gerenciar todos os usuários."
    },
    {
      question: "Os certificados emitidos têm validade legal?",
      answer: "Sim, todos os certificados emitidos pela nossa plataforma possuem validade legal e atendem às exigências das Normas Regulamentadoras."
    },
    {
      question: "É possível acessar a plataforma pelo celular?",
      answer: "Sim, nossa plataforma é responsiva e pode ser acessada de qualquer dispositivo: computadores, tablets e smartphones."
    },
    {
      question: "Como é feito o suporte técnico?",
      answer: "Oferecemos suporte técnico por chat, e-mail e telefone em horário comercial. Clientes com planos avançados contam com suporte prioritário."
    }
  ];

  return (
    <section className="py-24 bg-primary-900 relative overflow-hidden" id="benefícios">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Platform Features Section */}
        <motion.div
          ref={featuresRef}
          variants={containerVariants}
          initial="hidden"
          animate={featuresInView ? "visible" : "hidden"}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div variants={containerVariants}>
              <motion.div variants={titleVariants}>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Uma plataforma que facilita a gestão de treinamentos
                </h2>
                <p className="text-xl text-primary-100 mb-8">
                  Nossa plataforma foi desenvolvida para tornar a gestão de treinamentos em NRs mais 
                  simples, eficiente e completa para sua empresa.
                </p>
              </motion.div>

              {/* Customization Highlight */}
              <motion.div 
                variants={customizationVariants}
                className="bg-primary-800/50 p-6 rounded-lg mb-12 border border-primary-700"
              >
                <div className="flex items-start">
                  <Building className="h-8 w-8 text-accent-500 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Plataforma Personalizada</h3>
                    <p className="text-primary-100">
                      Sua empresa terá uma plataforma exclusiva e personalizada, com sua identidade visual, 
                      logomarca e domínio próprio, proporcionando uma experiência única para seus colaboradores.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.ul className="space-y-4 text-primary-100">
                <motion.li variants={featureItemVariants} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <LayoutDashboard className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Dashboard Interativo</h3>
                    <p className="text-primary-100">Acompanhe o progresso de todos os colaboradores em tempo real.</p>
                  </div>
                </motion.li>
                <motion.li variants={featureItemVariants} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Biblioteca de Cursos</h3>
                    <p className="text-primary-100">Acesso a todos os treinamentos exigidos pelas NRs, organizados de forma modular.</p>
                  </div>
                </motion.li>
                <motion.li variants={featureItemVariants} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">Gestão de Certificados</h3>
                    <p className="text-primary-100">Emissão e controle automático de certificados com validade legal.</p>
                  </div>
                </motion.li>
              </motion.ul>
            </motion.div>
            <motion.div variants={imageVariants} className="relative">
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

        {/* FAQ Section */}
        <motion.div
          ref={faqRef}
          variants={containerVariants}
          initial="hidden"
          animate={faqInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-primary-100">
              Tire suas dúvidas sobre nossa plataforma de treinamentos em NRs
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={faqItemVariants}
                className="bg-primary-800/50 backdrop-blur-sm rounded-lg p-6 border border-primary-700"
              >
                <div className="flex items-start">
                  <HelpCircle className="h-6 w-6 text-accent-500 flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-primary-100">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;