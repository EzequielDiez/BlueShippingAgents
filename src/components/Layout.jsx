import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();
    // El estado inicial depende de si ya se ha animado
    const [showAnimation, setShowAnimation] = useState(() => {
        const hasAnimated = sessionStorage.getItem('hasAnimated');
        return !hasAnimated && location.pathname === '/';
    });

    useEffect(() => {
        // Verificar si ya se ha animado en esta sesión
        const hasAnimated = sessionStorage.getItem('hasAnimated');

        if (hasAnimated) {
            // Si ya se ha animado, mantener el navbar pequeño
            setShowAnimation(false);
        } else if (location.pathname === '/') {
            // Si es la página de inicio y no se ha animado antes
            // El navbar ya está grande (por el estado inicial)
            // Solo necesitamos achicarlo después de 1.5 segundos
            const timer = setTimeout(() => {
                setShowAnimation(false);
                // Guardar en sessionStorage que ya se ha animado
                sessionStorage.setItem('hasAnimated', 'true');
            }, 1500);

            return () => clearTimeout(timer);
        } else {
            // Si no es la página de inicio, mantener el navbar pequeño
            setShowAnimation(false);
        }
    }, [location.pathname]);

    return (
        <div>
            <header>
                <Navbar isInitialAnimation={showAnimation} />
            </header>
            <main className={`transition-all duration-2500 ease-in-out ${showAnimation ? 'pt-[50vh]' : 'pt-24'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout; 