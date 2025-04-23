import React from 'react';
import { Shield, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="ml-2 font-display font-bold text-xl text-white">SafeTreinamentos</span>
            </div>
            <p className="text-secondary-300 mb-6">
              Transforme a capacitação em segurança do trabalho da sua empresa com uma plataforma 
              interativa, intuitiva e 100% conforme as normas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Início', href: '#início' },
                { name: 'Recursos', href: '#recursos' },
                { name: 'Benefícios', href: '#benefícios' },
                { name: 'Depoimentos', href: '#depoimentos' },
                { name: 'Contato', href: '#contato' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Normas Disponíveis</h3>
            <ul className="space-y-3">
              {[
                'NR-01 - Disposições Gerais',
                'NR-05 - CIPA',
                'NR-06 - EPI',
                'NR-10 - Segurança em Eletricidade',
                'NR-12 - Máquinas e Equipamentos',
                'NR-35 - Trabalho em Altura',
              ].map((nr, index) => (
                <li key={index} className="text-secondary-300">{nr}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-secondary-300">(11) 5555-5555</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-secondary-300">contato@safetreinamentos.com.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-1" />
                <span className="ml-3 text-secondary-300">Av. Paulista, 1000 - São Paulo/SP</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} SafeTreinamentos. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-secondary-400 hover:text-secondary-300 text-sm">Política de Privacidade</a>
              <a href="#" className="text-secondary-400 hover:text-secondary-300 text-sm">Termos de Uso</a>
              <a href="#" className="text-secondary-400 hover:text-secondary-300 text-sm">FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;