
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ABOUT_FEATURES, CURRENT_FOCUS } from '../constants';
import { Code, Database, Brain, Terminal, Zap, Smartphone } from 'lucide-react';

interface SkillBadgeProps {
  name: string;
  level: number;
  category: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level, category }) => {
    // Simple visual mapping for category icons
    const getIcon = () => {
        if (category === 'Frontend') return <Code size={16} />;
        if (category === 'Backend') return <Database size={16} />;
        if (category === 'AI/ML') return <Brain size={16} />;
        return <Terminal size={16} />;
    };

    return (
        <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="relative group cursor-default"
        >
            {/* Animated Glow Background */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-500 group-hover:duration-200 group-hover:blur-md" />
            
            {/* Card Content */}
            <div className="relative flex items-center justify-between gap-3 bg-slate-900 border border-white/10 px-4 py-3 rounded-lg shadow-lg group-hover:border-cyan-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3">
                    <div className="text-slate-400 group-hover:text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ease-out">
                        {getIcon()}
                    </div>
                    <span className="font-medium text-slate-200 group-hover:text-white transition-colors text-sm md:text-base">{name}</span>
                </div>
                
                {/* Level Bar */}
                <div className="h-1.5 w-12 md:w-16 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:brightness-150 transition-all duration-300" 
                    />
                </div>
            </div>
        </motion.div>
    )
}

export const About: React.FC = () => {
    // Map icon string names from constants to actual components
    const getFeatureIcon = (iconName: string) => {
        switch(iconName) {
            case 'Zap': return <Zap size={20} />;
            case 'Brain': return <Brain size={20} />;
            case 'Smartphone': return <Smartphone size={20} />;
            default: return <Code size={20} />;
        }
    };

    // Map color strings to classes (simplified for this example)
    const getColorClass = (colorName: string) => {
        switch(colorName) {
            case 'cyan': return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20 group-hover:bg-cyan-500/20';
            case 'purple': return 'text-purple-400 bg-purple-500/10 border-purple-500/20 group-hover:bg-purple-500/20';
            case 'pink': return 'text-pink-400 bg-pink-500/10 border-pink-500/20 group-hover:bg-pink-500/20';
            default: return 'text-slate-400 bg-slate-500/10 border-slate-500/20';
        }
    };

  return (
    <section id="about" className="py-20 md:py-24 relative bg-slate-950">
      {/* Background decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
            {/* Bio Text - Replaced with Feature Blocks */}
            <div className="md:col-span-5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">The <span className="text-cyan-400">Stack</span> & Strategy</h2>
                    
                    <div className="space-y-6">
                        {ABOUT_FEATURES.map((feature, idx) => (
                             <div key={idx} className="flex gap-4 group">
                                <div className={`mt-1 w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors ${getColorClass(feature.color)}`}>
                                    {getFeatureIcon(feature.icon)}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">{feature.title}</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-slate-900/80 border-l-2 border-cyan-500 rounded-r-lg backdrop-blur-sm shadow-lg animate-glitch">
                        <p className="text-slate-300 font-mono text-xs break-all">
                            <span className="text-purple-400">{CURRENT_FOCUS.key}</span> = <span className="text-green-400">"{CURRENT_FOCUS.value}"</span>;
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Skills Grid */}
            <div className="md:col-span-7">
                <h3 className="text-xl font-bold text-white mb-6 md:mb-8 flex items-center gap-2">
                    <Terminal className="text-purple-500" /> Technical Arsenal
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SKILLS.map((skill, index) => (
                        <SkillBadge key={index} {...skill} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
