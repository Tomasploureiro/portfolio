import Link from "next/link";
import { FaLinkedin, FaDribbble, FaGithub, FaBehance, FaDiscord, FaArrowRight, FaFacebook, FaInstagram } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import "../app/globals.css";

const Footer = () => {
  // Refs para cada coluna
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  const col4Ref = useRef(null);

  const col1InView = useInView(col1Ref, { once: true, margin: "-100px" });
  const col2InView = useInView(col2Ref, { once: true, margin: "-100px" });
  const col3InView = useInView(col3Ref, { once: true, margin: "-100px" });
  const col4InView = useInView(col4Ref, { once: true, margin: "-100px" });

  // Estado para hover dos botões
  const [hoveredBtn, setHoveredBtn] = useState(null);

  return (
    <footer className="w-full bg-[var(--background)] border-t border-[var(--border)] py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        <motion.div
          ref={col1Ref}
          initial={{ opacity: 0, x: -60 }}
          animate={col1InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
        >
          <div className="text-xl font-semibold mb-2 text-[var(--foreground)]">
            Faça tudo com 
            <span className="text-[var(--purple)]"> foco </span>
            e 
            <span className="text-[var(--cyan)]"> atençao </span>
            não existe 
            <span className="text-[var(--yellow)]"> ctrl z </span>
            na vida.
          </div>
        </motion.div>
        <motion.div
          ref={col2Ref}
          initial={{ opacity: 0, x: -60 }}
          animate={col2InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        >
          <div className="font-bold text-orange-400 mb-4">Explore</div>
          <ul className="space-y-1 text-[var(--foreground)]">
            <li className="nav-anim-hover">
              <Link href="/">Inicio</Link>
            </li>
            <li className="nav-anim-hover">
              <Link href="/about">Sobre Mim</Link>
            </li>
            <li className="nav-anim-hover">
              <Link href="/contact">Contacta-me</Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={col3Ref}
          initial={{ opacity: 0, x: -60 }}
          animate={col3InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
        >
          <div className="font-bold text-cyan-400 mb-4">Segue-me</div>
          <div className="flex flex-col gap-2">
            <a href="https://www.linkedin.com/in/tomasploureiro/" className="nav-anim-hover flex items-center gap-2">
              <FaLinkedin className="text-cyan-400" /> LinkedIn
            </a>
            <a href="https://www.facebook.com/tomasploureiro/" className="nav-anim-hover flex items-center gap-2">
              <FaFacebook className="text-pink-400" /> Facebook
            </a>
            <a href="https://github.com/tomasploureiro" className="nav-anim-hover flex items-center gap-2">
              <FaGithub className="text-[var(--foreground)]" /> Github
            </a>
            <a href="https://www.instagram.com/tomasploureiro/" className="nav-anim-hover flex items-center gap-2">
              <FaInstagram className="text-blue-400" /> Instagram
            </a>
          </div>
        </motion.div>
        <motion.div
          ref={col4Ref}
          initial={{ opacity: 0, x: -60 }}
          animate={col4InView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
          className="flex flex-col gap-8"
        >
          <Link
            href="/contact"
            onMouseEnter={() => setHoveredBtn("contact")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="w-full text-left border-b border-[var(--border)] pb-4 group bg-transparent"
            style={{ outline: "none" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="nav-anim-hover font-bold text-[var(--foreground)]">Contacto</div>
              </div>
              <span
                className={`transition-transform duration-300 border rounded-full border-[var(--border)] p-1 flex items-center justify-center
                  ${hoveredBtn === "contact" ? "border-green-500" : "border-[var(--border)]"}
                `}
                style={{
                  boxShadow: hoveredBtn === "contact" ? "0 0 0 2px #222 inset" : undefined,
                  transition: "transform 0.3s, border-color 0.3s"
                }}
              >
                <FaArrowRight
                  className="text-green-500 text-2xl"
                  style={{
                    transform: hoveredBtn === "contact" ? "rotate(-45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s"
                  }}
                />
              </span>
            </div>
          </Link>
          <Link
            href={"/projects"}
            onMouseEnter={() => setHoveredBtn("projects")}
            onMouseLeave={() => setHoveredBtn(null)}
            className="w-full text-left bg-transparent"
            style={{ outline: "none" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="nav-anim-hover font-bold text-[var(--foreground)]">Projetos</div>
              </div>
              <span
                className={`transition-transform duration-300 border rounded-full border-[var(--border)] p-1 flex items-center justify-center
                  ${hoveredBtn === "projects" ? "border-green-500" : "border-[var(--border)]"}
                `}
                style={{
                  boxShadow: hoveredBtn === "projects" ? "0 0 0 2px #222 inset" : undefined,
                  transition: "transform 0.3s, border-color 0.3s"
                }}
              >
                <FaArrowRight
                  className="text-green-500 text-2xl"
                  style={{
                    transform: hoveredBtn === "projects" ? "rotate(-45deg)" : "rotate(0deg)",
                    transition: "transform 0.3s"
                  }}
                />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;