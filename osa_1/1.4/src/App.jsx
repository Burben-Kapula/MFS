



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    console.log(course),
    parts.forEach(part => {
      console.log(`${part.name} ${part.exercises}`)
    })

  )
}

export default App
