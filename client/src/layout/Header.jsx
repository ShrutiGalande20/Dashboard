import React from 'react';
import {  FaUserCircle } from 'react-icons/fa'; 

export const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">
        <FaUserCircle className="icon" />
        <span className="header-title">Wadi College</span>
      </div>
      <div className="profile-icon">
        <FaUserCircle className="icon" />
      </div>
    </div>
  );
}

export default Header;
