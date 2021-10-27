import React, { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ newFilter, setNewFilter ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    handleFilter(newFilter)
  }

  const handleFilter = () => {
    const filteredArr = persons.filter(person => {
      return person.name.toLowerCase().includes(newFilter.toLowerCase())})
    setPersons(filteredArr)
  }




  const addPerson = (e) => {
    e.preventDefault()
    if (persons.find(person => person.name.toLowerCase() === newName.toLowerCase()))
      alert(`${newName} is already added to phonebook`)
    else
      {
        const personObject = {
          name: newName,
          number: newNumber,
          id: persons.at(-1).id + 1
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
      }
  }

  const Person = ({persons}) => {
    return  (
              <ul>
                {persons.map(person =>
                  <li key={person.id}>
                    {person.name} : {person.number} : {person.id}
                  </li>
                )}
              </ul>
            )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <p>Filter shown with:
        <input onChange={handleFilterChange} value={newFilter} />
      </p>
      <form>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit" onClick={addPerson}>add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <Person persons={persons}/>
    </div>
  )
}

export default App