import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/framer/Hero';
import About from '../components/framer/About';
import ToolsAndFrameworks from '../components/framer/ToolsAndFrameworks';
import Portfolio from '../components/framer/Portfolio';
import WhoAmI from '../components/framer/WhoAmI';
import Services from '../components/framer/Services';
import SectionImage from '../components/framer/SectionImage';
import MyVision from '../components/framer/MyVision';
import Experience from '../components/framer/Experience';
import Section_11 from '../components/framer/Section_11';
import SectionImage_1 from '../components/framer/SectionImage_1';
import StackTools from '../components/framer/StackTools';
import LetsBuildSomething from '../components/LetsBuildSomething';
import Footer from '../components/Footer';
import BgPattern from '../components/framer/BgPattern';
import BgLines from '../components/framer/BgLines';
import Section_19 from '../components/framer/Section_19';

export default function HomePage() {
  return (
    <main style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <div className="framer-vGE5i framer-0lBIK framer-16PjH framer-bnUOG framer-qZzX4 framer-vXdKI framer-nlLrs framer-JGl3r framer-93zad framer-7rggy9" style={{ minHeight: '100vh', width: 'auto' }}>
        <Nav />
        <Hero />
        <About />
        <ToolsAndFrameworks />
        <Portfolio />
        <WhoAmI />
        <Services />
        <SectionImage />
        <MyVision />
        <Experience />
        <Section_11 />
        <SectionImage_1 />
        <StackTools />
        <LetsBuildSomething />
        <Footer />
        <BgPattern />
        <BgLines />
        <Section_19 />
      </div>
    </main>
  );
}
