import { takeLatest, all, call, put } from 'redux-saga/effects';
import { fetchCurrentWeather, fetch36HoursWeather } from './weather.api';
import WeatherActionTypes from './weather.types';
import {
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherFailure,
} from './weather.action';

export function* fetchCurrentWeatherAsync({ payload }) {
  try {
    const [currentData, hours36Data] = yield all([
      call(fetchCurrentWeather, payload),
      call(fetch36HoursWeather, payload),
    ]);
    yield put(fetchCurrentWeatherSuccess({ ...currentData, ...hours36Data }));
  } catch (error) {
    yield put(fetchCurrentWeatherFailure(error));
  }
}

// ----watcher----
export function* fetchCurrentWeatherStart() {
  yield takeLatest(
    WeatherActionTypes.FETCH_CURRENT_WEATHER_START,
    fetchCurrentWeatherAsync
  );
}

// ---register-----
export function* weatherSagas() {
  yield all([call(fetchCurrentWeatherStart)]);
}
