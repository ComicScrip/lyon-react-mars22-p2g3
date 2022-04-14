import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Css/Navbar.css';

function Navabar() {
  const [showLinks, setshowLinks] = useState(false);

  const handleShowLinks = () => {
    setshowLinks(!showLinks);
  };
  return (
    <nav className={`navbar ${showLinks ? 'show-nav' : 'hidden-nav'}`}>
      <div>
        <img
          src="assets/logo.png"
          className="logo"
          alt="my-logo"
          width={'93px'}
        />
      </div>
      <ul className="items">
        <li className="navbar_item slideInDown-1">
          <NavLink to="/" className="navbar_link">
            Home
          </NavLink>
        </li>
        <li className="navbar_item slideInDown-2">
          <NavLink to="/contact" className="navbar_link">
            Movie Picker
          </NavLink>
        </li>
        <li className="navbar_item slideInDown-3">
          <NavLink to="/about" className="navbar_link">
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
