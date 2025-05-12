import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="w-full flex flex-col items-center mt-8 md:mt-16 mb-4 px-4">
            <img
                src="./images/logo-footer.svg"
                alt="Blue Shipping Agents Logo"
                className="w-24 md:w-32 mb-6 md:mb-10 select-none"
            />
            <nav className="mb-3 select-none w-full max-w-4xl mx-auto">
                <ul className="footer-nav text-[#1D4F87] font-normal text-base md:text-lg lg:text-xl font-['Sahar']">
                    <li>
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            {t('nav.home').toUpperCase()}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/nosotros"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            {t('nav.about').toUpperCase()}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/servicios"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            {t('nav.services').toUpperCase()}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/puertos"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            {t('nav.ports').toUpperCase()}
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contacto"
                            className="inline-block cursor-pointer hover:text-[#0D3A6A] transition-all duration-300 hover:scale-110"
                        >
                            {t('nav.contact').toUpperCase()}
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="w-full max-w-2xl px-4 border-t border-[#1D4F87] my-4" />
            <div className="flex flex-row gap-6 mb-6 md:mb-10 select-none">
                <img
                    src="./images/icono-facebook.svg"
                    alt="Facebook"
                    className="w-7 h-7 md:w-9 md:h-9 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110"
                />
                <img
                    src="./images/icono-instagram.svg"
                    alt="Instagram"
                    className="w-7 h-7 md:w-9 md:h-9 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110"
                />
            </div>
            <div className="text-[#1D4F87] text-center text-sm md:text-base font-['Sahar'] mb-6 md:mb-10">
                <div>© Blue Shipping Agents 2025, All rights reserved.</div>
                <div>Desarrollado por Online Agencia Creativa.</div>
            </div>
            <style jsx>{`
                .footer-nav {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                }
                @media (min-width: 768px) {
                    .footer-nav {
                        flex-direction: row;
                        gap: 2rem;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer; 