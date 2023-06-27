import React, { useEffect, useState } from "react";
import { weather_API_KEY, weatherFiveDaysURL } from "./URL";
import axios from "axios";
import "./WeatherCard.css";

const WeatherAPI = ({ latitude, longitude }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeatherInLocation = async () => {
      try {
        const response = await axios.get(
          `${weatherFiveDaysURL}?lat=${latitude}&lon=${longitude}&appid=${weather_API_KEY}`
        );
        console.log(response);
        return response;
      } catch (error) {
        console.log(error);
      }
    };

    const constructWeather = (response) => {
      return (
        <>
          <h2>{response.city.name}</h2>
          {response.list.map((forecast) => {
            return (
              <>
                <img
                  className="weather-icon"
                  src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                  alt="weather-icon"
                />
                {/* <p>
                  <b>Weather:</b> {response.weather[0].description}
                </p>
                <p>
                  <b>Temperature:</b> {(response.main.temp - 273.15).toFixed(2)}{" "}
                  ºC
                </p> */}
              </>
            );
          })}
        </>
      );
    };

    getWeatherInLocation().then((ev) => {
      setWeather(constructWeather(ev.data));
    });
  }, [latitude, longitude]);

  return <div className="weather-card">{weather}</div>;
};

export default WeatherAPI;
