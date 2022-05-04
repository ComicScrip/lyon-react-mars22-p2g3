import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Navbar.css';

function Navabar() {
  const [showLinks, setshowLinks] = useState(false);

  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };

  const getActiveLinkStyle = ({ isActive }) => ({
    color: isActive ? '#FFF027' : 'white',
  });

  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hidden-nav'}`}>
      <div>
        <img
          src="assets/logo.png"
          className="logo"
          alt="my-logo"
          width={'94px'}
        />
      </div>
      <ul className="items">
        <li className="navbar_item slideInDown-1">
          <NavLink
            to="/"
            className="navbar_link"
            style={getActiveLinkStyle}
            onClick={handleShowLinks}
          >
            Home
          </NavLink>
        </li>
        <li className="navbar_item slideInDown-2">
          <NavLink
            to="/moviepicker"
            style={getActiveLinkStyle}
            className="navbar_link"
            onClick={handleShowLinks}
          >
            Movie Picker
          </NavLink>
        </li>
        <li className="navbar_item slideInDown-3">
          <NavLink
            to="/suggest"
            style={getActiveLinkStyle}
            className="navbar_link"
            onClick={handleShowLinks}
          >
            Suggest
          </NavLink>
        </li>
        <li className="navbar_item slideInDown-3">
          <NavLink
            to="/about"
            style={getActiveLinkStyle}
            className="navbar_link"
            onClick={handleShowLinks}
          >
            About Us
          </NavLink>
        </li>
      </ul>
      <button type="button" className="btnBurger" onClick={handleShowLinks}>
        <span className="Burger_Line towLine" />
      </button>
    </nav>
  );
}
export default Navabar;
