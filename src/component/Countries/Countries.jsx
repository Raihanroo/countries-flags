import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'



const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() =>{
      
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h1>Hello From All Over the World: {countries.length}</h1>
           
            
          <div className='countries-container'>
          {
            countries.map(country => <Country
            name={country.name.common} 
            flags = {country.flags}
            area= {country.area} 
            capital = {country.capital} 
            population = {country.population} 
            region = {country.region}
            key={country.cca3}
            ></Country>)
        }
          </div>
        </div>
        
    );
};

export default Countries;