import { useState } from "react";
import "./App.css";

const App = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (name.trim() === "" || number.trim() === "") return;

        const newContact = { name, number };

        // Перевірка на дублікат
        if (contacts.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
            window.alert(`${name} is already added to phonebook`);
        } else {
            setContacts([...contacts, newContact]);
            setName("");
            setNumber("");
        }
    };

    // Фільтрація контактів по введеному рядку пошуку
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="App">
            <h2>Phonebook</h2>

            {/* Форма додавання */}
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

            {/* Поле пошуку */}
            <div style={{ marginTop: "20px" }}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name..."
                />
            </div>

            <h2>Contacts</h2>
            <ul>
                {filteredContacts.length > 0 ? (
                    filteredContacts.map((contact, idx) => (
                        <li key={idx}>
                            {contact.name} — {contact.number}
                        </li>
                    ))
                ) : (
                    <li>No contacts found</li>
                )}
            </ul>
        </div>
    );
};

export default App;
