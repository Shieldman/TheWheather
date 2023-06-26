import React, { useEffect, useState } from "react";
import { weather_API_KEY, weatherURL } from "./URL";
import axios from "axios";
import "./WeatherCard.css";

const WeatherAPI = ({latitude,longitude}) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeatherInLocation = async () => {
        try {
          const response = await axios.get(
            `${weatherURL}?lat=${latitude}&lon=${longitude}&appid=${weather_API_KEY}`
          );
          console.log(response);
          return response;
        } catch (error) {
          console.log(error);
        }

    };

    const constructWeather = (response) => {
      try {
        const iconcode = response.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconcode}.png`;

        return (
          <>
            <h2>{response.name}</h2>
            <img className="weather-icon" src={iconUrl} alt="weather-icon" />
            <p>
              <b>Weather:</b> {response.weather[0].description} 
            </p>
            <p>
              <b>Temperature:</b> {(response.main.temp- 273.15).toFixed(2)} ºC
            </p>
            <p>
              <b>Max: </b> {(response.main.temp_max- 273.15).toFixed(2)} ºC ||  <b>Min: </b>{(response.main.temp_min- 273.15).toFixed(2)} ºC
            </p>
            <p>
              <b>Wind speed:</b> {response.wind.speed}m/s || <b>Wind direction:</b> {response.wind.deg}º
            </p>

          </>
        );
      } catch (error) {
        console.log(error);
      }
    };

    getWeatherInLocation().then((ev) => {
        setWeather(constructWeather(ev.data))
        console.log(ev.data);
    });
  }, [latitude,longitude]);

  return <div className="weather-card">{weather}</div>;
};

export default WeatherAPI;
