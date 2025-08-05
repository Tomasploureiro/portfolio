"use client"
import React from "react";
import { motion } from "framer-motion";

const techIcons = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", alt: "NextJs" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", alt: "Node.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", alt: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", alt: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", alt: "C" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
];

const duplicatedIcons = [...techIcons, ...techIcons];

const TechStackSlider = () => (
  <div className="relative h-24 overflow-hidden py-4 w-full max-w-7xl mx-auto">
    <motion.div
      className="flex"
      animate={{
        x: ["-50%", "0%"],
        transition: {
          ease: "linear",
          duration: 18,
          repeat: Infinity,
        },
      }}
      style={{ minWidth: "200%" }}
    >
      {duplicatedIcons.map((icon, idx) => (
        <div key={idx} className="flex items-center justify-center h-16 w-32">
          <img src={icon.src} alt={icon.alt} className="h-16" draggable={false} />
        </div>
      ))}
    </motion.div>
    <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
    <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
  </div>
);

export default TechStackSlider;
