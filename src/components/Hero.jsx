import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ArrowRight, User } from 'lucide-react';
import Button from './Button';
import IconButton from './IconButton';


const Hero = () => {
  return (
    <section id="home" className="flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-16">
      
      {/* Background Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent opacity-5 blur-[120px] rounded-full z-0 pointer-events-none" />
      
      <div className="container px-6 flex flex-col items-center justify-center gap-10 text-center relative z-10 min-h-[70vh]">
        
        {/* Profile Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl bg-bg-primary flex items-center justify-center overflow-hidden mx-auto">
            {/* If you add an image later, put it here instead of the User icon */}
            <User size={64} className="text-body/30" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col gap-2"
        >
          <h1>
            A.Granahppu Kervin Prasanna
          </h1>
          <h3>
            Software Developer
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-body text-lg md:text-xl font-medium max-w-2xl leading-relaxed"
        >
          I build exceptional digital experiences. Specializing in crafting clean, responsive, and user-centric web and mobile interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center"
        >
          <Button href="#projects" variant="primary">
            View Projects <ArrowRight size={20} />
          </Button>
          <Button href="#" variant="outline">
            Download Resume <Download size={20} />
          </Button>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-6 items-center justify-center mt-2"
        >
          <IconButton href="https://github.com/kervinprasanna" target="_blank" rel="noreferrer">
            <Github size={22} />
          </IconButton>
          <IconButton href="https://linkedin.com/in/kervinprasanna" target="_blank" rel="noreferrer">
            <Linkedin size={22} />
          </IconButton>
          <IconButton href="mailto:kervinprasanna08@gmail.com">
            <Mail size={22} />
          </IconButton>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
