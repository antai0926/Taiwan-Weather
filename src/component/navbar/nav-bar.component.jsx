import React from 'react';
import './nav-bar.styles.scss';
import { useDispatch } from 'react-redux';
import { setCity } from '../../redux/weather/weather.action';

const NavBar = () => {
  const dispatch = useDispatch();
  const cities = [
    '臺北',
    '新北',
    '基隆',
    '桃園',
    '新竹',
    '苗栗',
    '臺中',
    '彰化',
    '南投',
    '雲林',
    '嘉義',
    '臺南',
    '高雄',
    '屏東',
    '宜蘭',
    '花蓮',
    '臺東',
  ];
  const handleClick = (city) => {
    dispatch(setCity(`${city}市`));
  };
  return (
    <nav className="nav-bar">
      <div className="title">
        <h2>台灣主要城市天氣</h2>
      </div>
      <ul className="area">
        {cities.map((city) => (
          <li key={city} onClick={() => handleClick(city)}>
            <a href="/#">{city}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
