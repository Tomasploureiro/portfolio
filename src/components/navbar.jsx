import "../app/globals.css";
import Link from "next/link";
import { FaAddressCard, FaHome, FaBriefcase, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
    return(
        <nav className="">
            <div className="flex items-center text-[var(--foreground)] text-l w-full p-2">
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center gap-2 border-2 border-solid border-[var(--border)] rounded-full px-4 py-2"
                    >
                        <span className="inline-block w-6 h-6 rounded-full bg-[var(--foreground)] mr-2"></span>
                        <span>@tomasploureiro</span>
                    </Link>
                </div>
                <div className="flex border-2 border-solid border-[var(--border)] rounded-full mx-auto">
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
                <div className="flex items-center">
                    <Link
                        href="/contact"
                        className="nav-anim-hover flex items-center gap-2 border-2 border-solid border-[var(--border)] rounded-full px-4 py-2"
                    >
                        <FaEnvelope />
                        <span>Contacta-me</span>
                    </Link>
                </div>
            </div>
            <hr className="border-b border-[var(--border)] w-full absolute left-0" />
        </nav>
    )
}
export default Navbar;