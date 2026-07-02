import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 mt-20">
      <div className="container px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold gradient-text">
          &lt;Kervin /&gt;
        </div>
        
        <div className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Kervin. Built with React & Framer Motion.
        </div>

        <div className="flex gap-8 text-sm font-medium text-text-secondary">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
