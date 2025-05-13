import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex items-center h-7 w-20 rounded-full bg-transparent border border-white transition-all duration-300 hover:bg-white/20 hover:shadow-lg cursor-pointer z-50 overflow-hidden"
    >
      <span
        className={`absolute left-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${i18n.language === 'en' ? 'text-white' : 'text-[#1D4F87]'}`}
      >
        ES
      </span>
      <span
        className={`absolute right-3 top-1/2 -translate-y-1/2 font-['Sahar'] font-bold z-20 transition-colors duration-300 ${i18n.language === 'en' ? 'text-[#1D4F87]' : 'text-white'}`}
      >
        EN
      </span>
      <span
        className={`absolute h-7 w-10 rounded-full bg-white transition-transform duration-300 ease-in-out shadow-md z-10 ${i18n.language === 'en' ? 'translate-x-10' : 'translate-x-0'}`}
      />
    </button>
  );
};

export default LanguageSwitcher; 