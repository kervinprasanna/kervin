import React from 'react';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white border-t border-border-soft py-12 relative">
      <div className="container px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          
          {/* Logo / Copyright */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-heading mb-2">
              Kervin<span className="text-accent">.</span>
            </h2>
            <p className="text-body font-medium text-sm">
              &copy; {new Date().getFullYear()} Kervin Prasanna. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            {['Home', 'About', 'Projects', 'Contact'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-body font-semibold text-sm hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/kervinprasanna" target="_blank" rel="noreferrer" className="text-body hover:text-accent transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/in/kervinprasanna" target="_blank" rel="noreferrer" className="text-body hover:text-accent transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-body hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center bg-bg-primary rounded-xl text-heading hover:bg-accent hover:text-white transition-all shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
