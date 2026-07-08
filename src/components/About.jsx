import React from 'react';
import { motion } from 'framer-motion';

const About = () => {


  return (
    <section id="about" className="container px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">About <span className="text-accent">Me</span></h2>
        <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        
        {/* Left Side: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[500px]"
        >
          {/* Abstract backdrop */}
          <div className="absolute top-[-5%] left-[-5%] w-full h-full bg-accent opacity-5 rounded-[24px] z-0" />
          
          <div className="relative z-10 w-full h-full rounded-[24px] overflow-hidden border border-border-soft shadow-lg">
            <div className="w-full h-full bg-bg-primary flex flex-col items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-body/20">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span className="mt-4 text-body/40 font-medium tracking-widest uppercase text-sm">Profile Photo</span>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-heading mb-6">
            Frontend Developer
          </h3>
          <div className="space-y-6 text-body text-lg leading-relaxed">
            <p>
              I am a passionate Frontend Developer dedicated to creating clean, intuitive, and responsive user interfaces. My core focus is on bringing ideas to life on the web and mobile platforms.
            </p>
            <p>
              My key work includes developing the complete frontend interface for the <strong>SalaryEasy</strong> web platform (app.salaryeasy.com). In addition to web development, I have successfully designed and built a C# desktop application and a mobile application, demonstrating my ability to adapt and deliver across multiple environments.
            </p>
            <p className="font-medium text-heading">
              <strong>Career Objective:</strong> To continuously learn and adapt in the fast-paced tech industry, aiming to build products that provide exceptional, frictionless user experiences.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
