// components/LanguageSwitcher/LanguageSwitcher.tsx
"use client";

import { useState } from "react";
import styles from "./LanguageSwitcher.module.scss";
import { useLanguage } from "../../../hooks/useLanguage";


export default function LanguageSwitcher({ className }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const { language, setLanguage } = useLanguage()

    const toggleDropdown = () => setIsOpen(!isOpen);
    const closeDropdown = () => setIsOpen(false);

    //object for showing meaningful data based on the language
    const languages: {
        code: "en" | "ar";
        name: string;
        flag: string;
    }[] = [
            { code: "en", name: "English", flag: "/flags/uk.png" },
            { code: "ar", name: "العربية", flag: "/flags/uae.png" },
        ];

    const currentLangData = languages.find(
        (lang) => lang.code === language
    );

    return (
        <div className={`${styles.languageSwitcher} ${className}`}>
            <button
                className={styles.switcherButton}
                onClick={toggleDropdown}
                aria-label="Language selector"
            >
                {currentLangData && (
                    <>
                        <img
                            src={currentLangData.flag}
                            alt={`${currentLangData.name} language flag `}
                            className={styles.flag}
                        />
                        <span className={styles.languageName}>
                            {currentLangData.name}
                        </span>
                        <span className={styles.arrow}>
                            {isOpen ? "↑" : "↓"}
                        </span>
                    </>
                )}
            </button>

            {isOpen && (
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
            )}
        </div>
    );
}
