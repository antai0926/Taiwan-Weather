import WeatherActionTypes from './weather.types';

export const fetchWeather = (weatherData) => ({
  type: WeatherActionTypes.FETCH_WEATHER,
  payload: weatherData,
});

export const setCity = (city) => ({
  type: WeatherActionTypes.SET_CITY,
  payload: city,
});
