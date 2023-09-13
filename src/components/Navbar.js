import React from 'react';
import { Link } from 'react-router-dom';
import { FaMicrophone, FaHome } from 'react-icons/fa';
import { BsGear } from 'react-icons/bs';

const Navigation = () => (
  <header>
    <div className="header-content">
      <nav>
        <h1 className="home-icon">
          <Link to="/">
            <FaHome className="home-link-icon" />
          </Link>
        </h1>
        <h1>Crypto List</h1>
        <ul>
          <li>
            <FaMicrophone className="nav-icons" />
          </li>
          <li>
            <BsGear className="nav-icons" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Navigation;
