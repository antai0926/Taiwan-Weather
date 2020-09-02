import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getFetchCurrentUrl } from '../../util/weather.util';
import WeatherActionTypes from './weather.types';
import {
  fetchCurrentWeatherSuccess,
  fetchCurrentWeatherFailure,
} from './weather.action';

export function* fetchCurrentWeatherAsync({ payload }) {
  try {
    const response = yield fetch(getFetchCurrentUrl(payload));
    const data = yield response.json();
    const locationData = yield data.records.location[0];
    yield console.log('CurrentWeather:', locationData);
    if (!locationData) {
      yield alert('No currentWeather Data!');
      return;
    }
    const weatherElements = yield locationData.weatherElement.reduce(
      (neededElements, item) => {
        if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
          neededElements[item.elementName] = item.elementValue;
        }
        return neededElements;
      },
      {}
    );
    const weatherData = {
      observationTime: locationData.time.obsTime,
      locationName: locationData.parameter[0].parameterValue,
      // description: '多雲時晴',
      temperature: weatherElements.TEMP,
      windSpeed: weatherElements.WDSD,
      humid: weatherElements.HUMD,
    };
    yield put(fetchCurrentWeatherSuccess(weatherData));
    // dispatch(setWeatherData(weatherData));
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
