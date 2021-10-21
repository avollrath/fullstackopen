import React, { useState } from 'react'

const App = () => {

  const [ persons, setPersons ] = useState([
    {
      name: 'Arto Hellas',
      number: '23823 2323'
    }
  ])
  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    persons.forEach(person => {
      if (person.name.toLowerCase() !== newName.toLowerCase()) {

        const personObject = {
          name: newName,
          number: newNumber
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
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
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person =>
          <li key={person.name}>
            {person.name} : {person.number}
          </li>
        )}
      </ul>
    </div>
  )
}

export default App