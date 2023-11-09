import React from 'react';
import './Country.css'


const Country = (props) => {

 console.log(props) 

    return (
        <div className='Country'>
            <h1>Country Name: {props.name}</h1>
            <img src={props.flags.png} alt="" />
            <h1>Area: {props.area}</h1>
            <h1>Capital: {props.capital}</h1>
            <h1>Population: {props.population}</h1>
            <h2>Region: {props.region}</h2>
        </div>
    );
};

export default Country;