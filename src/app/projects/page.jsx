"use client"
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import ProjectDisplay from "@/components/ProjectDisplay";
import { FaBriefcase } from "react-icons/fa";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import Footer from "@/components/footer";

const ProjectsPage = () => {
    const projectRef = useRef(null);
    const projectInView = useInView(projectRef, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "MercadoTV",
            year: "2025",
            technologies: "React, Node.js, CSS, PostgreSQL",
            bulletPoints: [
                "Website de e-commerce especializado em sistemas de segurança e videovigilância.",
                "Interface intuitiva e profissional para apresentação de produtos como câmaras de videovigilância, alarmes e sistemas de monitorização.",
                "Implementação de catálogo de produtos com funcionalidades de pesquisa e filtros por categoria e especificações técnicas.",
                "Design responsivo otimizado para facilitar a navegação e compra de equipamentos de segurança.",
                "Foco na experiência do utilizador para aumentar a confiança na compra de sistemas de segurança online."
            ],
            liveUrl: "https://mercadotv.pt"
        },
    ];

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <div className="relative z-10">
                <Navbar />
                
                <section className="pt-24 pb-12 px-4 sm:px-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--foreground)] mb-8"
                        >
                            Projetos
                        </motion.h1>
                        
                        <motion.div 
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                            className="relative flex items-center mb-12"
                        >
                            <div className="flex-grow border-t border-[var(--border)]"></div>
                            <motion.span 
                                initial={{ opacity: 0, scale: 0, rotate: -180 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                                className="absolute right-0 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--foreground)]"
                            >
                                <FaBriefcase className="text-2xl sm:text-3xl text-[var(--background)]" />
                            </motion.span>
                        </motion.div>
                    </div>
                </section>

                <section className="px-4 sm:px-8 pb-20" ref={projectRef}>
                    <div className="max-w-7xl mx-auto">
                        {projects.map((project, index) => (
                            <div key={index}>
                                <ProjectDisplay
                                    projectData={{
                                        ...project,
                                        imagePosition: index % 2 === 0 ? "right" : "left",
                                        projectInView: projectInView
                                    }}
                                />
                                
                                {index < projects.length - 1 && (
                                    <div className="border-t border-[var(--border)] my-20"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
            <section className="text-sm sm:text-base font-semibold ml-4 sm:ml-5 text-[var(--foreground)] mb-4">
                tomasploureiro ©2025 - Privacy Policy
            </section>
        </div>
    );
};

export default ProjectsPage;
