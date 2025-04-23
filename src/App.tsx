import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Showcase />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;