import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Vue.js', category: 'Frontend', level: 90 },
    { name: 'React.js', category: 'Frontend', level: 85 },
    { name: 'JavaScript', category: 'Language', level: 95 },
    { name: 'TypeScript', category: 'Language', level: 80 },
    { name: 'HTML5/CSS3', category: 'Design', level: 98 },
    { name: 'Vuetify/Tailwind', category: 'Design', level: 92 },
    { name: 'Node.js', category: 'Backend', level: 75 },
    { name: 'Git/GitHub', category: 'Tools', level: 88 },
    { name: 'Figma', category: 'Tools', level: 70 },
  ];

  return (
    <section id="skills" className="container px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-accent-color">Arsenal</span></h2>
        <p className="text-text-secondary max-w-xl mx-auto">
          The technologies and tools I use to bring ideas to life on the web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 glass hover:bg-white/[0.05] transition-colors group"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">{skill.name}</h3>
              <span className="text-xs font-bold text-accent-color px-2 py-1 bg-accent-color/10 rounded-full">
                {skill.category}
              </span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-accent-color group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-shadow"
              />
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs text-text-secondary">{skill.level}% Proficiency</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
