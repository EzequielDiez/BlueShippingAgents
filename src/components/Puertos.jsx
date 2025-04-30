import React from 'react';

const Puertos = () => {
    return (
        <div className="flex flex-col items-center px-4 py-20">
            <h1 className="text-4xl font-bold font-sahar text-[#1D4F87] mb-4 text-center">PUERTOS</h1>
            <p className="font-sahar text-[#1D4F87] text-center max-w-6xl mb-2 text-xl">
                Cubrimos todos los puertos argentinos, desde Corrientes en el Río Paraná hasta Ushuaia, la ciudad más austral del mundo. Contamos con gestiones operativas en Puerto de Uruguay y Zonas de Alije.
            </p>
            <p className="font-sahar text-[#1D4F87] text-center max-w-6xl mb-2 text-xl">
                Contamos con personal propio en Buenos Aires y una red selecta, profesional y altamente capacitada de subagentes. Sumando tecnología de última generación en telecomunicaciones, demostramos día a día nuestra eficacia, con la eficiencia como horizonte en cada tarea que realizamos.
            </p>
            <p className="font-sahar text-[#1D4F87] text-center max-w-6xl mb-12 text-xl">
                Brindamos un servicio personalizado a nuestros clientes, con los más altos estándares de calidad, basado en la confiabilidad y seguridad de nuestras comunicaciones, junto a un staff experimentado de profesionales.
            </p>
            <div className="w-full flex justify-center">
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1pLvWBN6cQAujLRClBFCpccqTLd6hXzI&ehbc=2E312F"
                    width="800"
                    height="600"
                    className="rounded-lg shadow-lg border-2 border-[#1D4F87] max-w-full"
                    allowFullScreen=""
                    loading="lazy"
                    title="Puertos Blue Shipping"
                ></iframe>
            </div>
        </div>
    );
};

export default Puertos; 