import { useState } from "react";
import './App.css'
const App = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (name.trim() === '') return;
        if (names.includes(name)) {
            window.alert(`${name} is already added to phonebook`);
        } else {
            setNames([...names, name]);
            setName('');
        }
    };


    return (
        <div className="App">
            <h2>Phonebook</h2>
            <form>

                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Add Name and Number"
                />
                <button onClick={handleAdd} type="button">ADD</button>
                <ul>
                    {names.map((n, idx) => <li key={idx}>{n}</li>)}
                </ul>
            </form>
            <h2>Numbers</h2>
        </div>
    );
}
export default App;