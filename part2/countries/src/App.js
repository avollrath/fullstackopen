import React, { useState, useEffect } from "react";
import axios from 'axios'

const App = () => {

  const [countries, setCountries] = useState([]);

  const Countries = ({ countries }) => {

    return (
      <ul>
        {countries.map((country) => (
          <div key={country.numericCode}>
            {country.name}
            Capital {country.capital}
            Population {country.population}
            <h2>Languages</h2>
            {country.languages[0].name}
            <img src={country.flag} alt={country.name} height="600" />
          </div>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.com/v2/all')
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
