import React, { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const Countries = ({ countries }) => {
    return (
      <div>
        {countries.map((country) => (
          <div key={country.numericCode}>
            <h2>{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <p>Language(s):</p>
            <ul>
              {country.languages.map(lang => (
                 <li key={lang.name}>{lang.name}</li>
              ))}
            </ul>
            <img src={country.flag} alt={country.name} width="300px" />
          </div>
        ))}
      </div>
    );
  };

  const Filter = () => {
    return (
      <div>
        Search countries:
        <input onChange={handleFilterChange} value={filter} />
      </div>
    );
  };

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v2/all?fields=name,capital,population,languages,flag,numericCode')
      .then(response => {
        setCountries(response.data)
      })
  }, [])



  return (
    <div className="App">
     <h1>Countries</h1>
     <Filter />
     <Countries countries={countries} />
    </div>
  );
}

export default App;
