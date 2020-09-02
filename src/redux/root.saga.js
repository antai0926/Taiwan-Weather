import { all, call } from 'redux-saga/effects';
import { weatherSagas } from './weather/weather.saga';

export default function* rootSaga() {
  yield all([call(weatherSagas)]);
}
