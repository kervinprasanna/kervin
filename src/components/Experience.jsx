import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'SalaryEasy',
      role: 'Frontend Developer',
      period: '01/2024 - Present',
      responsibilities: [
        'Developed the complete frontend interface for app.salaryeasy.com using modern web technologies.',
        'Designed and implemented a C# desktop application for biometric data synchronization.',
        'Built a mobile application to provide employees with on-the-go access to HR services.'
      ],
      achievements: [
        'Successfully delivered a seamless user experience for the core SaaS platform.',
        'Ensured reliable data synchronization across different application environments.'
      ]
    }
  ];

  return (
    <section id="experience" className="container px-6">
      <div className="flex flex-col items-center mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">Professional <span className="text-accent">Experience</span></h2>
        <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-8 md:left-12 top-4 bottom-4 w-px bg-border-soft" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex flex-col md:flex-row gap-8 items-start pl-24 md:pl-32"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[30px] md:left-[46px] top-6 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm z-10" />

            <div className="card flex-1 w-full relative">
              {/* Arrow pointer for card (optional, adds to aesthetic) */}
              <div className="absolute top-6 -left-3 w-6 h-6 bg-white border-l border-b border-border-soft transform rotate-45 rounded-sm hidden md:block" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-heading mb-1">{exp.role}</h3>
                  <p className="text-primary font-semibold text-lg">{exp.company}</p>
                </div>
                <span className="text-sm font-bold text-accent bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 whitespace-nowrap self-start">
                  {exp.period}
                </span>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-3">Responsibilities</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="text-body flex items-start gap-3">
                      <span className="text-accent mt-1.5 flex-shrink-0">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-heading uppercase tracking-wider mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="text-body flex items-start gap-3 font-medium">
                      <span className="text-secondary-accent mt-1.5 flex-shrink-0">✦</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
