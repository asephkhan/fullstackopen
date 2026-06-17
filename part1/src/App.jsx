import Part from "./Part"
import TotalExercises from "./TotalExercises"
import Title from "./Title"

const App = () => {
    const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Title heading={course.name} />
        <Part parts={course.parts}/>
      

       <TotalExercises parts={course.parts}/> 
    </div>
  )
}

export default App
