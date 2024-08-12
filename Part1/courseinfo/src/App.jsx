
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  )
}

const Total = (props) => {
  const total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises;
  return (
    <>
      <p>Total: {total}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>Course: {props.part.course}</p>
      <p>Exercises: {props.part.exercises}</p>
      <br />
    </>
  )
}

const App = () => {  
  const course = {
    name: 'Half Stack application development',
  parts: [
    {
      course:'Fundamentals of React', 
      exercises: 10
    },
    {
      course:'Using props to pass data', 
      exercises: 7
    },
    {
      course:'State of a component', 
      exercises: 14
    }
  ]
};

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}


export default App
