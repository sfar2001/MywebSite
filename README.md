# Adam Sfar - Portfolio Website

A modern, UX-focused React portfolio web application showcasing Adam Sfar's technical expertise in AI, Cloud Computing, and Quantum Computing. Built with advanced animations, glass morphism effects, and a premium tech aesthetic.

## ✨ Features

- 🎨 **Premium Tech Aesthetic**: Futuristic design with cyber-inspired elements
- 🎬 **Advanced Animations**: Framer Motion for smooth transitions and micro-interactions
- 🌈 **Glass Morphism & Neumorphism**: Modern UI trends with glass effects
- 🎯 **Gradient Accents**: Strategic use of gradients (blues/purples)
- 📱 **Fully Responsive**: Mobile-first design with elegant desktop experience
- 🌓 **Dark/Light Theme**: Professional theme switcher with smooth transitions
- ⚡ **Performance Optimized**: Code splitting, lazy loading, and optimized animations
- 🎭 **Interactive Elements**: 3D card effects, particle backgrounds, typing animations

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd my_website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
my_website/
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Navigation.jsx
│   │   ├── Sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Quantum.jsx
│   │   │   └── Contact.jsx
│   │   └── UI/
│   │       ├── TypeWriter.jsx
│   │       ├── ParticleEffect.jsx
│   │       └── AnimatedBackground.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useIntersectionObserver.js
│   ├── data/
│   │   ├── projects.js
│   │   ├── experience.js
│   │   ├── education.js
│   │   ├── skills.js
│   │   └── personal.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Sections

1. **Hero Section**: Animated gradient background, typing animation, particle effects, 3D social links
2. **About Section**: Animated timeline for education, language proficiency bars, biography
3. **Skills Matrix**: Categorized skills with animated progress bars and hover effects
4. **Projects Gallery**: 3D project cards with tilt effects, category filters, hover overlays
5. **Experience Timeline**: Vertical timeline with company details, achievements, and skill tags
6. **Quantum Computing**: Special section with workshop showcase and QKNN progress
7. **Contact Section**: Animated contact form with floating labels and social links

## 🛠️ Technologies Used

- **React 19**: UI library with functional components and hooks
- **Framer Motion**: Advanced animations and transitions
- **React Icons**: Comprehensive icon library
- **CSS Modules**: Component-scoped styling
- **Vite**: Fast build tool and dev server
- **Context API**: Theme management

## 🎯 Customization

### Updating Content

All content is managed through data files in `src/data/`:
- `personal.js`: Personal information and contact details
- `projects.js`: Project listings and categories
- `experience.js`: Professional experience
- `education.js`: Education and certifications
- `skills.js`: Technical skills and languages

### Theme Customization

Modify CSS variables in `src/App.css` to customize:
- Colors and gradients
- Spacing and typography
- Animation timings
- Glass morphism effects

### Adding Images

1. Place images in the `public/` directory
2. Update image paths in data files or components
3. Replace placeholder images with actual project screenshots

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎭 Key Features Explained

### Glass Morphism
Cards and navigation use backdrop-filter blur effects for a modern glass appearance.

### 3D Card Effects
Project cards have 3D transforms and tilt effects on hover using CSS transforms.

### Particle Effects
Canvas-based particle system in the hero section for dynamic background.

### Typing Animation
Custom TypeWriter component for animated text display in the hero section.

### Scroll Animations
Intersection Observer API for trigger-based animations as sections come into view.

## 📄 License

This project is private and personal.

## 📧 Contact

Adam Sfar
- Email: adam.sfar24@gmail.com
- Phone: +49015510540971
- Location: Cöllbe, Germany

---

Built with ❤️ using React and Framer Motion
