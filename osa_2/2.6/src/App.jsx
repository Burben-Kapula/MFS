
import { useState } from "react";
import './App.css'

const App = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault(); // зупиняє перезавантаження форми
        if (name.trim() !== '') {
            setNames([...names, name]);
            setName('');
        }

    };
    console.log(name);
    return (
        <div>
            <form>
                <>
                    <div className="form-group">
                        <h2>Phonebook</h2>
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Add Name and Number"
                        />
                        <button onClick={handleAdd} type="button">ADD</button>
                    </div>
                    <ul>
                        <h2>Numbers</h2>
                        {names.map((n, idx) => <li key={idx}>{n}</li>)}
                    </ul>
                </>
            </form>
            <hr/>
        </div>
    )

}

export default App