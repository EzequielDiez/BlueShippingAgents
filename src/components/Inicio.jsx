import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

const Inicio = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <div>
                <div className="relative h-[calc(100vh-6rem)] overflow-hidden">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-3500 ease-in-out opacity-100"
                    >
                        <source src="/videos/DJI_0184.webm" type="video/webm" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>

                <div>
                    <div className="bg-[#1D4F87]">
                        <div className="max-w-6xl mx-auto h-[160px] md:h-[200px] lg:h-[250px] flex items-end px-4 md:px-6 lg:px-8">
                            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sahar font-bold text-left mb-3">
                                BIENVENIDOS A BLUE SHIPPING AGENTS
                            </h1>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="max-w-6xl mx-auto h-[250px] md:h-[300px] lg:h-[350px] flex items-start px-4 md:px-6 lg:px-8">
                            <p className="text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl font-sahar text-left mt-4">
                                Somos un equipo de profesionales con más de 30 años de experiencia en el comercio internacional marítimo. Nuestro compromiso es ofrecer un servicio personalizado de excelencia, basado en la eficiencia, la honestidad y el trabajo arduo. Nos anticipamos a los desafíos del mercado para brindar soluciones efectivas y garantizar la tranquilidad de nuestros clientes.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Nueva sección */}
                <div className="relative flex h-[650px] sm:h-[800px] shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.7),0_30px_40px_-15px_rgba(0,0,0,0.7)] z-10 services-section">
                    {/* Sección izquierda - fondo blanco */}
                    <div className="w-1/2 bg-white flex flex-col justify-center items-center pl-4 sm:flex-row sm:h-1/2 md:flex-col md:h-full">
                        <div className="services-content">
                            <h2 className="text-[#1D4F87] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sahar font-bold mb-4 text-center">
                                NUESTROS SERVICIOS
                            </h2>
                            <p className="text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl font-sahar text-center">
                                Proporcionamos servicios de agenciamiento marítimo y portuario, incluyendo cambio de tripulantes, gestión de repuestos y asistencia a tripulaciones y pasajeros. Además, optimizamos la logística combinando transporte terrestre y marítimo, garantizando calidad y eficiencia en cada operación.
                            </p>
                        </div>
                    </div>

                    {/* Sección derecha - imagen */}
                    <div className="w-1/2 relative sm:h-1/2 md:h-full">
                        <img
                            src="/images/imagen-inicio-servicios.webp"
                            alt="Servicios"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Logo centrado */}
                    <div className="absolute left-1/2 top-1/2 z-10 w-1/2 h-full sm:left-0 sm:top-auto sm:bottom-0 sm:translate-y-0 sm:!translate-y-0 md:top-1/2 md:-translate-y-1/2">
                        <div className="relative h-full sm:h-1/2">
                            <img
                                src="/images/logo-blanco-services.svg"
                                alt="Logo Services"
                                className="h-full w-auto object-contain [filter:drop-shadow(5px_0_3px_rgba(29,79,135,0.5))]"
                            />
                            <div className="absolute inset-0 md:shadow-[20px_0_30px_-15px_rgba(29,79,135,0.7)] mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>

                {/* Sección presencia en puertos */}
                <div className="bg-[#1D4F87] py-12 h-[870px] ports-section">
                    <div className="max-w-6xl mx-auto flex items-center justify-center h-full">
                        {/* Mapa a la izquierda */}
                        <div className="w-1/2 flex justify-center">
                            <img
                                src="/images/mapa-inicio.webp"
                                alt="Mapa de puertos"
                                className="max-h-[585px] w-auto"
                            />
                        </div>
                        {/* Texto a la derecha */}
                        <div className="w-1/2 flex flex-col items-end justify-center pr-16">
                            <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sahar font-bold mb-4 text-right w-full">PRESENCIA EN PUERTOS</h2>
                            <p className="text-white text-md sm:text-lg md:text-xl lg:text-2xl font-sahar mb-4 max-w-[500px] text-right">
                                Operamos en todos los puertos argentinos, desde Santa Fe hasta Ushuaia, con una red de subagentes altamente capacitados y el respaldo de tecnología avanzada. Ofrecemos un servicio confiable y seguro, adaptado a las necesidades de cada cliente.
                            </p>
                            <button
                                onClick={() => navigate('/puertos')}
                                className="bg-[#F7CA0F] text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl font-bold py-2 px-4 rounded-xl mt-2 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer"
                            >
                                VER MÁS
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sección contacto personalizada */}
                <div className="flex justify-center items-center h-[600px]">
                    {/* Cuadro azul */}
                    <div className="relative bg-[#1D4F87] flex justify-between px-8 py-8 max-w-6xl h-[330px] rounded-2xl">
                        {/* Logo sobre el azul */}
                        <img
                            src="/images/logo-blanco-services.svg"
                            alt="Logo"
                            className="absolute opacity-10 left-[-36%] top-[-10%] w-[180%] h-[120%] object-contain pointer-events-none select-none"
                        />
                        {/* Contenido izquierdo */}
                        <div className="relative z-10 flex flex-col justify-center w-1/2 pl-6">
                            <p className="text-white text-2xl font-sahar mb-6">
                                Estamos siempre disponibles para atender sus necesidades con innovación y mejora continua.
                            </p>
                            <button
                                onClick={() => navigate('/contacto')}
                                className="flex items-center bg-[#F7CA0F] text-[#1D4F87] font-bold py-1 px-3 rounded-lg text-2xl shadow hover:bg-yellow-400 hover:scale-105 transition-all duration-300 w-fit cursor-pointer"
                            >
                                <img src="/images/icono-mail.svg" alt="Mail" className="w-7 h-7 mr-3" />
                                <span className="flex items-center pt-1">CONTACTANOS</span>
                            </button>
                        </div>
                        {/* Imagen a la derecha */}
                        <div className="relative z-10 flex items-center justify-center overflow-visible">
                            <img
                                src="/images/imagen-inicio-servicios.webp"
                                alt="Equipo trabajando"
                                className="object-cover w-[120%] h-[150%] rounded-2xl translate-x-[20%] shadow-[0_0_30px_rgba(0,0,0,0.8)]"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 767px) {
                    .services-section {
                        flex-direction: column;
                        position: relative;
                        overflow: hidden;
                    }
                    .services-section > div {
                        width: 100% !important;
                    }
                    .services-section > div:first-child {
                        order: 1;
                        height: 50% !important;
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
                        padding: 2rem 0;
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
                    max-width: 90%;
                }

                @media (min-width: 768px) {
                    .services-content {
                        align-items: flex-start;
                        max-width: 40%;
                    }
                    .services-content h2,
                    .services-content p {
                        text-align: left !important;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Inicio; 