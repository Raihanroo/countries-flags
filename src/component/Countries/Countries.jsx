import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

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
            {/* {
                countries.map(country => console.log(country))
            } */}
            
            {
            countries.map(country =>  <Country 
            name={country.name.common} 
            area= {country.area} 
            capital = {country.capital} 
            population = {country.population} 
            region = {country.region}
            ></Country>)
        }
        </div>
        
    );
};

export default Countries;