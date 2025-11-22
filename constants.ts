
import { Project, Experience, Skill } from './types';

export const PROFILE = {
  name: 'Vivek Singh',
  role: 'Developer',
  email: 'vivekvsingh19@gmail.com',
  location: 'Sasaram, Bihar, India',
  // Using GitHub avatar as a reliable source
  avatarUrl: 'https://github.com/vivekvsingh19.png'
};

export const SOCIAL_LINKS = {
  github: 'https://github.com/vivekvsingh19',
  linkedin: 'https://www.linkedin.com/in/vivek-singh-87447a268/',
  twitter: 'https://x.com/vivek_uncovered'
};

export const HERO_CONTENT = {
  terminalTag: '>> SYSTEM_READY',
  headline: {
    line1: 'Building',
    line2: 'Digital Reality',
    line3: 'One Line at a Time'
  },
  missionText: 'Bridging the gap between human intent and silicon execution'
};

export const ABOUT_FEATURES = [
  {
    icon: 'Zap',
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, ensuring buttery smooth interactions at 60fps.',
    color: 'cyan'
  },
  {
    icon: 'Brain',
    title: 'AI Integrated',
    description: 'Leveraging modern LLMs and neural networks to build smarter, adaptive applications.',
    color: 'purple'
  },
  {
    icon: 'Smartphone',
    title: 'Cross Platform',
    description: 'Unified experiences across web, mobile, and desktop from a single codebase.',
    color: 'pink'
  }
];

export const CURRENT_FOCUS = {
  key: 'current_focus',
  value: 'AI-Powered Applications & Interactive 3D Web Experiences'
};

export const DEV_LOGS = [
  {
    cmd: 'git clone https://github.com/vivekvsingh19/portfolio.git',
    output: 'Cloning portfolio repository...\n✓ Repository cloned successfully',
    delay: 600
  },
  {
    cmd: 'cd portfolio && npm install',
    output: 'Installing dependencies...\n✓ All packages installed (15 dependencies)',
    delay: 1000
  },
  {
    cmd: 'npm run dev',
    output: 'Starting development server...\n✓ Server running on http://localhost:3000\n✓ Ready to go!',
    delay: 1200
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'upasthit',
    title: 'Upasthit — Smart Attendance',
    description: 'An enterprise-grade attendance tracking system deployed to 10k+ users across 50+ institutions. Features offline-first sync, biometric spoof protection, advanced analytics dashboard, and reactive Lottie animations. Achieved 4.8★ rating on Play Store with zero marketing budget.',
    tags: ['Flutter', 'Firebase', 'Analytics', 'Biometric Security'],
    imageUrl: '',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.upasthit.app',
    githubUrl: 'https://github.com/vivekvsingh19'
  },
  {
    id: 'portfolio',
    title: 'Portfolio — 3D Interactive',
    description: 'A premium, futuristic developer portfolio featuring 3D animations with Three.js, Framer Motion interactions, and a modern tech stack. Built with React, TypeScript, and Vite for optimal performance.',
    tags: ['React', 'Three.js', 'TypeScript', 'Framer Motion'],
    imageUrl: '',
    demoUrl: 'https://vivekvsingh19.dev',
    githubUrl: 'https://github.com/vivekvsingh19/portfolio'
  },
  {
    id: 'nexgen-web',
    title: 'NexGen Web Platform',
    description: 'Full-stack web application designed for real-time data processing and visualization. Built with modern frontend frameworks and scalable backend architecture. Features responsive design and optimized performance.',
    tags: ['React', 'Next.js', 'Node.js', 'PostgreSQL'],
    imageUrl: '',
    demoUrl: '#',
    githubUrl: 'https://github.com/vivekvsingh19'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Full-Stack Developer & AI Engineer',
    company: 'Independent • Shipped 10+ Projects',
    period: '2023 - Present',
    description: 'Building production-grade applications across web, mobile, and cloud. Specialized in AI integration, real-time systems, and performance optimization. Currently exploring WebGPU and generative AI agents.'
  },
  {
    id: '2',
    role: 'Upasthit Platform — Enterprise Scale',
    company: '10k+ Users • 4.8★ Rating • Play Store Featured',
    period: '2022 - 2024',
    description: 'Architected and deployed a smart attendance system serving 50+ institutions. Implemented offline-first sync, biometric security, and advanced analytics. Achieved 1,000+ downloads in the first month with zero marketing budget.'
  },
  {
    id: '3',
    role: 'Mobile App Developer',
    company: '99% Crash-Free • 5+ Apps Deployed',
    period: '2021 - 2023',
    description: 'Designed and shipped multiple custom mobile solutions including logistics trackers and financial portfolio managers. Mastered Flutter, Firebase, and cloud architecture. Delivered production-ready applications on schedule.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter / Dart', category: 'Frontend', level: 95 },
  { name: 'React / TypeScript', category: 'Frontend', level: 92 },
  { name: 'Firebase / Cloud Functions', category: 'Backend', level: 94 },
  { name: 'Generative AI / APIs', category: 'AI/ML', level: 88 },
  { name: 'Web3 / Blockchain', category: 'Backend', level: 75 },
  { name: 'Three.js / 3D Web', category: 'Frontend', level: 85 },
  { name: 'Git / DevOps', category: 'DevOps', level: 90 },
  { name: 'UI/UX & Animation', category: 'Frontend', level: 91 },
];
