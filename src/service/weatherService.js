import axios from "axios";
const locationKey = process.env.REACT_APP_CITY_KEY;
const weatherKey = process.env.REACT_APP_WEATHER_API_KEY;
const weatherUrl = `https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=`;
const forecastUrl = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=`;
const locationUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?rapidapi-key=${locationKey}&minPopulation=20000&namePrefix=`;

export const getCity = async (city) => {
  try {
    const response = await axios.get(`${locationUrl}${city}`);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export const getWeather = async (lat, lon) => {
  const response = await axios.get(`${weatherUrl}${lat}${lon}`);
  return response.data;
};
export const getForecast = async (lat, lon) => {
  const response = await axios.get(`${forecastUrl}${lat}${lon}`);
  return response.data;
};
