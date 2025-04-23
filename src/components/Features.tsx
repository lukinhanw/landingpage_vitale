import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  CheckCircle, 
  LayoutDashboard, 
  Clock, 
  FileCheck, 
  Users 
} from 'lucide-react';

const Features: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const features = [
    {
      id: 1,
      title: 'Acesso fácil e intuitivo',
      description: 'Interface amigável que facilita a navegação e o aprendizado, mesmo para quem não tem familiaridade com tecnologia.',
      icon: <LayoutDashboard className="h-8 w-8 text-primary-600" />,
    },
    {
      id: 2,
      title: 'Conteúdo sempre atualizado',
      description: 'Atualizações automáticas conforme as normas evoluem, garantindo que sua empresa esteja sempre em conformidade com a legislação vigente.',
      icon: <Clock className="h-8 w-8 text-primary-600" />,
    },
    {
      id: 3,
      title: 'Certificados digitais',
      description: 'Emissão automática de certificados digitais válidos perante a fiscalização do trabalho, com assinatura digital e validação online.',
      icon: <FileCheck className="h-8 w-8 text-primary-600" />,
    },
    {
      id: 4,
      title: 'Gestão completa da capacitação',
      description: 'Acompanhamento detalhado do progresso de cada colaborador, notificações automáticas de vencimento e relatórios personalizados.',
      icon: <Users className="h-8 w-8 text-primary-600" />,
    },
  ];

  return (
    <section className="py-24 bg-white" id="recursos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              A solução completa para capacitação em NRs
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Nossa plataforma foi desenvolvida especificamente para atender às necessidades de capacitação 
              em Normas Regulamentadoras, oferecendo:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="bg-secondary-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div className="ml-5">
                    <h3 className="text-xl font-bold text-secondary-800 mb-3">{feature.title}</h3>
                    <p className="text-secondary-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-secondary-900 mb-8">
              Por que escolher nossa plataforma
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Total conformidade com as NRs',
                'Economia de tempo e recursos',
                'Suporte técnico especializado',
                'Relatórios detalhados em tempo real',
                'Acesso em qualquer dispositivo',
                'Metodologia validada'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 bg-primary-50 rounded-lg"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="h-5 w-5 text-success-600 flex-shrink-0" />
                  <span className="ml-3 text-secondary-800 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;