import React, { useEffect } from 'react';
import './homepage.styles.scss';
import NavBar from '../../component/navbar/nav-bar.component';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCurrentWeatherStart } from '../../redux/weather/weather.action';
import WeatherCard from '../../component/weather-card/weather-card.component';

const HomePage = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);

  useEffect(() => {
    const fetchWeather = (city) => {
      dispatch(fetchCurrentWeatherStart(city));
    };
    fetchWeather(city);
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
