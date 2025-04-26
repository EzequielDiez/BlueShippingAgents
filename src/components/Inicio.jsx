import React from 'react';

const Inicio = () => {
    return (
        <div className="w-full">
            <div className="relative w-full h-[calc(100vh-6rem)] overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src="/videos/DJI_0184.MP4" type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                </video>
                <div className="absolute inset-0 flex items-center justify-center">
                </div>
            </div>
        </div>
    );
};

export default Inicio; 