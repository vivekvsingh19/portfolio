import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Play, Server, LayoutTemplate } from 'lucide-react';
import { DEV_LOGS, PROFILE } from '../constants';

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [completedLogs, setCompletedLogs] = useState<{cmd: string, output: string}[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [currentText, completedLogs]);

  useEffect(() => {
    let isMounted = true;
    
    const runSequence = async () => {
      for (let i = 0; i < DEV_LOGS.length; i++) {
        if (!isMounted) return;
        
        const log = DEV_LOGS[i];
        setCurrentLogIndex(i);
        
        // Typing animation for command
        const cmd = log.cmd;
        for (let j = 0; j <= cmd.length; j++) {
            if (!isMounted) return;
            setCurrentText(cmd.substring(0, j));
            await new Promise(r => setTimeout(r, 30 + Math.random() * 30)); // Random typing speed
        }
        
        await new Promise(r => setTimeout(r, 200)); // Pause before enter

        if (!isMounted) return;
        
        // Push to completed logs and clear current text
        setCompletedLogs(prev => [...prev, { cmd: log.cmd, output: log.output }]);
        setCurrentText('');
        
        await new Promise(r => setTimeout(r, log.delay));
      }
      
      setIsComplete(true);
      await new Promise(r => setTimeout(r, 1500));
      onComplete();
    };

    runSequence();
    return () => { isMounted = false; };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#1e1e1e] flex items-center justify-center font-mono text-sm"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {/* VS Code Window Style Container */}
      <div className="w-full max-w-3xl h-[60vh] md:h-[500px] bg-[#1e1e1e] rounded-xl border border-[#333] shadow-2xl flex flex-col overflow-hidden relative">
        
        {/* Title Bar */}
        <div className="h-10 bg-[#252526] flex items-center px-4 justify-between border-b border-[#1e1e1e]">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="text-[#cccccc] text-xs">vivek-portfolio — -zsh — 80x24</div>
            <div className="w-10" /> {/* Spacer */}
        </div>

        {/* Main Area: Sidebar + Terminal */}
        <div className="flex-1 flex">
            {/* Sidebar Simulation */}
            <div className="w-12 bg-[#333333] hidden md:flex flex-col items-center py-4 gap-4 border-r border-[#1e1e1e]">
                <LayoutTemplate className="text-white w-6 h-6" />
                <div className="w-6 h-6 border-b-2 border-white/20" />
            </div>

            {/* Terminal Area */}
            <div className="flex-1 bg-[#1e1e1e] p-4 font-mono text-[#cccccc] overflow-y-auto" ref={scrollRef}>
                {completedLogs.map((log, idx) => (
                    <div key={idx} className="mb-4">
                        <div className="flex gap-2 items-center text-[#cccccc]">
                            <span className="text-[#00ff00]">➜</span>
                            <span className="text-[#00ffff]">~</span>
                            <span>{log.cmd}</span>
                        </div>
                        {log.output && (
                            <div className="text-[#888888] mt-1 whitespace-pre-line pl-4">
                                {log.output}
                            </div>
                        )}
                    </div>
                ))}
                
                {!isComplete && (
                    <div className="flex gap-2 items-center text-[#cccccc]">
                        <span className="text-[#00ff00]">➜</span>
                        <span className="text-[#00ffff]">~</span>
                        <span>{currentText}</span>
                        <span className="w-2 h-4 bg-[#cccccc] animate-pulse" />
                    </div>
                )}
            </div>
        </div>

        {/* Server Ready Overlay */}
        <AnimatePresence>
            {isComplete && (
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="absolute bottom-8 right-8 bg-[#252526] border border-[#007acc] p-4 rounded shadow-xl flex items-start gap-4 max-w-sm"
                >
                    <div className="bg-[#007acc] p-2 rounded text-white">
                        <Server size={20} />
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm">Compiled Successfully</h4>
                        <p className="text-[#cccccc] text-xs mt-1">
                            App running at <span className="text-[#007acc] underline">http://localhost:3000</span>
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                            <img src={PROFILE.avatarUrl} alt="Avatar" className="w-5 h-5 rounded-full" />
                            <span className="text-xs text-[#888888]">Logged in as {PROFILE.name}</span>
                        </div>
                    </div>
                    <div className="animate-pulse absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full" />
                </motion.div>
            )}
        </AnimatePresence>

        {/* Bottom Status Bar */}
        <div className="h-6 bg-[#007acc] flex items-center px-3 text-[10px] text-white justify-between">
             <div className="flex gap-3">
                <div className="flex items-center gap-1">
                    <Play size={10} />
                    <span>master*</span>
                </div>
                 <div className="flex items-center gap-1">
                    <Server size={10} />
                    <span>Live Share</span>
                </div>
             </div>
             <div>Ln 42, Col 10</div>
        </div>

      </div>
    </motion.div>
  );
};