import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] =useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  useEffect(()=> {
    personService.getAll()
      .then(response => {
        setPersons(response)
      })
  },[])

  const newNotification = (message) => {
    setNotificationMessage(message)
    setTimeout (() => {
      setNotificationMessage(null)
    }, 5000)
  }

  const addNumber = (e) =>{
    e.preventDefault()
    const personObject = {name: newName, number:newNumber}
    if (persons.some((person) => person.name === newName)) { 
      if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)){
        personService.update(persons.find(person => person.name === newName).id, personObject)
          .then(newObject =>{
            setPersons(persons.map(person => person.id != newObject.id ? person : newObject) )
            newNotification(`${personObject.name}'s number is updated.`)
          
          })
          .catch(error =>{
            newNotification(`${personObject.name} has already been removed from server.`)
          })
        }
    } else {
      console.log("not redundant")
      personService.create(personObject)
        .then(response => setPersons(persons.concat(response)))
      newNotification(`${personObject.name} has been added to the phonebook`)
    }
    setNewName('')
    setNewNumber('')
  }

  const deleteNumber = (person) => {
    if (window.confirm(`Delete ${person.name}?`)){
      personService.deletePerson(person.id)
      .then(response => {
        const indexOfDeleted = persons.indexOf(person)
        const newPersons = [...persons]
        newPersons.splice(indexOfDeleted, 1)
        setPersons(newPersons)
      }) 
    }
    
  }
  const handleNameOnChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberOnChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilterOnChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage}/>  
      <Filter filter={filter} handleFilterOnChange={handleFilterOnChange}/>
      <h2>Add a New Number</h2>
      <PersonForm addNumber={addNumber} newName={newName} handleNameOnChange = {handleNameOnChange} newNumber={newNumber} handleNumberOnChange={handleNumberOnChange}/>
      <h2>Numbers</h2>
      <Persons deleteNumber={deleteNumber} filteredPersons={persons.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))}/>
    </div>
  )
}

export default App