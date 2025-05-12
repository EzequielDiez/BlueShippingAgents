import React, { useEffect } from 'react';
import Layout from './Layout';
import { useTranslation } from 'react-i18next';

const Puertos = () => {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout isInitialAnimation={false}>
            <div className="flex flex-col items-center px-4 py-20">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-sahar text-[#1D4F87] mb-4 text-center">{t('ports.title')}</h1>
                <p className="font-sahar text-[#1D4F87] text-center max-w-6xl mb-2 text-md sm:text-lg md:text-xl lg:text-2xl">
                    {t('ports.description.part1')}
                </p>
                <p className="font-sahar text-[#1D4F87] text-center max-w-6xl mb-2 text-md sm:text-lg md:text-xl lg:text-2xl">
                    {t('ports.description.part2')}
                </p>
                <p className="font-sahar text-[#1D4F87] text-center max-w-6xl mb-12 text-md sm:text-lg md:text-xl lg:text-2xl">
                    {t('ports.description.part3')}
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
        </Layout>
    );
};

export default Puertos; 