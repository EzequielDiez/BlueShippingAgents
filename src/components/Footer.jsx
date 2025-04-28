import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full flex flex-col items-center mt-16 mb-4">
            <img
                src="/images/logo-footer.svg"
                alt="Blue Shipping Agents Logo"
                className="w-32 mb-10 select-none"
            />
            <nav className="mb-3 select-none">
                <ul className="flex flex-row gap-10 md:gap-16 text-[#1D4F87] font-normal text-lg md:text-xl font-['Sahar']">
                    <li>
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            INICIO
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/nosotros"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            NOSOTROS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/servicios"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            SERVICIOS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/puertos"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            PUERTOS
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacto"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            CONTACTO
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="w-full max-w-3xl border-t border-[#1D4F87] my-4" />
            <div className="flex flex-row gap-6 mb-10 select-none">
                <img
                    src="/images/icono-facebook.svg"
                    alt="Facebook"
                    className="w-9 h-9 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110"
                />
                <img
                    src="/images/icono-instagram.svg"
                    alt="Instagram"
                    className="w-9 h-9 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110"
                />
            </div>
            <div className="text-[#1D4F87] text-center text-base font-['Sahar'] mb-10">
                <div>© Blue Shipping Agents 2025, All rights reserved.</div>
                <div>Desarrollado por Online Agencia Creativa.</div>
            </div>
        </footer>
    );
};

export default Footer; 