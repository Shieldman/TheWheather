import React from 'react'
import WeatherCard from '../components/WeatherCard'
import WeatherAPI from '../components/WeatherAPI'

const Home = () => {
  return (
    <>
        <h1>This is the Home Page</h1>
        <WeatherAPI lon='41.38' lat='2.16'/>
    </>
  )
}

export default Home