import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, Banknote, FileWarning, Factory } from 'lucide-react';

const Problem: React.FC = () => {
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
      transition: {
        duration: 0.6,
      },
    },
  };

  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-secondary-50 relative overflow-hidden">
      {/* Parallax background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
          backgroundImage: "url('https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&h=1500')",
          backgroundSize: '150% auto',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          filter: 'grayscale(100%)',
          willChange: 'transform',
          height: '150%',
          top: '-25%'
        }}
      />

      {/* Parallax floating elements */}
      <motion.div
        className="absolute -top-20 left-10 w-96 h-96 bg-primary-500 rounded-full opacity-5"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      />
      
      <motion.div
        className="absolute -bottom-40 right-10 w-[40rem] h-[40rem] bg-accent-500 rounded-full opacity-5"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              Sua empresa está dentro das normas de segurança?
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              O não cumprimento das Normas Regulamentadoras não é apenas uma questão de conformidade – 
              é um risco para sua empresa e colaboradores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="flex flex-col bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-error-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Banknote className="h-6 w-6 text-error-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Multas pesadas</h3>
              <p className="text-secondary-600 flex-grow">
                Infrações às NRs podem resultar em multas que variam de R$ 3.000 a mais de R$ 40.000, 
                dependendo da gravidade e do porte da empresa.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-warning-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <FileWarning className="h-6 w-6 text-warning-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Processos trabalhistas</h3>
              <p className="text-secondary-600 flex-grow">
                A falta de capacitação adequada e certificada pode tornar sua empresa vulnerável 
                a processos judiciais e indenizações por acidentes de trabalho.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-error-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Factory className="h-6 w-6 text-error-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Interdição das operações</h3>
              <p className="text-secondary-600 flex-grow">
                Em casos graves, a fiscalização pode determinar a paralisação imediata das atividades, 
                gerando prejuízos operacionais e danos à reputação.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-12 w-12 bg-warning-500 bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="h-6 w-6 text-warning-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">Riscos à saúde e segurança</h3>
              <p className="text-secondary-600 flex-grow">
                Colaboradores sem treinamento adequado estão mais expostos a acidentes e doenças ocupacionais, 
                aumentando absenteísmo e reduzindo produtividade.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;