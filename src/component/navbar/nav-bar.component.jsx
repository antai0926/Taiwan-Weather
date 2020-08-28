import React from 'react';
import './nav-bar.styles.scss';
import { useDispatch } from 'react-redux';
import { setCity } from '../../redux/weather/weather.action';

const NavBar = () => {
  const dispatch = useDispatch();
  const cities = [
    { name: '臺北', fullName: '臺北市' },
    { name: '新北', fullName: '新北市' },
    { name: '基隆', fullName: '基隆市' },
    { name: '桃園', fullName: '桃園市' },
    { name: '新竹', fullName: '新竹縣' },
    { name: '苗栗', fullName: '苗栗縣' },
    { name: '臺中', fullName: '臺中市' },
    { name: '彰化', fullName: '彰化縣' },
    { name: '南投', fullName: '南投縣' },
    { name: '雲林', fullName: '雲林縣' },
    { name: '嘉義', fullName: '嘉義縣' },
    { name: '臺南', fullName: '臺南市' },
    { name: '高雄', fullName: '高雄市' },
    { name: '屏東', fullName: '屏東縣' },
    { name: '宜蘭', fullName: '宜蘭縣' },
    { name: '花蓮', fullName: '花蓮縣' },
    { name: '臺東', fullName: '臺東縣' },
  ];

  const handleClick = (fullName) => {
    dispatch(setCity(fullName));
  };
  return (
    <nav className="nav-bar">
      <div className="title">
        <h2>台灣主要城市天氣</h2>
      </div>
      <ul className="area">
        {cities.map((city) => (
          <li key={city.name} onClick={() => handleClick(city.fullName)}>
            <a href="/#">{city.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
