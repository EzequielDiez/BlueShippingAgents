import React, { useEffect } from 'react';
import Layout from './Layout';

const Contacto = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout isInitialAnimation={false}>
            <div className="w-full font-sahar h-[75vh] grid grid-cols-2">
                {/* Columna Izquierda */}
                <div className="flex flex-col h-full">
                    {/* Arriba: Título y texto */}
                    <div className="bg-[#1D4F87] text-white flex items-end justify-end h-[55%]">
                        <div className="flex flex-col items-start max-w-2xl w-full px-16 pb-8 text-left">
                            <h2 className="text-3xl md:text-4xl font-bold mb-3">CONTACTO</h2>
                            <p className="mb-3 text-base md:text-lg">
                                Gracias al apoyo recibido de parte de clientes, nuestra firma se está posicionando entre aquellas más confiables y eficientes del mercado.
                            </p>
                            <p className="text-base md:text-lg">
                                Por lo tanto, el compromiso asumido desde el inicio continúa vigente, ofreciendo día a día innovación y mejoras continuas en nuestro proceso, convencidos de que este es el mejor modo de responder a quienes confían en BLUE SHIPPING AGENTS
                            </p>
                        </div>
                    </div>
                    {/* Abajo: Iconos y datos */}
                    <div className="bg-white text-[#1D4F87] flex justify-end items-start h-[45%]">
                        <div className="flex flex-col items-start max-w-2xl w-full px-16 pt-8 space-y-3">
                            <div className="flex items-start gap-3">
                                <img src="/images/icono-telefono.svg" alt="Teléfono" className="w-6 h-6 mt-1" />
                                <div>
                                    <p className="leading-tight">+54 9 11 3687-9155 / +54 9 11 2257-0371<br />/ +54 9 11 6908-1034</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <img src="/images/icono-mail.svg" alt="Mail" className="w-6 h-6 mt-1" />
                                <div>
                                    <p className="leading-tight pt-1.5 md:text-lg">operations@bsa-agents.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <img src="/images/icono-ubicacion.svg" alt="Ubicación" className="w-6 h-6 mt-1" />
                                <div>
                                    <p className="leading-tight md:text-lg">Olavarría 170 - C1162ABD - Ciudad Autónoma de Buenos Aires, Argentina.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Columna Derecha */}
                <div className="relative h-full flex flex-col">
                    {/* Fondo azul arriba */}
                    <div className="bg-[#1D4F87] h-[55%]" />
                    {/* Fondo blanco abajo */}
                    <div className="bg-white h-[45%]" />
                    {/* Formulario flotante */}
                    <div className="absolute inset-0 flex items-center justify-start">
                        <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] rounded-2xl p-6 w-full max-w-md flex flex-col items-center ml-8">
                            <h3 className="text-[#1D4F87] text-2xl font-bold mb-4 w-full text-left">Envianos un mensaje</h3>
                            <form className="space-y-3 w-full">
                                <input type="text" placeholder="Nombre" className="w-full border border-[#1D4F87] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar text-lg placeholder-[#1D4F87]" />
                                <input type="email" placeholder="Email" className="w-full border border-[#1D4F87] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar text-lg placeholder-[#1D4F87]" />
                                <input type="text" placeholder="Teléfono" className="w-full border border-[#1D4F87] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar text-lg placeholder-[#1D4F87]" />
                                <textarea placeholder="Mensaje" rows={3} className="w-full border border-[#1D4F87] rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar resize-none text-lg placeholder-[#1D4F87]" />
                                <button type="submit" className="w-full bg-[#1D4F87] text-white font-bold rounded-full py-2.5 text-lg transition hover:bg-[#17406c] cursor-pointer">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contacto; 