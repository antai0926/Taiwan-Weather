import React, { useState } from 'react';
import './homepage.styles.scss';
import NavBar from '../../component/navbar/nav-bar.component';

const HomePage = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const keyDecode = (key) => {
    const decodedKey = key.split('-').reduce((acc, curVal, index) => {
      if (index === 0) {
        return `${curVal}`;
      }
      return `${curVal}-${acc}`;
    }, '');
    return decodedKey;
  };

  const fetchWeather = () => {
    console.log('enter fetchWeather');
    const key = keyDecode('3464175CBF50-A7B1-4C39-0DEF-E9975C57-CWB');
    const host = 'https://opendata.cwb.gov.tw/';
    const api = 'api/v1/rest/datastore/';
    const item = 'F-C0032-001';
    const cityUrl = encodeURI(city);
    const url = `${host}${api}${item}?Authorization=${key}&locationName=${cityUrl}`;
    console.log('request url:', url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <div className="homepage">
      <NavBar />
      <div className="messageBox">{JSON.stringify(data)}</div>
      <div className="input-area">
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={fetchWeather}>
          送出
        </button>
      </div>
    </div>
  );
};

export default HomePage;
