import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { BsGear } from 'react-icons/bs';

const Navigation = () => (
  <div className="header">
    <h1>Cyber&nbsp;Cash</h1>
    <ul className="ul-cont">
      <li><FaMicrophone /></li>
      <li><BsGear /></li>
    </ul>
  </div>

);

export default Navigation;
