🌐 3D Developer Portfolio

A single-page developer portfolio built using React + Vite, featuring a scroll-triggered rotating 3D model on the home section.
The project focuses on clean UI, smooth animations, and modern frontend practices, created to showcase skills and projects while applying for internships.

🔗 Live Demo

Vercel: https://my-portfolio-nu-two-72.vercel.app

GitHub Pages: https://DISHA7-debug.github.io/my-portfolio

✨ Features

✅ Single Page Application

Smooth scroll-based navigation between sections

🧊 3D Interactive Visual

A large 3D figure that appears and rotates while scrolling on the home page

Built using Three.js with React Three Fiber

🎬 Smooth Animations

Section transitions and entry animations using Framer Motion

🪄 Modern UI Effects

Subtle 3D tilt effects on cards using react-parallax-tilt

📈 Experience Timeline

Timeline-style layout for experience and achievements

📱 Responsive Design

Optimized for desktop, tablet, and mobile devices

⚡ Fast & Lightweight

Powered by Vite for fast development and optimized builds

🛠 Tech Stack
Frontend

  React 18

  Vite

  Tailwind CSS

3D & Animations

  three

  @react-three/fiber

  @react-three/drei

  maath

  framer-motion

  react-parallax-tilt

UI Components

  react-vertical-timeline-component

Deployment

  GitHub Pages

  Vercel

📁 Project Structure

my-portfolio/
├── public/
├── src/
│   ├── assets/              # Images, icons, and 3D assets
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx         # Home section with rotating 3D model
│   │   ├── About.jsx
│   │   ├── Tech.jsx
│   │   ├── Experience.jsx
│   │   ├── Works.jsx
│   │   ├── Contact.jsx      # UI-only contact section
│   │   └── Footer.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
├── package.json
└── README.md



🚀 Getting Started
1️⃣ Prerequisites

  Node.js (v18+ recommended)

  npm

2️⃣ Clone the Repository
git clone https://github.com/DISHA7-debug/my-portfolio.git
cd my-portfolio

3️⃣ Install Dependencies
npm install

4️⃣ Run Locally
npm run dev


Visit http://localhost:5173 in your browser.

5️⃣ Build for Production
  npm run build

🌍 Deployment
GitHub Pages
  npm run deploy


Builds the project and publishes it using the gh-pages branch.

Vercel

1.Import the repository into Vercel

2.Select Vite as the framework

3.Build Command: npm run build

4.Output Directory: dist

🎯 Project Goal

This project was created as a personal portfolio for internship applications, focusing on:

Demonstrating frontend fundamentals

Showcasing modern UI/UX practices

Using 3D visuals with React and Three.js

Building production-ready, deployable projects

📄 License

This project is a simple personal portfolio.
You may explore and learn from the code, but please avoid using it directly as your own portfolio.
