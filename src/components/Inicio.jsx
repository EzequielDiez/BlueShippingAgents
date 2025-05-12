import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';

const Inicio = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const videoRef = useRef(null);
    const [showGradient, setShowGradient] = useState(() => {
        // Verificar si es la primera carga de la sesión
        return !sessionStorage.getItem('gradientShown');
    });
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        if (showGradient) {
            // Marcar que el degradado ya se mostró en esta sesión
            sessionStorage.setItem('gradientShown', 'true');

            // Ocultar el degradado después de 3 segundos
            const timer = setTimeout(() => {
                setShowGradient(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showGradient]);

    const toggleSound = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <Layout>
            <div>
                <div className="relative h-[calc(100vh-6rem)] sm:h-[calc(100vh-6rem)] md:h-[calc(100vh-6rem)] lg:h-[calc(100vh-6rem)] overflow-hidden">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        onClick={toggleSound}
                        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-3500 ease-in-out opacity-100 cursor-pointer"
                    >
                        <source src="./videos/video-inicio-fps50.mp4" type="video/webm" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                    <button 
                        onClick={toggleSound}
                        className="absolute bottom-6 left-6 z-20 bg-[#1D4F87]/70 hover:bg-[#1D4F87]/90 rounded-full p-4 transition-all duration-300"
                    >
                        {isMuted ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                                <line x1="23" y1="9" x2="17" y2="15"/>
                                <line x1="17" y1="9" x2="23" y2="15"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                            </svg>
                        )}
                    </button>
                    {showGradient && (
                        <div className="absolute inset-0 bg-gradient-to-b from-white from-70% via-white/50 via-85% to-transparent opacity-90 animate-fadeOut"></div>
                    )}
                </div>

                <div>
                    <div className="bg-[#1D4F87]">
                        <div className="max-w-6xl mx-auto h-[160px] md:h-[200px] lg:h-[250px] flex items-end px-4 md:px-6 lg:px-8">
                            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sahar font-bold text-left mb-3">
                                {t('home.title')}
                            </h1>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="max-w-6xl mx-auto h-[250px] md:h-[300px] lg:h-[350px] flex items-start px-4 md:px-6 lg:px-8">
                            <p className="text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl font-sahar text-left mt-4">
                                {t('home.description')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Nueva sección */}
                <div className="relative flex h-[550px] sm:h-[650px] md:h-[700px] shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.7),0_20px_30px_-15px_rgba(0,0,0,0.7)] z-10 services-section" style={{ marginBottom: '-50px' }}>
                    {/* Sección izquierda - fondo blanco */}
                    <div className="w-1/2 bg-white flex flex-col justify-center items-center pl-4 sm:flex-row sm:h-1/2 md:flex-col md:h-full">
                        <div className="services-content px-4 sm:px-6 md:px-8">
                            <h2 className="text-[#1D4F87] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sahar font-bold mb-3 text-center">
                                {t('home.services.title')}
                            </h2>
                            <p className="text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl font-sahar text-center">
                                {t('home.services.description')}
                            </p>
                        </div>
                    </div>

                    {/* Sección derecha - imagen */}
                    <div className="w-1/2 relative sm:h-1/2 md:h-full">
                        <img
                            src="./images/imagen-inicio-servicios.webp"
                            alt="Servicios"
                            className="w-full h-full object-cover object-[center_60%]"
                        />
                    </div>

                    {/* Logo centrado */}
                    <div className="absolute left-1/2 top-1/2 z-10 w-1/2 h-full sm:left-0 sm:top-auto sm:bottom-0 sm:translate-y-0 sm:!translate-y-0 md:top-1/2 md:-translate-y-1/2">
                        <div className="relative h-full sm:h-1/2">
                            <img
                                src="./images/logo-blanco-services.svg"
                                alt="Logo Services"
                                className="h-full w-auto object-contain [filter:drop-shadow(5px_0_3px_rgba(29,79,135,0.5))]"
                            />
                            <div className="absolute inset-0 md:shadow-[20px_0_30px_-15px_rgba(29,79,135,0.7)] mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>

                {/* Sección presencia en puertos */}
                <div className="bg-[#1D4F87] h-[920px] ports-section relative z-0" style={{ marginTop: '-50px' }}>
                    <div className="max-w-6xl mx-auto flex items-center justify-center h-full">
                        {/* Mapa a la izquierda */}
                        <div className="w-1/2 flex justify-center">
                            <img
                                src="./images/mapa-inicio.webp"
                                alt="Mapa de puertos"
                                className="max-h-[585px] w-auto"
                            />
                        </div>
                        {/* Texto a la derecha */}
                        <div className="w-1/2 flex flex-col items-end justify-center pr-16">
                            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sahar font-bold mb-4 text-right w-full">{t('home.ports.title')}</h2>
                            <p className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-sahar mb-4 max-w-[500px] text-right">
                                {t('home.ports.description')}
                            </p>
                            <button
                                onClick={() => navigate('/puertos')}
                                className="bg-[#F7CA0F] text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl font-bold py-2 px-4 rounded-xl mt-2 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                {t('home.ports.button')}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sección contacto personalizada */}
                <div className="flex justify-center items-center h-[600px] contact-section">
                    {/* Cuadro azul */}
                    <div className="relative bg-[#1D4F87] flex justify-between px-8 py-8 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl h-[330px] rounded-2xl contact-box">
                        {/* Logo sobre el azul */}
                        <img
                            src="./images/logo-blanco-services.svg"
                            alt="Logo"
                            className="absolute opacity-10 left-[-36%] top-[-10%] w-[180%] h-[120%] object-contain pointer-events-none select-none"
                        />
                        {/* Contenido izquierdo */}
                        <div className="relative z-10 flex flex-col justify-center md:w-7/12 lg:w-1/2 pl-6 contact-content">
                            <p className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-sahar mb-6">
                                {t('home.contact.description')}
                            </p>
                            <button
                                onClick={() => navigate('/contacto')}
                                className="flex items-center bg-[#F7CA0F] text-[#1D4F87] font-bold py-1 px-3 rounded-lg text-md sm:text-lg md:text-xl lg:text-2xl shadow hover:bg-yellow-400 hover:scale-105 transition-all duration-300 w-fit cursor-pointer"
                            >
                                <img src="./images/icono-mail.svg" alt="Mail" className="w-7 h-7 mr-3" />
                                <span className="flex items-center pt-1">{t('home.contact.button')}</span>
                            </button>
                        </div>
                        {/* Imagen a la derecha */}
                        <div className="relative z-10 flex items-center justify-center contact-image">
                            <img
                                src="./images/imagen-inicio-contacto.webp"
                                alt="Equipo trabajando"
                                className="object-cover w-full h-[150%] rounded-2xl translate-x-[12%] shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeOut {
                    0% {
                        opacity: 0.9;
                    }
                    100% {
                        opacity: 0;
                    }
                }

                .animate-fadeOut {
                    animation: fadeOut 3s ease-in-out forwards;
                }

                @media (max-width: 767px) {
                    .services-section {
                        flex-direction: column;
                        position: relative;
                        overflow: hidden;
                        margin: 2rem 0;
                        height: 550px !important;
                    }
                    .services-section > div {
                        width: 100% !important;
                    }
                    .services-section > div:first-child {
                        order: 1;
                        height: 50% !important;
                        padding: 1.5rem 0;
                    }
                    .services-section > div:nth-child(2) {
                        order: 2;
                        height: 50% !important;
                    }
                    .services-section > div:last-child {
                        width: 50% !important;
                        left: 0 !important;
                        height: 50% !important;
                        position: absolute !important;
                        bottom: 0 !important;
                        top: auto !important;
                        transform: none !important;
                        --tw-translate-y: 0 !important;
                    }
                    .services-section > div:last-child > div {
                        height: 100% !important;
                    }
                    .services-section > div:last-child > div > img {
                        height: 100% !important;
                    }

                    /* Estilos para la sección de presencia en puertos en móvil */
                    .ports-section {
                        height: auto !important;
                        padding: 4rem 0;
                        margin: 3rem 0;
                    }
                    .ports-section > div {
                        flex-direction: column;
                        padding: 0 1rem;
                    }
                    .ports-section > div > div {
                        width: 100% !important;
                        padding: 0 !important;
                    }
                    .ports-section > div > div:first-child {
                        order: 1;
                        margin: 2rem 0;
                        padding: 2rem 0;
                    }
                    .ports-section > div > div:last-child {
                        order: 2;
                        align-items: center !important;
                        padding: 0 !important;
                        margin-top: 2rem;
                    }
                    .ports-section > div > div:last-child h2 {
                        text-align: center !important;
                        margin-bottom: 1rem;
                    }
                    .ports-section > div > div:last-child p {
                        text-align: center !important;
                        max-width: 100% !important;
                        margin-bottom: 1.5rem;
                    }
                    .ports-section > div > div:last-child button {
                        margin: 0 auto;
                    }

                    /* Estilos para la sección de contacto en móvil */
                    .contact-section {
                        height: 600px !important;
                        padding: 3rem 1rem;
                        margin: 3rem 0;
                    }
                    .contact-box {
                        width: 330px !important;
                        height: 600px !important;
                        flex-direction: column !important;
                        padding: 2rem !important;
                        align-items: center !important;
                        overflow: visible !important;
                    }
                    .contact-content {
                        width: 100% !important;
                        padding-left: 0 !important;
                        margin-bottom: 2rem;
                        order: 2 !important;
                        text-align: center !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    .contact-image {
                        width: 180% !important;
                        height: 60% !important;
                        order: 1 !important;
                        margin-bottom: 2rem !important;
                        display: flex !important;
                        justify-content: center !important;
                        margin-left: -40% !important;
                        position: relative !important;
                        left: 0 !important;
                        margin-top: -2rem !important;
                    }
                    .contact-image img {
                        height: 100% !important;
                        width: 100% !important;
                        object-fit: cover !important;
                        transform: none !important;
                        border-radius: 1rem !important;
                        position: relative !important;
                        left: 0 !important;
                    }

                    /* Estilos específicos para xs (480px a 639px) */
                    @media (min-width: 480px) and (max-width: 639px) {
                        .contact-image {
                            width: 160% !important;
                            margin-left: -35% !important;
                            height: 60% !important;
                        }
                        .contact-box {
                            height: 500px !important;
                        }
                        .contact-section {
                            height: 500px !important;
                        }
                    }

                    /* Estilos para pantallas menores a 480px */
                    @media (max-width: 479px) {
                        .contact-image {
                            width: 140% !important;
                            margin-left: -35% !important;
                            height: 60% !important;
                        }
                        .contact-box {
                            height: 450px !important;
                        }
                        .contact-section {
                            height: 450px !important;
                        }
                    }

                    /* Ajuste del espaciado para la sección de bienvenida */
                    .bg-\[\#1D4F87\] {
                        padding: 3rem 0;
                    }
                    .bg-white {
                        padding: 3rem 0;
                    }

                    /* Ajuste del contenedor del video para móviles */
                    .relative.h-\\[calc\\(100vh-6rem\\)\\] {
                        height: 50vh !important;
                        min-height: 300px;
                    }
                    .relative.h-\\[calc\\(100vh-6rem\\)\\] video {
                        object-position: center 30%;
                    }
                }
                @media (min-width: 768px) {
                    .services-section > div:last-child {
                        transform: translateY(-50%) !important;
                    }
                }

                /* Estilos para el contenido de servicios */
                .services-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 100%;
                    max-width: 100%;
                    padding: 0 1rem;
                }

                @media (min-width: 768px) {
                    .services-content {
                        align-items: flex-start;
                        max-width: 90%;
                        padding: 0 2rem;
                    }
                    .services-content h2,
                    .services-content p {
                        text-align: left !important;
                    }
                }

                @media (min-width: 1280px) {
                    .services-content {
                        max-width: 70%;
                    }
                }

                @media (min-width: 1536px) {
                    .services-content {
                        max-width: 60%;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Inicio; 