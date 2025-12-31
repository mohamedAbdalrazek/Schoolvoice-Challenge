// RegularStudentsList.tsx
import { getInitials } from "../../../utils/functions"
import type { Student } from "../../../utils/types"
import styles from "./StudentsList.module.scss"
import useObserver from "../../../hooks/useObserver"
import { useLanguage } from "../../../hooks/useLanguage"
const StudentInfo = ({imageUrl, name}:{imageUrl:string|null, name:{en:string, ar:string}}) => {
    const { language } = useLanguage()

    return (
        <div className={styles.studentInfo}>
            <div className={styles.profileWrapper}>
                {imageUrl ? (
                    <img
                        className={styles.studentImage}
                        src={imageUrl}
                        alt={`${name[language]} profile picture`}
                        loading="lazy"
                    />
                ) : (
                    //Get the first letters of their name if they don't have an image
                    <div className={styles.profilePlaceholder}>
                        {getInitials(name.en)}
                    </div>
                )}
                <span className={styles.studentName}>
                    {name[language]}
                </span>
            </div>
        </div>
    )
}
const Wrapper = ({ value, className }: { value: string | number, className: string }) => {
    return (

        <div className={className}>
            <span >{value}</span>
        </div>
    )
}
export const StudentsList = ({ students }: { students: Student[] }) => {

    //useObserver for triggering an animation when scrolling to the component
    const { refs } = useObserver(students, styles)
    return (
        <div className={styles.studentsList}>
            {students.map((student, index) => (
                <div className={styles.studentRow} key={student.id} ref={(el) => {
                    refs.current[index] = el
                }} // ref for on scroll animation 
                >
                    {/*The first three was already shown so we need to skip three positions*/}
                    <Wrapper className={styles.rankWrapper} value={index + 4} />

                    <StudentInfo imageUrl={student.studentImage} name={student.name} />
                    <Wrapper className={styles.pointsWrapper} value={student.points} />
                    <Wrapper className={styles.sectionWrapper} value={student.section} />
                    <Wrapper className={styles.gradeWrapper} value={student.grade} />
                </div>
            ))}
        </div>
    )
}