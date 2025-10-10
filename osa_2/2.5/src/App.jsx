import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Courses from './Courses'
const App = () => {
  
function Header ({Courses}){
  return <h1>{Courses}</h1>
}
function Content ({parts}){
  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>
          {part.name} {part.exercises}
        </p>
      ))}
    </div>
  )}
  
function Total ({parts}){
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <p>Number of exercises {total}</p>
}
  return (
    <div className='box'>
      {Courses.map(Courses =>
        <div key={Courses.id}>
          <Header Courses={Courses.name} />
          <Content parts={Courses.parts} />
          <Total parts={Courses.parts} />
        </div>
      )}
    </div>
  )
}
export default App

