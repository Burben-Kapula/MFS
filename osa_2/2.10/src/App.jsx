import { useState } from "react";
import ContactList from "./ContactList";
import "./App.css";

const App = () => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [contacts, setContacts] = useState([]);
    const [search, setSearch] = useState("");

    const handleAdd = () => {
        if (name.trim() === "" || number.trim() === "") return;

        const newContact = { name, number };

        if (contacts.some((c) => c.name.toLowerCase() === name.toLowerCase())) {
            window.alert(`${name} is already added to phonebook`);
        } else {
            setContacts([...contacts, newContact]);
            setName("");
            setNumber("");
        }
    };

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="App">


            <ContactList contacts={filteredContacts} />
        </div>
    );
};

export default App;
