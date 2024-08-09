import React from 'react';
import { MdDashboard, MdFlight, MdSchool, MdEngineering, MdBusiness, MdAccountBalance } from 'react-icons/md'; // Importing new icons
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className='sidebar-header'>
        <MdAccountBalance className='icon' />
        <Link to="/" className='sidebar-link'>
          <span>Wadi College</span>
        </Link>
      </div>
      <div className='sidebar'>
        <div className='sidebar-item'>
          <MdDashboard className='icon' />
          <Link to="/" className='sidebar-link'>
            <span>Dashboard</span>
          </Link>
        </div>
        <div className='sidebar-item'>
          <MdFlight className='icon' />
          <Link to="/online" className='sidebar-link'>
            <span>Online Application</span>
          </Link>
        </div>
        <div className='sidebar-item'>
          <MdSchool className='icon' />
          <Link to="/total" className='sidebar-link'>
            <span>Total Admission</span>
          </Link>
        </div>
        <div className='sidebar-item'>
          <MdEngineering className='icon' />
          <Link to="/eng" className='sidebar-link'>
            <span>Engineering Admission</span>
          </Link>
        </div>
        <div className='sidebar-item'>
          <MdBusiness className='icon' />
          <Link to="/mba" className='sidebar-link'>
            <span>MBA Admission</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
