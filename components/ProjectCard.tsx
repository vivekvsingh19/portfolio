import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Store, Monitor, ArrowUpRight, Terminal } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const isPlayStore = project.demoUrl?.includes('play.google.com');

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`group relative w-full h-full bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors duration-500 ${featured ? 'md:grid md:grid-cols-2' : 'flex flex-col'}`}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-10"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.1),
              transparent 80%
            )
          `,
        }}
      />

      {/* HUD Corner Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-500 rounded-tl-md z-20" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-500 rounded-tr-md z-20" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-500 rounded-bl-md z-20" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-500 rounded-br-md z-20" />

      {/* Image Section */}
      <div className={`relative overflow-hidden bg-black ${featured ? 'h-64 md:h-full border-b md:border-b-0 md:border-r border-white/10' : 'h-56 border-b border-white/10'}`}>
        <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10" />
        
        {/* Scanline Animation */}
        <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-full h-[2px] bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-[scan_2s_linear_infinite]" />
        </div>

        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-md">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">System Online</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-6 flex flex-col z-20">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className={`font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2 ${featured ? 'text-3xl' : 'text-xl'}`}>
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-[-4px] group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-500" />
                </h3>
                <div className="text-xs font-mono text-slate-500 mt-1 flex items-center gap-2">
                    <Terminal size={12} />
                    <span>PROJECT_ID: {project.id.toUpperCase().substring(0, 8)}</span>
                </div>
            </div>
            {featured && (
                 <div className="hidden md:block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold rounded-full uppercase tracking-wider">
                    Featured Build
                 </div>
            )}
        </div>

        <p className={`text-slate-400 leading-relaxed mb-6 ${featured ? 'text-base line-clamp-none' : 'text-sm line-clamp-3'}`}>
          {project.description}
        </p>

        <div className="mt-auto space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-mono bg-slate-800 border border-white/5 text-cyan-200/80 rounded hover:bg-cyan-900/20 hover:border-cyan-500/30 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-bold transition-all group/btn relative overflow-hidden ${
                  isPlayStore
                    ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                    : 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20'
                }`}
              >
                {isPlayStore ? <Store size={16} /> : <Monitor size={16} />}
                <span className="relative z-10">{isPlayStore ? 'Play Store' : 'Live Demo'}</span>
                <div className={`absolute inset-0 ${isPlayStore ? 'bg-green-500/10' : 'bg-cyan-500/10'} translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300`} />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="px-4 py-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};