import { useLanguage } from "../../../hooks/useLanguage"
import styles from "./SchoolInfo.module.scss"
export const SchoolInfo = ({ schoolName, schoolImage }: { schoolName: string, schoolImage: string }) => {
    const { t } = useLanguage()
    return (
        <div className={styles.schoolInfo}>
            <div className={styles.logoWrapper}>
                <img className={styles.schoolLogo} src={schoolImage} alt={schoolName} />
            </div>
            <div>
                <h1 className={styles.title}>{t("leaderboard")} </h1>
                <h2 className={styles.schoolName}>{schoolName}</h2>
            </div>
        </div>
    )
}