"use client"
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight, FaUser, FaGraduationCap, FaCode, FaLaptopCode, FaDatabase, FaPalette } from "react-icons/fa";
import Footer from "@/components/footer";

const AboutPage = () => {
    const heroRef = useRef(null);
    const servicesRef = useRef(null);
    const profileRef = useRef(null);
    
    const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
    const profileInView = useInView(profileRef, { once: true, margin: "-100px" });

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />
            
            <section ref={heroRef} className="pt-24 pb-16 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                    Olá! Sou o <span className="inline-flex items-center">Tomás <span className="ml-2 text-4xl">👋</span></span>
                                </h1>
                            </motion.div>
                            
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-lg sm:text-xl text-[var(--foreground)]/80 leading-relaxed max-w-2xl"
                            >
                                Como Estudante de Engenharia de Software, destaco-me na criação de aplicações escaláveis, 
                                melhoria da experiência do utilizador e otimização de processos de desenvolvimento.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="flex justify-center lg:justify-end"
                        >
                            <div className="relative">
                                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[var(--cyan)] to-[var(--purple)] p-1">
                                    <div className="w-full h-full rounded-full bg-[var(--background)] flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/assets/Loureiro_Tomas.jpg"
                                            alt="Tomás Loureiro"
                                            className="w-72 h-72 rounded-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-[var(--foreground)] text-[var(--background)] px-6 py-3 rounded-full shadow-lg">
                                    <div className="text-center">
                                        <div className="text-sm font-bold">A minha experiência em</div>
                                        <div className="text-xs">design, desenvolvimento e usabilidade</div>
                                        <div className="text-xs">permite-me criar soluções digitais</div>
                                        <div className="text-xs font-bold">com foco em engenharia de software.</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section ref={servicesRef} className="py-16 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold text-[var(--purple)] mb-8">
                            Posso ajudar-te com
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                            className="space-y-6 border-t border-[var(--border)] pt-8"
                        >
                            <div className="text-sm text-[var(--foreground)]/60 font-mono">01</div>
                            <h3 className="text-2xl sm:text-3xl font-bold">Desenvolvimento Web</h3>
                            <p className="text-[var(--foreground)]/80 leading-relaxed">
                                Desenvolvo aplicações web modernas, escaláveis e otimizadas desde o design até ao deploy.
                                Utilizo frameworks como React, Next.js e Tailwind CSS para criar interfaces 
                                responsivas e dinâmicas, com foco na performance, acessibilidade e experiência do utilizador.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="space-y-6 border-t border-[var(--border)] pt-8"
                        >
                            <div className="text-sm text-[var(--foreground)]/60 font-mono">02</div>
                            <h3 className="text-2xl sm:text-3xl font-bold">Desenvolvimento de Software</h3>
                            <p className="text-[var(--foreground)]/80 leading-relaxed">
                                Trabalho com linguagens como Python, Java e C++ para desenvolver desde aplicações 
                                académicas até sistemas mais robustos e de alto desempenho. Tenho experiência em 
                                automação de processos, análise de dados e desenvolvimento de soluções orientadas a objetos.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            className="space-y-6 border-t border-[var(--border)] pt-8"
                        >
                            <div className="text-sm text-[var(--foreground)]/60 font-mono">03</div>
                            <h3 className="text-2xl sm:text-3xl font-bold">O pacote completo</h3>
                            <p className="text-[var(--foreground)]/80 leading-relaxed">
                                Tenho capacidade de trabalhar em projetos completos full-stack desde o conceito até à 
                                implementação. O meu conhecimento em design, juntamente com competências em frontend 
                                e backend, incluindo integração de bases de dados, permite-me criar soluções completas 
                                e funcionais.
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="flex justify-end mt-16"
                    >
                        <Link
                            href="/contact"
                            className="relative flex items-center gap-2 p-3 sm:p-4 rounded-full border border-[var(--border)] text-base sm:text-lg font-semibold text-[var(--foreground)] shadow-lg transition-all duration-300 hover:scale-105 hover:border-foreground w-fit overflow-hidden group whitespace-nowrap"
                            style={{ boxShadow: "0 0 0 2px #222 inset" }}
                        >
                            <div className="absolute inset-0 transform translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 rounded-full" style={{ backgroundColor: '#18aaff' }}></div>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]">Contacta-me</span>
                            <FaArrowRight className="relative z-10 transition-colors duration-300 group-hover:text-[var(--foreground)]" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section ref={profileRef} className="py-16 px-4 sm:px-8 border-t border-[var(--border)]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            animate={profileInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <FaUser className="text-[var(--cyan)]" />
                                    Sobre mim
                                </h3>
                                <p className="text-[var(--foreground)]/80 leading-relaxed">
                                    Sou estudante de 1º ano de Mestrado em Engenharia de Software na Universidade de Coimbra. 
                                    Apaixonado por tecnologia e inovação, dedico-me a criar soluções digitais que fazem a diferença.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <FaGraduationCap className="text-[var(--purple)]" />
                                    Formação
                                </h3>
                                <ul className="space-y-2 text-[var(--foreground)]/80">
                                    <li>• Mestrado em Engenharia de Software - Universidade de Coimbra (2025-2027)</li>
                                    <li>• Licenciatura em Engenharia Informática - Universidade de Coimbra (2022-2025)</li>
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={profileInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <FaCode className="text-[var(--yellow)]" />
                                    Competências Técnicas
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <FaLaptopCode className="text-[var(--cyan)]" />
                                            <span className="font-semibold">Frontend</span>
                                        </div>
                                        <ul className="text-sm text-[var(--foreground)]/80 ml-6 space-y-1">
                                            <li>• React.js & Next.js</li>
                                            <li>• JavaScript</li>
                                            <li>• Tailwind CSS</li>
                                            <li>• Framer Motion</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2">
                                            <FaDatabase className="text-[var(--purple)]" />
                                            <span className="font-semibold">Backend</span>
                                        </div>
                                        <ul className="text-sm text-[var(--foreground)]/80 ml-6 space-y-1">
                                            <li>• Java</li>
                                            <li>• Python</li>
                                            <li>• C++</li>
                                            <li>• C</li>
                                            <li>• Node.js</li>
                                            <li>• PostgreSQL</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                    <FaPalette className="text-[var(--pink)]" />
                                    Design & Tools
                                </h3>
                                <ul className="text-[var(--foreground)]/80 space-y-1">
                                    <li>• UI/UX Design</li>
                                    <li>• Figma</li>
                                    <li>• Git & GitHub</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            <Footer />
            <section className="text-sm sm:text-base font-semibold ml-4 sm:ml-5 text-[var(--foreground)] mb-4">
                tomasploureiro ©2025 - Privacy Policy
            </section>
        </div>
    );
};

export default AboutPage;
