import React,{useEffect, useState} from 'react';
import axios from 'axios';
import url from './services/service';
import Filter from "./components/filter";
import PersonForm from "./components/personForm";
import Persons from "./components/persons";



function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  // get data from server
  useEffect(()=>{
    url.getAll()
    .then(response => setPersons(response.data))},[]);

    // add person to persons array
    const addPersons = (event)=> {
      event.preventDefault();
  
      // to check if the name is already in the array; if it is, alert and return
      if(persons.some((person) => person.name === newName)){
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const person = persons.find((person) => person.name === newName);
          const changedPerson = {...person, number: newNumber};
          url.update(person.id, changedPerson);
          setPersons(persons.map((person) => person.id !== changedPerson.id ? person : changedPerson));
        }
        return;
      }

      else{
        // add the new name to the persons array
        const newPerson = {name: newName, number: newNumber};
        url.create(newPerson);
        setPersons(persons.concat(newPerson));
      }
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
      setSearchResult([]);
      setSearchName('');
      setSearchName(event.target.value);
      setSearchResult(persons.filter((person) => person.name.includes(searchName)));
    }

    const deletePerson = (id) => {
      axios.delete(`http://localhost:3001/persons/${id}`);  
      setPersons(persons.filter((person) => person.id !== id));
    }
    
  return (
    <div className="App">
      <h2>Phonebook</h2>

      <Filter search={search} searchResult={searchResult}/>

      <h3>Add a new Contact</h3>

      <PersonForm addPersons = {addPersons} addNewName = {addNewName} addNewNumber={addNewNumber}/>

      <h3>Contacts</h3>

      <Persons persons = {persons} deletePerson={deletePerson}/>
    </div>
  );
}

export default App;
