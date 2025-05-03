import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, isInitialAnimation }) => {
    const [showAnimation, setShowAnimation] = useState(isInitialAnimation);

    useEffect(() => {
        if (isInitialAnimation) {
            // Inicialmente mostramos el cuadrado blanco
            setShowAnimation(true);
            
            // Esperamos 2 segundos antes de iniciar la animación
            const timer = setTimeout(() => {
                setShowAnimation(false);
            }, 2000);
            
            return () => clearTimeout(timer);
        } else {
            // Si no es la animación inicial, no mostramos el cuadrado
            setShowAnimation(false);
        }
    }, [isInitialAnimation]);

    return (
        <div>
            <header>
                <Navbar isInitialAnimation={showAnimation} />
            </header>
            <main className={`transition-all duration-1500 ease-in-out ${showAnimation ? 'pt-[50vh]' : 'pt-24'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout; 