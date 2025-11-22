import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} NexGen Portfolio. Built with React, Tailwind & Three.js.
      </p>
    </footer>
  );
};