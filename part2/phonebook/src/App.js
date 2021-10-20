import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')


  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addName = (e) => {
    e.preventDefault()

    persons.forEach(person => {
      if (person.name.toLowerCase() !== newName.toLowerCase()) {

        const personObject = {
          name: newName
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        }
      else alert(`${newName} is already added to phonebook`)
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          <button type="submit" onClick={addName}>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>{person.name}</li>
        )}
      </ul>
    </div>
  )
}

export default App