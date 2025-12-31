import styles from "./SpinLoading.module.scss"
const SpinLoading = () => {
    return (
        <div className={styles.spinnerWrapper}>

            <span
                className={styles.spinner}
                aria-label="loading..."
            ></span>
        </div>
    );
};

export default SpinLoading;
