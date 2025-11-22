<div align="center">
  <h1>Vivek Singh - Portfolio</h1>
  <p>A modern, interactive 3D developer portfolio built with React, TypeScript, and Three.js</p>
</div>

# Vivek Singh Portfolio

A premium, futuristic developer portfolio featuring interactive 3D animations, smooth transitions, and a responsive design. Built for showcasing AI engineering, full-stack development, and mobile app expertise.

## ✨ Features

- 🎨 **Interactive 3D Elements** - Three.js integration for immersive hero scene
- ⚡ **Smooth Animations** - Framer Motion for fluid transitions and effects
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🎯 **Real Project Links** - Direct links to live projects and GitHub repositories
- 📧 **Functional Contact Form** - Email integration via Formspree
- 🌙 **Dark Theme** - Professional, modern aesthetic with Tailwind CSS
- 🚀 **Production Ready** - Optimized build with code splitting and lazy loading

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript 5.8, Vite 6.4.1
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, Three.js, @react-three/fiber
- **Icons**: Lucide React
- **Forms**: Formspree for email handling
- **Deployment**: GitHub Pages with GitHub Actions CI/CD

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vivekvsingh19/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deployment

This portfolio is configured for **GitHub Pages** with automatic deployment via GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Set Source to **"GitHub Actions"**
   - Custom domain: `vivekvsingh.me`

2. **Automatic Deployment:**
   - Every push to `main` triggers the build workflow
   - GitHub Actions builds and deploys to GitHub Pages
   - Changes go live automatically (~30-60 seconds)

3. **View Workflow Status:**
   - Check the **Actions** tab to monitor deployments
   - View detailed logs if builds fail

For detailed setup instructions, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

## 📁 Project Structure

```
portfolio/
├── components/          # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ProjectCard.tsx
│   ├── Intro.tsx
│   └── 3d/
│       └── HeroScene.tsx
├── sections/           # Page sections
│   ├── Hero.tsx         # 3D hero with Three.js
│   ├── Projects.tsx     # Portfolio projects
│   ├── About.tsx        # About section
│   ├── Experience.tsx   # Experience & skills
│   └── Contact.tsx      # Contact form
├── src/
│   └── index.css        # Global styles
├── constants.ts         # Data & configuration
├── types.ts             # TypeScript type definitions
├── App.tsx              # Main app component
├── index.tsx            # Entry point
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config
└── postcss.config.js    # PostCSS configuration
```

## 📊 Performance

- **Total Bundle Size**: ~1.4MB gzipped
- **Code Splitting**: Vendor and Three.js chunks separated
- **Lazy Loading**: Sections load as needed
- **Optimized Images**: WebP support

## 🔗 Quick Links

- **Portfolio**: https://vivekvsingh.me
- **GitHub**: https://github.com/vivekvsingh19
- **Email**: vivekvsingh19@gmail.com
- **LinkedIn**: https://linkedin.com/in/vivek-singh-87447a268
- **Twitter**: https://x.com/vivek_uncovered

## 📝 Projects Featured

1. **Upasthit Play** - 10k+ active users platform
2. **Personal Portfolio** - This very project
3. **NexGen Web** - Modern web solutions

## 💡 Customization

### Update Your Information
Edit `constants.ts` to customize:
- Your name, title, and bio
- Projects and project links
- Experience and skills
- Contact information

### Modify Styling
- `src/index.css` - Global CSS
- `tailwind.config.js` - Tailwind configuration
- Component files - Component-specific styles

### Change Colors
Update Tailwind theme in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      // Your colors here
    }
  }
}
```

## 📄 License

This project is open source. Feel free to fork, modify, and use for your own portfolio!

---

Built with ❤️ by Vivek Singh | [Visit Portfolio](https://vivekvsingh.me)
