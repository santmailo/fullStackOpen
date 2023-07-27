import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 1234567890}]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  // add person to persons array
  const addPersons = (event)=> {
    event.preventDefault();

    // to check if the name is already in the array; if it is, alert and return
    if(persons.some((person) => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    // add the new name to the persons array
    const newPerson = {name: newName, number: newNumber};
    setPersons(persons.concat(newPerson));
  }

  // add new name to newName
  const addNewName = (event)=>{
    setNewName(event.target.value);
  }

  // add new number to newNumber
  const addNewNumber = (event) => {
    setNewNumber(event.target.value);
  }




  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPersons}>
        <div>
          name: <input onChange={addNewName}/>
        </div>
        <div>
          number: <input onChange={addNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {/* <p>{newName.name}</p> */}
      {persons.map((person) => <p key = {person.name}>{`${person.name}  -  ${person.number}`}</p>)}
    </div>
  )
}

export default App;