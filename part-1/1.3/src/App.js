const Header = (props) => {
  return (
    <div>
      {props.course}
    </div>
  )
}

const Part = (props) => {
  return(
    <p>{props.part} {props.exercises}</p>
)}

const Content = (props) => {
  return (
    <div>
      <Part part = {props.part1} exercises = {props.exercises1} />
      <Part part = {props.part2} exercises = {props.exercises2} />
      <Part part = {props.part3} exercises = {props.exercises3} />
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  return (
    <div>
    <div>
      <Header course={course} />
      <Content  part1 = {part1} part2 = {part2} part3 = {part3} 
        exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3}
      />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3={exercises3} /> 
    </div>
    </div>
  )
}

export default App
