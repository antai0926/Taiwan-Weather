import React from 'react';
import './nav-bar.styles.scss';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="title">
        <h2>台灣主要城市</h2>
      </div>
      <ul className="area">
        <li>
          <a href="/#">臺北</a>
        </li>
        <li>
          <a href="/#">新北</a>
        </li>
        <li>
          <a href="/#">基隆</a>
        </li>
        <li>
          <a href="/#">桃園</a>
        </li>
        <li>
          <a href="/#">新竹</a>
        </li>
        <li>
          <a href="/#">苗栗</a>
        </li>
        <li>
          <a href="/#">臺中</a>
        </li>
        <li>
          <a href="/#">彰化</a>
        </li>
        <li>
          <a href="/#">南投</a>
        </li>
        <li>
          <a href="/#">雲林</a>
        </li>
        <li>
          <a href="/#">嘉義</a>
        </li>
        <li>
          <a href="/#">臺南</a>
        </li>
        <li>
          <a href="/#">高雄</a>
        </li>
        <li>
          <a href="/#">屏東</a>
        </li>
        <li>
          <a href="/#">宜蘭</a>
        </li>
        <li>
          <a href="/#">花蓮</a>
        </li>
        <li>
          <a href="/#">臺東</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
