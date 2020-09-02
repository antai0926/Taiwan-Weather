import WeatherActionTypes from './weather.types';

const INITIAL_STATE = {
  weatherData: {
    observationTime: new Date(),
    locationName: '',
    humid: 0,
    temperature: 0,
    windSpeed: 0,
    description: '',
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: '',
  },
  city: {
    currentUsed: '桃園',
    hour36Used: '桃園市',
  },
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.SET_WEATHER:
      return {
        ...state,
        weatherData: { ...state.weatherData, ...action.payload },
      };
    case WeatherActionTypes.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case WeatherActionTypes.FETCH_CURRENT_WEATHER_SUCCESS:
      return {
        ...state,
        weatherData: { ...state.weatherData, ...action.payload },
      };
    default:
      return state;
  }
};

export default weatherReducer;
