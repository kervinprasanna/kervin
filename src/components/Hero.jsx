import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Layout, Smartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent-color opacity-[0.05] blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-accent-color opacity-[0.05] blur-[100px] rounded-full" />

      <div className="container px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 py-2 glass rounded-full flex items-center gap-2 text-sm font-medium text-accent-color"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-color opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-color"></span>
          </span>
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight"
        >
          Hi, I'm <span className="gradient-text">Kervin</span> <br />
          Crafting <span className="text-accent-color">Digital Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mb-10"
        >
          A passionate Frontend Developer specializing in building high-performance, 
          visually stunning, and user-centric web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={20} />
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk
          </a>
        </motion.div>

        {/* Stats / Skills Quick View */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center gap-3 p-6 glass hover:border-accent-color transition-colors group">
            <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
              <Code className="text-accent-color" />
            </div>
            <h3 className="font-semibold text-lg">Clean Code</h3>
            <p className="text-text-secondary text-sm">Writing maintainable and scalable frontend architectures.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 glass hover:border-accent-color transition-colors group">
            <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
              <Layout className="text-accent-color" />
            </div>
            <h3 className="font-semibold text-lg">Modern UI</h3>
            <p className="text-text-secondary text-sm">Specialized in responsive and interactive designs.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-6 glass hover:border-accent-color transition-colors group">
            <div className="p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
              <Smartphone className="text-accent-color" />
            </div>
            <h3 className="font-semibold text-lg">Responsive</h3>
            <p className="text-text-secondary text-sm">Perfectly optimized for every screen size.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
