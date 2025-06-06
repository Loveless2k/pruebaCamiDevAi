import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Experience />
      <Menu />
      <Testimonials />
      <Gallery />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;