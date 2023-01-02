import { useEffect, useState } from "react";
import { getWeather } from "../service/weatherService";

const Weather = ({ lat, lon }) => {
  const [currentWeather, setCurrentWeather] = useState([]);

  useEffect(() => {
    const weatherData = async () => {
      const data = await getWeather(lat, lon);
      setCurrentWeather(data);
    };
    weatherData();
  }, [lat, lon]);
  return (
    <>
      <div>
        <h1>Weather in</h1>
        <h2>Temperature</h2>
        <div>{currentWeather}</div>
      </div>
    </>
  );
};

export default Weather;
