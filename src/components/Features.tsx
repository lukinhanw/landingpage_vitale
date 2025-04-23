import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  BookOpen, 
  Shield, 
  LineChart,
  FileCheck,
  Headphones,
  MousePointer
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
      title: 'Conteúdo Atualizado',
      description: 'Material didático constantemente revisado conforme as atualizações das normas regulamentadoras.',
      icon: <BookOpen className="h-8 w-8 text-accent-500" />,
    },
    {
      id: 2,
      title: 'Certificação Digital',
      description: 'Emissão automática de certificados com validade legal após a conclusão dos treinamentos.',
      icon: <Shield className="h-8 w-8 text-accent-500" />,
    },
    {
      id: 3,
      title: 'Relatórios Detalhados',
      description: 'Acompanhamento em tempo real do desempenho e progresso de cada colaborador.',
      icon: <LineChart className="h-8 w-8 text-accent-500" />,
    },
    {
      id: 4,
      title: 'Conformidade Total',
      description: 'Garantia de que todos os treinamentos estão de acordo com as exigências legais.',
      icon: <FileCheck className="h-8 w-8 text-accent-500" />,
    },
    {
      id: 5,
      title: 'Suporte Especializado',
      description: 'Equipe de especialistas em segurança do trabalho disponível para auxiliar sua empresa.',
      icon: <Headphones className="h-8 w-8 text-accent-500" />,
    },
    {
      id: 6,
      title: 'Interface Intuitiva',
      description: 'Plataforma fácil de usar que aumenta o engajamento e facilita o aprendizado.',
      icon: <MousePointer className="h-8 w-8 text-accent-500" />,
    },
  ];

  return (
    <section className="py-24 bg-primary-900" id="recursos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
              Por que nossa plataforma é a melhor
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Desenvolvida para atender todas as necessidades de treinamento em Normas 
              Regulamentadoras, nossa plataforma oferece recursos exclusivos para garantir a 
              conformidade da sua empresa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="bg-primary-800/50 backdrop-blur-sm p-8 rounded-lg transition-all duration-300 hover:bg-primary-700/50 hover:transform hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 transform transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-primary-100">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;