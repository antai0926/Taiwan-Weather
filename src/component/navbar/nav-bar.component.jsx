import React from 'react';
import './nav-bar.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setCity } from '../../redux/weather/weather.action';

const NavBar = () => {
  const dispatch = useDispatch();
  const cities = [
    { name: '臺北', fullName: '臺北市', station: '天母' },
    { name: '新北', fullName: '新北市', station: '新莊' },
    { name: '基隆', fullName: '基隆市', station: '七堵' },
    { name: '桃園', fullName: '桃園市', station: '桃園' },
    { name: '新竹', fullName: '新竹縣', station: '關西' },
    { name: '苗栗', fullName: '苗栗縣', station: '苗栗' },
    { name: '臺中', fullName: '臺中市', station: '豐原' },
    { name: '彰化', fullName: '彰化縣', station: '員林' },
    { name: '南投', fullName: '南投縣', station: '南投' },
    { name: '雲林', fullName: '雲林縣', station: '斗六' },
    { name: '嘉義', fullName: '嘉義縣', station: '民雄' },
    { name: '臺南', fullName: '臺南市', station: '善化' },
    { name: '高雄', fullName: '高雄市', station: '左營' },
    { name: '屏東', fullName: '屏東縣', station: '枋寮' },
    { name: '宜蘭', fullName: '宜蘭縣', station: '羅東' },
    { name: '花蓮', fullName: '花蓮縣', station: '清水斷崖' },
    { name: '臺東', fullName: '臺東縣', station: '池上' },
  ];

  const handleClick = (city) => {
    const locationMap = {
      currentUsed: city.station,
      hour36Used: city.fullName,
    };
    dispatch(setCity(locationMap));
  };

  const weatherData = useSelector((state) => state.weather.weatherData);
  return (
    <nav className="nav-bar">
      <div className="title">
        <h2>台灣主要城市天氣</h2>
      </div>
      <ul className="area">
        {cities.map((city) => (
          <li
            key={city.name}
            onClick={() => handleClick(city)}
            className={
              city.fullName === weatherData.locationName ? 'active' : ''
            }
          >
            <a href="/#">{city.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
