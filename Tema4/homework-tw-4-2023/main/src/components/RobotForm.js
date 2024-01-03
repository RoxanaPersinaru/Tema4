import React, { useState } from 'react';

const RobotForm = ({ onAdd }) => {
  const [type, setType] = useState('');
  const [name, setName] = useState('');
  const [mass, setMass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validare weight și trimite datele către funcția de adăugare
    const parsedMass = parseInt(mass);
    const robotMass = parsedMass < 500 ? '' : parsedMass;

    onAdd({
      type: type,
      name: name,
      mass: robotMass,
    });

    // Resetează valorile formularului
    setType('');
    setName('');
    setMass('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Type:
        <input type="text" id="type" value={type} onChange={(e) => setType(e.target.value)} />
      </label>
      <br />
      <label>
        Name:
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Mass:
        <input type="number" id="mass" value={mass} onChange={(e) => setMass(e.target.value)} />
      </label>
      <br />
      <button type="submit" id="add">Add</button>
    </form>
  );
};

export default RobotForm;


