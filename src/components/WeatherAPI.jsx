import React, { useEffect,useState } from 'react'
import { weather_API_KEY,weatherURL } from './URL'
import axios from "axios";

const WeatherAPI = ({lon,lat}) => {

    const [dayWeather,setDayWeather] = useState();

    useEffect(()=>{
        const getWeatherInLocation = async () => {
            try {
                const response = await axios.get(`${weatherURL}?lat=${lat}&lon=${lon}&appid=${weather_API_KEY}`);
                console.log(response);
                return response;
            } catch (error) {
                console.log(error);
            }
        }
        
        getWeatherInLocation().then((ev)=>setDayWeather(ev.data));

    }, [lon,lat])

  return (
    <div>{dayWeather}</div>
  )
}

export default WeatherAPI