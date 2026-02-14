import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  project1,
  project2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const hero = {
  name: "Disha Chopra",
  tagline: "I craft sleek UIs and build smooth frontend experiences.",
};

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "UI Designer",
    icon: mobile,
  },
  {
    title: "Web Animator",
    icon: creator,
  },
  {
    title: "Open Source Contributor",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Joint Head - Technical Projects",
    company_name: "IEEE MUJ",
    icon: web,
    iconBg: "#E6DEDD",
    date: "May 2025 – Present",
    points: [
      "Leading technical web development projects.",
      "Mentoring junior devs and managing project flow.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Codec Technology",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Dec 2025 – Jan 2026",
    points: [
      "Worked as a Web Developer Intern focusing on building modern, responsive, and scalable web applications while collaborating on real-world development projects.",
    ],
  },
  {
    title: "Junior Web Team Member",
    company_name: "IEEE MUJ",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "Dec 2024 – May 2025",
    points: [
      "Contributed to the official IEEE website and dashboards.",
      "Worked on React-based frontend for events.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "ACM MUJ",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Sep 2024 – Feb 2025",
    points: [
      "Created responsive pages for internal tools.",
      "Improved UI/UX using Tailwind and component libraries.",
    ],
  },
];

const projects = [
  {
    name: "Version Control System",
    description:
      "A full-stack version control system that enables repository management, issue tracking, and structured code history handling using modern web technologies.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/DISHA7-debug/VCS-Frontend",
  },
  {
    name: "Lazarev",
    description:
      "A visually immersive frontend project inspired by a digital product design agency, built using modern UI techniques and GSAP-based animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/DISHA7-debug/LAZAREV",
  },
];

export { services, technologies, experiences, projects };