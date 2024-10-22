import { useState, useEffect } from "react";


const Homework = () => {
    const [name, setName] = useState(()=>{
        const saveName = localStorage.getItem()
        return saveName ? JSON.parse(saveName):[]
        
    })
    const [newName, setNewName] = useState('')
    useEffect(()=>{
        localStorage.setItem('names', JSON.stringify(name))

    },[name] )
    const addName = (e)=>{
        e.preventDefault()
        if(newName.trim()) {
                setName([...name,newName])
                setNewName('')

            }

    }
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
        {name.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Homework;
