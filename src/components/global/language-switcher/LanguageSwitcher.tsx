// components/LanguageSwitcher/LanguageSwitcher.tsx
"use client";

import { useState } from "react";
import styles from "./LanguageSwitcher.module.scss";
import { useLanguage } from "../../../hooks/useLanguage";
import type { LanguageData } from "../../../utils/types";

const SwitcherButton = ({ currentLanguage, toggleDropdown, isOpen }: { currentLanguage?: LanguageData, toggleDropdown: () => void, isOpen: boolean }) => {
    return (
        <button
            className={styles.switcherButton}
            onClick={toggleDropdown}
            aria-label="Language selector"
        >
            {currentLanguage && (
                <>
                    <img
                        src={currentLanguage.flag}
                        alt={`${currentLanguage.name} language flag `}
                        className={styles.flag}
                    />
                    <span className={styles.languageName}>
                        {currentLanguage.name}
                    </span>
                    <span className={styles.arrow}>
                        {isOpen ? "↑" : "↓"}
                    </span>
                </>
            )}
        </button>
    )
}
const Dropdown = ({ closeDropdown, languages }: { closeDropdown: () => void, languages: LanguageData[] }) => {
    const { setLanguage, language } = useLanguage()
    return (
        <div className={styles.dropdown}>
            {languages.map((lan) => (
                <button
                    key={lan.code}
                    className={`${styles.languageOption} ${language === lan.code
                        ? styles.active
                        : ""
                        }`}
                    onClick={() => {
                        setLanguage(lan.code)
                        closeDropdown()
                    } //Changing the language and closing the dropdown
                    }
                    aria-label={`Switch to ${lan.name}`}
                >
                    <img
                        src={lan.flag}
                        alt={`${lan.name} flag`}
                        className={styles.flag}
                    />
                    <span className={styles.languageName}>
                        {lan.name}
                    </span>
                </button>
            ))}
        </div>
    )
}

export default function LanguageSwitcher({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage()

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    //object for showing meaningful data based on the language
    const languages: LanguageData[] = [
        { code: "en", name: "English", flag: "/flags/uk.png" },
        { code: "ar", name: "العربية", flag: "/flags/uae.png" },
    ];

    const currentLanguage = languages.find(
        (lang) => lang.code === language
    );

    return (
        <div className={`${styles.languageSwitcher} ${className}`}>

            <SwitcherButton currentLanguage={currentLanguage} toggleDropdown={toggleDropdown} isOpen={isOpen} />
            {isOpen && (
                <Dropdown closeDropdown={closeDropdown} languages={languages} />
            )}
        </div>
    );
}
