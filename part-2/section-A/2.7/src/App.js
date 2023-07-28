import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
  const [newName, setNewName] = useState('');

  const addPersons = (event)=> {
    event.preventDefault();

    if(persons.some((person) => person.name === newName.name)){
      alert(`${newName.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(newName));
  }

  const addNewName = (event)=>{
    const newObj = {name: event.target.value};
    setNewName(newObj);
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input onChange={addNewName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <p>{newName.name}</p>
      {persons.map((person) => <p key = {person.name}>{person.name}</p>)}
    </div>
  )
}

export default App;