import React, { useEffect } from 'react';
import Layout from './Layout';
import { useTranslation } from 'react-i18next';

const Servicios = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout isInitialAnimation={false}>
            <section className="relative py-20 xl:pt-32 mb-20">
                <div className="xl:max-w-5xl 2xl:max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['Sahar'] font-bold mb-8 text-[#1D4F87] custom-title">{t('services.title')}</h2>
                    <div className="flex custom-content-container">
                        {/* Text content - left column */}
                        <div className="w-1/2 xl:pr-16 2xl:pr-8 flex items-center custom-text-container">
                            <div className="max-w-[600px]">
                                <p className="mb-6 text-md sm:text-lg md:text-xl lg:text-2xl text-[#1D4F87]">
                                    {t('services.description.part1')}
                                </p>
                                <p className="mb-6 text-md sm:text-lg md:text-xl lg:text-2xl text-[#1D4F87]">
                                    {t('services.description.part2')}
                                </p>
                                <p className="mb-6 text-md sm:text-lg md:text-xl lg:text-2xl text-[#1D4F87]">
                                    {t('services.description.part3')}
                                </p>
                                <p className="text-md sm:text-lg md:text-xl lg:text-2xl text-[#1D4F87]">
                                    {t('services.description.part4')}
                                </p>
                            </div>
                        </div>

                        {/* Images with blue background - right column */}
                        <div className="w-1/2 relative flex justify-center lg:ml-28 custom-2xl-justify">
                            <div className="w-[400px] h-[700px] bg-[#1D4F87] rounded-3xl">
                                <div className="flex flex-col items-center">
                                    <img
                                        src="./images/imagen-servicios-1.webp"
                                        alt="Servicio marítimo 1"
                                        className="w-[230px] h-[230px] object-cover object-center rounded-3xl transform -translate-x-40 -translate-y-6 drop-shadow-[10px_10px_6px_rgba(0,0,0,0.5)]"
                                    />
                                    <img
                                        src="./images/imagen-servicios-2.webp"
                                        alt="Servicio marítimo 2"
                                        className="w-[400px] h-[250px] object-cover rounded-3xl transform translate-x-12 drop-shadow-[10px_10px_6px_rgba(0,0,0,0.5),0_-5px_6px_rgba(0,0,0,0.2)]"
                                    />
                                    <img
                                        src="./images/imagen-servicios-3.webp"
                                        alt="Servicio marítimo 3"
                                        className="w-[400px] h-[250px] object-cover rounded-3xl transform -translate-x-22 translate-y-6 drop-shadow-[10px_10px_6px_rgba(0,0,0,0.5),0_-5px_6px_rgba(0,0,0,0.2)]"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                @media (min-width: 1280px) {
                    .custom-2xl-justify {
                        justify-content: flex-end;
                    }
                }
                @media (min-width: 1536px) {
                    .custom-2xl-justify {
                        justify-content: flex-end;
                    }
                    .custom-title {
                        margin-bottom: 0.1rem;
                    }
                }
                @media (min-width: 1024px) and (max-width: 1279px) {
                    .custom-text-container {
                        padding-left: 7rem;
                    }
                    .custom-2xl-justify {
                        align-items: center;
                        display: flex;
                        height: 100%;
                    }
                    .custom-title {
                        text-align: center;
                        margin-bottom: 3rem;
                    }
                    .custom-content-container {
                        flex-direction: row;
                        align-items: center;
                        min-height: 700px;
                    }
                }
                @media (max-width: 1023px) {
                    .custom-content-container {
                        flex-direction: column;
                        align-items: center;
                    }
                    .custom-text-container {
                        width: 100%;
                        padding-left: 0;
                        margin-bottom: 4rem;
                        display: flex;
                        justify-content: center;
                    }
                    .custom-2xl-justify {
                        width: 100%;
                        margin-left: 0;
                        margin-bottom: 4rem;
                    }
                    .custom-2xl-justify > div {
                        width: 550px;
                        height: 800px;
                    }
                    .custom-2xl-justify img {
                        width: 100%;
                        height: auto;
                    }
                    .custom-2xl-justify img:first-child {
                        width: 220px;
                        height: 220px;
                        transform: translateX(60px) translateY(-6px);
                    }
                    .custom-2xl-justify img:nth-child(2),
                    .custom-2xl-justify img:nth-child(3) {
                        width: 350px;
                        height: 200px;
                    }
                    .custom-title {
                        text-align: center;
                        margin-bottom: 2rem;
                    }
                }
                @media (max-width: 639px) {
                    .custom-text-container {
                        padding: 0 1.5rem;
                    }
                    .custom-2xl-justify > div {
                        width: 100%;
                        max-width: 400px;
                        height: auto;
                    }
                    .custom-2xl-justify img:first-child {
                        width: 180px;
                        height: 180px;
                        transform: translateX(70px) translateY(-6px);
                    }
                    .custom-2xl-justify img:nth-child(2),
                    .custom-2xl-justify img:nth-child(3) {
                        width: 280px;
                        height: 160px;
                    }
                    .custom-2xl-justify img:nth-child(3) {
                        transform: translateX(20px) translateY(20px);
                    }
                }
                @media (max-width: 479px) {
                    .custom-2xl-justify img:first-child {
                        transform: translateX(80px) translateY(-6px);
                    }
                    .custom-2xl-justify img:nth-child(2) {
                        transform: translateX(-10px)
                    }    
                    .custom-2xl-justify img:nth-child(3) {
                        transform: translateX(50px) translateY(20px);
                    }
                }
            `}</style>
        </Layout>
    );
};

export default Servicios; 