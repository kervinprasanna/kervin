import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Nexus',
      description: 'A full-featured e-commerce platform with real-time inventory, secure checkout, and a custom dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'TaskFlow Pro',
      description: 'A collaborative task management tool with kanban boards, time tracking, and team analytics.',
      tech: ['Vue.js', 'Firebase', 'Vuetify', 'Chart.js'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Crypto Pulse',
      description: 'A real-time cryptocurrency tracker with live price feeds, market sentiment analysis, and watchlists.',
      tech: ['React', 'TypeScript', 'Tailwind', 'CoinGecko API'],
      github: '#',
      demo: '#',
      image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    },
  ];

  return (
    <section id="projects" className="container px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-accent-color">Projects</span></h2>
          <p className="text-text-secondary max-w-xl">
            A selection of my recent work where I solve complex problems with elegant code.
          </p>
        </div>
        <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
          View All Projects <Layers size={18} />
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass flex flex-col overflow-hidden"
          >
            <div className="relative overflow-hidden aspect-video">
              <img 
                src={project.image} 
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.github} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-accent-color transition-colors">
                  <Github size={20} />
                </a>
                <a href={project.demo} className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-accent-color transition-colors">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-accent-color border border-accent-color/30 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
