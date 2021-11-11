import React, { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([]);

  const Countries = ({ countries }) => {

    return (
      <ul>
        {countries.map((country) => (
          <div key={country.numericCode}>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Language(s): {country.languages[0].name}</p>
            <img src={country.flag} alt={country.name} width="300px" />
          </div>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v2/all?fields=name,capital,population,languages,flag,numericCode')
      .then(response => {
        console.log('promise fulfilled')
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])



  return (
    <div className="App">
     <h1>Countries</h1>
     <Countries countries={countries} />
    </div>
  );
}

export default App;
