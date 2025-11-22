import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Rocket, Star, Smartphone, Trophy } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
                <Trophy size={14} className="text-purple-400" />
                <span className="text-xs font-mono text-purple-200 uppercase tracking-wider">Milestones</span>
            </div>
            <h2 className="text-4xl font-bold text-white">
                Launch <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Timeline</span>
            </h2>
        </motion.div>

        <div className="relative">
            {/* Center line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-900 to-slate-900" />

            <div className="space-y-16">
                {EXPERIENCE.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`relative flex flex-col md:flex-row gap-8 ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                        {/* Timeline Node */}
                        <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-slate-900 border-2 border-cyan-400 rounded-full z-10 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.5)] mt-1.5">
                            <Rocket size={14} className="text-cyan-400" />
                        </div>

                        {/* Content Card */}
                        <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 pl-12' : 'md:pr-12 pl-12'} text-left`}>
                             <div className="group relative p-6 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:translate-y-[-2px]">
                                
                                {/* Floating Date Badge */}
                                <div className={`absolute -top-3 ${index % 2 === 0 ? 'right-4' : 'right-4 md:left-4 md:right-auto'} px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full shadow-[0_0_10px_rgba(6,182,212,0.6)]`}>
                                    {item.period}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                    {item.role}
                                </h3>
                                
                                <div className="flex items-center gap-2 mb-4 text-sm font-mono">
                                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-slate-300 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                                        {item.company}
                                    </span>
                                </div>
                                
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                             </div>
                        </div>
                        
                        {/* Empty half for layout balance on desktop */}
                        <div className="hidden md:block md:w-1/2" />
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};