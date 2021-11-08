import React, { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([]);

  const Countries = ({ countries }) => {

    return (
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            {country.name}
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])



  return (
    <div className="App">
     <h1>Countries</h1>
    </div>
  );
}

export default App;
