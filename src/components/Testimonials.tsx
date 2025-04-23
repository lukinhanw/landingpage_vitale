import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Carlos Mendes',
      role: 'Gerente de Segurança',
      company: 'Construtora ABC',
      quote: 'A implementação da plataforma reduziu nossos custos com treinamentos em 40% e melhorou significativamente a gestão dos certificados. Hoje temos 100% de conformidade nas NRs.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&h=150',
    },
    {
      id: 2,
      name: 'Ana Luiza',
      role: 'Coordenadora de RH',
      company: 'Indústria XYZ',
      quote: 'Antes demorávamos semanas para organizar treinamentos presenciais. Agora, com a plataforma, nossos colaboradores se capacitam no próprio local de trabalho, com economia de tempo e recursos.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=150',
    },
    {
      id: 3,
      name: 'Roberto Almeida',
      role: 'Diretor de Operações',
      company: 'Grupo Logística',
      quote: 'A fiscalização elogiou nosso sistema de gestão de treinamentos. Os relatórios e certificados digitais nos deram tranquilidade e eliminaram as não conformidades em auditorias.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&h=150',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      if (inView) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [inView, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

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
    <section className="py-24 bg-secondary-50 relative overflow-hidden" id="depoimentos">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="h-full w-full"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&h=1000')",
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            filter: 'grayscale(100%)'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-900 mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Empresas de diversos setores já transformaram sua gestão de capacitação em NRs com nossa plataforma.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="bg-white rounded-xl shadow-xl p-6 md:p-10 max-w-4xl mx-auto"
              variants={itemVariants}
            >
              <div className="text-accent-500 mb-6">
                <Quote size={48} />
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 flex-shrink-0 mb-6 md:mb-0">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-primary-100"
                  />
                </div>
                
                <div className="md:w-3/4 md:pl-8">
                  <p className="text-xl text-secondary-700 italic mb-6">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div>
                    <p className="font-bold text-lg text-secondary-900">{testimonials[currentIndex].name}</p>
                    <p className="text-secondary-600">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex justify-center mt-8 space-x-4"
              variants={itemVariants}
            >
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors duration-200"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-6 w-6 text-primary-600" />
              </button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-primary-600 w-6' : 'bg-primary-300'
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={nextSlide}
                className="p-2 rounded-full bg-white shadow-md hover:bg-primary-50 transition-colors duration-200"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-6 w-6 text-primary-600" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;