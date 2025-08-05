"use client";
import React from "react";
import { motion } from "framer-motion";
import {FaExternalLinkAlt } from "react-icons/fa";

const ProjectDisplay = ({ projectData }) => {
    if (!projectData) return <div className="text-center">Loading...</div>;
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={projectData.projectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-20"
        >
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${projectData.imagePosition === "left" ? "lg:grid-flow-col-dense" : ""}`}>
                <div className={`space-y-6 ${projectData.imagePosition === "left" ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--foreground)]">
                            {projectData.title || "Untitled Project"}
                        </h2>
                        <span className="text-lg sm:text-xl text-[var(--foreground)]/70">
                            {projectData.year || "N/A"}
                        </span>
                    </div>
                    
                    <div className="text-[var(--foreground)]/80 text-lg">
                        {projectData.technologies || "Technologies not specified"}
                    </div>

                    <div className="space-y-4 text-[var(--foreground)]/90 leading-relaxed">
                        {projectData.bulletPoints && Array.isArray(projectData.bulletPoints) && projectData.bulletPoints.length > 0 ? (
                            projectData.bulletPoints.map((point, index) => (
                                <p key={`point-${index}`}>• {point}</p>
                            ))
                        ) : (
                            <p>No description available.</p>
                        )}
                    </div>

                    <div className="flex gap-4 pt-4">                   
                        {projectData.liveUrl && (
                            <motion.a
                                href={projectData.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--cyan)] text-[var(--background)] hover:bg-[var(--cyan)]/80 transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaExternalLinkAlt className="text-lg" />
                                <span>Visitar</span>
                            </motion.a>
                        )}
                    </div>
                </div>

                <div className={`relative ${projectData.imagePosition === "left" ? "lg:col-start-1" : ""}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        {projectData.title === "MercadoTV" ? (
                            <div className="aspect-video relative">
                                <img 
                                    src="/assets/mercadotv.png" 
                                    alt="MercadoTV - Sistema de Segurança"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0"></div>
                            </div>
                        ) : (
                            <div className=" p-8 flex items-center justify-center">
                                <div className="text-center text-[var(--foreground)]">
                                    <h3 className="text-2xl font-bold mb-2">{projectData.title || "Project"}</h3>
                                    <p className="text-lg opacity-90">Project Preview</p>
                                </div>
                            </div>
                        )}
                        
                        <div className="bg-gray-800 p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <div className="bg-gray-700 rounded p-2 text-xs text-gray-300">
                                {projectData.title === "MercadoTV" ? "mercadotv.pt" : 
                                 projectData.liveUrl ? projectData.liveUrl.replace('https://', '').replace('http://', '') : 'project-demo.com'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDisplay;
