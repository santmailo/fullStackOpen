import React,{useState} from 'react';
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";

function App() {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 1234567890}]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

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
  
    // return the following
    const search = (event) => {
      setSearchName(event.target.value);
      setSearchResult(persons.filter((person) => person.name.includes(searchName)));
    }



  return (
    <div className="App">
      <h2>Phonebook</h2>

      <Filter search={search} searchResult={searchResult}/>

      <h3>Add a new Contact</h3>

      <PersonForm addPersons = {addPersons} addNewName = {addNewName} addNewNumber={addNewNumber}/>

      <h3>Contacts</h3>

      <Persons persons = {persons}/>
    </div>
  );
}

export default App;
