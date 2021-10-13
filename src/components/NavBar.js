import React from 'react';
import { NavLink } from 'react-router-dom';
import planetImg from '../assets/planet.png';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="panel-bg navbar navbar-expand-lg navbar-light bg-white">
      <div className="d-flex flex-row justify-content-between w-100 container border-bottom">
        <div className="d-flex flex-row align-items-center">
          <img src={planetImg} alt="logo" className="logo" />
          <p className="Bookstore-CMS m-2 fs-1">
            Space Travelers Hub
          </p>
        </div>
        <ul className="navbar-nav mb-2 mb-lg-0 d-flex flex-row align-items-center ">
          {links.map((link) => (
            <li key={link.id} className="nav-item">
              <NavLink
                className="BOOKS nav-link"
                to={link.path}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
