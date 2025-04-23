import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden font-sans">
      <Header onDemoClick={() => setIsModalOpen(true)} />
      <main>
        <Hero onDemoClick={() => setIsModalOpen(true)} />
        <Problem />
        <Features />
        <Showcase />
        <Testimonials />
        <CallToAction onDemoClick={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;