import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="container px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Designing the <span className="text-accent-color">Web</span> of Tomorrow
          </h2>
          <div className="space-y-4 text-text-secondary text-lg">
            <p>
              I am a results-driven Frontend Developer with a keen eye for aesthetics and 
              a passion for building seamless user experiences. With a background in 
              Modern Web Technologies, I bridge the gap between complex logic and 
              intuitive design.
            </p>
            <p>
              My journey began with a curiosity for how the web works, which quickly 
              evolved into a career of building interactive applications. I specialize 
              in React, Vue, and modern CSS frameworks, always aiming for 
              performance and accessibility.
            </p>
            <div className="pt-6 grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-white font-semibold">1-2 Years</h4>
                <p className="text-sm">Experience</p>
              </div>
              <div>
                <h4 className="text-white font-semibold">15+ Projects</h4>
                <p className="text-sm">Completed</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square glass rounded-3xl overflow-hidden flex items-center justify-center border-accent-color/30 border-2">
            {/* You can replace this with an actual image later */}
            <div className="text-accent-color opacity-20 text-9xl font-bold select-none">
              &lt;/&gt;
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-color/20 blur-2xl rounded-full" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-color/10 blur-xl rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
