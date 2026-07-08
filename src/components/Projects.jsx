import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers, ArrowRight } from 'lucide-react';
import Button from './Button';

const Projects = () => {
  const projects = [
    {
      title: 'SalaryEasy Web Application',
      description: [
        'Vue.js & JavaScript: Used for building the interactive frontend interface',
        'Directus: Utilized for custom backend hooks and core API endpoints',
        'Knative & OpenFaaS: Handled backend architecture via serverless functions',
        'Hetzner: Served as the cloud infrastructure for reliable deployment'
      ],
      tech: ['Vue.js', 'JavaScript', 'Directus', 'Knative', 'OpenFaaS', 'Hetzner'],
      demo: 'https://app.salaryeasy.com',
      video: '/salaryeasy-demo.mp4', // Update this path when you upload your video
    },
    {
      title: 'C# Desktop Application',
      description: 'Designed and built a robust C# application for syncing biometric device data, enabling seamless real-time attendance logs for enterprise environments.',
      tech: ['C#', 'SQL Server', 'MQTT'],
      github: 'https://github.com/kervinprasanna',
      demo: '#',
    },
    {
      title: 'Cross-Platform Mobile App',
      description: 'Developed a mobile application to extend web functionalities to mobile users, focusing on an intuitive UI and smooth user experience.',
      tech: ['React Native', 'Node.js', 'APIs'],
      github: 'https://github.com/kervinprasanna',
      demo: '#',
    }
  ];

  return (
    <section id="projects" className="container px-6 py-24 mx-auto max-w-7xl">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2>Featured <span className="text-accent">Projects</span></h2>
      </div>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white p-8 md:p-10 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl group ${
              project.video ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start' : 'flex flex-col'
            }`}
          >
            {project.video && (
              <div className="w-full aspect-video rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-inner relative flex-shrink-0 group-hover:shadow-md transition-all duration-500">
                <video 
                  className="absolute inset-0 w-full h-full object-cover" 
                  controls 
                  muted 
                  loop 
                  playsInline
                >
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
            
            <div className="flex flex-col h-full text-left w-full">
              <h3 className="text-gray-900 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
              
              <div className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                {Array.isArray(project.description) ? (
                  <ul className="flex flex-col gap-4 mt-2">
                    {project.description.map((point, i) => {
                      const [framework, ...rest] = point.split(':');
                      const explanation = rest.join(':');
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                          <p>
                            <span className="font-bold text-gray-900">{framework}:</span>
                            {explanation}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p>{project.description}</p>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-bold tracking-wider text-blue-700 bg-blue-50/80 border border-blue-200 px-3.5 py-1.5 rounded-lg uppercase">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-100 mt-auto">
                {project.github && project.github !== '#' && (
                  <a href={project.github} className="text-gray-500 hover:text-gray-900 font-semibold flex items-center gap-2 transition-colors" target="_blank" rel="noreferrer">
                    <Github size={20} /> View Source
                  </a>
                )}
                {project.demo && project.demo !== '#' && (
                  <a href={project.demo} className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 transition-colors ml-auto" target="_blank" rel="noreferrer">
                    {project.demo.replace('https://', '').replace('http://', '')} <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
