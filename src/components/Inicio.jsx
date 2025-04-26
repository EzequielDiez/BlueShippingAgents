import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="relative h-[calc(100vh-6rem)] overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/videos/DJI_0184.webm" type="video/webm" />
                    Tu navegador no soporta el elemento de video.
                </video>
            </div>

            <div>
                <div className="bg-[#1D4F87]">
                    <div className="max-w-6xl mx-auto h-[210px] flex items-end">
                        <h1 className="text-white text-4xl font-sahar font-bold text-left mb-3">
                            BIENVENIDOS A BLUE SHIPPING AGENTS
                        </h1>
                    </div>
                </div>
                <div className="bg-white">
                    <div className="max-w-6xl mx-auto h-[315px] flex items-start">
                        <p className="text-[#1D4F87] text-2xl font-sahar text-left mt-4">
                            Somos un equipo de profesionales con más de 30 años de experiencia en el comercio internacional marítimo. Nuestro compromiso es ofrecer un servicio personalizado de excelencia, basado en la eficiencia, la honestidad y el trabajo arduo. Nos anticipamos a los desafíos del mercado para brindar soluciones efectivas y garantizar la tranquilidad de nuestros clientes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Nueva sección */}
            <div className="relative flex h-[550px] shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.7),0_30px_40px_-15px_rgba(0,0,0,0.7)] z-10">
                {/* Sección izquierda - fondo blanco */}
                <div className="w-1/2 bg-white flex flex-col items-center justify-center pl-4">
                    <h2 className="text-[#1D4F87] text-4xl font-sahar font-bold mb-4">
                        NUESTROS SERVICIOS
                    </h2>
                    <p className="text-[#1D4F87] text-2xl font-sahar max-w-[41%]">
                        Proporcionamos servicios de agenciamiento marítimo y portuario, incluyendo cambio de tripulantes, gestión de repuestos y asistencia a tripulaciones y pasajeros. Además, optimizamos la logística combinando transporte terrestre y marítimo, garantizando calidad y eficiencia en cada operación.
                    </p>
                </div>

                {/* Sección derecha - imagen */}
                <div className="w-1/2 relative">
                    <img
                        src="/images/imagen-inicio-servicios.webp"
                        alt="Servicios"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Logo centrado */}
                <div className="absolute left-1/2 top-1/2 -translate-y-1/2 z-10 w-1/2 h-full">
                    <div className="relative h-full">
                        <img
                            src="/images/logo-blanco-services.svg"
                            alt="Logo Services"
                            className="h-full w-auto object-contain [filter:drop-shadow(5px_0_3px_rgba(29,79,135,0.5))]"
                        />
                        <div className="absolute inset-0 shadow-[20px_0_30px_-15px_rgba(29,79,135,0.7)] mix-blend-multiply"></div>
                    </div>
                </div>
            </div>

            {/* Sección presencia en puertos */}
            <div className="bg-[#1D4F87] py-12 h-[870px]">
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
                        <h2 className="text-white text-3xl md:text-4xl font-sahar font-bold mb-4">PRESENCIA EN PUERTOS</h2>
                        <p className="text-white text-lg md:text-2xl font-sahar mb-4 max-w-[500px] text-right">
                            Operamos en todos los puertos argentinos, desde Santa Fe hasta Ushuaia, con una red de subagentes altamente capacitados y el respaldo de tecnología avanzada. Ofrecemos un servicio confiable y seguro, adaptado a las necesidades de cada cliente.
                        </p>
                        <button
                            onClick={() => navigate('/puertos')}
                            className="bg-[#F7CA0F] text-[#1D4F87] text-2xl font-bold py-2 px-4 rounded-xl mt-2 hover:bg-yellow-400 hover:scale-105 transition-all duration-300 cursor-pointer"
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
    );
};

export default Inicio; 