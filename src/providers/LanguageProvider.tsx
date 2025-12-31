import { useEffect, useState } from 'react';
import data from '../assets/strings.json';
import { LanguageContext } from '../context/LanguageContext';
import type { Language, LanguageProviderProps } from '../utils/types';


export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>(() => {
        const stored = localStorage.getItem('preferredLanguage');
        // if there's no language stored, store the default language 'en'
        if (!stored) {
            localStorage.setItem('preferredLanguage', 'en')
        }
        // Default to 'en' if localStorage has no valid language
        return stored === 'en' || stored === 'ar' ? stored : 'en';
    });
    
    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('preferredLanguage', lang);
    };

    //change the html lang and dir based on the language
    useEffect(() => {
        document.documentElement.lang = language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    }, [language]);

    //returning the localized text based on the key
    const t = (key: string) => {
        const localizationData = data as Record<string, { en: string; ar: string }>;
        return localizationData[key]?.[language] ?? key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
    );
};
