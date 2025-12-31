import LanguageSwitcher from "../language-switcher/LanguageSwitcher";
import styles from "./Nav.module.scss"
export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <a href="/" className={styles.logoWrapper}>
                <img src="/logo.svg" alt="Schoolvoice" className={styles.logo} />
            </a>
            <LanguageSwitcher />
        </nav>
    );
}