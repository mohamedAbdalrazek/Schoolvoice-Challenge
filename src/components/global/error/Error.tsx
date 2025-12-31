import { Nav } from '../nav/Nav'
import styles from "./Error.module.scss"
export default function Error({ errorMessage }: { errorMessage: string }) {
    return (
        <div className={styles.errorPage}>
            <Nav />
            <div className={styles.errorContainer}>
                <img src="/error.png" alt={errorMessage} className={styles.errorImage} />
                <p className={styles.errorMessage}>{errorMessage}</p>
            </div>
        </div>
    )
}
