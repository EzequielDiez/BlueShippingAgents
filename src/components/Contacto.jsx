import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';

const Contacto = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout isInitialAnimation={false}>
            <div className="w-full font-sahar h-[75vh] grid grid-cols-2 contact-container">
                {/* Columna Izquierda */}
                <div className="flex flex-col h-full contact-left">
                    {/* Arriba: Título y texto */}
                    <div className="bg-[#1D4F87] text-white flex items-end justify-end h-[55%] contact-top">
                        <div className="flex flex-col items-start max-w-2xl w-full px-16 pb-8 text-left">
                            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3">{t('contact.title')}</h2>
                            <p className="mb-3 text-md sm:text-lg md:text-xl">
                                {t('contact.description.part1')}
                            </p>
                            <p className="text-md sm:text-lg md:text-xl">
                                {t('contact.description.part2')}
                            </p>
                        </div>
                    </div>
                    {/* Abajo: Iconos y datos */}
                    <div className="bg-white text-[#1D4F87] flex justify-end items-start h-[45%] contact-bottom">
                        <div className="flex flex-col items-start max-w-2xl w-full px-16 pt-8 space-y-3">
                            <div className="flex items-start gap-3">
                                <img src="./images/icono-telefono.svg" alt="Teléfono" className="w-6 h-6 mt-1" />
                                <div>
                                    <p className="leading-tight text-md sm:text-lg md:text-xl">
                                        <a href="tel:+5491136879155" className="hover:underline">+54 9 11 3687-9155</a> /
                                        <a href="tel:+5491122570371" className="hover:underline"> +54 9 11 2257-0371</a><br />
                                        / <a href="tel:+5491169081034" className="hover:underline">+54 9 11 6908-1034</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <img src="./images/icono-mail.svg" alt="Mail" className="w-6 h-6 mt-1" />
                                <div>
                                    <p className="leading-tight pt-1.5 text-md sm:text-lg md:text-xl">
                                        <a href="mailto:operations@bsa-agents.com" className="hover:underline">operations@bsa-agents.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <img src="./images/icono-ubicacion.svg" alt="Ubicación" className="w-6 h-6 mt-1" />
                                <div>
                                    <p className="leading-tight text-md sm:text-lg md:text-xl">
                                        <a href="https://maps.app.goo.gl/Dbz1AGkCjE2wyLaK8" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {t('contact.address')}
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Columna Derecha */}
                <div className="relative h-full flex flex-col contact-right">
                    {/* Fondo azul arriba */}
                    <div className="bg-[#1D4F87] h-[55%]" />
                    {/* Fondo blanco abajo */}
                    <div className="bg-white h-[45%]" />
                    {/* Formulario flotante */}
                    <div className="absolute inset-0 flex items-center justify-start contact-form-container">
                        <div className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.6)] rounded-2xl p-6 w-full max-w-md flex flex-col items-center ml-8 contact-form">
                            <h3 className="text-[#1D4F87] text-2xl font-bold mb-4 w-full text-left">{t('contact.form.title')}</h3>
                            <form className="space-y-3 w-full">
                                <input type="text" placeholder={t('contact.form.name')} className="w-full border border-[#1D4F87] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar text-lg placeholder-[#1D4F87]" />
                                <input type="email" placeholder={t('contact.form.email')} className="w-full border border-[#1D4F87] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar text-lg placeholder-[#1D4F87]" />
                                <input type="text" placeholder={t('contact.form.phone')} className="w-full border border-[#1D4F87] rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar text-lg placeholder-[#1D4F87]" />
                                <textarea placeholder={t('contact.form.message')} rows={3} className="w-full border border-[#1D4F87] rounded-2xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1D4F87] font-sahar resize-none text-lg placeholder-[#1D4F87]" />
                                <button type="submit" className="w-full bg-[#1D4F87] text-white font-bold rounded-full py-2.5 text-lg transition hover:bg-[#17406c] cursor-pointer">{t('contact.form.send')}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1024px) {
                    .contact-container {
                        grid-template-columns: 1fr !important;
                        height: auto !important;
                        padding: 0 !important;
                    }

                    .contact-left {
                        order: 1;
                    }

                    .contact-right {
                        order: 2;
                    }

                    .contact-top {
                        height: auto !important;
                        padding: 4rem 1rem 2rem 1rem !important;
                        width: 100vw !important;
                        margin-left: calc(-50vw + 50%) !important;
                        margin-right: calc(-50vw + 50%) !important;
                    }

                    .contact-top > div {
                        align-items: center !important;
                        text-align: center !important;
                        padding: 0 !important;
                        margin: 0 auto !important;
                        max-width: 600px !important;
                    }

                    .contact-bottom {
                        height: auto !important;
                        padding: 2rem 1rem !important;
                    }

                    .contact-bottom > div {
                        align-items: center !important;
                        text-align: center !important;
                        padding: 0 !important;
                        margin: 0 auto !important;
                        max-width: 600px !important;
                    }

                    .contact-form-container {
                        position: relative !important;
                        margin: 2rem auto !important;
                        padding: 0 1rem !important;
                    }

                    .contact-form {
                        margin: 0 auto !important;
                        max-width: 70% !important;
                    }

                    .contact-form h3 {
                        text-align: center !important;
                    }
                }

                @media (max-width: 640px) {
                    .contact-form {
                        max-width: 80% !important;
                    }
                }

                @media (max-width: 480px) {
                    .contact-form {
                        max-width: 90% !important;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Contacto; 