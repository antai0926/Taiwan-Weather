import WeatherActionTypes from './weather.types';

export const setWeatherData = (weatherData) => ({
  type: WeatherActionTypes.SET_WEATHER,
  payload: weatherData,
});

export const setCity = (city) => ({
  type: WeatherActionTypes.SET_CITY,
  payload: city,
});
