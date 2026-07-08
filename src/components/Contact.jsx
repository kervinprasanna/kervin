import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container px-6">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">Let's Build Something <span className="text-accent">Amazing</span> Together</h2>
        <div className="w-20 h-1 bg-accent rounded-full mb-6"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h3 className="text-3xl font-bold text-heading mb-6">Get in Touch</h3>
          <p className="text-body text-lg font-medium mb-10 max-w-md leading-relaxed">
            I'm always open to discussing product design work, new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="space-y-6 mb-10">
            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center bg-bg-primary rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-heading uppercase tracking-wider mb-1">Email Me</p>
                <a href="mailto:kervinprasanna08@gmail.com" className="text-body text-lg font-medium hover:text-accent transition-colors">
                  kervinprasanna08@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center bg-bg-primary rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-heading uppercase tracking-wider mb-1">Call Me</p>
                <a href="tel:+919788094627" className="text-body text-lg font-medium hover:text-accent transition-colors">
                  +91 97880 94627
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="w-14 h-14 flex items-center justify-center bg-bg-primary rounded-xl text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-heading uppercase tracking-wider mb-1">Location</p>
                <p className="text-body text-lg font-medium">
                  Srivaikundam, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/kervinprasanna" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-card border border-border-soft rounded-full text-heading hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/kervinprasanna" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-card border border-border-soft rounded-full text-heading hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-card border border-border-soft rounded-full text-heading hover:border-accent hover:text-accent hover:shadow-md transition-all duration-300">
              <Twitter size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="card w-full h-full">
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-heading">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-bg-primary border border-transparent rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all text-body font-medium"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-heading">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="john@example.com" 
                    className="w-full px-5 py-4 bg-bg-primary border border-transparent rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all text-body font-medium"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-bold text-heading">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  placeholder="How can I help you?" 
                  className="w-full px-5 py-4 bg-bg-primary border border-transparent rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all text-body font-medium"
                />
              </div>

              <div className="flex flex-col gap-2 mb-2">
                <label htmlFor="message" className="text-sm font-bold text-heading">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  placeholder="Tell me about your project..." 
                  className="w-full px-5 py-4 bg-bg-primary border border-transparent rounded-xl focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent/10 transition-all text-body font-medium resize-none"
                ></textarea>
              </div>

              <button type="button" className="btn-primary w-full py-5 text-lg justify-center group">
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
