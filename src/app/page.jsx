"use client"
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";
import Cards from "@/components/cards";
import { FaBriefcase, FaBolt, FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaCode, FaServer, FaPaintBrush, FaEnvelope, FaArrowRight} from "react-icons/fa";
import Footer from "@/components/footer"
import {motion, useInView} from "framer-motion"
import TechStackSlider from "@/components/TechStackSlider";
import { useState, useEffect, useRef } from "react";

const Home = () => {
    // Refs e estados para cada experiência
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    const inView1 = useInView(ref1, { once: true, margin: "-100px" });
    const inView2 = useInView(ref2, { once: true, margin: "-100px" });
    const inView3 = useInView(ref3, { once: true, margin: "-100px" });
    const inView4 = useInView(ref4, { once: true, margin: "-100px" });

    // Refs e estados para cada Card
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const cardRef3 = useRef(null);
    const cardRef4 = useRef(null);

    // Ref e estado para o container dos cards
    const cardsContainerRef = useRef(null);
    const cardsInView = useInView(cardsContainerRef, { once: true, margin: "-100px" });

    // Splash animation state
    const [showSplash, setShowSplash] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 2200); // tempo em ms
        return () => clearTimeout(timer);
    }, []);

    return (
      <div>
        {showSplash && (
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] text-center px-4">
              Olá, sou o Tomás!
            </h1>
          </motion.div>
        )}
        <section className="flex flex-col items-center justify-center w-full min-h-screen mx-auto text-[var(--foreground)]">
            <div className="w-full">
              <Navbar />
            </div>
            <div className="py-24 my-auto">
              <main className="w-full">
                <div className="justify-center flex items-center text-[var(--foreground)] gap-4"> 
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[var(--foreground)] border-2 border-[var(--border)] overflow-hidden">
                    <img
                      src="/assets/Loureiro_Tomas.jpg"
                      alt="Avatar"
                      className="object-cover w-16 h-16 rounded-full"
                    />
                  </div>
                  <div className="p-4 flex border-2 border-solid border-[var(--border)] rounded-full">
                    <h1 className="text-xl text-center">Olá, sou o Tomás</h1>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2 ">
                    <div className="flex items-center gap-4">
                        <h1 className="text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-[var(--purple)]">ESTUDANTE</h1>

                        <h1 className="sm:text-xs md:text-sm lg:text-base"> 
                          // Coimbra, Portugal <br /> // Remoto
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                      <h1 className="sm:text-xs md:text-sm lg:text-base"> 
                        // Desenvolvedor <br /> Full Stack
                      </h1>

                      <h1 className="text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-[var(--yellow)]">ENGENHARIA</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <h1 className="text-5xl font-semibold text-center md:text-6xl lg:text-7xl">INFORMÁTICA</h1>
                        <Link
                          href="/contact"
                          className="relative flex items-center gap-2 p-4 rounded-full border border-[var(--border)] text-lg font-semibold text-[var(--foreground)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-green-400 overflow-hidden group"
                          style={{ boxShadow: "0 0 0 2px #222 inset" }}
                        > 
                          <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 rounded-full" style={{ backgroundColor: '#18aaff' }}></div>
                          
                          <span className="relative z-10 w-3 h-3 rounded-full bg-green-500 animate-pulse mr-2"></span>
                          <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]">Contacta-me</span>
                        </Link>
                    </div>
                <div className="flex items-center gap-4">    
                  <h1 className="text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-[var(--foreground)]">&</h1>
                  <h1 className="text-5xl font-semibold text-center md:text-6xl lg:text-7xl text-[var(--cyan)]"> DESENVOLVEDOR.</h1>
                </div>
                </div>
                <div>
                  <h1 className="text-center sm:pt-4 md:text-xl lg:text-2xl">
                    <span className="text-[var(--foreground)]"> 1º ANO DE </span>
                    <span className="text-[var(--purple)]"> MESTRADO </span>
                    <span className="text-[var(--foreground)]" > EM </span>
                    <span className="text-[var(--yellow)]"> ENGENHARIA </span>
                    <span className="text-[var(--foreground)]"> DE </span>
                    <span className="text-[var(--cyan)]"> SOFTWARE </span>
                    <span className="text-[var(--foreground)]"> <br /> NA UNIVERSIDADE DE COIMBRA</span>
                  </h1>
                </div>
              </main>
            </div>
            <div className="w-full max-w-13px">
              <div className="h-1 border-t border-[var(--border)] "> </div>
              <main className="px-2 pt-2 pb-2 m-auto mx-1 max-w-13xl sm:mx-2 md:mx-3 lg:mx-4">
                  <nav className="flex items-center justify-between">
                    <div></div>
                    <div className="p-1 ml-70 flex gap-4 justify-center border-2 border-solid rounded-full border-[var(--border)]">
                      <motion.a
                        href="https://github.com/tomasploureiro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--foreground)]"
                        aria-label="GitHub"
                        whileHover={{ scale: 1.25 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        layout
                      >
                        <FaGithub className="text-2xl text-black" />
                      </motion.a>
                      <motion.a
                        href="https://www.facebook.com/tomasploureiro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--foreground)]"
                        aria-label="Facebook"
                        whileHover={{ scale: 1.25 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        layout
                      >
                        <FaFacebook className="text-2xl text-black" />
                      </motion.a>
                      <motion.a
                        href="https://www.instagram.com/tomasploureiro"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--foreground)]"
                        aria-label="Instagram"
                        whileHover={{ scale: 1.25 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        layout
                      >
                        <FaInstagram className="text-2xl text-black" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/in/tomasploureiro/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--foreground)]"
                        aria-label="Linkedin"
                        whileHover={{ scale: 1.25 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        layout
                      >
                        <FaLinkedin className="text-2xl text-black" />
                      </motion.a>
                    </div>
                    <div className="flex p-1 justify-end items-center mr-20 border-2 border-solid border-[var(--border)] rounded-full">
                      <a
                        href="mailto:tompinlou@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--foreground)]"
                        aria-label="Linkedin"
                      >
                        <FaEnvelope className="text-2xl text-black" />
                      </a>
                      <h1 className="p-2 sm:text-xs md:text-sm lg:text-base text-[var(--foreground)]">tompinlou@gmail.com</h1>
                    </div>
                  </nav>
              </main>
            </div>
        </section>
        <section className="ml-15 text-left mt-10 mr-15">
          <div className="flex justify-between">
            <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl">
                Especializo-me em criar soluções digitais à medida, <br/>
                superando limites em cada projeto e mantendo sempre <br/>
                uma dedicação inabalável à excelência e à inovação.
            </p>
            <div className="flex justify-end sm:mr-10 md:mr-14">
              <Link
                href="/about"
                className="relative flex justify-end items-center gap-2 p-4 rounded-full border border-[var(--border)] text-lg font-semibold text-[var(--foreground)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-foreground w-fit mt-15 overflow-hidden group"
                style={{ boxShadow: "0 0 0 2px #222 inset" }}
              >
                <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 rounded-full" style={{ backgroundColor: '#18aaff' }}></div>
                
                <span className="relative z-10 flex rounded-full animate-pulse"></span>
                <h1 className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]">Sobre mim</h1>
                <FaArrowRight className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]" />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end mt-15">
            <div className="flex-grow border border-[var(--border)] sm:mt-2 md:mt-3 "> </div>
            <span className="absolute flex items-center justify-center p-2 mr-3 rounded-full w-14 h-14 bg-foreground sm:mr-10 md:mr-14 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:p-0">
              <FaBolt className="text-4xl fill-background" />
            </span>
          </div>
        </section>
        <section className="flex justify-center flex-col items-center mt-20">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-purple-400">O QUE EU FAÇO</h1>
          <main
            ref={cardsContainerRef}
            className="flex flex-row flex-wrap w-11/12 gap-4 mt-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
              className="flex-grow w-64"
            >
              <Cards
                icon={<FaCode className="text-4xl text-cyan-400 mb-6" />}
                title="Desenvolvimento Web"
                desc="Criação de websites modernos, rápidos e responsivos, focados na experiência do utilizador."
                color="text-cyan-400"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              className="flex-grow w-64"
            >
              <Cards
                icon={<FaServer className="text-4xl text-purple-400 mb-6" />}
                title="Backend Development"
                desc="Desenvolvimento de APIs robustas, bases de dados eficientes e arquiteturas escaláveis para aplicações web."
                color="text-purple-400"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.9 }}
              className="flex-grow w-64"
            >
              <Cards
                icon={<FaPaintBrush className="text-4xl text-pink-400 mb-6" />}
                title="Design & Criatividade"
                desc="Interfaces visuais atrativas e funcionais, alinhadas com as melhores práticas de UI/UX."
                color="text-pink-400"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.4 }}
              className="flex-grow w-64"
            >
              <Cards
                icon={<FaBolt className="text-4xl text-yellow-400 mb-6" />}
                title="Engenharia de Software"
                desc="Soluções robustas, escaláveis e seguras, aplicando boas práticas de engenharia."
                color="text-yellow-400"
              />
            </motion.div>
          </main>
        </section>
        <section className="ml-15 mr-15 mt-18">
          <div className="flex items-center justify-between pb-2 mb-8">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-purple-400">EXPERIENCIA</h2>
          </div>
          <div className="relative flex items-center">
            <hr className="flex-grow border-[var(--border)]" />
            <span className="absolute right-0 flex items-center justify-center sm:mr-10 md:mr-14 sm:w-16 sm:h-16 md:w-20 md:h-20 sm:p-0 rounded-full bg-[var(--foreground)]">
              <FaBriefcase className="text-3xl text-[#181818]" />
            </span>
          </div>
          <motion.div className="flex flex-col divide-y divide-[var(--border)]">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 60 }}
              animate={inView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-between py-14 cursor-pointer transition-all duration-500 ease-in-out group"
            >
              <div className="ml-20 mr-20 transition-all duration-500 ease-in-out group-hover:ml-12 group-hover:mr-12">
                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">MercadoTV</h3>
                <div className="text-base text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">2025</div>
              </div>
              <div className="flex flex-col items-end min-w-[220px] mt-6 md:mt-0 mr-20 transition-all duration-500 ease-in-out group-hover:mr-12">
                <div className="text-xl font-semibold transition-colors duration-500 group-hover:text-[var(--cyan)]">Full Stack Development</div>
                <div className="text-base text-[var(--foreground)] transition-colors duration-500 group-hover:text-[var(--cyan)]">React, Node.js, PostGreSQL</div>
              </div>
            </motion.div>
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, y: 60 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-between py-14 cursor-pointer transition-all duration-500 ease-in-out group"
            >
              <div className="ml-20 mr-20 transition-all duration-500 ease-in-out group-hover:ml-12 group-hover:mr-12">
                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">NUCLEO DE ESTUDANTES DE INFORMATICA (NEI)</h3>
                <div className="text-base text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">2023, 2024, 2025</div>
              </div>
              <div className="flex flex-col items-end min-w-[220px] mt-6 md:mt-0 ml-20 mr-20 transition-all duration-500 ease-in-out group-hover:ml-12 group-hover:mr-12">
                <div className="text-xl font-semibold transition-colors duration-500 group-hover:text-[var(--cyan)]">Coordenador e colaborador</div>
              </div>
            </motion.div>
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, y: 60 }}
              animate={inView3 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-between py-14 cursor-pointer transition-all duration-500 ease-in-out group"
            >
              <div className="ml-20 mr-20 transition-all duration-500 ease-in-out group-hover:ml-12 group-hover:mr-12">
                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">VICAIMA</h3>
                <div className="text-base text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">2021, 2023, 2024</div>
              </div>
              <div className="flex flex-col items-end min-w-[220px] mt-6 md:mt-0 ml-20 mr-20 transition-all duration-500 ease-in-out group-hover:ml-12 group-hover:mr-12">
                <div className="text-xl font-semibold transition-colors duration-500 group-hover:text-[var(--cyan)]">Trabalho de verão</div>
              </div>
            </motion.div>
            <motion.div
              ref={ref4}
              initial={{ opacity: 0, y: 60 }}
              animate={inView4 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col md:flex-row justify-between py-14 cursor-pointer transition-all duration-500 ease-in-out group"
            >
              <div className="ml-20 mr-20 transition-all duration-500 ease-in-out group-hover:ml-12 group-hover:mr-12">
                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">RIO CAIMA</h3>
                <div className="text-base text-[var(--foreground)] mb-2 transition-colors duration-500 group-hover:text-[var(--cyan)]">2025</div>
              </div>
              <div className="flex flex-col items-end min-w-[220px] mt-6 md:mt-0 ml-20 mr-20 transition-all duration-500 ease-in-out group-hover:ml-12 group-hover:mr-12">
                <div className="text-xl font-semibold transition-colors duration-500 group-hover:text-[var(--cyan)]">Trabalho de verão</div>
              </div>
            </motion.div>
            <hr className="border-[var(--border)]" />
          </motion.div>
          <Link
            href="/projects"
            className="relative flex items-center gap-2 p-4 rounded-full border border-[var(--border)] text-lg font-semibold text-[var(--foreground)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-foreground mt-12 mx-auto w-fit overflow-hidden group"
            style={{ boxShadow: "0 0 0 0px #222 inset" }}
          >
            <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 rounded-full" style={{ backgroundColor: '#18aaff' }}></div>
            
            <span className="relative z-10 rounded-full animate-pulse"></span>
            <h1 className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]">Ver mais</h1>
            <FaArrowRight className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]" />
          </Link>
        </section>
        <section className="mt-12 w-full max-w-7xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-purple-400 mb-4">O MEU TECH STACK</h2>
          <p className="text-center text-2xl md:text-3xl font-semibold mb-8">
            As
            <span className="text-[var(--cyan)]"> tecnologias </span>
            que mais
            <span className="text-[var(--yellow)]"> utilizo</span>
          </p>
          <TechStackSlider />
        </section>
        <Footer />
        <section className="text-l font-semibold ml-5 text-[var(--foreground)]">
          tomasploureiro ©2025 - Privacy Policy
        </section>
      </div>
    );
};

export default Home;