import { useState } from 'react'

import './App.css'
function App() {
  const [num, setNumber] = useState()
    const [name, SetName] = useState()
    let list = []
    if (add
    return (
    <>
        <input type="text" name="add" id="add"
        value={num}
        onChange={e => setNumber(e.target.value)}
               placeholder="add number"
        />
        <input type="text" name="add" id="add"
               value={name}
               onChange={e => SetName(e.target.value)}
               placeholder="add name"
        />
        <button onclick={handleclick}>add</button>
        <p>{list}</p>
    </>
  )
}

export default App
