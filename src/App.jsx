import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-bg-primary text-body min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />

        <Contact />
      </main>
    </div>
  );
}

export default App;
