const Header = () => {
  const course = 'Half Stack application development'
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = (props) => {
  const parts = [ 
    { part: 'Fundamentals of React' },
    { part: 'Using props to pass data' },
    { part: 'State of a component' },
  ]

  const exercises = [ 
    { exercise: 10 },
    { exercise: 7},
    { exercise: 14 },
  ]

  return (
    <div>
      <p>{parts[0].part} {exercises[0].exercise}</p>
      <p>{parts[1].part} {exercises[1].exercise}</p>
      <p>{parts[2].part} {exercises[2].exercise}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part/>
    </div>
  )
}

const Total = () => {
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14

  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App