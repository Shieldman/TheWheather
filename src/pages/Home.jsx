import React, { useEffect, useState } from "react";
import WeatherAPI from "../components/WeatherAPI";


const Home = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect (()=>{
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
    console.log(latitude, longitude);
  },[latitude,longitude])

  return (
    <>
      <h1>Welcome to the weather application</h1>
        {latitude&&longitude?<WeatherAPI latitude={latitude} longitude={longitude} />:<h2>Loading...</h2>}
    </>
  );
};

export default Home;