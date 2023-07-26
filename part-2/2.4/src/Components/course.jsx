import Header from './header';
import Part from './part';
const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} /> 
            <Part parts={course.parts} />
        </div>
    )
}

export default Course;