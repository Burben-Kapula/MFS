import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Buttons'
function App() {

  return (
    <>
      <div>
        <p>Give feedback</p>
        <Button name1='good' name2='neutral' name3='bad'></Button>

      </div>
    </>
  )
}

export default App
