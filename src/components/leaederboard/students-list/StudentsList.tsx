// RegularStudentsList.tsx
import { getInitials } from "../../../utils/functions"
import type { Student } from "../../../utils/types"
import styles from "./StudentsList.module.scss"
import useObserver from "../../../hooks/useObserver"
import { useLanguage } from "../../../hooks/useLanguage"

export const StudentsList = ({ students }: { students: Student[] }) => {
    const { language } = useLanguage()

    //useObserver for triggering an animation when scrolling to the component
    const { refs } = useObserver(students, styles)
    return (
        <div className={styles.studentsList}>
            {students.map((student, index) => (
                <div className={styles.studentRow} key={student.id} ref={(el) => {
                    refs.current[index] = el
                }} // ref for on scroll animation 
                >
                    <div className={styles.rankWrapper}>
                        {/*The first three was already shown so we need to skip three positions*/}
                        <span className={styles.rankBadge}>{index + 4}</span>
                    </div>

                    <div className={styles.studentInfo}>
                        <div className={styles.profileWrapper}>
                            {student.studentImage ? (
                                <img
                                    className={styles.studentImage}
                                    src={student.studentImage}
                                    alt={`${student.name[language]} profile picture`}

                                />
                            ) : (
                                //Get the first letters of their name if they don't have an image
                                <div className={styles.profilePlaceholder}>
                                    {getInitials(student.name.en)}
                                </div>
                            )}
                            <span className={styles.studentName}>
                                {student.name[language]}
                            </span>
                        </div>
                    </div>

                    <div className={styles.pointsWrapper}>
                        <span className={styles.points}>
                            {student.points} PT
                        </span>
                    </div>

                    <div className={styles.sectionWrapper}>
                        <span className={styles.section}>
                            {student.section}
                        </span>
                    </div>

                    <div className={styles.gradeWrapper}>
                        <span className={styles.grade}>
                            {student.grade}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}