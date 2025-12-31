import { useLanguage } from "../../../hooks/useLanguage";
import useObserver from "../../../hooks/useObserver";
import { getInitials } from "../../../utils/functions";
import type { Student } from "../../../utils/types";
import styles from "./TopThreeStudents.module.scss";
const ProfileImage = ({ imageUrl, name, index }: { imageUrl: string | null, name: { en: string, ar: string }, index: number }) => {
    const { language } = useLanguage()
    return (
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
                {imageUrl ? (
                    <img
                        className={styles.profileImage}
                        src={imageUrl}
                        alt={`${name[language]} profile picture`}
                        loading="lazy"
                    />
                ) : (
                    //Get the first letters of their name if they don't have an image
                    <span
                        className={styles.profilePlaceholder}
                    >
                        {getInitials(name.en)}
                    </span>
                )}
            </div>
        </div>
    )
}
const StudentInfo = ({ name, index }: { name: { en: string, ar: string }; index: number }) => {
    const { language, t } = useLanguage();

    //For localization using t()
    const rankPlacements = ["first place", "second place", "third place"];
    return (
        <div className={styles.studentInfo}>
            <h3 className={styles.studentName}>
                {name[language]}
            </h3>
            <span className={styles.placementText}>
                {t(rankPlacements[index])}
            </span>
        </div>
    )
}
const DetailItem = ({ label, value, src }: { label: string, value: string, src: string }) => {
    const { t } = useLanguage();

    return (
        <div className={styles.detailItem}>
            <img
                src={src}
                alt={`Student's ${label}`}
                className={styles.detailIcon}
            />
            <div className={styles.detailContent}>
                <span className={styles.detailLabel}>
                    {t(label)}
                </span>
                <span className={styles.detailValue}>
                    {value}
                </span>
            </div>
        </div>
    )
}
const StudentDetails = ({ section, grade }: { section: string, grade: string }) => {
    return (
        <div className={styles.detailsContainer}>
            <DetailItem label="section" value={section} src="/section.svg" />
            <DetailItem label="grade" value={grade} src="/grade.svg" />
        </div>
    )
}
const PointBadge = ({ points }: { points: number }) => {
    return (
        <div className={styles.pointsContainer}>
            <strong
                className={styles.pointsBadge}
            >
                {points} PT
            </strong>
        </div>
    )
}
const RankBadge = ({ rank }: { rank: number }) => {
    return (
        <div
            className={styles.rankBadge}
        >
            <span>{rank}</span>
        </div>
    )
}
export const TopThreeStudents = ({ students }: { students: Student[] }) => {
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
                        <ProfileImage index={index} imageUrl={student.studentImage} name={student.name} />
                        <StudentInfo index={index} name={student.name} />
                        <PointBadge points={student.points} />
                        <StudentDetails section={student.section} grade={student.grade} />
                    </div>
                    <RankBadge rank={index + 1} />
                </div>
            ))}
        </section>
    );
};
