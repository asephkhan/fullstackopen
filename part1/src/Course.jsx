import Part from "./Part"
import TotalExercises from "./TotalExercises"
import Title from "./Title"

const Course = ({course}) => {
     return (
            <div>
      <Title heading={course.name} />
        <Part parts={course.parts}/>
      

      {/*  <TotalExercises parts={course.parts}/>  */}
    </div>
     )
}

export default Course