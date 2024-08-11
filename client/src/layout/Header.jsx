import React from 'react';
import {  FaUserCircle } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="header">
      <div className="header-icon">
        <FaUserCircle className="icon" />
        <span className="header-title">Wadi College</span>
      </div>
      <div className="profile-icon">
        <Link to="/login">
        <FaUserCircle className="icon" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
