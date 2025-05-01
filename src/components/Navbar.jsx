import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [isEnglish, setIsEnglish] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) { // scrolling down
                setIsVisible(false);
            } else { // scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar, { passive: true });

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const isActive = (path) => {
        return location.pathname === path;
    };

    const toggleLanguage = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 bg-[#1D4F87] px-4 text-white h-24 z-50 transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
                <div className="flex items-center w-32">
                    <img
                        src="/images/logo-header.svg"
                        alt="Blue Shipping Agents Logo"
                        className="w-full h-auto"
                    />
                </div>
                <ul className="flex list-none gap-12 m-0 p-0">
                    <li>
                        <Link to="/" className="text-white no-underline font-['Sahar'] relative group flex items-center h-full">
                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                            <span className={`pl-4 relative z-10 ${isActive('/') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>INICIO</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/nosotros" className="text-white no-underline font-['Sahar'] relative group flex items-center h-full">
                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/nosotros') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                            <span className={`pl-4 relative z-10 ${isActive('/nosotros') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>NOSOTROS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/servicios" className="text-white no-underline font-['Sahar'] relative group flex items-center h-full">
                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/servicios') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                            <span className={`pl-4 relative z-10 ${isActive('/servicios') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>SERVICIOS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/puertos" className="text-white no-underline font-['Sahar'] relative group flex items-center h-full">
                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/puertos') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                            <span className={`pl-4 relative z-10 ${isActive('/puertos') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>PUERTOS</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="text-white no-underline font-['Sahar'] relative group flex items-center h-full">
                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/contacto') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                            <span className={`pl-4 relative z-10 ${isActive('/contacto') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>CONTACTO</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10">
                <button
                    onClick={toggleLanguage}
                    className="relative inline-flex items-center h-7 w-20 rounded-full bg-transparent border border-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg cursor-pointer"
                >
                    <span
                        className={`absolute left-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${isEnglish ? 'text-white' : 'text-[#1D4F87]'
                            }`}
                    >
                        ES
                    </span>
                    <span
                        className={`absolute right-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${isEnglish ? 'text-[#1D4F87]' : 'text-white'
                            }`}
                    >
                        EN
                    </span>
                    <span
                        className={`absolute h-7 w-10 rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md z-10 ${isEnglish ? 'translate-x-10' : 'translate-x-0'
                            }`}
                    />
                </button>
            </div>
        </nav>
    );
};

export default Navbar; 