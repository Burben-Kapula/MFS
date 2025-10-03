
const Header = () => {
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

const Header = (props) => {
  console.log(props)  
  return <h1>{props.course}</h1>
}

  return (
    <div>
      <Header props={course}></Header>
      <Header props={part1}></Header>
      <Header props={part2}></Header>
      <Header props={part3}></Header>
    </div>
  )
}


export default Header
