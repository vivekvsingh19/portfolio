
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Download, MapPin, Clock, Code2, Cpu, Globe, Zap, Loader2 } from 'lucide-react';
import { HeroScene } from '../components/3d/HeroScene';
import { HERO_CONTENT, PROFILE, SKILLS } from '../constants';

export const Hero: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadText, setDownloadText] = useState('resume.pdf');

  // --- Resume Button Logic ---
  const handleDownloadResume = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isDownloading) return;
    
    setIsDownloading(true);
    setDownloadText('generating...');
    
    setTimeout(() => {
        setDownloadText('downloading...');
        setTimeout(() => {
             const link = document.createElement('a');
            link.href = '#'; 
            link.setAttribute('download', 'Vivek_Singh_Resume.pdf');
            document.body.appendChild(link);
            // alert("Resume download simulation started."); 
            document.body.removeChild(link);
            
            setDownloadText('completed!');
            setTimeout(() => {
                setIsDownloading(false);
                setDownloadText('resume.pdf');
            }, 1500);
        }, 1000);
    }, 800);
  };

  // --- Typewriter Effect Logic ---
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  
  useEffect(() => {
    const line1Full = `const mission = "${HERO_CONTENT.missionText}";`;
    const line2Full = `await deploy(Future);`;
    
    let i = 0;
    let j = 0;
    
    // Type Line 1
    const timer1 = setInterval(() => {
        if (i <= line1Full.length) {
            setText1(line1Full.slice(0, i));
            i++;
        } else {
            clearInterval(timer1);
            // Start Line 2
            const timer2 = setInterval(() => {
                if (j <= line2Full.length) {
                    setText2(line2Full.slice(0, j));
                    j++;
                } else {
                    clearInterval(timer2);
                }
            }, 50);
        }
    }, 30);

    return () => {
        clearInterval(timer1);
    };
  }, []);

  // --- 3D Tilt Logic for Avatar ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseXVal = e.clientX - rect.left;
      const mouseYVal = e.clientY - rect.top;
      const xPct = mouseXVal / width - 0.5;
      const yPct = mouseYVal / height - 0.5;
      x.set(xPct);
      y.set(yPct);
  };

  const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
  }

  // Tech Stack Ticker Items
  const tickerItems = [...SKILLS, ...SKILLS, ...SKILLS]; 

  return (
    <section id="hero" className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-slate-950/50 perspective-[1000px] pt-16 md:pt-0">
      <HeroScene />
      
      {/* Dynamic Background Spotlight */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full h-full pb-20 md:pb-0">
        
        {/* LEFT COLUMN: TEXT & CONTENT */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left flex flex-col justify-center z-20"
        >
          {/* Status HUD */}
          <div className="flex flex-wrap items-center gap-4 mb-8 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg shadow-cyan-500/10">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="tracking-widest">SYSTEM ONLINE</span>
            </div>
            <div className="flex items-center gap-2">
                <MapPin size={12} className="text-cyan-400" /> {PROFILE.location}
            </div>
            <div className="hidden sm:flex items-center gap-2">
                <Clock size={12} className="text-purple-400" /> UTC+5:30
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.1] mb-6 font-sans tracking-tight">
            {HERO_CONTENT.headline.line1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-500">
              {HERO_CONTENT.headline.line2}
            </span> <br />
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 animate-glitch pb-2">
             {HERO_CONTENT.headline.line3}
            </span>
          </h1>
          
          {/* IDE Style Code Block - ANIMATED */}
          <div className="mb-8 w-full max-w-lg overflow-hidden rounded-lg bg-[#1e1e1e]/95 backdrop-blur-md border border-white/10 shadow-2xl transform transition-transform hover:scale-[1.02] duration-300 group">
            {/* Window Controls */}
            <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ffbd2e]/80" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:bg-[#27c93f]/80" />
                </div>
                <div className="text-[10px] text-slate-500 font-mono flex items-center gap-2">
                    <Code2 size={10} />
                    mission.ts
                </div>
                <div className="w-10" /> 
            </div>
            {/* Code Content */}
            <div className="p-4 font-mono text-xs sm:text-sm md:text-base min-h-[90px] sm:min-h-[100px]">
                <div className="flex items-start">
                    <span className="text-slate-600 mr-3 sm:mr-4 select-none pt-0.5">1</span>
                    <p className="text-slate-300 whitespace-pre-wrap break-words">
                        {/* Syntax Highlighting Logic */}
                        <span dangerouslySetInnerHTML={{
                            __html: text1
                                .replace('const', '<span class="text-purple-400">const</span>')
                                .replace('mission', '<span class="text-yellow-200">mission</span>')
                                .replace(`"${HERO_CONTENT.missionText}";`, `<span class="text-cyan-400">"${HERO_CONTENT.missionText}"</span><span class="text-slate-400">;</span>`) 
                        }} />
                    </p>
                </div>
                 <div className="flex items-start mt-1">
                    <span className="text-slate-600 mr-3 sm:mr-4 select-none pt-0.5">2</span>
                    <p className="text-slate-300 whitespace-pre-wrap break-words">
                        <span dangerouslySetInnerHTML={{
                            __html: text2
                                .replace('await', '<span class="text-blue-400">await</span>')
                                .replace('deploy', '<span class="text-yellow-200">deploy</span>')
                                .replace('Future', '<span class="text-orange-300">Future</span>')
                        }} />
                        {/* Blinking Cursor */}
                        <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle animate-pulse" />
                    </p>
                </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">View Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <button 
              onClick={handleDownloadResume}
              disabled={isDownloading}
              className={`px-8 py-4 border border-white/10 font-bold rounded-lg flex items-center justify-center gap-2 transition-all backdrop-blur-md font-mono group relative overflow-hidden w-full sm:w-auto ${
                isDownloading ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-slate-900/50 hover:bg-white/5 hover:border-cyan-500/50 text-white'
              }`}
            >
              {isDownloading ? (
                <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>{downloadText}</span>
                </>
              ) : (
                <>
                    <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">{'>'}</span>
                    <span>resume.pdf</span>
                    <Download size={18} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all hidden sm:block" />
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: INTERACTIVE PARALLAX AVATAR (HIDDEN ON MOBILE PORTRAIT TO SAVE SPACE, VISIBLE LG) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            className="hidden lg:flex justify-center items-center h-full relative perspective-1000"
        >
            {/* Floating Holographic Elements - Moving in 3D Space */}
            <motion.div 
                 style={{ zIndex: 0, translateZ: -50 }}
                 className="absolute w-[550px] h-[550px] border border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" 
            />
            <motion.div 
                 style={{ zIndex: 0, translateZ: -80 }}
                 className="absolute w-[450px] h-[450px] border border-dashed border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" 
            />
            <motion.div 
                 style={{ zIndex: 0, translateZ: -20 }}
                 className="absolute w-[650px] h-[650px] border border-white/5 rounded-full animate-pulse" 
            />

            {/* Main Photo Container */}
            <div className="relative w-80 h-80 rounded-full p-1 bg-gradient-to-b from-cyan-500/50 to-purple-600/50 shadow-[0_0_60px_rgba(6,182,212,0.3)] z-10 backdrop-blur-sm transform-style-3d">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-900 group">
                    <img 
                        src={PROFILE.avatarUrl} 
                        alt={PROFILE.name} 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                    />
                    
                    {/* Scanline Laser Effect */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none z-20 opacity-50">
                        <div className="w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] absolute top-0 animate-[scan_3s_linear_infinite]" />
                    </div>
                    
                    {/* Hologram Overlay Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,18,18,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none mix-blend-overlay" />
                </div>
                
                {/* Floating Badges with Parallax */}
                <motion.div 
                    style={{ translateZ: 60 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-8 top-8 bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 p-3 rounded-lg shadow-lg z-30 flex items-center gap-2"
                >
                    <Code2 className="text-cyan-400" size={20} />
                    <span className="text-xs font-bold text-white">Full Stack</span>
                </motion.div>
                <motion.div 
                    style={{ translateZ: 40 }}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-8 bottom-12 bg-slate-900/90 backdrop-blur-md border border-purple-500/30 p-3 rounded-lg shadow-lg z-30 flex items-center gap-2"
                >
                    <Cpu className="text-purple-400" size={20} />
                    <span className="text-xs font-bold text-white">AI Native</span>
                </motion.div>
            </div>
        </motion.div>
      </div>

      {/* INFINITE TECH TICKER (Bottom) */}
      <div className="absolute bottom-0 w-full border-t border-white/5 bg-slate-950/80 backdrop-blur-sm py-4 overflow-hidden z-20">
        <div className="flex w-full max-w-screen-2xl mx-auto relative">
             {/* Gradient Masks for Fade Effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

            <motion.div 
                className="flex gap-8 md:gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            >
                {tickerItems.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-400 font-mono text-xs md:text-sm font-bold uppercase tracking-wider">
                        <Globe size={14} className="text-cyan-500" />
                        {skill.name}
                        <Zap size={10} className="text-purple-500 fill-purple-500 ml-4" />
                    </div>
                ))}
            </motion.div>
        </div>
      </div>
    </section>
  );
};
