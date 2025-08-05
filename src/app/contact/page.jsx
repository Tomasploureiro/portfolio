"use client"
import "@/app/globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const ContactPage = () => {
    const heroRef = useRef(null);
    const formRef = useRef(null);
    
    const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const formInView = useInView(formRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    organization: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
            <Navbar />
            
            <section ref={heroRef} className="pt-24 pb-16 px-4 sm:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
                                    Vamos Conectar!
                                </h1>
                                <p className="text-lg sm:text-xl text-[var(--foreground)]/80 leading-relaxed max-w-2xl">
                                    Estás à procura de colaborar num projeto, precisas de uma solução para um desafio técnico, 
                                    ou simplesmente queres falar sobre tecnologia? Sente-te à vontade para entrar em contacto. 
                                    Juntos, podemos transformar ideias em realidade.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 p-6 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--border)]">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--cyan)] to-[var(--purple)] p-0.5">
                                        <img
                                            src="/assets/Loureiro_Tomas.jpg"
                                            alt="Tomás Loureiro"
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">DETALHES DE CONTACTO</h3>
                                        <p className="text-[var(--foreground)]/80">tompinlou@gmail.com</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold">REDES SOCIAIS</h3>
                                    <div className="space-y-3">
                                        <motion.a
                                            href="https://github.com/tomasploureiro"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-[var(--foreground)]/80 hover:text-[var(--cyan)] transition-colors duration-300"
                                            whileHover={{ x: 10 }}
                                        >
                                            <FaGithub className="text-xl" />
                                            <span>GitHub</span>
                                        </motion.a>
                                        <motion.a
                                            href="https://www.linkedin.com/in/tomasploureiro/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-[var(--foreground)]/80 hover:text-[var(--cyan)] transition-colors duration-300"
                                            whileHover={{ x: 10 }}
                                        >
                                            <FaLinkedin className="text-xl" />
                                            <span>LinkedIn</span>
                                        </motion.a>
                                        <motion.a
                                            href="https://www.instagram.com/tomasploureiro/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-[var(--foreground)]/80 hover:text-[var(--cyan)] transition-colors duration-300"
                                            whileHover={{ x: 10 }}
                                        >
                                            <FaInstagram className="text-xl" />
                                            <span>Instagram</span>
                                        </motion.a>
                                        <motion.a
                                            href="https://www.facebook.com/tomas.loureiro.714/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-[var(--foreground)]/80 hover:text-[var(--cyan)] transition-colors duration-300"
                                            whileHover={{ x: 10 }}
                                        >
                                            <FaFacebook className="text-xl" />
                                            <span>Facebook</span>
                                        </motion.a>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            ref={formRef}
                            initial={{ opacity: 0, y: 60 }}
                            animate={formInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className="bg-[var(--foreground)]/5 border border-[var(--border)] rounded-3xl p-8"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-mono text-[var(--foreground)]/60 mb-3">
                                            01 &nbsp;&nbsp; Qual é o teu nome?
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="O teu nome"
                                            className="w-full bg-transparent border-b border-[var(--border)] pb-3 text-lg focus:border-[var(--cyan)] focus:outline-none transition-colors duration-300 placeholder-[var(--foreground)]/40"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-[var(--foreground)]/60 mb-3">
                                            02 &nbsp;&nbsp; Qual é o teu email?
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="exemplo@email.com"
                                            className="w-full bg-transparent border-b border-[var(--border)] pb-3 text-lg focus:border-[var(--cyan)] focus:outline-none transition-colors duration-300 placeholder-[var(--foreground)]/40"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-[var(--foreground)]/60 mb-3">
                                            03 &nbsp;&nbsp; Qual é o nome da tua organização?
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleInputChange}
                                            placeholder="Nome da empresa/organização"
                                            className="w-full bg-transparent border-b border-[var(--border)] pb-3 text-lg focus:border-[var(--cyan)] focus:outline-none transition-colors duration-300 placeholder-[var(--foreground)]/40"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-mono text-[var(--foreground)]/60 mb-3">
                                            04 &nbsp;&nbsp; Conta-me sobre o teu projeto
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Descreve o teu projeto, ideia ou como posso ajudar..."
                                            rows={6}
                                            className="w-full bg-transparent border border-[var(--border)] rounded-xl p-4 text-lg focus:border-[var(--cyan)] focus:outline-none transition-colors duration-300 placeholder-[var(--foreground)]/40 resize-none"
                                            required
                                        />
                                    </div>
                                </div>

                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 text-center"
                                    >
                                        ✅ Mensagem enviada com sucesso! Entrarei em contacto contigo em breve.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-center"
                                    >
                                        ❌ Erro ao enviar mensagem. Tenta novamente ou contacta-me diretamente.
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[var(--cyan)] to-[var(--purple)] text-white py-4 px-8 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                >
                                    {isSubmitting ? 'A enviar...' : 'Enviar Mensagem'}
                                </motion.button>
                            </form>
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

export default ContactPage;
