# 🌌 3D Developer Portfolio

A modern **single-page developer portfolio** built with **React + Vite**, featuring a **scroll-activated rotating 3D model**, smooth animations, and a clean UI — designed specifically for **internship applications**.

🔗 **Live Demo**  
- Vercel: https://my-portfolio-nu-two-72.vercel.app  

---

## ✨ Features

- 🧊 **3D Hero Section**  
  Large rotating 3D figure appears while scrolling on the home section  
  Built using **Three.js + React Three Fiber**

- 📄 **Single Page Layout**  
  Smooth section-based navigation without page reloads

- 🎨 **UI-Focused Project**  
  Pure frontend design & interaction project (no backend)

- 🎬 **Smooth Animations**  
  Page transitions and scroll animations using **Framer Motion**

- 🪄 **3D Tilt Effects**  
  Hover-based tilt effects on cards using `react-parallax-tilt`

- 📈 **Experience Timeline**  
  Clean vertical timeline using `react-vertical-timeline-component`

- 📱 **Fully Responsive**  
  Works seamlessly on desktop, tablet, and mobile devices

---

## 🛠 Tech Stack

### Core
- React 18
- Vite
- Tailwind CSS

### 3D & Animations
- three
- @react-three/fiber
- @react-three/drei
- maath
- framer-motion
- react-parallax-tilt

### UI Components
- react-vertical-timeline-component

### Deployment
- GitHub Pages
- Vercel

---

## 📁 Project Structure

```bash
my-portfolio/
├── public/
├── src/
│   ├── assets/                 # Images, icons, 3D assets
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx            # Home section with rotating 3D model
│   │   ├── About.jsx
│   │   ├── Tech.jsx
│   │   ├── Experience.jsx
│   │   ├── Works.jsx
│   │   ├── Contact.jsx         # UI-only contact section
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/DISHA7-debug/my-portfolio.git
cd my-portfolio
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start development server

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🌍 Deployment

### GitHub Pages

```bash
npm run deploy
```

This command:
- Builds the project
- Pushes the `dist` folder to `gh-pages` branch
- Deploys at GitHub Pages URL

---

## 🎯 Project Purpose

This portfolio is built to:
- Showcase **frontend & React skills**
- Demonstrate **Three.js integration in React**
- Present a visually engaging UI for **internship recruiters**

---

## 📄 License

Simple personal project.  
Feel free to explore and learn from the code.


  
