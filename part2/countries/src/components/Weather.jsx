import { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);
  const apiKey = import.meta.env.VITE_WEATHER_KEY;

  useEffect(() => {
    if (!capital) return;

    axios
      .get("https://api.openweathermap.org/data/2.5/weather", {
        params: { q: capital, units: "metric", appid: apiKey },
      })
      .then((response) => setWeather(response.data))
      .catch(() => setError(true));
  }, [capital, apiKey]);

  if (!capital) return null;
  if (error) return <p>Weather data is not available</p>;
  if (!weather) return <p>Loading weather...</p>;

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>Temperature {weather.main.temp} °Celsius</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
      <p>Wind {weather.wind.speed} m/s</p>
    </div>
  );
};

export default Weather;
