import WeatherActionTypes from './weather.types';

export const setWeatherData = (weatherData) => ({
  type: WeatherActionTypes.SET_WEATHER,
  payload: weatherData,
});

export const setCity = (city) => ({
  type: WeatherActionTypes.SET_CITY,
  payload: city,
});

export const fetchCurrentWeatherStart = (city) => {
  console.log('city in action:', city);
  return {
    type: WeatherActionTypes.FETCH_CURRENT_WEATHER_START,
    payload: city,
  };
};

export const fetchCurrentWeatherSuccess = (weatherData) => ({
  type: WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS,
  payload: weatherData,
});

export const fetchCurrentWeatherFailure = (errorMessage) => ({
  type: WeatherActionTypes.FETCH_CURRENT_WEATHER_FAILURE,
  payload: errorMessage,
});
