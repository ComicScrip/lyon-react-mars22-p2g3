import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Sidebar.css';

function Sidebar() {
  return (
    <div className="social-container">
      <ul>
        <Link to="/about">
          <img src="../img/git.png" className="icons" alt="icons" />
        </Link>
        <Link to="/about">
          <img src="../img/yt.png" className="icons" alt="icons" />
        </Link>
        <Link to="/about">
          <img src="../img/fb.png" className="icons" alt="icons" />
        </Link>
        <Link to="/about">
          <img src="../img/ig.png" className="icons" alt="icons" />
        </Link>
      </ul>
    </div>
  );
}

export default Sidebar;
