import React, { useState, useEffect } from 'react';

const App = () => {
 
  const [names, setNames] = useState(() => {

    const savedNames = localStorage.getItem('names');
    return savedNames ? JSON.parse(savedNames) : [];
  });

  const [newName, setNewName] = useState('');


  useEffect(() => {
    localStorage.setItem('names', JSON.stringify(names));
  }, [names]);


  const addName = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      setNames([...names, newName]);
      setNewName(''); 
    }
  };

  return (
    <div>
      <h1>Список имён</h1>
      <form onSubmit={addName}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Введите имя"
        />
        <button type="submit">Добавить</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;