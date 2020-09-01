import React from 'react';
import './weather-card.styles.scss';
import { ReactComponent as CloudyIcon } from '../../assets/images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from '../../assets/images/airFlow.svg';
import { ReactComponent as RainIcon } from '../../assets/images/rain.svg';
import { ReactComponent as RefreshIcon } from '../../assets/images/refresh.svg';
import { useSelector } from 'react-redux';
const WeatherCard = () => {
  const currentWeather = useSelector((state) => state.weather.weatherData);
  return (
    <div className="weather-card">
      <div className="location">{currentWeather.locationName}</div>
      <div className="description">
        {currentWeather.description}
        {currentWeather.comfortability}
      </div>
      <div className="currentWeather">
        <div className="temperature">
          {Math.round(currentWeather.temperature)}
          <div className="celsius">°C</div>
        </div>
        <CloudyIcon className="cloudy-icon" />
      </div>
      <div className="airflow">
        <AirFlowIcon />
        {currentWeather.windSpeed} m/h
      </div>
      <div className="rain">
        <RainIcon />
        {Math.round(currentWeather.rainPossibility)} %
      </div>
      <div className="refresh">
        最後觀測時間：
        {new Intl.DateTimeFormat('zh-TW', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(currentWeather.observationTime))}{' '}
        <RefreshIcon />
      </div>
    </div>
  );
};

export default WeatherCard;
