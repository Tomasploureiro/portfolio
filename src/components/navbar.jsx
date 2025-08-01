"use client"
import "../app/globals.css";
import Link from "next/link";
import { FaAddressCard, FaHome, FaBriefcase, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return(
        <nav className="">
            <div className="flex items-center justify-between text-[var(--foreground)] text-l w-full p-2">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 border-2 border-solid border-[var(--border)] rounded-full px-4 py-2"
                    >
                        <span className="inline-block w-6 h-6 rounded-full bg-[var(--foreground)] mr-2"></span>
                        <span>@tomasploureiro</span>
                    </Link>
                </div>
                
                <div className="hidden md:flex border-2 border-solid border-[var(--border)] rounded-full">
                    <div className="flex p-3 gap-5">
                        <Link href="/" className="nav-anim-hover flex flex-row items-center gap-1">
                            <FaHome />
                            <h1>Inicio</h1>
                        </Link>
                        <Link href="/projects" className="nav-anim-hover flex flex-row items-center gap-1">
                            <FaBriefcase />
                            <h1>Projetos</h1>
                        </Link>
                        <Link href="/about" className="nav-anim-hover flex flex-row items-center gap-1">
                            <FaAddressCard />
                            <h1>Sobre Mim</h1>
                        </Link>
                    </div>
                </div>
                
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex">
                        <Link
                            href="/contact"
                            className="nav-anim-hover flex items-center gap-2 border-2 border-solid border-[var(--border)] rounded-full px-4 py-2"
                        >
                            <FaEnvelope />
                            <span>Contacta-me</span>
                        </Link>
                    </div>
                    
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="flex items-center justify-center w-10 h-10 border-2 border-solid border-[var(--border)] rounded-full"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className="md:hidden fixed left-0 w-full bg-[var(--background)] z-50 mobile-menu border-b border-[var(--border)]" style={{ top: '60px' }}>
                    <div className="flex flex-col h-full p-3">
                        <div className="flex flex-col space-y-2">
                            <Link 
                                href="/" 
                                className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl text-lg font-medium hover:border-[var(--cyan)] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>Home</span>
                                <FaHome className="text-lg" />
                            </Link>
                            <Link 
                                href="/projects" 
                                className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl text-lg font-medium hover:border-[var(--cyan)] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>Projetos</span>
                                <FaBriefcase className="text-lg" />
                            </Link>
                            <Link 
                                href="/about" 
                                className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl text-lg font-medium hover:border-[var(--cyan)] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>Sobre Mim</span>
                                <FaAddressCard className="text-lg" />
                            </Link>
                            <Link 
                                href="/contact" 
                                className="flex items-center justify-between p-4 border border-[var(--border)] rounded-xl text-lg font-medium hover:border-[var(--cyan)] transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span>Contacto</span>
                                <FaEnvelope className="text-lg" />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            
            <hr className="border-b border-[var(--border)] w-full absolute left-0" />
        </nav>
    )
}
export default Navbar;