import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number:'0344655432'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchName, setSearchName] = useState('')
 

  const handleChange=(event)=>{
    setNewName(event.target.value)

  }

  const filteredPersons = searchName
  ? persons.filter((person) =>
      person.name.toUpperCase().includes(searchName.toUpperCase())
    )
  : persons;

  const handleSearch=(event)=>{
  
   setSearchName(event?.target.value)
  

  }
  const handleNumberChange=(event)=>{
    setNewNumber(event.target.value)

  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    const isNameExists = persons?.some((person) => person.name === newName);
    if (!isNameExists) {
      const personObject = {
        name: newName,
        number:newNumber
      };
    
      setPersons([...persons, personObject]);
    } else {
      alert(`${newName} is already added to phonebook`);
    }
    
   
  

  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter searchName={searchName} handleSearch={handleSearch}/>
      
        <h2>add a new</h2>

        <PersonForm newName={newName} newNumber={newNumber} handleChange={handleChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit}/>
     
      <h2>Numbers</h2>

      <Persons filteredPersons={filteredPersons}/>
  
    </div>
  )
}

export default App