
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
  value: 'WebGPU & Generative AI Agents'
};

export const DEV_LOGS = [
  {
    cmd: 'git clone https://github.com/vivekvsingh19/portfolio.git',
    output: 'Cloning into "portfolio"...\nremote: Enumerating objects: 142, done.\nremote: Total 142 (delta 40), reused 0 (delta 0)\nReceiving objects: 100% (142/142), 1.24 MiB | 2.40 MiB/s, done.',
    delay: 800
  },
  {
    cmd: 'cd portfolio',
    output: '',
    delay: 200
  },
  {
    cmd: 'npm install',
    output: 'added 842 packages in 2s\n124 packages are looking for funding\n  run `npm fund` for details',
    delay: 1000
  },
  {
    cmd: 'npm run dev',
    output: 'ready started server on 0.0.0.0:3000, url: http://localhost:3000\n> Ready on http://localhost:3000',
    delay: 1500
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'zibbit',
    title: 'Zibbit — Meme Social',
    description: 'A high-energy Gen-Z social platform for meme battles. Features real-time leaderboards, user-generated content pipelines, and optimized media delivery via Cloudinary.',
    tags: ['Flutter', 'Firebase', 'Cloudinary', 'Social Graph'],
    imageUrl: 'https://picsum.photos/600/400?random=10',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'swadeit',
    title: 'SwadeIt — Secure C2C Market',
    description: 'A peer-to-peer marketplace featuring a custom Escrow payment system. Funds are securely held until the buyer confirms item delivery, ensuring trustless transactions.',
    tags: ['Flutter', 'Fintech', 'Escrow Logic', 'Marketplace'],
    imageUrl: 'https://picsum.photos/600/400?random=11',
    demoUrl: '#',
    githubUrl: '#'
  },
  {
    id: 'upasthit',
    title: 'Upasthit — Smart Attendance',
    description: 'The go-to attendance tracker for LNCT students. Features deep analytics, visual statistics, and reactive Lottie animations (Happy/Sad Dog) based on attendance health.',
    tags: ['Flutter', 'Analytics', 'Lottie Files', 'Education'],
    imageUrl: 'https://picsum.photos/600/400?random=99',
    demoUrl: 'https://play.google.com/store/apps/details?id=com.upasthit.app',
    githubUrl: '#'
  },
  {
    id: 'ai-persona',
    title: 'AI Persona Chat',
    description: 'An immersive chat experience powered by Gemini Cloud Functions. Users interact with distinct AI personalities (Mentor, Crush, Friend) with context-aware memory.',
    tags: ['Flutter', 'Gemini API', 'Cloud Functions', 'GenAI'],
    imageUrl: 'https://picsum.photos/600/400?random=12',
    githubUrl: '#',
    demoUrl: '#'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: '1',
    role: 'Upasthit 2.0 - Enterprise Scale',
    company: '10k+ Users • 4.8 Stars • Trending',
    period: '2024',
    description: 'Major architecture overhaul to support 50+ institutions simultaneously. Introduced offline-first sync, biometric spoof protection, and advanced analytics dashboard for admins. Featured in "Productivity" category.'
  },
  {
    id: '2',
    role: 'Official Play Store Launch',
    company: 'Upasthit App',
    period: '2023',
    description: 'Deployed the first stable version of the smart attendance tracker. Achieved 1,000+ downloads in the first month with zero marketing budget. Solved critical attendance fraud issues for local businesses.'
  },
  {
    id: '3',
    role: 'Indie Mobile Architect',
    company: '5+ Apps Shipped • 99% Crash-Free',
    period: '2021 - 2023',
    description: 'Built and deployed multiple custom mobile solutions, including a logistics tracker and a crypto portfolio manager. Mastered the art of shipping polished, production-ready Flutter applications.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Flutter / Dart', category: 'Frontend', level: 98 },
  { name: 'React / Next.js', category: 'Frontend', level: 90 },
  { name: 'Firebase / Cloudinary', category: 'Backend', level: 96 },
  { name: 'Gemini / GenAI', category: 'AI/ML', level: 94 },
  { name: 'Supabase / SQL', category: 'Backend', level: 88 },
  { name: 'Cloud Functions', category: 'Backend', level: 92 },
  { name: 'Git / GitHub', category: 'DevOps', level: 95 },
  { name: 'UI/UX Animation', category: 'Frontend', level: 85 },
];
