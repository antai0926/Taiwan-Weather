import WeatherActionTypes from './weather.types';

const INITIAL_STATE = {
  city: '桃園市',
  data: null,
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case WeatherActionTypes.FETCH_WEATHER:
      return {
        ...state,
        data: action.payload,
      };
    case WeatherActionTypes.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
