import { sortByPoints } from './utils/functions';
import styles from "./App.module.scss"
import SpinLoading from './components/global/loading/SpinLoading';
import { SchoolInfo } from './components/leaederboard/school-info/SchoolInfo';
import { TopThreeStudents } from './components/leaederboard/top-three-students/TopThreeStudents';
import { Nav } from './components/global/nav/Nav';
import { StudentsList } from './components/leaederboard/students-list/StudentsList';
import Error from './components/global/error/Error';
import useStudentsLeaderboard from './hooks/useStudentsLeaderboard';
import { useLanguage } from './hooks/useLanguage';

function App() {
    const { loading, error, students, school } = useStudentsLeaderboard()
    const { language } = useLanguage()

    if (loading) {
        return (
            <div>
                <SpinLoading />
            </div>
        )
    }
    if (error) {
        return <Error errorMessage={error.message || "Something went wrong please check your connection and refresh the page"} />
    }
    if (!school) {
        return <Error errorMessage={"No School was found please check if that school exists"} />
    }
    if (!students || !Array.isArray(students)) {
        return <Error errorMessage={"No students were found"} />

    }
    const sortedStudents = sortByPoints(students)
    return (
        <div>
            <div className={styles.header}>
                <Nav />
                <SchoolInfo schoolName={school.name[language]} schoolImage={school.image} />
            </div>
            <div className='container'>
                <TopThreeStudents students={sortedStudents.slice(0, 3)} />
                <StudentsList students={sortedStudents.slice(3,)} />
            </div>
        </div>
    );
}

export default App;
