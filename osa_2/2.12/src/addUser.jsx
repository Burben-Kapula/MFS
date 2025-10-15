import { useState } from 'react';

function AddUser({ list, setList }) {
    const [name, setName] = useState('');
    const [num, setNum] = useState('');

    const handleAdd = () => {
        if (name.trim() === '' || num.trim() === '') {
            alert('Fill all fields');
            return;
        }

        const isDuplicate = list.some(
            (item) => item.name.toLowerCase() === name.toLowerCase()
        );

        if (isDuplicate) {
            alert('This name is already exists!');
            return;
        }

        setList([...list, { name, num }]);
        setName('');
        setNum('');
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default AddUser;
