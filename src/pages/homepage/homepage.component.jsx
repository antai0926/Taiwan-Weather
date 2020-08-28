import React, { useEffect } from 'react';
import './homepage.styles.scss';
import NavBar from '../../component/navbar/nav-bar.component';
import { useSelector, useDispatch } from 'react-redux';
import { setWeather } from '../../redux/weather/weather.action';

const HomePage = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);
  const data = useSelector((state) => state.weather.data);

  useEffect(() => {
    const keyDecode = (key) => {
      const decodedKey = key.split('-').reduce((acc, curVal, index) => {
        if (index === 0) {
          return `${curVal}`;
        }
        return `${curVal}-${acc}`;
      }, '');
      return decodedKey;
    };
    const getWeatherUrl = () => {
      //CWB-E9975C57-0DEF-4C39-A7B1-3464175CBF50
      const key = keyDecode('3464175CBF50-A7B1-4C39-0DEF-E9975C57-CWB');
      const host = 'https://opendata.cwb.gov.tw/';
      const api = 'api/v1/rest/datastore/';
      const item = 'F-C0032-001';
      const cityUri = encodeURI(city);
      return `${host}${api}${item}?Authorization=${key}&locationName=${cityUri}`;
    };
    const url = getWeatherUrl();
    const fetchWeatherData = () => {
      console.log('request url:', url);
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch(setWeather(data));
        });
    };
    fetchWeatherData();
  }, [city, dispatch]);

  return (
    <div className="homepage">
      <NavBar />
      <div className="content">{JSON.stringify(data)}</div>
    </div>
  );
};

export default HomePage;
