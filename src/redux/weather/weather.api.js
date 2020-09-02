import {
  getFetchCurrentUrl,
  getFetch36hoursUrl,
} from '../../util/weather.util';

//use generation
export function* fetchCurrentWeather(city) {
  const response = yield fetch(getFetchCurrentUrl(city));
  const data = yield response.json();

  const locationData = yield data.records.location[0];
  console.log('CurrentWeather:', locationData);
  if (!locationData) {
    alert('喔不~現在所選縣市之觀測站目前無資訊!(CurrentWeather)');
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
    temperature: weatherElements.TEMP,
    windSpeed: weatherElements.WDSD,
    humid: weatherElements.HUMD,
  };
  return weatherData;
}

//use simple promise
export const fetch36HoursWeather = (city) => {
  return fetch(getFetch36hoursUrl(city))
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];
      console.log('WeatherDataIn36Hours:', locationData);
      if (!locationData) {
        alert('喔不~現在所選縣市之觀測站目前無資訊!(36Hours)');
        return;
      }
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter;
          }
          return neededElements;
        },
        {}
      );
      const weatherData = {
        description: weatherElements.Wx.parameterName,
        weatherCode: weatherElements.Wx.parameterValue,
        rainPossibility: weatherElements.PoP.parameterName,
        comfortability: weatherElements.CI.parameterName,
      };
      return weatherData;
    });
};
