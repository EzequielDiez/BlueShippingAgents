import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ isInitialAnimation }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isEnglish, setIsEnglish] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showLinks, setShowLinks] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(() => {
        return !sessionStorage.getItem('hasLoaded');
    });

    const handleNavigation = (path) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    };

    useEffect(() => {
        // Solo mostrar la animación en la primera carga
        if (isFirstLoad) {
            const timer = setTimeout(() => {
                setShowLinks(true);
                sessionStorage.setItem('hasLoaded', 'true');
            }, 2500);
            return () => clearTimeout(timer);
        } else {
            // En cargas posteriores, mostrar los links inmediatamente
            setShowLinks(true);
        }
    }, [isFirstLoad]);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY === 0) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) { // scrolling down
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

    const shouldAnimate = isFirstLoad;

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 ${isInitialAnimation ? 'h-[50vh] bg-white' : 'h-24 bg-[#1D4F87]'} px-4 text-white z-50 transition-all duration-2500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            {/* Language Toggle (Desktop) */}
            {!isInitialAnimation && (
                <div className="absolute right-4 h-full flex items-center">
                    <div className={`language-toggle ${isFirstLoad ? 'transition-all duration-1000 delay-1000' : ''} ${showLinks ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                            onClick={toggleLanguage}
                            className="relative inline-flex items-center h-7 w-20 rounded-full bg-transparent border border-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg cursor-pointer z-50"
                        >
                            <span
                                className={`absolute left-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${isEnglish ? 'text-white' : 'text-[#1D4F87]'}`}
                            >
                                ES
                            </span>
                            <span
                                className={`absolute right-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${isEnglish ? 'text-[#1D4F87]' : 'text-white'}`}
                            >
                                EN
                            </span>
                            <span
                                className={`absolute h-7 w-10 rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md z-10 ${isEnglish ? 'translate-x-10' : 'translate-x-0'}`}
                            />
                        </button>
                    </div>
                </div>
            )}
            <div className="max-w-7xl mx-auto relative h-full">
                <div className="flex items-center justify-between h-full">
                    <Link to="/" className={`flex items-center ${isInitialAnimation ? 'justify-center w-full' : ''}`} onClick={(e) => {
                        e.preventDefault();
                        handleNavigation('/');
                    }}>
                        <div className={`flex items-center justify-center transition-all duration-2500 ease-in-out absolute ${isInitialAnimation ? 'w-96 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' : 'w-32 left-0 top-1/2 -translate-y-1/2'}`}>
                            <img
                                src={isInitialAnimation ? "/images/logo-footer.svg" : "/images/logo-header.svg"}
                                alt="Blue Shipping Agents Logo"
                                className={`w-full h-auto transition-all duration-2500 ease-in-out ${isInitialAnimation ? 'filter-none' : 'filter brightness-0 invert'}`}
                            />
                        </div>
                    </Link>
                    {!isInitialAnimation && (
                        <div className="flex items-center">
                            {/* Desktop Menu */}
                            <div className="desktop-menu">
                                <ul className="menu-list">
                                    <li>
                                        <Link to="/" onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation('/');
                                        }} className={`text-white no-underline font-['Sahar'] relative group flex items-center h-full ${isFirstLoad ? 'transition-all duration-1000 delay-0' : ''} ${showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                                            <span className={`pl-4 relative z-10 ${isActive('/') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>INICIO</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/nosotros" onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation('/nosotros');
                                        }} className={`text-white no-underline font-['Sahar'] relative group flex items-center h-full ${isFirstLoad ? 'transition-all duration-1000 delay-200' : ''} ${showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/nosotros') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                                            <span className={`pl-4 relative z-10 ${isActive('/nosotros') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>NOSOTROS</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/servicios" onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation('/servicios');
                                        }} className={`text-white no-underline font-['Sahar'] relative group flex items-center h-full ${isFirstLoad ? 'transition-all duration-1000 delay-400' : ''} ${showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/servicios') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                                            <span className={`pl-4 relative z-10 ${isActive('/servicios') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>SERVICIOS</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/puertos" onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation('/puertos');
                                        }} className={`text-white no-underline font-['Sahar'] relative group flex items-center h-full ${isFirstLoad ? 'transition-all duration-1000 delay-600' : ''} ${showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/puertos') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                                            <span className={`pl-4 relative z-10 ${isActive('/puertos') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>PUERTOS</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contacto" onClick={(e) => {
                                            e.preventDefault();
                                            handleNavigation('/contacto');
                                        }} className={`text-white no-underline font-['Sahar'] relative group flex items-center h-full ${isFirstLoad ? 'transition-all duration-1000 delay-800' : ''} ${showLinks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                            <span className={`absolute -left-2 top-2.5 -translate-y-1/2 h-5 w-1.5 bg-gradient-to-r from-white to-[#1D4F87] ${isActive('/contacto') ? 'w-[calc(100%+2rem)]' : 'group-hover:w-[calc(100%+2rem)]'} transition-all duration-300`}></span>
                                            <span className={`pl-4 relative z-10 ${isActive('/contacto') ? 'text-[#1D4F87]' : 'group-hover:text-[#1D4F87]'} transition-colors duration-300`}>CONTACTO</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="hamburger-button">
                                <button
                                    onClick={toggleMobileMenu}
                                    className="text-white focus:outline-none"
                                    aria-label="Toggle menu"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        {isMobileMenuOpen ? (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        ) : (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        )}
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile Menu */}
                            <div
                                className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}
                            >
                                <ul className="flex flex-col list-none m-0 p-4 items-center">
                                    <li className="py-2 w-full text-center">
                                        <Link
                                            to="/"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigation('/');
                                                closeMobileMenu();
                                            }}
                                            className={`text-white no-underline font-['Sahar'] relative group flex items-center justify-center w-full py-2 ${isActive('/') ? 'bg-gradient-to-r from-[#1D4F87] via-white to-[#1D4F87] text-[#1D4F87]' : 'hover:bg-white/10'}`}
                                        >
                                            <span className="relative z-10">INICIO</span>
                                        </Link>
                                    </li>
                                    <li className="py-2 w-full text-center">
                                        <Link
                                            to="/nosotros"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigation('/nosotros');
                                                closeMobileMenu();
                                            }}
                                            className={`text-white no-underline font-['Sahar'] relative group flex items-center justify-center w-full py-2 ${isActive('/nosotros') ? 'bg-gradient-to-r from-[#1D4F87] via-white to-[#1D4F87] text-[#1D4F87]' : 'hover:bg-white/10'}`}
                                        >
                                            <span className="relative z-10">NOSOTROS</span>
                                        </Link>
                                    </li>
                                    <li className="py-2 w-full text-center">
                                        <Link
                                            to="/servicios"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigation('/servicios');
                                                closeMobileMenu();
                                            }}
                                            className={`text-white no-underline font-['Sahar'] relative group flex items-center justify-center w-full py-2 ${isActive('/servicios') ? 'bg-gradient-to-r from-[#1D4F87] via-white to-[#1D4F87] text-[#1D4F87]' : 'hover:bg-white/10'}`}
                                        >
                                            <span className="relative z-10">SERVICIOS</span>
                                        </Link>
                                    </li>
                                    <li className="py-2 w-full text-center">
                                        <Link
                                            to="/puertos"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigation('/puertos');
                                                closeMobileMenu();
                                            }}
                                            className={`text-white no-underline font-['Sahar'] relative group flex items-center justify-center w-full py-2 ${isActive('/puertos') ? 'bg-gradient-to-r from-[#1D4F87] via-white to-[#1D4F87] text-[#1D4F87]' : 'hover:bg-white/10'}`}
                                        >
                                            <span className="relative z-10">PUERTOS</span>
                                        </Link>
                                    </li>
                                    <li className="py-2 w-full text-center">
                                        <Link
                                            to="/contacto"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavigation('/contacto');
                                                closeMobileMenu();
                                            }}
                                            className={`text-white no-underline font-['Sahar'] relative group flex items-center justify-center w-full py-2 ${isActive('/contacto') ? 'bg-gradient-to-r from-[#1D4F87] via-white to-[#1D4F87] text-[#1D4F87]' : 'hover:bg-white/10'}`}
                                        >
                                            <span className="relative z-10">CONTACTO</span>
                                        </Link>
                                    </li>
                                    <li className="py-4 w-full text-center">
                                        <button
                                            onClick={toggleLanguage}
                                            className="relative inline-flex items-center h-7 w-20 rounded-full bg-transparent border border-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg cursor-pointer overflow-hidden"
                                        >
                                            <span
                                                className={`absolute left-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${isEnglish ? 'text-white' : 'text-[#1D4F87]'}`}
                                            >
                                                ES
                                            </span>
                                            <span
                                                className={`absolute right-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${isEnglish ? 'text-[#1D4F87]' : 'text-white'}`}
                                            >
                                                EN
                                            </span>
                                            <span
                                                className={`absolute h-7 w-10 rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md z-10 ${isEnglish ? 'translate-x-10' : 'translate-x-0'}`}
                                            />
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            <style jsx>{`
                                .desktop-menu {
                                    display: none;
                                }
                                .language-toggle {
                                    display: none;
                                    position: absolute;
                                    right: 1.5rem;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    z-index: 100;
                                }
                                .hamburger-button {
                                    display: block;
                                    position: relative;
                                    z-index: 50;
                                }
                                .mobile-menu {
                                    display: none;
                                    position: fixed;
                                    top: 96px;
                                    left: 0;
                                    right: 0;
                                    background-color: #1D4F87;
                                    transform: translateY(-100%);
                                    transition: transform 0.3s ease-in-out;
                                    z-index: 40;
                                }
                                .mobile-menu.active {
                                    display: block;
                                    transform: translateY(0);
                                }
                                .mobile-menu ul {
                                    padding: 1rem;
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    gap: 0.5rem;
                                }
                                .mobile-menu li {
                                    padding: 0;
                                    width: 100%;
                                    text-align: center;
                                }
                                .mobile-menu li:last-child {
                                    padding-bottom: 0;
                                }
                                @media (min-width: 640px) {
                                    .mobile-menu ul {
                                        padding: 1.5rem;
                                        gap: 0.75rem;
                                    }
                                    .mobile-menu li {
                                        padding: 0;
                                    }
                                }
                                @media (min-width: 768px) {
                                    .desktop-menu {
                                        display: block;
                                        margin-right: 7rem;
                                    }
                                    .hamburger-button {
                                        display: none;
                                    }
                                    .menu-list {
                                        display: flex;
                                        list-style: none;
                                        margin: 0;
                                        padding: 0;
                                        gap: 1rem;
                                    }
                                    .language-toggle {
                                        display: block;
                                    }
                                }
                                @media (min-width: 1024px) {
                                    .desktop-menu {
                                        margin-right: 8rem;
                                    }
                                    .menu-list {
                                        gap: 2rem;
                                    }
                                    .language-toggle {
                                        right: 2rem;
                                    }
                                }
                                @media (min-width: 1280px) {
                                    .desktop-menu {
                                        margin-right: 9rem;
                                    }
                                    .menu-list {
                                        gap: 2.5rem;
                                    }
                                    .language-toggle {
                                        right: 2.5rem;
                                    }
                                }
                            `}</style>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 