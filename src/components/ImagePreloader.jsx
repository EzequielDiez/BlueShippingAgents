import React, { useEffect } from 'react';

const ImagePreloader = () => {
    useEffect(() => {
        const imagesToPreload = [
            './images/logo-header.svg',
            './images/logo-footer.svg',
            './images/logo-blanco-services.svg',
            './images/imagen-inicio-servicios.webp',
            './images/mapa-inicio.webp',
            './images/imagen-inicio-contacto.webp',
            './images/imagen-servicios-1.webp',
            './images/imagen-servicios-2.webp',
            './images/imagen-servicios-3.webp',
            './images/imagen-nosotros-1.webp',
            './images/imagen-nosotros-2.webp',
            './images/icono-mail.svg'
        ];

        imagesToPreload.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    return null;
};

export default ImagePreloader; 