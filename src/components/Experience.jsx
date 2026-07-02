import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      role: 'Junior Frontend Developer',
      company: 'TechVision Solutions',
      period: '2023 - Present',
      description: 'Developing high-performance user interfaces using React and Vue. Collaborating with UI/UX designers to implement pixel-perfect designs.',
    },
    {
      role: 'Web Development Intern',
      company: 'Creative Edge Agency',
      period: '2022 - 2023',
      description: 'Assisted in building responsive landing pages and integrating third-party APIs. Learned best practices for clean and scalable CSS.',
    },
    {
      role: 'Self-Taught Developer',
      company: 'Learning Journey',
      period: '2021 - 2022',
      description: 'Mastered the fundamentals of HTML, CSS, and JavaScript. Built several personal projects to understand full-stack development.',
    },
  ];

  return (
    <section id="experience" className="container px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-accent-color">Journey</span></h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          A timeline of my growth and contributions in the world of web development.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8 relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-4px] md:left-1/2 top-0 md:top-auto w-2 h-2 bg-accent-color rounded-full -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />

            <div className="flex-1 glass p-6 hover:bg-white/[0.05] transition-colors">
              <span className="text-xs font-bold text-accent-color mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-white/60 text-sm mb-4">{exp.company}</p>
              <p className="text-text-secondary text-sm">{exp.description}</p>
            </div>
            <div className="flex-1 hidden md:block" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
