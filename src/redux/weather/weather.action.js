import WeatherActionTypes from './weather.types';

export const setCity = (city) => ({
  type: WeatherActionTypes.SET_CITY,
  payload: city,
});

export const fetchCurrentWeatherStart = (city) => {
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
