import React from 'react';
import './weather-card.styles.scss';
import { ReactComponent as CloudyIcon } from '../../assets/images/day-cloudy.svg';
import { ReactComponent as AirFlowIcon } from '../../assets/images/airFlow.svg';
import { ReactComponent as RainIcon } from '../../assets/images/rain.svg';
import { ReactComponent as RefreshIcon } from '../../assets/images/refresh.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentWeatherStart } from '../../redux/weather/weather.action';
const WeatherCard = () => {
  const { weatherData, city } = useSelector((state) => state.weather);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(fetchCurrentWeatherStart(city));
  };

  return (
    <div className="weather-card">
      <div className="location">{weatherData.locationName}</div>
      <div className="description">
        {weatherData.description}
        {weatherData.comfortability}
      </div>
      <div className="currentWeather">
        <div className="temperature">
          {Math.round(weatherData.temperature)}
          <div className="celsius">°C</div>
        </div>
        <CloudyIcon className="cloudy-icon" />
      </div>
      <div className="airflow">
        <AirFlowIcon />
        {weatherData.windSpeed} m/h
      </div>
      <div className="rain">
        <RainIcon />
        {Math.round(weatherData.rainPossibility)} %
      </div>
      <div className="refresh">
        最後觀測時間：
        {new Intl.DateTimeFormat('zh-TW', {
          hour: 'numeric',
          minute: 'numeric',
        }).format(new Date(weatherData.observationTime))}{' '}
        <RefreshIcon onClick={handleClick} />
      </div>
    </div>
  );
};

export default WeatherCard;
