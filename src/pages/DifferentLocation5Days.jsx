import React from 'react'
import { useState,useEffect } from 'react';
import FiveDaysWeatherAPI from '../components/FiveDaysWeatherApi'
import { cities } from '../components/Cities';

const DifferentLocation5Days = () => {

    const[city,setCity] = useState();

    const handleSelectInput = (selection)=>{
        console.log('The input is', selection.target.value);
        setCity(cities.find((city)=>city.name==selection.target.value))
    }

    useEffect(()=>{},[city])

  return (
    <div>
        <h2>Select the city you want to see the weather </h2>
        <select name="citiy-selection" id="citiy-selection" placeholder='Select a city' onChange={handleSelectInput}>
            {cities.map((city)=>(<option key={city.name} value={city.name}>{city.name}</option>))}
        </select>
        {city?(<FiveDaysWeatherAPI longitude={city.longitude} latitude={city.latitude}/>):null}

    </div>
  )
}

export default DifferentLocation5Days