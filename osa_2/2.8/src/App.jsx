import { useState } from "react";
import "./App.css";

const App = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [contacts, setContacts] = useState([]);

    const handleAdd = (e) => {
        e.preventDefault();
        if (name.trim() === "" || number.trim() === "") return;

        const newContact = `${name} ${number}`;

        if (contacts.includes(newContact)) {
            window.alert(`${name} is already added to phonebook`);
        } else {
            setContacts([...contacts, newContact]);
            setName("");
            setNumber("");
        }
    };

    return (
        <div className="App">
            <h2>Phonebook</h2>
            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                />
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Add Number"
                />
                <button onClick={handleAdd} type="button">
                    ADD
                </button>
            </form>

            <h2>Contacts</h2>
            <ul>
                {contacts.map((contact, idx) => (
                    <li key={idx}>{contact}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
