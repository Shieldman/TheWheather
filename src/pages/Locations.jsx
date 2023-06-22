import React from 'react'
import WeatherCard from '../components/WeatherCard'

const Locations = () => {
  return (
    <>
      <h2>This is the Multiple locations page</h2>
      <div className='location-cards-group'>
        <WeatherCard key='01' />
        <WeatherCard key='02' />
        <WeatherCard key='03' />
        </div>  
    </>
  )
}

export default Locations