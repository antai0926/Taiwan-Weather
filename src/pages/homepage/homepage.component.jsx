import React, { useEffect } from 'react';
import './homepage.styles.scss';
import NavBar from '../../component/navbar/nav-bar.component';
import { useSelector, useDispatch } from 'react-redux';
import { setWeatherData } from '../../redux/weather/weather.action';
import WeatherCard from '../../component/weather-card/weather-card.component';

const HomePage = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);

  useEffect(() => {
    const host = 'https://opendata.cwb.gov.tw/';
    const api = 'api/v1/rest/datastore/';

    const keyDecode = (key) => {
      const decodedKey = key.split('-').reduce((acc, curVal, index) => {
        if (index === 0) {
          return `${curVal}`;
        }
        return `${curVal}-${acc}`;
      }, '');
      return decodedKey;
    };

    const key = keyDecode('3464175CBF50-A7B1-4C39-0DEF-E9975C57-CWB');

    const get36hoursUrl = () => {
      const item = 'F-C0032-001';
      return `${host}${api}${item}?Authorization=${key}&locationName=${encodeURI(
        city.hour36Used
      )}`;
    };
    const getNowUrl = () => {
      console.log('city.currentUsed', city.currentUsed);
      // const item = 'O-A0003-001';
      const item = 'O-A0001-001';
      return `${host}${api}${item}?Authorization=${key}&locationName=${encodeURI(
        city.currentUsed
      )}`;
    };

    const fetchCurrentWeather = () => {
      const nowUrl = getNowUrl();
      console.log('nowUrl', nowUrl);
      fetch(nowUrl)
        .then((response) => response.json())
        .then((data) => {
          const locationData = data.records.location[0];
          console.log('fetchCurrentWeather', locationData);
          if (!locationData) {
            alert('no fetchCurrentWeather');
            return;
          }
          const weatherElements = locationData.weatherElement.reduce(
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

          dispatch(setWeatherData(weatherData));
        });
    };
    const fetch36HoursWeather = () => {
      const url = get36hoursUrl();
      console.log('36hurl', url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const locationData = data.records.location[0];
          console.log('fetch36HoursWeather', locationData);
          if (!locationData) {
            alert('fetch36HoursWeather no');
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
          dispatch(setWeatherData(weatherData));
        });
    };

    fetchCurrentWeather();
    fetch36HoursWeather();
  }, [city, dispatch]);

  return (
    <div className="homepage">
      <NavBar />
      <div className="container">
        <WeatherCard />
      </div>
    </div>
  );
};

export default HomePage;
