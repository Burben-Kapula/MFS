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
        <Button name1='Good' name2='Neutral' name3='Bag'></Button>

      </div>
    </>
  )
}

export default App
