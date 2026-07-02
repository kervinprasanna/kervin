import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="container px-6">
      <div className="glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-accent-color opacity-[0.05] blur-[100px] rounded-full" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's build something <span className="gradient-text">exceptional</span> together.
            </h2>
            <p className="text-text-secondary text-lg mb-10 max-w-md">
              Whether you have a specific project in mind or just want to chat about 
              the latest in frontend dev, I'm always open to new connections.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@kervin.dev" className="flex items-center gap-4 group">
                <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent-color transition-colors">
                  <Mail className="group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-bold uppercase tracking-widest">Email Me</p>
                  <p className="text-lg font-semibold">hello@kervin.dev</p>
                </div>
              </a>
              <div className="flex gap-4">
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-accent-color transition-colors">
                  <Linkedin />
                </a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-accent-color transition-colors">
                  <Github />
                </a>
                <a href="#" className="p-4 bg-white/5 rounded-2xl hover:bg-accent-color transition-colors">
                  <MessageSquare />
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-accent-color transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-accent-color transition-colors"
              />
            </div>
            <input 
              type="text" 
              placeholder="Subject" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-accent-color transition-colors"
            />
            <textarea 
              placeholder="Your Message" 
              rows="5"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-accent-color transition-colors resize-none"
            ></textarea>
            <button className="btn-primary w-full justify-center py-4 text-lg">
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
