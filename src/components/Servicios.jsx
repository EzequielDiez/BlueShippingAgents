import React from 'react';

const Servicios = () => {
    return (
        <section className="relative py-20 mb-20">
            <div className="max-w-7xl mx-auto">
                <div className="flex">
                    {/* Text content - left column */}
                    <div className="w-1/2 pr-8 flex items-center">
                        <div className="max-w-[600px]">
                            <h2 className="text-4xl font-['Sahar'] font-bold mb-8 text-[#1D4F87]">NUESTROS SERVICIOS</h2>
                            <p className="mb-6 text-xl text-[#1D4F87]">
                                Complementando el servicio de agenciamiento, nos dedicamos activamente a prestar diferentes servicios portuarios. Ofrecemos gestión y coordinación en el cambio de tripulantes, retiro y entrega de repuestos y/o materiales, asistencia a tripulantes y pasajeros, así como también la gestión de cargas de proyecto, bultos pesados, productos siderúrgicos, granos, subproductos, minerales, petróleo a granel u cargas paletizadas.
                            </p>
                            <p className="mb-6 text-xl text-[#1D4F87]">
                                Además, el transporte multimodal es una excelente opción para optimizar la logística, especialmente cuando se trata de diferentes tipos de cargas y volúmenes.
                            </p>
                            <p className="mb-6 text-xl text-[#1D4F87]">
                                Al combinar la logística terrestre con el transporte marítimo, se mejora la eficiencia y se garantiza el cumplimiento de los estándares de calidad y exigencia requeridos.
                            </p>
                            <p className="text-xl text-[#1D4F87]">
                                Esto es fundamental para lograr la satisfacción total de los objetivos propuestos.
                            </p>
                        </div>
                    </div>

                    {/* Images with blue background - right column */}
                    <div className="w-1/2 relative flex justify-end">
                        <div className="w-[400px] h-[700px] bg-[#1D4F87] rounded-3xl">
                            <div className="flex flex-col items-center">
                                <img
                                    src="images/imagen-servicios-1.webp"
                                    alt="Servicio marítimo 1"
                                    className="w-[230px] h-[230px] object-cover object-center rounded-3xl transform -translate-x-40 -translate-y-6 drop-shadow-[10px_10px_6px_rgba(0,0,0,0.5)]"
                                />
                                <img
                                    src="images/imagen-servicios-2.webp"
                                    alt="Servicio marítimo 2"
                                    className="w-[400px] h-[250px] object-cover rounded-3xl transform translate-x-12 drop-shadow-[10px_10px_6px_rgba(0,0,0,0.5),0_-5px_6px_rgba(0,0,0,0.2)]"
                                />
                                <img
                                    src="images/imagen-servicios-3.webp"
                                    alt="Servicio marítimo 3"
                                    className="w-[400px] h-[250px] object-cover rounded-3xl transform -translate-x-22 translate-y-6 drop-shadow-[10px_10px_6px_rgba(0,0,0,0.5),0_-5px_6px_rgba(0,0,0,0.2)]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios; 