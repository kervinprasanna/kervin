import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: 'March 2024',
      link: '#',
    },
    {
      id: 2,
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Coursera (Meta)',
      date: 'December 2023',
      link: '#',
    },
    {
      id: 3,
      title: 'Google Cloud Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: 'August 2023',
      link: '#',
    }
  ];

  return (
    <section id="certifications" className="container px-6">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-heading mb-6">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certs.map((cert) => (
          <div 
            key={cert.id} 
            className="card flex flex-col h-full"
          >
            <div className="mb-6 flex items-center justify-center w-14 h-14 bg-blue-50 text-accent rounded-xl border border-blue-100">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-heading mb-2 leading-tight">
              {cert.title}
            </h3>
            <p className="text-body font-semibold mb-1">{cert.issuer}</p>
            <p className="text-body text-sm mb-8 opacity-80 font-medium">{cert.date}</p>
            
            <div className="mt-auto pt-6 border-t border-border-soft">
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors group"
              >
                View Credential <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
