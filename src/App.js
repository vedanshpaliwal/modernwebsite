import React from 'react'
import About from './components/About/About';
import Download from './components/Download/Download';
import EndSection from './components/EndSection/EndSection';
import Feature from './components/Features/Feature';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <About />
      <Feature />
      <Download />
      <Testimonial />
      <EndSection />
    </>
  );
}

export default App;
