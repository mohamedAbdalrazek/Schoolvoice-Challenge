import { useLanguage } from "../../../hooks/useLanguage";
import useObserver from "../../../hooks/useObserver";
import { getInitials } from "../../../utils/functions";
import type { Student } from "../../../utils/types";
import styles from "./TopThreeStudents.module.scss";

export const TopThreeStudents = ({ students }: { students: Student[] }) => {
    const { language, t } = useLanguage();
    //For localization using t()
    const rankPlacements = ["first place", "second place", "third place"];
    //useObserver for triggering an animation when scrolling to the component
    const { refs } = useObserver(students, styles);
    return (
        <section
            className={styles.topThreeContainer}
        >
            {students.map((student, index) => (
                <div
                    key={student.id}
                    className={styles.studentCard}
                    data-rank={index + 1}
                    ref={(el) => {
                        refs.current[index] = el
                    }} // ref for on scroll animation
                >
                    <div className={styles.cardContent}>
                        <div className={styles.profileContainer}>
                            <div className={styles.profileImageWrapper}>
                                {/* Crow icon for the first place */}
                                {index === 0 && (
                                    <img
                                        src="/crown.svg"
                                        className={styles.crownIcon}
                                        alt={"First place crown"}
                                        loading="lazy"
                                    />
                                )}

                                {student.studentImage ? (
                                    <img
                                        className={styles.profileImage}
                                        src={student.studentImage}
                                        alt={`${student.name[language]} profile picture`}
                                        loading="lazy"
                                    />
                                ) : (
                                    //Get the first letters of their name if they don't have an image
                                    <span
                                        className={styles.profilePlaceholder}
                                    >
                                        {getInitials(student.name.en)}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.studentInfo}>
                            <h3 className={styles.studentName}>
                                {student.name[language]}
                            </h3>
                            <span className={styles.placementText}>
                                {t(rankPlacements[index])}
                            </span>
                        </div>
                        <div className={styles.pointsContainer}>
                            <strong
                                className={styles.pointsBadge}
                            >
                                {student.points} PT
                            </strong>
                        </div>
                        <div className={styles.detailsContainer}>
                            <div className={styles.detailItem}>
                                <img
                                    src="/section.svg"
                                    alt="Student's section"
                                    className={styles.detailIcon}
                                />
                                <div className={styles.detailContent}>
                                    <span className={styles.detailLabel}>
                                        {t("section")}
                                    </span>
                                    <span className={styles.detailValue}>
                                        {student.section}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.detailItem}>
                                <img
                                    src="/grade.svg"
                                    alt="Students grade"
                                    className={styles.detailIcon}
                                />
                                <div className={styles.detailContent}>
                                    <span className={styles.detailLabel}>
                                        {t("grade")}
                                    </span>
                                    <span className={styles.detailValue}>
                                        {student.grade}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={styles.rankBadge}
                    >
                        <span>{index + 1}</span>
                    </div>
                </div>
            ))}
        </section>
    );
};
