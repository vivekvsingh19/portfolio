
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ProjectCard } from '../components/ProjectCard';
import { Cpu, Activity } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 relative bg-slate-950 overflow-hidden">
       {/* Hexagon & Circuit Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-900/20 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-900/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm mb-2">
                    <Activity size={16} className="animate-pulse" />
                    <span>SYSTEM.PROJECTS.INIT()</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                    Deployed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Intelligence</span>
                </h2>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="hidden md:flex items-center gap-4 text-slate-500 font-mono text-xs"
            >
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>ALL SYSTEMS OPERATIONAL</span>
                </div>
                <div className="w-px h-4 bg-slate-800" />
                <span>V 2.5.0</span>
            </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PROJECTS.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                >
                    <ProjectCard project={project} featured={index === 0} />
                </motion.div>
            ))}
            
            {/* Call to Action / GitHub Card */}
            <motion.a
                href="https://github.com/vivekvsingh19"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative flex flex-col items-center justify-center p-8 rounded-xl border border-dashed border-white/10 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 transition-all cursor-pointer min-h-[250px] md:min-h-[300px]"
            >
                <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-cyan-500">
                    <Cpu size={32} className="text-slate-400 group-hover:text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Explore More</h3>
                <p className="text-slate-400 text-sm text-center max-w-[200px]">
                    Check out more projects and open source contributions on GitHub.
                </p>
            </motion.a>
        </div>
      </div>
    </section>
  );
};
