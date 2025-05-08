import React, { useEffect } from 'react';
import Layout from './Layout';

const Nosotros = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout isInitialAnimation={false}>
            <div className="container mx-auto px-4 py-20 font-sahar">
                <h1 className="text-[#1D4F87] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-8 font-bold">SOBRE NOSOTROS</h1>

                <p className="text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl text-center mb-28 max-w-4xl mx-auto">
                    BLUE SHIPPING AGENTS ha sido fundada por un grupo de experimentados
                    profesionales con amplia capacitación en el ámbito del comercio internacional
                    marítimo, acumulando más de 30 años de trayectoria en el mercado.
                </p>

                <div className="grid gap-12 mb-12 max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-[55%_45%] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-shadow duration-300">
                        <div className="h-full relative">
                            <img
                                src="./images/imagen-nosotros-1.webp"
                                alt="Puerto marítimo con contenedores"
                                className="w-full h-full object-cover object-[50%_50%] relative z-10 shadow-[10px_0_30px_5px_rgba(0,0,0,0.4)]"
                            />
                        </div>
                        <div className="bg-[#1D4F87] text-white p-8">
                            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl mb-4">NUESTRO OBJETIVO</h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-bold">Servicio Personalizado de Excelencia</h3>
                            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
                                Nuestro objetivo principal ha sido establecer un equipo de trabajo dinámico y altamente
                                profesional que, respaldado por la vasta experiencia adquirida a lo largo de los años,
                                pueda ofrecer un servicio personalizado de excelencia para satisfacer las necesidades de
                                nuestros clientes en el exigente y cambiante contexto del mercado actual.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[45%_55%] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-shadow duration-300">
                        <div className="bg-[#1D4F87] text-white p-8">
                            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl mb-4">VALORES</h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-bold">Compromiso y Dedicación</h3>
                            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
                                Nos hemos lanzado a este desafío bajo los pilares del trabajo arduo, la eficiencia y la honestidad,
                                valores que han sido centrales en nuestra labor a lo largo del tiempo. <br /><br />
                                Estamos conectados y disponibles durante todo el año. Nos encargamos de gestionar los tiempos, la
                                información y la documentación con precisión y diligencia, anticipándonos a posibles demoras y
                                problemas antes de que ocurran. <br /><br />
                                De esta manera, logramos ofrecer a cada uno de nuestros clientes la tranquilidad necesaria para
                                que puedan desarrollar sus actividades de manera satisfactoria.
                            </p>
                        </div>
                        <div className="h-full">
                            <img
                                src="./images/imagen-nosotros-2.webp"
                                alt="Barco crucero en puerto"
                                className="w-full h-full object-cover object-[50%_50%] shadow-[-10px_0_30px_5px_rgba(0,0,0,0.4)]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Nosotros; 