import axios from "axios";

const API_KEY = "Ay6MWaAetQAq60JGfUz8LjIJzTQYsnBd";

export const getCityInfo = async (city) => {
  const CITY_API = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=`;
  const CITY_URL = CITY_API.concat(city);
  const cityRes = await axios.get(CITY_URL);
  return cityRes;
};

export const getCityCurrentWeather = async (key) => {
  const CITY_WEATHER_API =
    "https://dataservice.accuweather.com/currentconditions/v1/";
  const WEATHER_URL = `${CITY_WEATHER_API}${key}?apikey=${API_KEY}`;
  const weatherRes = await axios.get(WEATHER_URL);
  return weatherRes;
};

export const getCityForecast = async (key) => {
  const FORECAST_API = `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`;
  const forecastRes = await axios.get(FORECAST_API);
  return forecastRes;
};
