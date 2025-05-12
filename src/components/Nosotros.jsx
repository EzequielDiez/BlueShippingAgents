import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';

const Nosotros = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout isInitialAnimation={false}>
            <div className="container mx-auto px-4 py-20 font-sahar">
                <h1 className="text-[#1D4F87] text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-8 font-bold">{t('about.title')}</h1>

                <p className="text-[#1D4F87] text-md sm:text-lg md:text-xl lg:text-2xl text-center mb-28 max-w-4xl mx-auto">
                    {t('about.description')}
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
                            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl mb-4">{t('about.objective.title')}</h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-bold">{t('about.objective.subtitle')}</h3>
                            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
                                {t('about.objective.description')}
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[45%_55%] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-shadow duration-300">
                        <div className="bg-[#1D4F87] text-white p-8">
                            <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl mb-4">{t('about.values.title')}</h2>
                            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 font-bold">{t('about.values.subtitle')}</h3>
                            <p className="text-sm sm:text-md md:text-lg lg:text-xl">
                                {t('about.values.description')}
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