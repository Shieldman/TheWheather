import React, {useState,useEffect} from 'react'
import FiveDaysWeatherApi from '../components/FiveDaysWeatherApi'

const Locations = () => {

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect (()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  },[latitude,longitude])

  return (
    <>
      <h2>Current location weather in a 5 days scope</h2>
      {latitude&&longitude?<FiveDaysWeatherApi latitude={latitude} longitude={longitude} />:<h2>Loading...</h2>}

    </>
  )
}

export default Locations